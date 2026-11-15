/* ==========================================================================
   Viper Visuals — single-page app router + data
   Zero-dependency. Hash routes:
     #/                 Home (zero-scroll autoplay hero video)
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
/* PROJECTS — your real work from vipervisuals.ca                     */
/*                                                                    */
/* Titles, slugs, artists and categories pulled from your existing    */
/* site. YouTube IDs + gallery clips are placeholders — add your real */
/* IDs and drop local media into assets/.                             */
/* ------------------------------------------------------------------ */
const PROJECTS = [
  /* ── VIDEO / MUSIC VIDEOS ── */
  {
    slug: 'cody-lawless-powfu',
    title: 'RED LIGHT VISUALIZER',
    artist: 'CODY LAWLESS FT. POWFU',
    category: 'music-videos',
    youtubeId: '',            // ← add your YouTube video ID
    poster: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/ed6dd76c-67ed-4935-81f7-3165a848f944_car_4x3.gif?h=2aa460ed9d65f9080c277c2e1f59625f',
    gallery: [],
  },
  {
    slug: 'latency',
    title: 'LATNECY',
    artist: 'CODY LAWLESS FT. POWFU',
    category: 'music-videos',
    youtubeId: '',            // ← add your YouTube video ID
    poster: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/2fc588f9-c50d-4204-a33d-ea4d8e25d1b4_rwc_176x0x421x316x421.gif?h=7cb9692e7e6b13e20933111e2f70626b',
    gallery: [],
  },
  {
    slug: 'motions',
    title: 'MOTIONS',
    artist: '',
    category: 'music-videos',
    youtubeId: '',            // ← add your YouTube video ID
    poster: '',
    gallery: [],
  },

  /* ── VIDEO / SOCIAL CONTENT ── */
  {
    slug: 'social-content',
    title: 'SOCIAL CONTENT',
    artist: '',
    category: 'social-content',
    youtubeId: '',
    poster: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/534ccfcf-fe26-4175-a342-dc04d9f09b51_rwc_0x25x812x457x812.gif?h=5c51c000b1520d021f5cdd9d0505d629',
    gallery: [],
  },
  {
    slug: 'more-gen',
    title: 'MORE-GEN',
    artist: '',
    category: 'social-content',
    youtubeId: '',
    poster: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/8bb039fa-e384-4a5b-a17c-95847a8593a1_rwc_80x0x456x342x456.gif?h=bf745be8499f094ffac3770bb514279c',
    gallery: [],
  },

  /* ── PHOTOGRAPHY / CONCERTS ── */
  {
    slug: 'the-weeknd',
    title: 'AFTER HOURS TILL DAWN TOUR',
    artist: 'THE WEEKND',
    category: 'concerts',
    poster: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/cec61291-bb6f-4fca-8492-04c0ef2c6853_rw_3840.jpg?h=9a1fa40a5f62ddc62d348042262e3122',
    gallery: [
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/ec69fe31-b665-4bb7-86d9-26c54247c600_rw_3840.jpg?h=939f2cf4f9b08114c9bac4ef46e47342', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/a0883ffc-6d45-422e-82bd-64776a8977d1_rw_1200.jpg?h=5a7bf62aed471dcadb75ed787410c83d', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/1f3ebfc7-5fe1-47bc-92f8-a961a82abdc2_rw_3840.jpg?h=7d49650eaef31fbbb82f111ac772d953', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/f7a2467b-9563-4ef1-8d19-c46c969d37f3_rw_3840.jpg?h=67f0111f58c20c86d783742b9120f721', caption: '' },
    ],
  },
  {
    slug: 'pics',
    title: 'SOS TOUR',
    artist: 'SZA',
    category: 'concerts',
    poster: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/664d5b07-9eb2-4120-a6d8-e81bafc62324_rw_1200.jpg?h=4f2f6ba5f4c61426f7cd392cc71bee5d',
    gallery: [
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/b1b73388-b884-4f49-8a62-c1604be435cc_rw_1200.jpg?h=d894294b92706b85eb5fa2a18aa8e063', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/aa554319-6494-4a59-88b2-e57c300705e0_rw_1200.jpg?h=5fc4c7c2a0029b771812ab73739b9d27', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/ad1d0419-f849-4924-a2cc-57730a1e2f40_rw_1200.jpg?h=550027faab972134763082fd03aed5d5', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/98525afd-e4db-45c6-a368-09492972c4d8_rw_1200.jpg?h=3504c10496c246a9e40eae1df8c6360a', caption: '' },
    ],
  },

  /* ── PHOTOGRAPHY / PRESS ── */
  {
    slug: 'micky-press',
    title: 'MICKY WEEKES',
    artist: '',
    category: 'press',
    poster: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/eb7ffe1b-7529-4165-a1d2-16404c15e428_rw_1200.jpg?h=44ee0571e10b2b0d96910e9097534d30',
    gallery: [
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/c84500f3-68d3-4024-ad4a-4b5d5455b37c_rw_1200.jpg?h=59d67105432bab99a4aa09aa42235f04', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/df627155-acd9-4f7c-9494-4f943181ddb5_rw_1200.jpg?h=97b2e2ab660032845736edbb8ca1e38a', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/1b6ce5fc-e580-4999-8c5a-ed9e09da7b78_rw_1200.jpg?h=076aaf161be223653b86265b963a1609', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/0201cf6e-dc1f-48c5-a7f1-814051b9768a_rw_1200.jpg?h=a6ea4e87d89cb8cbc1b86b823a50ae21', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/9ea88396-6af5-4074-b9ab-2ffb29953b49_rw_1200.jpg?h=76cd88ddae7b44570d1fada0d643f342', caption: '' },
    ],
  },

  /* ── DESIGN / BRANDING ── */
  {
    slug: 'red-light-roll-out',
    title: 'RED LIGHT ROLL OUT',
    artist: 'AMAAL NUUK',
    category: 'branding',
    poster: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/e2d01d0d-73c9-4c37-b62c-67f4901672bb_rw_1200.jpg?h=6df47481d10310a442e93b67dfe27e46',
    gallery: [
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/6b865877-9f6c-4667-887d-37951a92f10b_rw_1920.jpg?h=3a4aed079072938d8a55d4f66f4ac3bb', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/783c136b-ea41-4293-a8ef-2a18170a91d0_rw_1200.jpg?h=c74ada9ade48d5e8fccd7b07ce1b9a7c', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/e10892f9-2dff-422c-a94a-3466f801fd65_rw_1920.jpg?h=f7bc2d76300ecc24209183481c66a52e', caption: '' },
      { type: 'image', src: 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/e983a916-85a5-4ea7-8911-895c69ffa6ad_rw_1920.jpg?h=cf692e840f6e0db13bb0ef408a5bf84e', caption: '' },
    ],
  },

  /* ── Design placeholders (slugs from your site, titles to confirm) ── */
  {
    slug: 'kays',
    title: 'KAYS',
    artist: '',
    category: 'album-covers',
    poster: '',
    gallery: [],
  },
  {
    slug: 'nikkaela',
    title: 'NIKKAELA',
    artist: '',
    category: 'album-covers',
    poster: '',
    gallery: [],
  },
  {
    slug: 'late-to-the-party-amaal-nuuk',
    title: 'LATE TO THE PARTY',
    artist: 'AMAAL NUUK',
    category: 'creative-direction',
    poster: '',
    gallery: [],
  },
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
          REPLACE THE POSTER/SRC BELOW WITH YOUR HERO VIDEO FILE.
          The <video> autoplays muted & looped — it behaves like a GIF,
          no play button. Keep it short (5-15s) and compressed (webm/mp4).
        -->
        <video autoplay playsinline muted loop poster="assets/img/posters/hero.jpg">
          <source src="assets/video/hero.webm" type="video/webm">
          <source src="assets/video/hero.mp4" type="video/mp4">
        </video>
        <div class="hero-placeholder">
          Add your hero video: assets/video/hero.mp4 (+ hero poster)
        </div>
      </div>
    </section>
  `);
  mount(frag);
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
  return `<div class="blank"><h3>${escapeHtml(msg)}</h3><p style="font-family:var(--font-captions);font-size:0.75rem;letter-spacing:0.14em;text-transform:uppercase">No work added yet.</p></div>`;
}

function projectCard(project) {
  const cat =
    project.category.charAt(0).toUpperCase() + project.category.slice(1);
  const hasPoster = project.poster && project.poster.trim();
  return `
  <article class="card">
    <div class="media">
      ${hasPoster
        ? `<img src="${escapeHtml(project.poster)}" alt="${escapeHtml(project.title)}">`
        : `<span style="font-family:var(--font-display);font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase">Add media</span>`}
      <div class="play-badge"><div class="tri"></div></div>
    </div>
    <footer>
      <span class="cat">${escapeHtml(cat)}</span>
      <span class="title caption">
        <span class="artist">${escapeHtml(project.artist)}</span>
        <span class="title">‘${escapeHtml(project.title)}’</span>
      </span>
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
        <span style="font-family:var(--font-display);font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase">${escapeHtml(
          s.label
        )}</span>
      </div>
      <footer>
        <span class="title caption">
          <span class="artist"></span>
          <span class="title">‘${escapeHtml(s.label)}’</span>
        </span>
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
      : emptyState('No projects yet');

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
          .map((item) => {
            if (item.type === 'video') {
              return `
              <article class="card">
                <div class="media placeholder">
                  <video poster="${escapeHtml(item.poster || '')}" muted playsinline>
                    <source src="${escapeHtml(item.src)}" type="video/mp4">
                  </video>
                  <div class="play-badge"><div class="tri"></div></div>
                </div>
                ${item.caption ? `<footer><span class="title caption"><span class="artist"></span><span class="title">‘${escapeHtml(item.caption)}’</span></span></footer>` : ''}
              </article>`;
            }
            return `
              <article class="card">
                <div class="media placeholder">
                  <img src="${escapeHtml(item.src)}" alt="${escapeHtml(
              item.caption || project.title
            )}">
                </div>
                ${item.caption ? `<footer><span class="title caption"><span class="artist"></span><span class="title">‘${escapeHtml(item.caption)}’</span></span></footer>` : ''}
              </article>`;
          })
          .join('')}</div>`
      : emptyState('No gallery clips yet');

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
         <span style="font-family:var(--font-display);font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase">Add your YouTube video ID in js/app.js</span>
       </div>`;

  const frag = tpl(`
    <section class="section project-hero">
      <a class="back-link" href="#/video/music-videos">&larr; Back to Music Videos</a>
      ${project.artist ? `<span class="project-artist">${escapeHtml(project.artist)}</span>` : ''}
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
        <p style="font-family:var(--font-captions);font-size:0.75rem;letter-spacing:0.14em;text-transform:uppercase">
          Add your projects to PROJECTS in js/app.js.
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
        <p style="font-family:var(--font-captions);font-size:0.75rem;letter-spacing:0.14em;text-transform:uppercase">
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
  const [path] = hash.split('?');
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
/* lazy-load off-screen iframes/images                                */
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
