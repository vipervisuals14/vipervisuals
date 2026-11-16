/* ==========================================================================
   Viper Visuals — jedidahm.com layout system
   Zero-dependency. Hash routes:
     #/                 Home
     #/about            About
     #/contact          Contact
     #/photo            Photography category
     #/video            Music Videos category  (STEP 1)
     #/social           Social Content category
     #/recaps           Recaps category
     #/project/<slug>   Project page
   ========================================================================== */

const CDN = 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/';
const KELLAND_POSTER = 'media/video-previews/kelland-poster.jpg';
const KELLAND_PREVIEW = 'media/video-previews/kelland-loop.mp4';
const CALE_POSTER = 'media/video-previews/cale-aera-poster.jpg';
const CALE_PREVIEW = 'media/video-previews/cale-aera.mp4';

/* ------------------------------------------------------------------ */
/* CONTENT — migrated from vipervisuals.ca                            */
/* ------------------------------------------------------------------ */

/* VIDEO CATEGORIES — shown on #/video page (order: CINEMATIC, LIVE, DIGITAL) */
const VIDEO_CATEGORIES = [
  {
    slug: 'video-cinematic',
    label: 'CINEMATIC',
    description: 'Music videos, visualizers, artist films',
    poster: `${CDN}b8b37835-6914-4f17-9048-c44a35a0fabd_rwc_212x0x457x343x457.gif?h=58a630675171c931373f269654eabf43`,
  },
  {
    slug: 'video-live',
    label: 'LIVE',
    description: 'Concerts, festivals, recaps, full-set recordings',
    poster: KELLAND_POSTER,
    preview: KELLAND_PREVIEW,
  },
  {
    slug: 'video-digital',
    label: 'DIGITAL',
    description: 'Social content, promotional videos, behind-the-scenes',
    poster: CALE_POSTER,
    preview: CALE_PREVIEW,
  },
];

/* MUSIC VIDEOS — individual projects (for project pages) */
const MUSIC_VIDEOS = [
  /* CINEMATIC */
  {
    slug: 'red-light',
    category: 'video-cinematic',
    artist: 'AMAAL NUUX',
    title: 'RED LIGHT',
    youtubeId: '7ZxsX_-w99w',
    poster: `${CDN}e2ae8699-f209-4ade-8aac-d8b555f706ac_car_4x3.gif?h=2aa460ed9d65f9080c277c2e1f59625f`,
  },
  {
    slug: 'motions',
    category: 'video-cinematic',
    artist: 'NIKKAELA',
    title: 'MOTIONS',
    youtubeId: '4bLi52OVcQQ',
    poster: `${CDN}b8b37835-6914-4f17-9048-c44a35a0fabd_rwc_212x0x457x343x457.gif?h=58a630675171c931373f269654eabf43`,
  },
  {
    slug: 'not-coming-back',
    category: 'video-cinematic',
    artist: 'GEN',
    title: 'NOT COMING BACK',
    youtubeId: 'pET-VvHWLnc',
    poster: `${CDN}8bb039fa-e384-4a5b-a17c-95847a8593a1_rwc_80x0x456x342x456.gif?h=bf745be8499f094ffac3770bb514279c`,
  },
  {
    slug: 'late-to-the-party',
    category: 'video-cinematic',
    artist: 'AMAAL NUUX',
    title: 'LATE TO THE PARTY',
    youtubeId: 'nunVUrPR4EQ',
    poster: `${CDN}73fd5890-8229-4748-9e6f-3220c53ed5e3_car_4x3.gif?h=6bcae8a99ccb35e1d99ad6a9dbb7338e`,
  },

  /* DIGITAL */
  {
    slug: 'cale-at-aera',
    category: 'video-digital',
    artist: 'CALE',
    title: 'AT AERA',
    vimeoId: '1127937310',
    poster: CALE_POSTER,
    preview: CALE_PREVIEW,
  },
  {
    slug: 'chris-alexander',
    category: 'video-digital',
    artist: 'CHRIS ALEXANDER',
    title: 'RE/MAX CANADA',
    vimeoId: '1032424404',
    poster: 'media/video-previews/chris-alexander-poster.jpg',
    preview: 'media/video-previews/chris-alexander.mp4',
  },
  {
    slug: 'rooted-ep',
    category: 'video-digital',
    artist: 'SINGHARA',
    title: 'ROOTED EP',
    vimeoId: '1029288693',
    poster: 'https://vumbnail.com/1029288693.jpg',
  },

  /* LIVE */
  {
    slug: 'kelland',
    category: 'video-live',
    artist: 'KELLAND',
    title: '',
    youtubeId: 'xT1E1rrcbe8',
    poster: KELLAND_POSTER,
    preview: KELLAND_PREVIEW,
  },
  {
    slug: 'maribou-state',
    category: 'video-live',
    artist: 'MARIBOU STATE',
    title: '',
    vimeoId: '1098364694',
    poster: 'https://vumbnail.com/1098364694.jpg',
  },
  {
    slug: 'sistek',
    category: 'video-live',
    artist: 'SISTEK',
    title: 'YOKO LUNA MONTREAL',
    vimeoId: '1117974303',
    poster: 'https://vumbnail.com/1117974303.jpg',
  },
];

/* PROJECT DETAILS (for project pages) */
const PROJECT_DETAILS = {
  'red-light': {
    title: 'RED LIGHT',
    description: ['Visualizer for Amaal Nuux.', 'Directed and shot by Viper Visuals.'],
  },
  motions: {
    title: 'MOTIONS',
    description: ['Music video for Nikkaela.', 'Directed and shot by Viper Visuals.'],
  },
  'not-coming-back': {
    title: 'NOT COMING BACK',
    description: ['Music video for Gen.', 'Directed and shot by Viper Visuals.'],
  },
  'late-to-the-party': {
    title: 'LATE TO THE PARTY',
    description: ['Music video for Amaal Nuux.', 'Directed and shot by Viper Visuals.'],
  },
  'cale-at-aera': {
    title: 'AT AERA',
    description: ['Concert recap for Cale.', 'Shot by Viper Visuals.'],
  },
  'chris-alexander': {
    title: 'RE/MAX CANADA',
    description: ['Promotional video for Chris Alexander.', 'Shot by Viper Visuals.'],
  },
  'rooted-ep': {
    title: 'ROOTED EP',
    description: ['Promotional video for Singhara.', 'Shot by Viper Visuals.'],
  },
  kelland: {
    title: '',
    description: ['Live performance by Kelland.', 'Shot by Viper Visuals.'],
  },
  'maribou-state': {
    title: '',
    description: ['Live performance by Maribou State.', 'Shot by Viper Visuals.'],
  },
  sistek: {
    title: 'YOKO LUNA MONTREAL',
    description: ['Live performance by Sistek.', 'Shot by Viper Visuals.'],
  },
  'the-weeknd': {
    title: 'AFTER HOURS TILL DAWN TOUR',
    description: ['Concert photography for The Weeknd.', 'Shot by Viper Visuals.'],
  },
  sza: {
    title: 'SOS TOUR',
    description: ['Concert photography for SZA.', 'Shot by Viper Visuals.'],
  },
  'wax-motif': {
    title: '',
    description: ['Social content photography for Wax Motif / Loud Luxury.', 'Shot by Viper Visuals.'],
  },
  'micky-press': {
    title: 'PRESS',
    description: ['Press photography.', 'Shot by Viper Visuals.'],
  },
  kays: {
    title: 'SPORTS SPEC SHOOT',
    description: ['Sports photography shoot.', 'Shot by Viper Visuals.'],
  },
  nikkaela: {
    title: 'LOOKBOOK',
    description: ['Lookbook photography for Our Block Clothing.', 'Shot by Viper Visuals.'],
  },
  'conceptual-1': {
    title: '',
    description: ['Conceptual photography.', 'Shot by Viper Visuals.'],
  },
  'conceptual-2': {
    title: '',
    description: ['Conceptual photography.', 'Shot by Viper Visuals.'],
  },
  'conceptual-3': {
    title: '',
    description: ['Conceptual photography.', 'Shot by Viper Visuals.'],
  },
};

/* PHOTOGRAPHY CATEGORIES (3 category tiles on #/photo) */
const PHOTOGRAPHY_CATEGORIES = [
  {
    slug: 'photo-performance',
    label: 'PERFORMANCE',
    description: 'Concerts, festivals, live events, backstage, artist performances',
    poster: `${CDN}2aaaa8b2-10b3-4d97-a6ad-1c13fc013c02_rw_3840.jpg?h=a653658d08af3e47a6bbd97599617c3e`,
  },
  {
    slug: 'photo-editorial',
    label: 'EDITORIAL',
    description: 'Artist press, promotional imagery, fashion editorials, creative photoshoots',
    poster: `${CDN}44ad4c8b-ad5c-4fe5-b5a7-69a118150242_rw_1920.jpg?h=ed93f885f0ea1225f4f84a9a00635c13`,
  },
  {
    slug: 'photo-commercial',
    label: 'COMMERCIAL',
    description: 'Product photography, fashion campaigns, lifestyle imagery, brand photography',
    poster: `${CDN}941625a4-5e8d-4bd5-b8cd-5fa68ff8218e_rw_1200.jpg?h=f30ba0a8690758dfd265def9d6ec79be`,
  },
];

/* PHOTOGRAPHY PROJECTS — individual photos within each category */
const PHOTO_PROJECTS = {
  'photo-performance': [
    {
      slug: 'the-weeknd',
      artist: 'THE WEEKND',
      title: 'AFTER HOURS TILL DAWN TOUR',
      poster: `${CDN}cec61291-bb6f-4fca-8492-04c0ef2c6853_rw_3840.jpg?h=9a1fa40a5f62ddc62d348042262e3122`,
    },
    {
      slug: 'sza',
      artist: 'SZA',
      title: 'SOS TOUR',
      poster: `${CDN}664d5b07-9eb2-4120-a6d8-e81bafc62324_rw_1200.jpg?h=4f2f6ba5f4c61426f7cd392cc71bee5d`,
    },
    {
      slug: 'wax-motif',
      artist: 'WAX MOTIF / LOUD LUXURY',
      title: '',
      poster: `${CDN}a909d33c-4c05-4f5b-a2e6-bc4cdc0d6ed2_rw_1200.jpg?h=35720df75f84b2ae26162785ca111aef`,
    },
  ],
  'photo-editorial': [
    {
      slug: 'micky-press',
      artist: 'VIPER VISUALS',
      title: 'PRESS',
      poster: `${CDN}eb7ffe1b-7529-4165-a1d2-16404c15e428_rw_1200.jpg?h=44ee0571e10b2b0d96910e9097534d30`,
    },
    {
      slug: 'kays',
      artist: 'VIPER VISUALS',
      title: 'SPORTS SPEC SHOOT',
      poster: `${CDN}0943fa60-09f0-4b12-88af-9af03e4eecd3_rw_1200.jpg?h=7534e6b797f517aecc5c8760c7e8bb91`,
    },
    {
      slug: 'nikkaela',
      artist: 'OUR BLOCK CLOTHING',
      title: 'LOOKBOOK',
      poster: `${CDN}a5671ad6-a7f5-465a-821b-1f1d6aa5851d_rw_1920.jpg?h=1a5326fdff17e01940c1f1a506615b99`,
    },
  ],
  'photo-commercial': [
    {
      slug: 'conceptual-1',
      artist: 'VIPER VISUALS',
      title: '',
      poster: `${CDN}7c18839d-a44d-4417-9a21-dda72410eb54_rw_1200.jpg?h=c4160a86c0fdeed19b50cd69d4e7daee`,
    },
    {
      slug: 'conceptual-2',
      artist: 'VIPER VISUALS',
      title: '',
      poster: `${CDN}34a337ad-2cc1-48e6-92c0-16e04ed1f464_rw_1200.jpg?h=6f46af7819c2bf2ce2bc645829d7c757`,
    },
    {
      slug: 'conceptual-3',
      artist: 'VIPER VISUALS',
      title: '',
      poster: `${CDN}941625a4-5e8d-4bd5-b8cd-5fa68ff8218e_rw_1200.jpg?h=f30ba0a8690758dfd265def9d6ec79be`,
    },
  ],
};

/* SOCIAL CONTENT */
const SOCIAL_CONTENT = [
  {
    slug: 'social-content',
    artist: 'WAX MOTIF',
    title: 'LOUD LUXURY',
    images: 12,
    poster: `${CDN}a909d33c-4c05-4f5b-a2e6-bc4cdc0d6ed2_rw_1200.jpg?h=35720df75f84b2ae26162785ca111aef`,
  },
  {
    slug: 'red-light-roll-out',
    artist: 'AMAAL NUUX',
    title: 'RED LIGHT ROLL OUT',
    images: 5,
    youtubeId: '7ZxsX_-w99w',
    poster: `${CDN}e2d01d0d-73c9-4c37-b62c-67f4901672bb_rw_1200.jpg?h=6df47481d10310a442e93b67dfe27e46`,
  },
];

/* RECAPS */
const RECAPS = [
  {
    slug: 'cale-aera',
    artist: 'CALE',
    title: 'AERA',
    vimeoId: '1127937310',
    poster: '',
  },
  {
    slug: 'whipped-cream-toronto',
    artist: 'WHIPPED CREAM',
    title: 'TORONTO',
    vimeoId: '1029289896',
    poster: '',
  },
  {
    slug: 'cypress-set-preview',
    artist: 'CYPRESS',
    title: 'SET PREVIEW',
    youtubeId: 'dLe8CxySGJQ',
    poster: '',
  },
];

/* ------------------------------------------------------------------ */
/* DOM refs                                                           */
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
  document.querySelectorAll('.nav-link, .nav-brand, .mobile-menu .mm-links a').forEach((a) => {
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
/* Menu                                                               */
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
/* Template helper                                                    */
/* ------------------------------------------------------------------ */
function tpl(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content;
}

// Use a still poster for reduced-motion users; previews never play the full video.
function renderPreviewMedia(preview, poster, alt, className) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!preview || reducedMotion) {
    return `<img class="${className}" src="${escapeHtml(poster)}" alt="${escapeHtml(alt)}">`;
  }
  return `<video class="${className}" autoplay muted loop playsinline preload="metadata" poster="${escapeHtml(poster)}" aria-label="${escapeHtml(alt)} preview"><source src="${escapeHtml(preview)}" type="video/mp4"></video>`;
}

/* ------------------------------------------------------------------ */
/* Global footer — social links, appears on every page                */
/* ------------------------------------------------------------------ */
function renderFooter() {
  const igIcon = `<svg class="footer-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/></svg>`;
  const inIcon = `<svg class="footer-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="2" y="2" rx="4" ry="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 8v6h-5v-6h5z" fill="currentColor"/><path d="M10 20v-6h5v6h-5z" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
  const mailIcon = `<svg class="footer-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
  return `
    <footer class="site-footer">
      <div class="footer-divider"></div>
      <div class="footer-social">
        <a href="https://www.instagram.com/thevipervisuals" target="_blank" rel="noopener" class="footer-link" aria-label="Instagram">${igIcon}</a>
        <a href="https://www.linkedin.com/in/thevipervisuals" target="_blank" rel="noopener" class="footer-link" aria-label="LinkedIn">${inIcon}</a>
        <a href="mailto:hello@vipervisuals.ca" target="_blank" rel="noopener" class="footer-link" aria-label="Email">${mailIcon}</a>
      </div>
    </footer>
  `;
}

/* ------------------------------------------------------------------ */
/* STEP 1: Music Videos category page                                 */
/* ------------------------------------------------------------------ */
function renderMusicVideos() {
  document.body.className = '';
  setActiveNav('#/video');

  const tilesHtml = VIDEO_CATEGORIES.map(
    (c) => `
    <a href="#/video/${c.slug}" class="category-tile">
      ${renderPreviewMedia(c.preview, c.poster, c.label, 'category-tile-media')}
      <div class="category-tile-caption">
        <span class="brand">${escapeHtml(c.label)}</span>
        <span class="title">${escapeHtml(c.description)}</span>
      </div>
    </a>
  `
  ).join('');

  const frag = tpl(`
    <section class="video-category">
      <div class="category-grid">${tilesHtml}</div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);
}

/* ------------------------------------------------------------------ */
/* Other route stubs (to be built in later steps)                     */
/* ------------------------------------------------------------------ */
function renderHome() {
  document.body.className = 'route-home';
  setActiveNav('#/');
  const frag = tpl(`
    <section class="home-page">
      <div class="home-hero">
        <img class="home-hero-media" src="https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/73fd5890-8229-4748-9e6f-3220c53ed5e3_carw_4x3x1280.gif?h=02b5d25a02517c863ac5d06e7dd26f42" alt="Viper Visuals homepage">
      </div>
      <div class="home-two-up"></div>
      <div class="home-wide"></div>
    </section>
  `);
  mount(frag);
}

function renderPhotoCategories() {
  document.body.className = '';
  setActiveNav('#/photo');

  const tilesHtml = PHOTOGRAPHY_CATEGORIES.map(
    (c) => `
    <a href="#/photo/${c.slug}" class="category-tile">
      <img class="category-tile-media" src="${c.poster}" alt="${escapeHtml(c.label)}">
      <div class="category-tile-caption">
        <span class="brand">${escapeHtml(c.label)}</span>
        <span class="title">${escapeHtml(c.description)}</span>
      </div>
    </a>
  `
  ).join('');

  const frag = tpl(`
    <section class="photo-category">
      <div class="category-grid">${tilesHtml}</div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);
}

function renderCategory(items, sectionKey) {
  document.body.className = '';
  setActiveNav(`#/${sectionKey}`);
  const tilesHtml = items.map(
    (item) => `
    <a href="#/project/${item.slug}" class="category-tile">
      <img class="category-tile-media" src="${item.poster}" alt="${escapeHtml(item.title)}">
      <div class="category-tile-caption project-tile-caption">
        <span class="brand">${escapeHtml(item.artist)}</span>
        <span class="title">‘${escapeHtml(item.title)}’</span>
      </div>
    </a>
  `
  ).join('');
  const frag = tpl(`
    <section class="${sectionKey}-category">
      <div class="category-grid">${tilesHtml}</div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);
}

function renderProject(slug) {
  const detail = PROJECT_DETAILS[slug] || { title: '', description: [] };
  const videoProject = MUSIC_VIDEOS.find((p) => p.slug === slug);
  const photoProject = Object.values(PHOTO_PROJECTS).flat().find((p) => p.slug === slug);
  const project = videoProject || photoProject;
  document.body.className = '';
  setActiveNav(videoProject ? '#/video' : '#/photo');

  const artist = project ? project.artist : '';
  const title = ((detail.title || (project && project.title) || '') + '').toUpperCase();
  const poster = project ? project.poster : '';
  const isVideo = !!(videoProject && (videoProject.youtubeId || videoProject.vimeoId));
  const provider = videoProject && videoProject.youtubeId ? 'youtube' : 'vimeo';
  const videoId = videoProject ? videoProject.youtubeId || videoProject.vimeoId || '' : '';

  const playerTitle = `${title}${artist ? ` · ${artist}` : ''}`;

  const loopMedia = renderPreviewMedia(project && project.preview, poster, title || artist, 'project-loop-media');

  const playerInner = isVideo
    ? `
      <img class="project-player-poster" src="${escapeHtml(poster)}" alt="${escapeHtml(title || artist)}">
      <button class="project-play-btn" data-provider="${provider}" data-video-id="${escapeHtml(videoId)}" aria-label="Play video">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>
      </button>
      <div class="project-player-bar">
        <span class="project-time">0:00 / --:--</span>
      </div>
      <div class="project-progress"><div class="project-progress-fill"></div></div>
    `
    : `
      <img class="project-player-poster" src="${escapeHtml(poster)}" alt="${escapeHtml(title || artist)}">
      <div class="project-player-bar">
        <span class="project-player-title">${escapeHtml(playerTitle)}</span>
      </div>
    `;

  const frag = tpl(`
    <section class="project-page">
      <div class="project-layout">
        <div class="project-loop">
          ${loopMedia}
          <div class="project-loop-caption">
            <span class="project-artist">${escapeHtml(artist)}</span>
            ${title ? `<span>‘${escapeHtml(title)}’</span>` : ''}
          </div>
        </div>
        <div class="project-player" id="projectPlayer">
          ${playerInner}
        </div>
      </div>
      <div class="project-desc${isVideo ? ' project-credits' : ''}">
        ${isVideo ? '<p>CREDITS: DIRECTOR, EDITOR</p>' : (detail.description || []).map((d) => `<p>${escapeHtml(d)}</p>`).join('')}
      </div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);

  const playBtn = document.querySelector('.project-play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const provider = playBtn.dataset.provider;
      const videoId = playBtn.dataset.videoId;
      let embedUrl = '';
      if (provider === 'youtube') {
        embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&start=3`;
      } else if (provider === 'vimeo') {
        embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1#t=3s`;
      }
      const player = document.getElementById('projectPlayer');
      player.innerHTML = `
        <iframe
          src="${embedUrl}"
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;
    });
  }
}

function renderAbout() {
  document.body.className = '';
  setActiveNav('#/about');
  const frag = tpl(`
    <section class="about-page">
      <div class="about-left">
        <video autoplay playsinline muted loop poster="media/about/about-poster.jpg">
          <source src="media/about/about.mp4" type="video/mp4">
        </video>
      </div>
      <div class="about-right">
        <div class="about-text">
          <p>Toronto-based creative director, videographer and photographer creating bold music videos, social content and visual design for artists and brands worldwide.</p>
          <p>We create bold, captivating visuals that amplify the voices of music artists and brands, connecting them to their audience through unforgettable content.</p>
          <p>Find me on Instagram: <a href="https://www.instagram.com/thevipervisuals/" target="_blank" rel="noopener">@thevipervisuals</a></p>
        </div>
        <div class="contact-form">
          <label for="form-name">Name</label>
          <input type="text" id="form-name" placeholder="Your name">
          <label for="form-email">Email Address</label>
          <input type="email" id="form-email" placeholder="you@example.com">
          <label for="form-message">Message</label>
          <textarea id="form-message" placeholder="Your message"></textarea>
          <button type="button" id="form-submit">Submit</button>
          <div id="form-success" class="form-success" style="display:none;">Thank you!</div>
        </div>
      </div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);

  const btn = document.getElementById('form-submit');
  const success = document.getElementById('form-success');
  if (btn) {
    btn.addEventListener('click', () => {
      btn.style.display = 'none';
      success.style.display = 'block';
    });
  }
}

function renderPhotoSubcategory(categorySlug) {
  document.body.className = '';
  setActiveNav('#/photo');

  const items = PHOTO_PROJECTS[categorySlug];

  const tilesHtml = items.map(
    (m) => `
    <a href="#/project/${m.slug}" class="category-tile">
      <img class="category-tile-media" src="${m.poster}" alt="${escapeHtml(m.title || m.artist)}">
      <div class="category-tile-caption project-tile-caption">
        <span class="brand">${escapeHtml(m.artist)}</span>
        <span class="title">${m.title ? `‘${escapeHtml(m.title)}’` : ''}</span>
      </div>
    </a>
  `
  ).join('');

  const frag = tpl(`
    <section class="photo-category">
      <div class="category-grid">${tilesHtml}</div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);
}

function renderVideoSubcategory(categorySlug) {
  document.body.className = '';
  setActiveNav('#/video');

  const category = VIDEO_CATEGORIES.find((c) => c.slug === categorySlug);
  const items = MUSIC_VIDEOS.filter((m) => m.category === categorySlug);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const tilesHtml = items.map(
    (m) => `
    <a href="#/project/${escapeHtml(m.slug)}" class="category-tile">
      ${m.preview
        ? renderPreviewMedia(m.preview, m.poster, m.title || m.artist, 'category-tile-media')
        : `<video class="category-tile-media" poster="${escapeHtml(m.poster)}" preload="metadata" ${reduceMotion ? '' : 'autoplay muted loop playsinline'} aria-label="${escapeHtml(m.title || m.artist)} preview"></video>`}
      <div class="category-tile-caption project-tile-caption">
        <span class="brand">${escapeHtml(m.artist)}</span>
        <span class="title">${m.title ? `‘${escapeHtml(m.title)}’` : ''}</span>
      </div>
    </a>
  `
  ).join('');

  const frag = tpl(`
    <section class="video-category">
      <div class="category-grid">${tilesHtml}</div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);
}

function renderContact() {
  document.body.className = '';
  setActiveNav('#/contact');
  const frag = tpl(`
    <section class="contact-page">
      <div class="about-left">
        <video autoplay playsinline muted loop poster="media/contact/contact-poster.jpg">
          <source src="media/contact/contact.mp4" type="video/mp4">
        </video>
      </div>
      <div class="about-right">
        <div class="about-text">
          <p>Get in touch: <a href="https://www.instagram.com/thevipervisuals/" target="_blank" rel="noopener">@thevipervisuals</a></p>
        </div>
        <div class="contact-form">
          <label for="form-name">Name</label>
          <input type="text" id="form-name" placeholder="Your name">
          <label for="form-email">Email Address</label>
          <input type="email" id="form-email" placeholder="you@example.com">
          <label for="form-message">Message</label>
          <textarea id="form-message" placeholder="Your message"></textarea>
          <button type="button" id="form-submit">Submit</button>
          <div id="form-success" class="form-success" style="display:none;">Thank you!</div>
        </div>
      </div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);

  const btn = document.getElementById('form-submit');
  const success = document.getElementById('form-success');
  if (btn) {
    btn.addEventListener('click', () => {
      btn.style.display = 'none';
      success.style.display = 'block';
    });
  }
}

function renderNotFound() {
  document.body.className = '';
  const frag = tpl(`
    <section class="section">
      <div style="padding-top: calc(100 * var(--u)); text-align: center;">
        <div style="font-family:var(--font-azeret);font-size:calc(14 * var(--u));letter-spacing:-0.4px;">Page not found</div>
        <a href="#/" style="color:rgb(219,188,235)">Return to home</a>
      </div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);
}

/* ------------------------------------------------------------------ */
/* Router                                                             */
/* ------------------------------------------------------------------ */
function router() {
  let hash = location.hash || '#/';
  if (!hash.startsWith('#')) hash = '#/';
  const [path] = hash.split('?');
  const slugMatch = path.match(/^#\/project\/([^/]+)$/);

  closeMobile();

  if (path === '#/') {
    renderHome();
  } else if (path === '#/about') {
    renderAbout();
  } else if (path === '#/contact') {
    renderContact();
  } else if (path === '#/video') {
    renderMusicVideos();
  } else if (path === '#/video/video-cinematic') {
    renderVideoSubcategory('video-cinematic');
  } else if (path === '#/video/video-digital') {
    renderVideoSubcategory('video-digital');
  } else if (path === '#/video/video-live') {
    renderVideoSubcategory('video-live');
  } else if (path === '#/photo') {
    renderPhotoCategories();
  } else if (path === '#/photo/photo-performance') {
    renderPhotoSubcategory('photo-performance');
  } else if (path === '#/photo/photo-editorial') {
    renderPhotoSubcategory('photo-editorial');
  } else if (path === '#/photo/photo-commercial') {
    renderPhotoSubcategory('photo-commercial');
  } else if (path === '#/social') {
    renderCategory(SOCIAL_CONTENT, 'social');
  } else if (path === '#/recaps') {
    renderCategory(RECAPS, 'recaps');
  } else if (slugMatch) {
    renderProject(decodeURIComponent(slugMatch[1]));
  } else {
    renderNotFound();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
