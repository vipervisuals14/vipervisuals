/* Shadow-led lookbook wipe for portfolio tiles. CSS supplies a fallback. */
(() => {
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const states = new WeakMap();
  const selector = '.category-tile, .home-tile, .home-wide';
  const vertex = `attribute vec2 a_position;
    void main() { gl_Position = vec4(a_position, 0.0, 1.0); }`;
  const fragment = `precision mediump float;
    uniform sampler2D u_media;
    uniform float u_progress;
    uniform vec2 u_crop;
    uniform vec3 u_direction;
    uniform vec2 u_size;
    void main() {
      vec2 uv = gl_FragCoord.xy / u_size;
      vec2 imageUV = (uv - 0.5) * u_crop + 0.5;
      vec3 pixel = texture2D(u_media, imageUV).rgb;
      float brightness = dot(pixel, vec3(0.2126, 0.7152, 0.0722));
      float travel = dot(uv, u_direction.xy) + u_direction.z;
      float edge = mix(travel, brightness, 0.72);
      float progress = mix(-0.03, 1.03, u_progress);
      float covered = 1.0 - smoothstep(progress - 0.025, progress + 0.025, edge);
      float rim = (1.0 - smoothstep(0.0, 0.018, abs(edge - progress))) * (1.0 - covered) * 0.2;
      gl_FragColor = vec4(vec3(rim), max(covered, rim));
    }`;

  function compile(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error('Shader unavailable');
    return shader;
  }

  function direction(tile, event) {
    const box = tile.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width;
    const y = (event.clientY - box.top) / box.height;
    const sides = [x, 1 - x, y, 1 - y];
    const nearest = sides.indexOf(Math.min(...sides));
    // WebGL's vertical coordinate runs from bottom to top.
    return [[1, 0, 0], [-1, 0, 1], [0, -1, 1], [0, 1, 0]][nearest];
  }

  function destroy(tile, state) {
    cancelAnimationFrame(state.raf);
    state.canvas.remove();
    const extension = state.gl.getExtension('WEBGL_lose_context');
    if (extension) extension.loseContext();
    if (states.get(tile) === state) {
      tile.classList.remove('lookbook-webgl');
      states.delete(tile);
    }
  }

  function setup(tile, event) {
    const media = tile.querySelector('.category-tile-media, .home-tile-media, .home-wide-media');
    if (!media) return;
    const canvas = document.createElement('canvas');
    canvas.className = 'lookbook-wipe';
    canvas.setAttribute('aria-hidden', 'true');
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
    if (!gl) return;
    let program;
    try {
      program = gl.createProgram();
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, vertex));
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, fragment));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Shader unavailable');
    } catch (_) { return; }
    const state = { canvas, gl, program, progress: 0, target: 1, raf: 0, last: 0, direction: direction(tile, event), source: null };
    states.set(tile, state);
    tile.appendChild(canvas);
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    const uniform = name => gl.getUniformLocation(program, name);

    function draw(time) {
      if (states.get(tile) !== state || !state.source) return;
      const step = state.last ? Math.min((time - state.last) / 800, 0.1) : 0;
      state.last = time;
      state.progress = state.target ? Math.min(1, state.progress + step) : Math.max(0, state.progress - step);
      const rect = tile.getBoundingClientRect();
      if (!rect.width || !rect.height) { destroy(tile, state); return; }
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      const width = Math.round(rect.width * dpr), height = Math.round(rect.height * dpr);
      if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
      gl.viewport(0, 0, width, height);
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, state.source);
      } catch (_) { destroy(tile, state); return; }
      const sw = state.source.videoWidth || state.source.naturalWidth;
      const sh = state.source.videoHeight || state.source.naturalHeight;
      const imageRatio = sw / sh, boxRatio = rect.width / rect.height;
      gl.uniform2f(uniform('u_crop'), Math.min(1, boxRatio / imageRatio), Math.min(1, imageRatio / boxRatio));
      gl.uniform2f(uniform('u_size'), width, height);
      gl.uniform3fv(uniform('u_direction'), state.direction);
      gl.uniform1f(uniform('u_progress'), state.progress);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!state.target && state.progress === 0) { destroy(tile, state); return; }
      state.raf = 0;
      if (state.progress !== state.target) state.raf = requestAnimationFrame(draw);
    }
    state.draw = draw;
    function start(source) {
      if (states.get(tile) !== state || !state.target) { destroy(tile, state); return; }
      state.source = source;
      tile.classList.add('lookbook-webgl');
      state.raf = requestAnimationFrame(draw);
    }
    if (media.tagName === 'VIDEO' && media.readyState >= 2 && media.videoWidth) {
      start(media);
    } else {
      const source = media.tagName === 'VIDEO' ? media.poster : media.currentSrc || media.src;
      if (!source) { destroy(tile, state); return; }
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.onload = () => start(image);
      image.onerror = () => destroy(tile, state);
      image.src = source;
    }
  }

  document.addEventListener('pointerover', event => {
    if (!finePointer.matches || reducedMotion.matches || event.pointerType !== 'mouse') return;
    const tile = event.target.closest(selector);
    if (!tile || (event.relatedTarget && tile.contains(event.relatedTarget))) return;
    const state = states.get(tile);
    if (state) {
      state.target = 1;
      state.last = 0;
      if (state.source && !state.raf) state.raf = requestAnimationFrame(state.draw);
    } else setup(tile, event);
  });
  document.addEventListener('pointerout', event => {
    const tile = event.target.closest(selector);
    if (!tile || (event.relatedTarget && tile.contains(event.relatedTarget))) return;
    const state = states.get(tile);
    if (!state) return;
    if (!state.source) { destroy(tile, state); return; }
    state.target = 0;
    state.last = 0;
    if (!state.raf) state.raf = requestAnimationFrame(state.draw);
  });
})();
