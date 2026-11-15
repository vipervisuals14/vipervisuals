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
     #/photo/brands
     #/design           Design index
     #/design/merch
     #/design/branding
     #/design/creative-direction
   ========================================================================== */

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
    { key: 'brands', label: 'Brands', path: '#/photo/brands' },
  ],
  design: [
    { key: 'merch', label: 'Merch', path: '#/design/merch' },
    { key: 'branding', label: 'Branding', path: '#/design/branding' },
    { key: 'creative-direction', label: 'Creative Direction', path: '#/design/creative-direction' },
  ],
};

/* ------------------------------------------------------------------ */
/* PROJECTS — all content migrated from vipervisuals.ca               */
/*                                                                    */
/* Every title, artist, category, poster image, and gallery image     */
/* below comes from your original website. No placeholders, no        */
/* invented projects, no stock imagery.                               */
/*                                                                    */
/* YouTube IDs are missing where the original page only contained a   */
/* video embed with no extractable ID. Add them in the youtubeId      */
/* field for each music video project.                                */
/* ------------------------------------------------------------------ */
const CDN = 'https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/';

const PROJECTS = [
  /* ── PHOTOGRAPHY / CONCERTS ── */
  {
    slug: 'the-weeknd',
    title: 'AFTER HOURS TILL DAWN TOUR',
    artist: 'THE WEEKND',
    category: 'concerts',
    poster: `${CDN}cec61291-bb6f-4fca-8492-04c0ef2c6853_rw_3840.jpg?h=9a1fa40a5f62ddc62d348042262e3122`,
    gallery: [
      { type: 'image', src: `${CDN}ec69fe31-b665-4bb7-86d9-26c54247c600_rw_3840.jpg?h=939f2cf4f9b08114c9bac4ef46e47342`, caption: '' },
      { type: 'image', src: `${CDN}a0883ffc-6d45-422e-82bd-64776a8977d1_rw_1200.jpg?h=5a7bf62aed471dcadb75ed787410c83d`, caption: '' },
      { type: 'image', src: `${CDN}1f3ebfc7-5fe1-47bc-92f8-a961a82abdc2_rw_3840.jpg?h=7d49650eaef31fbbb82f111ac772d953`, caption: '' },
      { type: 'image', src: `${CDN}f7a2467b-9563-4ef1-8d19-c46c969d37f3_rw_3840.jpg?h=67f0111f58c20c86d783742b9120f721`, caption: '' },
      { type: 'image', src: `${CDN}915ffc7b-3aed-4b01-a468-8a7ea104ecdb_rw_3840.jpg?h=652adc8cf8529f0443f5d4576d4d7396`, caption: '' },
      { type: 'image', src: `${CDN}4bac671f-14e2-4dc4-83b5-a5c8041fc167_rw_1920.jpg?h=82a4be2d45aa0776b60d416b8f843aa9`, caption: '' },
      { type: 'image', src: `${CDN}c2238d88-fe71-417e-ab34-a2d9bd710ebd_rw_3840.jpg?h=3af095f715c338768754dcd70cec626f`, caption: '' },
      { type: 'image', src: `${CDN}81b2858d-e11a-4229-bfde-85d4f5ee41d9_rw_1920.jpg?h=ac144f2d594ffc42c1a172712af1912a`, caption: '' },
      { type: 'image', src: `${CDN}58f4dae2-dd20-439f-a239-dfb143bb1d64_rw_3840.jpg?h=eb4324b44c900c147851ca55ee5df978`, caption: '' },
      { type: 'image', src: `${CDN}9d76fa9b-9290-4a82-995b-2cd5889e1a18_rw_3840.jpg?h=60b1dc0311bb35e5ccb55d578e55e4a5`, caption: '' },
      { type: 'image', src: `${CDN}45e9c9db-bd73-4ab6-aa44-dae8dda6db39_rw_3840.jpg?h=dc4ec963f70a99bb22a454b8839d70f6`, caption: '' },
      { type: 'image', src: `${CDN}b351049e-8dcd-4dd1-8f7b-f029d3dcbe21_rw_1920.jpg?h=ed13f71118f93122976ab99085076a6a`, caption: '' },
      { type: 'image', src: `${CDN}2aaaa8b2-10b3-4d97-a6ad-1c13fc013c02_rw_3840.jpg?h=a653658d08af3e47a6bbd97599617c3e`, caption: '' },
      { type: 'image', src: `${CDN}87a84fdc-e0f6-4ead-90e6-30c7ba16114d_rw_3840.jpg?h=429719bd1527d816381349bcf277e36b`, caption: '' },
      { type: 'image', src: `${CDN}abb33da6-bea1-4d3f-97b6-71fead7e6596_rw_3840.jpg?h=5ecf4847253bc844fc9c4dad22c786f0`, caption: '' },
      { type: 'image', src: `${CDN}a6dae923-085b-44d5-a39f_rw_3840.jpg?h=23c975cebf5dca5b018c99c303bc3479`, caption: '' },
      { type: 'image', src: `${CDN}ad0294eb-81a8-489d-be71-ea60823d354d_rw_3840.jpg?h=b753ee2185d8aa3b94d091e9e1768c64`, caption: '' },
      { type: 'image', src: `${CDN}c2d13993-1f3d-4413-a519-5b974255b7af_rw_3840.jpg?h=acdcd41894db72131fa4f79dabe9c170`, caption: '' },
      { type: 'image', src: `${CDN}394a517a-2e66-4e0e-a12b-6412990ec52a_rw_3840.jpg?h=cca3768c99e030797bf1e2f8f4f4ccfd`, caption: '' },
      { type: 'image', src: `${CDN}7a3ad9e2-f19e-4c20-8585-1d026cce04c6_rw_3840.jpg?h=a473a5c51de6b46535ca9b19a5974594`, caption: '' },
      { type: 'image', src: `${CDN}9f13c49d-1a0e-48ee-a067-44b2b640afa6_rw_3840.jpg?h=16269e048c636f381196b54e70bbd7f7`, caption: '' },
      { type: 'image', src: `${CDN}1c809347-4d32-45d0-8bb3-155d5417d8aa_rw_3840.jpg?h=8d3da4cc3a806df9c689f5e54f8ca7fb`, caption: '' },
      { type: 'image', src: `${CDN}bebb48fc-df74-49f6-9327-cb6be2536da2_rw_3840.jpg?h=84f3e92bd31eb21f51d452187187dc93`, caption: '' },
      { type: 'image', src: `${CDN}3019eafb-18fe-4d5a-b950-c804119c5abb_rw_3840.jpg?h=9431bbecc1c7ea8195da902496184c03`, caption: '' },
      { type: 'image', src: `${CDN}1c10d27e-895f-4874-ad45-8af96312c5cb_rw_3840.jpg?h=618e077c078ddac379aac9ade2ceaa17`, caption: '' },
      { type: 'image', src: `${CDN}676c8fcb-fc39-4ffe-a0bf-7976ffb27a20_rw_3840.jpg?h=4b18356ad5f97d740a815ffc726fc173`, caption: '' },
      { type: 'image', src: `${CDN}cce06a3a-adda-402b-a614-62c0855b8e14_rw_3840.jpg?h=48507717ec3e5f919290a17a5bfb12fb`, caption: '' },
      { type: 'image', src: `${CDN}11dbfc9d-e692-41ff-a688-a56592a33368_rw_3840.jpg?h=e2f0e8ccd097c9b20db6d3b95bf2a6f9`, caption: '' },
      { type: 'image', src: `${CDN}d3288cf7-4cb6-46aa-bf20-60515b3b686d_rw_3840.jpg?h=c8c96a845e0b6629432a49f8e0322cbb`, caption: '' },
    ],
  },
  {
    slug: 'pics',
    title: 'SOS TOUR',
    artist: 'SZA',
    category: 'concerts',
    poster: `${CDN}664d5b07-9eb2-4120-a6d8-e81bafc62324_rw_1200.jpg?h=4f2f6ba5f4c61426f7cd392cc71bee5d`,
    gallery: [
      { type: 'image', src: `${CDN}b1b73388-b884-4f49-8a62-c1604be435cc_rw_1200.jpg?h=d894294b92706b85eb5fa2a18aa8e063`, caption: '' },
      { type: 'image', src: `${CDN}aa554319-6494-4a59-88b2-e57c300705e0_rw_1200.jpg?h=5fc4c7c2a0029b771812ab73739b9d27`, caption: '' },
      { type: 'image', src: `${CDN}ad1d0419-f849-4924-a2cc-57730a1e2f40_rw_1200.jpg?h=550027faab972134763082fd03aed5d5`, caption: '' },
      { type: 'image', src: `${CDN}98525afd-e4db-45c6-a368-09492972c4d8_rw_1200.jpg?h=3504c10496c246a9e40eae1df8c6360a`, caption: '' },
      { type: 'image', src: `${CDN}a5713aee-a26c-4d92-99d6-954abd8f4102_rw_1200.jpg?h=10a032cd03733e047398272d8162d9cc`, caption: '' },
      { type: 'image', src: `${CDN}0f5e27ca-1459-4f19-995e-f03139f84859_rw_1200.jpg?h=4ba3d7573ffe809251022fe01ddcb6cb`, caption: '' },
      { type: 'image', src: `${CDN}53ddc3ef-d7c0-41b0-ab1c-0b25e81ea749_rw_1200.jpg?h=9871634f527e8f0491aa8f53efa0d448`, caption: '' },
      { type: 'image', src: `${CDN}5e06169b-6c79-48d0-b59a-b3805b5c23b7_rw_1200.jpg?h=9af5eb43fe9885e00325c07bcedb186c`, caption: '' },
    ],
  },

  /* ── PHOTOGRAPHY / PRESS ── */
  {
    slug: 'micky-press',
    title: 'MICKY WEEKES',
    artist: '',
    category: 'press',
    poster: `${CDN}eb7ffe1b-7529-4165-a1d2-16404c15e428_rw_1200.jpg?h=44ee0571e10b2b0d96910e9097534d30`,
    gallery: [
      { type: 'image', src: `${CDN}c84500f3-68d3-4024-ad4a-4b5d5455b37c_rw_1200.jpg?h=59d67105432bab99a4aa09aa42235f04`, caption: '' },
      { type: 'image', src: `${CDN}df627155-acd9-4f7c-9494-4f943181ddb5_rw_1200.jpg?h=97b2e2ab660032845736edbb8ca1e38a`, caption: '' },
      { type: 'image', src: `${CDN}1b6ce5fc-e580-4999-8c5a-ed9e09da7b78_rw_1200.jpg?h=076aaf161be223653b86265b963a1609`, caption: '' },
      { type: 'image', src: `${CDN}0201cf6e-dc1f-48c5-a7f1-814051b9768a_rw_1200.jpg?h=a6ea4e87d89cb8cbc1b86b823a50ae21`, caption: '' },
      { type: 'image', src: `${CDN}9ea88396-6af5-4074-b9ab-2ffb29953b49_rw_1200.jpg?h=76cd88ddae7b44570d1fada0d643f342`, caption: '' },
    ],
  },
  {
    slug: 'kays',
    title: 'SPORTS SPEC SHOOT',
    artist: '',
    category: 'press',
    poster: `${CDN}0943fa60-09f0-4b12-88af-9af03e4eecd3_rw_1200.jpg?h=7534e6b797f517aecc5c8760c7e8bb91`,
    gallery: [
      { type: 'image', src: `${CDN}6f9bc303-3af2-4c75-8ad3-9190a3aebf27_rw_1200.jpg?h=564b08d3f6bd1b8478da043c25e2e552`, caption: '' },
      { type: 'image', src: `${CDN}f0e91cfa-717f-48b4-be21-58085049421b_rw_1200.jpg?h=5f4b1a406706ebfbcc4bc9683fbe3adb`, caption: '' },
      { type: 'image', src: `${CDN}bd7ac2f7-b0d3-4bfa-9edd-e471092095c7_rw_1920.jpg?h=f6226a3757e9e8e6507bed8021f22647`, caption: '' },
      { type: 'image', src: `${CDN}d993127a-c779-4f86-8bbd-946160b6e602_rw_1920.jpg?h=9f481ef9bd4f54f1fa3095d85deaf4af`, caption: '' },
      { type: 'image', src: `${CDN}cf35c326-8558-4edd-ac82-be35046ba8d7_rw_1920.jpg?h=5084deb66af0f4e9896d953a97603bb6`, caption: '' },
      { type: 'image', src: `${CDN}3afbc933-2512-4d48-9c78-0a697ee48041_rw_1920.jpg?h=54cd73e5b973a59bfa4c6e391fd9209f`, caption: '' },
      { type: 'image', src: `${CDN}1f8106f3-b8d1-4622-aff3-e9f65199af57_rw_1920.jpg?h=fcec059cd3fefd1a71d202d52f0bf804`, caption: '' },
      { type: 'image', src: `${CDN}12845262-1972-4836-b486-579d2161fd51_rw_1920.jpg?h=a62bced8da175c31d2749633390bd073`, caption: '' },
    ],
  },

  /* ── PHOTOGRAPHY / BRANDS ── */
  {
    slug: 'nikkaela',
    title: 'OUR BLOCK CLOTHING',
    artist: '',
    category: 'brands',
    poster: `${CDN}a5671ad6-a7f5-465a-821b-1f1d6aa5851d_rw_1920.jpg?h=1a5326fdff17e01940c1f1a506615b99`,
    gallery: [
      { type: 'image', src: `${CDN}11140c19-3d34-4fc5-ae46-f1a6f8606ea5_rw_1200.jpg?h=39f7dadef1d3a81620ccf809cd5de4e2`, caption: '' },
      { type: 'image', src: `${CDN}00e68b48-4956-4264-9244-6bc09504899b_rw_1920.jpg?h=a7ca69deaac3a0475bac2ed1f6ee3c9d`, caption: '' },
      { type: 'image', src: `${CDN}8b0143c6-8d6d-41d4-9a9a-27303235a333_rw_1200.jpg?h=fb31a95440f8bc18c2df14f8ae062a0a`, caption: '' },
      { type: 'image', src: `${CDN}ceb0009a-1229-439c-9cf2-91869fc0d231_rw_1200.jpg?h=69e21257dfc99e4d579a58cab374b154`, caption: '' },
    ],
  },

  /* ── PHOTOGRAPHY / ALBUM COVERS ── (empty — no projects fit this category) */

  /* ── DESIGN / BRANDING ── */
  {
    slug: 'red-light-roll-out',
    title: 'RED LIGHT ROLL OUT',
    artist: 'AMAAL NUUK',
    category: 'branding',
    poster: `${CDN}e2d01d0d-73c9-4c37-b62c-67f4901672bb_rw_1200.jpg?h=6df47481d10310a442e93b67dfe27e46`,
    gallery: [
      { type: 'image', src: `${CDN}6b865877-9f6c-4667-887d-37951a92f10b_rw_1920.jpg?h=3a4aed079072938d8a55d4f66f4ac3bb`, caption: '' },
      { type: 'image', src: `${CDN}783c136b-ea41-4293-a8ef-2a18170a91d0_rw_1200.jpg?h=c74ada9ade48d5e8fccd7b07ce1b9a7c`, caption: '' },
      { type: 'image', src: `${CDN}e10892f9-2dff-422c-a94a-3466f801fd65_rw_1920.jpg?h=f7bc2d76300ecc24209183481c66a52e`, caption: '' },
      { type: 'image', src: `${CDN}e983a916-85a5-4ea7-8911-895c69ffa6ad_rw_1920.jpg?h=cf692e840f6e0db13bb0ef408a5bf84e`, caption: '' },
    ],
  },

  /* ── DESIGN / MERCH ── (empty) */
  /* ── DESIGN / CREATIVE DIRECTION ── (empty) */

  /* ── VIDEO PRODUCTION / MUSIC VIDEOS ── */
  {
    slug: 'cody-lawless-powfu',
    title: 'RED LIGHT VISUALIZER',
    artist: 'CODY LAWLESS FT. POWFU',
    category: 'music-videos',
    youtubeId: '',        // ← YouTube ID not extractable from original page — add it
    poster: `${CDN}e2ae8699-f209-4ade-8aac-d8b555f706ac_car_4x3.gif?h=2aa460ed9d65f9080c277c2e1f59625f`,
    gallery: [],
  },
  {
    slug: 'latency',
    title: 'LATNECY',
    artist: 'CODY LAWLESS FT. POWFU',
    category: 'music-videos',
    youtubeId: '',        // ← YouTube ID not extractable from original page — add it
    poster: `${CDN}2fc588f9-c50d-4204-a33d-ea4d8e25d1b4_rwc_176x0x421x316x421.gif?h=7cb9692e7e6b11e20933111e2f70626b`,
    gallery: [],
  },
  {
    slug: 'motions',
    title: 'MOTIONS',
    artist: '',
    category: 'music-videos',
    youtubeId: '',        // ← YouTube ID not extractable from original page — add it
    poster: `${CDN}b8b37835-6914-4f17-9048-c44a35a0fabd_rwc_212x0x457x343x457.gif?h=58a630675171c931373f269654eabf43`,
    gallery: [],
  },
  {
    slug: 'late-to-the-party-amaal-nuuk',
    title: 'LATE TO THE PARTY',
    artist: 'AMAAL NUUX',
    category: 'music-videos',
    youtubeId: '',        // ← YouTube ID not extractable from original page — add it
    poster: `${CDN}73fd5890-8229-4748-9e6f-3220c53ed5e3_car_4x3.gif?h=6bcae8a99ccb35e1d99ad6a9dbb7338e`,
    gallery: [],
  },

  /* ── VIDEO PRODUCTION / SOCIAL CONTENT ── */
  {
    slug: 'social-content',
    title: 'WAX MOTIF / LOUD LUXURY',
    artist: '',
    category: 'social-content',
    youtubeId: '',        // ← YouTube ID not extractable from original page — add it
    poster: `${CDN}a909d33c-4c05-4f5b-a2e6-bc4cdc0d6ed2_rw_1200.jpg?h=35720df75f84b2ae26162785ca111aef`,
    gallery: [
      { type: 'image', src: `${CDN}1e798ad2-ecb9-4641-8b21-e0159619b2e5_rw_1200.jpg?h=38c5f4bd367c301b50632449daeb996f`, caption: '' },
      { type: 'image', src: `${CDN}552012c3-11ae-4e56-84a9-5a365d1b52f7_rw_1200.jpg?h=fc9f315c5dd3527fedce6d877df9a3a7`, caption: '' },
      { type: 'image', src: `${CDN}17a4dbf8-d1ba-4792-b867-95ab345704de_rw_1200.jpg?h=d3c4754048ed57ea69ad528745472014`, caption: '' },
      { type: 'image', src: `${CDN}aeda9ea6-318f-4f2f-a0f6-e57d46b93b95_rw_1200.jpg?h=b38c8707f704374b4d0106ecc68f401b`, caption: '' },
      { type: 'image', src: `${CDN}34f5740f-bd89-4a6a-a9cd-e777d0ba3a8d_rw_1200.jpg?h=ebdd5e4b69275f9cb4bc96a844b59904`, caption: '' },
      { type: 'image', src: `${CDN}71f9c56b-087b-4382-8e46-479c895c5570_rw_1200.jpg?h=a11cbe39c7055159ba8b0c5e156bc594`, caption: '' },
      { type: 'image', src: `${CDN}2cf90ccc-2797-4dda-82bf-008d9adb418a_rw_1200.jpg?h=5515497b9d8ce3996390f4a520ed6552`, caption: '' },
      { type: 'image', src: `${CDN}8455c49b-56ee-48cf-81e8-147720d3b8e9_rw_1200.jpg?h=875be999bc4dd572bf306c93c04c89a0`, caption: '' },
      { type: 'image', src: `${CDN}c94cc966-1d70-4c3a-bf35-b3a499e87ef3_rw_1200.jpg?h=85de067da204826684612b445511f37e`, caption: '' },
      { type: 'image', src: `${CDN}790b9170-c7d3-42dc-a8e3-8e9019621f13_rw_1200.jpg?h=61a1b413f576eaccfa3dd50a92bc88d4`, caption: '' },
      { type: 'image', src: `${CDN}6cd50610-cfe6-4bad-ad65-bbad86243ab7_rw_1200.jpg?h=0bc99c9febd1b6491f9e186fa72c7a94`, caption: '' },
    ],
  },
  {
    slug: 'more-gen',
    title: 'NOT COMING BACK - GEN',
    artist: '',
    category: 'social-content',
    youtubeId: '',        // ← YouTube ID not extractable from original page — add it
    poster: `${CDN}8bb039fa-e384-4a5b-a17c-95847a8593a1_rwc_80x0x456x342x456.gif?h=bf745be8499f094ffac3770bb514279c`,
    gallery: [],
  },

  /* ── VIDEO PRODUCTION / RECAPS ── (empty — no projects fit this category) */
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
    <section class="section">
      <div class="hero" style="
        background-image: url('https://cdn.myportfolio.com/9844ffef-896f-4abd-b0bc-bec392563aaf/e2ae8699-f209-4ade-8aac-d8b555f706ac_car_4x3.gif?h=2aa460ed9d65f9080c277c2e1f59625f');
        background-size: cover;
        background-position: center;
      ">
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
      : emptyState('No work added yet');

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

  // PREVIOUS / NEXT within same category
  const categoryProjects = PROJECTS.filter((p) => p.category === project.category);
  const currentIndex = categoryProjects.findIndex((p) => p.slug === slug);
  const prevProject = categoryProjects[(currentIndex - 1 + categoryProjects.length) % categoryProjects.length];
  const nextProject = categoryProjects[(currentIndex + 1) % categoryProjects.length];

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
      <div class="gallery-nav">
        <span class="nav-btn ${currentIndex === 0 ? 'disabled' : ''}" onclick="location.hash='#/video/project/${encodeURIComponent(prevProject.slug)}'">PREVIOUS</span>
        <span class="nav-btn ${currentIndex === categoryProjects.length - 1 ? 'disabled' : ''}" onclick="location.hash='#/video/project/${encodeURIComponent(nextProject.slug)}'">NEXT</span>
      </div>
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
  } else if (path === '#/photo/brands') {
    renderSubcat('photo', 'brands');
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
