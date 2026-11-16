/* Viper Visuals — small fluid snake cursor. Place image beside this script. */
(() => {
  const scriptURL = document.currentScript.src;
  const image = new Image();
  image.src = new URL('viper-snake-cursor-art.png', scriptURL).href;
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, {position:'fixed', inset:'0', width:'100%', height:'100%', pointerEvents:'none', zIndex:'9999', display:'none'});
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  const count = 42, spacing = 2.8, height = 23;
  let points = [], target = null, raf = 0, visible = false;
  function enabled() { return location.hash.replace(/\/$/, '') === '#/video/video-cinematic' && !motion.matches && pointer.matches; }
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(innerWidth * dpr); canvas.height = Math.round(innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function tick() {
    raf = 0;
    if (!enabled() || !visible || !target) return;
    ctx.clearRect(0,0,innerWidth,innerHeight);
    points[0].x += (target.x-points[0].x)*.25;
    points[0].y += (target.y-points[0].y)*.25;
    for (let i=1; i<points.length; i++) {
      const a=points[i-1], p=points[i], dx=p.x-a.x, dy=p.y-a.y, d=Math.hypot(dx,dy)||1;
      p.x += (a.x+dx/d*spacing-p.x)*.7; p.y += (a.y+dy/d*spacing-p.y)*.7;
    }
    if (image.complete && image.naturalWidth) {
      const sw=image.naturalWidth/count;
      for (let i=count-1; i>=0; i--) {
        const a=points[i], b=points[i+1], theta=Math.atan2(a.y-b.y,a.x-b.x), len=Math.hypot(a.x-b.x,a.y-b.y);
        ctx.save(); ctx.translate(b.x,b.y); ctx.rotate(theta);
        ctx.drawImage(image, Math.max(0,image.naturalWidth-(i+1)*sw),0,Math.min(sw+2,image.naturalWidth),image.naturalHeight,-.8,-height/2,Math.max(len+1.6,2),height);
        ctx.restore();
      }
    }
    raf=requestAnimationFrame(tick);
  }
  function stop() { visible=false; target=null; canvas.style.display='none'; if(raf) cancelAnimationFrame(raf); raf=0; ctx.clearRect(0,0,innerWidth,innerHeight); }
  window.addEventListener('pointermove', e => {
    if (!enabled() || e.pointerType !== 'mouse') return;
    target={x:e.clientX,y:e.clientY};
    if(!visible) { points=Array.from({length:count+1},(_,i)=>({x:target.x-i*spacing,y:target.y})); visible=true; canvas.style.display='block'; }
    if(!raf) raf=requestAnimationFrame(tick);
  },{passive:true});
  document.addEventListener('pointerout',e=>{ if (!e.relatedTarget) stop(); });
  window.addEventListener('blur',stop);
  window.addEventListener('hashchange',stop);
  window.addEventListener('resize',resize);
  motion.addEventListener('change',stop); pointer.addEventListener('change',stop);
  resize();
})();
