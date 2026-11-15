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

/* ------------------------------------------------------------------ */
/* CONTENT — migrated from vipervisuals.ca                            */
/* ------------------------------------------------------------------ */

/* VIDEO CATEGORIES — shown on #/video page */
const VIDEO_CATEGORIES = [
  {
    slug: 'video-cinematic',
    label: 'CINEMATIC',
    description: 'Music videos, visualizers, artist films',
    poster: `${CDN}b8b37835-6914-4f17-9048-c44a35a0fabd_rwc_212x0x457x343x457.gif?h=58a630675171c931373f269654eabf43`,
  },
  {
    slug: 'video-digital',
    label: 'DIGITAL',
    description: 'Social content, promotional videos, behind-the-scenes',
    poster: `${CDN}8bb039fa-e384-4a5b-a17c-95847a8593a1_rwc_80x0x456x342x456.gif?h=bf745be8499f094ffac3770bb514279c`,
  },
  {
    slug: 'video-live',
    label: 'LIVE',
    description: 'Concerts, festivals, recaps, full-set recordings',
    poster: `${CDN}73fd5890-8229-4748-9e6f-3220c53ed5e3_car_4x3.gif?h=6bcae8a99ccb35e1d99ad6a9dbb7338e`,
  },
];

/* MUSIC VIDEOS — individual projects (for project pages) */
const MUSIC_VIDEOS = [
  {
    slug: 'motions',
    category: 'video-cinematic',
    artist: 'NIKKAELA',
    title: 'MOTIONS',
    youtubeId: '4bLi52OVcQQ',
    poster: `${CDN}b8b37835-6914-4f17-9048-c44a35a0fabd_rwc_212x0x457x343x457.gif?h=58a630675171c931373f269654eabf43`,
  },
  {
    slug: 'more-gen',
    category: 'video-digital',
    artist: 'GEN',
    title: 'NOT COMING BACK',
    youtubeId: 'pET-VvHWLnc',
    poster: `${CDN}8bb039fa-e384-4a5b-a17c-95847a8593a1_rwc_80x0x456x342x456.gif?h=bf745be8499f094ffac3770bb514279c`,
  },
  {
    slug: 'late-to-the-party-amaal-nuuk',
    category: 'video-cinematic',
    artist: 'AMAAL NUUX',
    title: 'LATE TO THE PARTY',
    youtubeId: 'nunVUrPR4EQ',
    poster: `${CDN}73fd5890-8229-4748-9e6f-3220c53ed5e3_car_4x3.gif?h=6bcae8a99ccb35e1d99ad6a9dbb7338e`,
  },
  {
    slug: 'cody-lawless-powfu',
    category: 'video-digital',
    artist: 'AMAAL NUUX',
    title: 'RED LIGHT (VISUALIZER)',
    youtubeId: '7ZxsX_-w99w',
    poster: `${CDN}e2ae8699-f209-4ade-8aac-d8b555f706ac_car_4x3.gif?h=2aa460ed9d65f9080c277c2e1f59625f`,
  },
  {
    slug: 'latency',
    category: 'video-cinematic',
    artist: 'CODY LAWLESS FT. POWFU',
    title: 'LATENCY',
    youtubeId: 'CPQ3aZgUQU0',
    poster: `${CDN}2fc588f9-c50d-4204-a33d-ea4d8e25d1b4_rwc_176x0x421x316x421.gif?h=7cb9692e7e6b11e20933111e2f70626b`,
  },
];

/* PHOTOGRAPHY CATEGORIES (3 category tiles) */
const PHOTOGRAPHY_CATEGORIES = [
  {
    slug: 'photo-performance',
    label: 'PERFORMANCE',
    description: 'Concerts, festivals, live events',
    poster: `${CDN}cec61291-bb6f-4fca-8492-04c0ef2c6853_rw_3840.jpg?h=9a1fa40a5f62ddc62d348042262e3122`,
  },
  {
    slug: 'photo-editorial',
    label: 'EDITORIAL',
    description: 'Artist portraits, press, fashion, brands',
    poster: `${CDN}eb7ffe1b-7529-4165-a1d2-16404c15e428_rw_1200.jpg?h=44ee0571e10b2b0d96910e9097534d30`,
  },
  {
    slug: 'photo-conceptual',
    label: 'CONCEPTUAL',
    description: 'Album artwork, creative shoots, visual campaigns',
    poster: `${CDN}a5671ad6-a7f5-465a-821b-1f1d6aa5851d_rw_1920.jpg?h=1a5326fdff17e01940c1f1a506615b99`,
  },
];

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

/* PROJECT DETAILS (for project pages) */
const PROJECT_DETAILS = {
  motions: {
    title: 'MOTIONS',
    description: [
      'Music video for Nikkaela.',
      'Directed and shot by Viper Visuals.',
    ],
  },
  'more-gen': {
    title: 'NOT COMING BACK',
    description: ['Music video for Gen.', 'Directed and shot by Viper Visuals.'],
  },
  'late-to-the-party-amaal-nuuk': {
    title: 'LATE TO THE PARTY',
    description: ['Music video for Amaal Nuux.', 'Directed and shot by Viper Visuals.'],
  },
  'cody-lawless-powfu': {
    title: 'RED LIGHT (VISUALIZER)',
    description: ['Visualizer for Cody Lawless ft. Powfu.', 'Directed and shot by Viper Visuals.'],
  },
  latency: {
    title: 'LATENCY',
    description: ['Music video for Cody Lawless ft. Powfu.', 'Directed and shot by Viper Visuals.'],
  },
};

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

/* ------------------------------------------------------------------ */
/* STEP 1: Music Videos category page                                 */
/* ------------------------------------------------------------------ */
function renderMusicVideos() {
  document.body.className = '';
  setActiveNav('#/video');

  const tilesHtml = VIDEO_CATEGORIES.map(
    (c) => `
    <a href="#/video/${c.slug}" class="category-tile">
      <img class="category-tile-media" src="${c.poster}" alt="${escapeHtml(c.label)}">
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
      <a href="#" class="back-to-top">BACK TO THE TOP</a>
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
        <video autoplay playsinline muted loop poster="media/home/hero-poster.jpg">
          <source src="media/home/hero.mp4" type="video/mp4">
        </video>
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
      <a href="#" class="back-to-top">BACK TO THE TOP</a>
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
      <div class="category-tile-caption">
        <span class="brand">${escapeHtml(item.artist)}</span>
        <span class="title">‘${escapeHtml(item.title)}’</span>
      </div>
    </a>
  `
  ).join('');
  const frag = tpl(`
    <section class="${sectionKey}-category">
      <div class="category-grid">${tilesHtml}</div>
      <a href="#" class="back-to-top">BACK TO THE TOP</a>
    </section>
  `);
  mount(frag);
}

function renderProject(slug) {
  const detail = PROJECT_DETAILS[slug];
  const project = MUSIC_VIDEOS.find((p) => p.slug === slug);
  document.body.className = '';
  setActiveNav('#/video');

  const mediaHtml = project.youtubeId
    ? `
      <div class="project-main-media">
        <div style="width:100%;height:100%;background:#111;display:grid;place-items:center;">
          <button class="play-youtube" data-youtube-id="${escapeHtml(project.youtubeId)}" style="background:none;border:none;color:#fff;font-family:'Azet Mono',monospace;font-size:calc(14 * var(--u));cursor:pointer;">
            ▶
          </button>
        </div>
      </div>
    `
    : `<img class="project-main-media" src="${project.poster}" alt="${escapeHtml(project.title)}">`;

  const frag = tpl(`
    <section class="project-page">
      ${mediaHtml}
      <div class="project-info">
        <div class="project-title-quote">‘${escapeHtml(detail ? detail.title : project.title)}’</div>
        <div class="project-description">
          ${(detail ? detail.description : []).map((d) => `<p>${escapeHtml(d)}</p>`).join('')}
        </div>
        <div class="project-gallery-section">
          <div class="project-gallery-grid"></div>
        </div>
        <div class="project-nav">
          <span class="nav-btn">PREVIOUS</span>
          <span class="nav-btn">NEXT</span>
        </div>
      </div>
    </section>
  `);
  mount(frag);
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

function renderVideoSubcategory(categorySlug) {
  document.body.className = '';
  setActiveNav('#/video');

  const category = VIDEO_CATEGORIES.find((c) => c.slug === categorySlug);
  const items = MUSIC_VIDEOS.filter((m) => m.category === categorySlug);

  const tilesHtml = items.map(
    (m) => `
    <a href="#/project/${m.slug}" class="category-tile">
      <img class="category-tile-media" src="${m.poster}" alt="${escapeHtml(m.title)}">
      <div class="category-tile-caption">
        <span class="brand">${escapeHtml(m.artist)}</span>
        <span class="title">‘${escapeHtml(m.title)}’</span>
      </div>
    </a>
  `
  ).join('');

  const frag = tpl(`
    <section class="video-category">
      <div class="category-grid">${tilesHtml}</div>
      <a href="#/video" class="back-to-top">BACK TO MUSIC VIDEOS</a>
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
        <div style="font-family:'Azet Mono',monospace;font-size:calc(14 * var(--u));letter-spacing:-0.4px;">Page not found</div>
        <a href="#/" style="color:rgb(219,188,235)">Return to home</a>
      </div>
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
