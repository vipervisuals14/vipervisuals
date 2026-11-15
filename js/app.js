/* ==========================================================================
   Viper Visuals — single-page app router + data
   Zero-dependency. Hash routes:
     #/                 Home (zero-scroll hero)
     #/video            Video Production index
     #/video/music-videos
     #/video/social-content
     #/video/recaps
     #/video/project/<slug>
     #/photo            Photography index
     #/photo/concerts
     #/photo/press
     #/photo/album-covers
     #/design           Design index
     #/design/merch
     #/design/branding
     #/design/creative-direction
   ========================================================================== */

const NAV = [
  { label: 'PHOTOGRAPHY', path: '#/photo' },
  { label: 'VIDEO PRODUCTION', path: '#/video' },
  { label: 'DESIGN', path: '#/design' },
];

const SECTIONS = {
  photo: { label: 'PHOTOGRAPHY', path: '#/photo' },
  video: { label: 'VIDEO PRODUCTION', path: '#/video' },
  design: { label: 'DESIGN', path: '#/design' },
};

const SUBCATS = {
  video: [
    { key: 'music-videos', label: 'Music Videos', path: '#/video/music-videos' },
    { key: 'social-content', label: 'Social Content', path: '#/video/social-content' },
    { key: 'recaps', label: 'Recaps', path: '#/video/recaps' },
  ],
  photo: [
    { key: 'concerts', label: 'Concerts', path: '#/photo/concerts' },
    { key: 'press', label: 'Press', path: '#/photo/press' },
    { key: 'album-covers', label: 'Album Covers', path: '#/photo/album-covers' },
  ],
  design: [
    { key: 'merch', label: 'Merch', path: '#/design/merch' },
    { key: 'branding', label: 'Branding', path: '#/design/branding' },
    { key: 'creative-direction', label: 'Creative Direction', path: '#/design/creative-direction' },
  ],
};

/* ------------------------------------------------------------------ */
/* PROJECTS — replace with your real work. See CONTENT.md for the     */
/* exact schema. Do NOT invent projects; leave this array empty or    */
/* fill it with your actual titles.                                   */
/* ------------------------------------------------------------------ */
const PROJECTS = [
  // {
  //   slug: 'your-music-video',
  //   title: 'PROUD OF YOU',
  //   artist: 'ARTIST NAME',
  //   category: 'music-videos',
  //   youtubeId: 'VIDEO_ID',        // YouTube video ID
  //   poster: 'assets/img/posters/your-poster.webp',
  //   gallery: [
  //     { type: 'image', src: 'assets/img/gallery/shot-1.webp', caption: '' },
  //     { type: 'video', src: 'assets/video/clip-1.mp4', poster: 'assets/img/gallery/clip-1.jpg', caption: '' },
  //   ],
  // },
];

/* ------------------------------------------------------------------ */
/* helpers                                                            */
/* ------------------------------------------------------------------ */
const outlet = document.getElementById('routerOutlet');
const burger = document.querySelector('.burger');
const mobileMenu = document.getElementById('mobileMenu');

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]));
}

function mount(fragment) {
  outlet.innerHTML = '';
  outlet.appendChild(document.importNode(fragment, true));
  requestAnimationFrame(() => {
    const el = outlet.firstElementChild;
    if (el) el.classList.add('loaded');
  });
}

function setActiveNav(path) {
  document.querySelectorAll('.nav-link, .mobile-menu .mm-links a').forEach((a) => {
    const p = a.getAttribute('href');
    const active = path === p || (p !== '#/ ' && path.startsWith(p + '/'));
    a.classList.toggle('active', active);
  });
}

function closeMobile() {
  burger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
}

/* ------------------------------------------------------------------ */
/* menu                                                               */
/* ------------------------------------------------------------------ */
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  mobileMenu.classList.toggle('open', !open);
});
mobileMenu.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', closeMobile);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobile();
});

/* ------------------------------------------------------------------ */
/* template helpers                                                   */
/* ------------------------------------------------------------------ */
function tpl(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content;
}

/* ------------------------------------------------------------------ */
/* route renders                                                      */
/* ------------------------------------------------------------------ */

function renderHome() {
  document.body.className = 'route-home';
  const frag = tpl(`
    <section class="section condensed">
      <div class="hero">
        <!--
          REPLACE THIS AREA WITH YOUR HERO VIDEO.
          Option A (self-hosted, fast):
            <video playsinline muted loop poster="assets/img/posters/hero.jpg">
              <source src="assets/video/hero.webm" type="video/webm">
              <source src="assets/video/hero.mp4" type="video/mp4">
            </video>
          Option B (YouTube embed — free, offloads bandwidth):
            <iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID"
                    loading="lazy" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        -->
        <div class="hero-placeholder">
          <div class="play" role="button" tabindex="0" aria-label="Play hero video">PLAY</div>
        </div>
        <div class="hero-note">Replace this placeholder with your hero video &mdash; see CONTENT.md</div>
      </div>
    </section>
  `);
  mount(frag);
  // make the placeholder play button open your video when you wire it up
  const play = outlet.querySelector('.play');
  if (play) {
    play.addEventListener('click', () => {
      // wire to your video: open a lightbox or start the real <video>
      console.log('placeholder play clicked — wire your hero video here');
    });
  }
}

function sectionTitleBar(label, sub) {
  return `
    <div class="section-title">${escapeHtml(label)}</div>
    ${sub ? `<div class="section-sub">${escapeHtml(sub)}</div>` : ''}
  `;
}

function subNav(sectionKey, activeKey) {
  const items = SUBCATS[sectionKey] || [];
  const links = items
    .map(
      (s) =>
        `<a href="${s.path}" class="${activeKey === s.key ? 'active' : ''}">${escapeHtml(
          s.label
        )}</a>`
    )
    .join('');
  return `<div class="sub-nav">${links}</div>`;
}

function emptyState(msg) {
  return `<div class="blank"><h3>Coming soon</h3><p style="font-family:var(--font-display);font-size:0.8rem;letter-spacing:0.14em;text-transform:uppercase">${escapeHtml(
    msg
  )}</p></div>`;
}

function projectCard(project) {
  const cat =
    project.category.charAt(0).toUpperCase() + project.category.slice(1);
  return `
  <article class="card">
    <div class="media placeholder" style="background:var(--panel-2)">
      ${project.poster ? `<img src="${escapeHtml(project.poster)}" alt="${escapeHtml(project.title)}">` : `<span>Add media</span>`}
      <div class="play-badge"><div class="tri"></div></div>
    </div>
    <footer>
      <span class="cat">${escapeHtml(cat)}</span>
      <span class="title">${escapeHtml(project.title)}</span>
    </footer>
  </article>
  `;
}

function renderIndex(sectionKey) {
  const section = SECTIONS[sectionKey];
  const subcats = SUBCATS[sectionKey] || [];
  setActiveNav(section.path);
  document.body.className = '';

  const cards = subcats
    .map(
      (s) => `
    <article class="card">
      <div class="media placeholder" style="background:var(--panel-2)">
        <span style="font-family:var(--font-display);font-size:0.7rem;letter-spacing:0.14em;text-transform:uppercase">${escapeHtml(
          s.label
        )}</span>
      </div>
      <footer>
        <span class="title" style="font-size:1rem">${escapeHtml(s.label)}</span>
      </footer>
    </article>
  `
    )
    .join('');

  const frag = tpl(`
    <section class="section">
      <a class="back-link" href="#/">&larr; Back to home</a>
      ${sectionTitleBar(section.label, 'Select a category')}
      <div class="grid grid-3">${cards}</div>
    </section>
  `);
  mount(frag);
  // clicking a subcat card navigates
  outlet.querySelectorAll('.card').forEach((card, i) => {
    card.addEventListener('click', () => {
      location.hash = subcats[i].path;
    });
  });
}

function renderSubcat(sectionKey, subcatKey) {
  const section = SECTIONS[sectionKey];
  const subcat = (SUBCATS[sectionKey] || []).find((s) => s.key === subcatKey);
  if (!subcat) {
    renderNotFound();
    return;
  }
  setActiveNav(section.path);
  document.body.className = '';

  const items = PROJECTS.filter((p) => p.category === subcatKey);

  const itemsHtml =
    items.length > 0
      ? `<div class="grid ${items[0].category === 'music-videos' ? 'grid-3' : 'grid-4'}">${items.map(projectCard).join('')}</div>`
      : emptyState('No projects yet — add your work to PROJECTS in js/app.js');

  const frag = tpl(`
    <section class="section">
      <a class="back-link" href="${section.path}">&larr; Back to ${section.label}</a>
      ${sectionTitleBar(subcat.label, `${items.length} project${items.length !== 1 ? 's' : ''}`)}
      ${subNav(sectionKey, subcatKey)}
      ${itemsHtml}
    </section>
  `);
  mount(frag);
  outlet.querySelectorAll('.card').forEach((card, i) => {
    card.addEventListener('click', () => {
      const p = items[i];
      if (p) location.hash = `#/video/project/${encodeURIComponent(p.slug)}`;
    });
  });
}

function renderProject(slug) {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    renderNotFound();
    return;
  }
  setActiveNav('#/video');
  document.body.className = '';

  const galleryHtml =
    project.gallery && project.gallery.length
      ? `<div class="grid grid-4">${project.gallery
          .map((item, i) => {
            if (item.type === 'video') {
              return `
              <article class="card">
                <div class="media placeholder">
                  <video poster="${escapeHtml(item.poster || '')}" muted playsinline>
                    <source src="${escapeHtml(item.src)}" type="video/mp4">
                  </video>
                  <div class="play-badge"><div class="tri"></div></div>
                </div>
                ${item.caption ? `<footer><span class="title">${escapeHtml(item.caption)}</span></footer>` : ''}
              </article>`;
            }
            return `
              <article class="card">
                <div class="media placeholder">
                  <img src="${escapeHtml(item.src)}" alt="${escapeHtml(
              item.caption || project.title
            )}">
                </div>
                ${item.caption ? `<footer><span class="title">${escapeHtml(item.caption)}</span></footer>` : ''}
              </article>`;
          })
          .join('')}</div>`
      : emptyState('No gallery clips yet — add them to PROJECTS in js/app.js');

  const youtubeEmbed = project.youtubeId
    ? `<iframe
        src="https://www.youtube-nocookie.com/embed/${escapeHtml(
          project.youtubeId
        )}?rel=0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`
    : `<div class="media placeholder" style="height:56.25vw;max-height:40vh;display:grid;place-items:center">
         <span style="font-family:var(--font-display);font-size:0.7rem;letter-spacing:0.14em;text-transform:uppercase">Add your YouTube video ID in js/app.js</span>
       </div>`;

  const frag = tpl(`
    <section class="section project-hero">
      <a class="back-link" href="#/video/music-videos">&larr; Back to Music Videos</a>
      <span class="project-artist">${escapeHtml(project.artist || '')}</span>
      <h1 class="project-title">${escapeHtml(project.title)}</h1>
      <div class="project-video">${youtubeEmbed}</div>
      <div class="project-gallery">
        <div class="section-title" style="text-align:left;margin-bottom:1rem">Production gallery</div>
        ${galleryHtml}
      </div>
    </section>
  `);
  mount(frag);
}

function renderDesignBlank(subcatKey) {
  const labels = {
    merch: 'MERCH',
    branding: 'BRANDING',
    'creative-direction': 'CREATIVE DIRECTION',
  };
  setActiveNav('#/design');
  document.body.className = '';
  const frag = tpl(`
    <section class="section">
      <a class="back-link" href="#/design">&larr; Back to Design</a>
      ${sectionTitleBar(labels[subcatKey] || subcatKey, 'Section ready to populate')}
      <div class="blank">
        <h3>${escapeHtml(labels[subcatKey] || subcatKey)}</h3>
        <p style="font-family:var(--font-display);font-size:0.8rem;letter-spacing:0.14em;text-transform:uppercase">
          No work added yet. Add your projects to PROJECTS in js/app.js.
        </p>
      </div>
    </section>
  `);
  mount(frag);
}

function renderNotFound() {
  document.body.className = '';
  const frag = tpl(`
    <section class="section">
      <div class="blank">
        <h3>Page not found</h3>
        <p style="font-family:var(--font-display);font-size:0.8rem;letter-spacing:0.14em;text-transform:uppercase">
          <a href="#/" style="color:var(--accent)">Return to home &rarr;</a>
        </p>
      </div>
    </section>
  `);
  mount(frag);
}

/* ------------------------------------------------------------------ */
/* router                                                             */
/* ------------------------------------------------------------------ */
function router() {
  let hash = location.hash || '#/';
  if (!hash.startsWith('#')) hash = '#/';
  const [path, ...rest] = hash.split('?');
  const slugMatch = path.match(/^#\/video\/project\/([^/]+)$/);

  closeMobile();

  if (path === '#/') {
    renderHome();
  } else if (path === '#/video') {
    renderIndex('video');
  } else if (path === '#/video/music-videos') {
    renderSubcat('video', 'music-videos');
  } else if (path === '#/video/social-content') {
    renderSubcat('video', 'social-content');
  } else if (path === '#/video/recaps') {
    renderSubcat('video', 'recaps');
  } else if (slugMatch) {
    renderProject(decodeURIComponent(slugMatch[1]));
  } else if (path === '#/photo') {
    renderIndex('photo');
  } else if (path === '#/photo/concerts') {
    renderSubcat('photo', 'concerts');
  } else if (path === '#/photo/press') {
    renderSubcat('photo', 'press');
  } else if (path === '#/photo/album-covers') {
    renderSubcat('photo', 'album-covers');
  } else if (path === '#/design') {
    renderIndex('design');
  } else if (path === '#/design/merch') {
    renderDesignBlank('merch');
  } else if (path === '#/design/branding') {
    renderDesignBlank('branding');
  } else if (path === '#/design/creative-direction') {
    renderDesignBlank('creative-direction');
  } else {
    renderNotFound();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

/* ------------------------------------------------------------------ */
/* progressive enhancement: lazy-load iframes/images when visible     */
/* ------------------------------------------------------------------ */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.dataset.src && el.tagName === 'IFRAME') {
            el.src = el.dataset.src;
            io.unobserve(el);
          }
          if (el.dataset.srcset) {
            el.srcset = el.dataset.srcset;
            io.unobserve(el);
          }
        }
      });
    },
    { rootMargin: '200px 0px' }
  );
  document.querySelectorAll('iframe[data-src], img[data-srcset]').forEach((el) =>
    io.observe(el)
  );
}
