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
const KELLAND_POSTER = 'media/video-previews/kelland-v2-poster.jpg';
const KELLAND_PREVIEW = 'media/video-previews/kelland-v2.mp4';
const FRANK_POSTER = 'media/video-previews/frank-walker-poster.jpg';
const FRANK_PREVIEW = 'media/video-previews/frank-walker.mp4';
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
    rows: ['MUSIC VIDEOS', 'VISUALIZERS', 'ARTIST FILMS'],
    stillPoster: 'https://i.ytimg.com/vi/4bLi52OVcQQ/hqdefault.jpg',
    poster: `${CDN}b8b37835-6914-4f17-9048-c44a35a0fabd_rwc_212x0x457x343x457.gif?h=58a630675171c931373f269654eabf43`,
  },
  {
    slug: 'video-live',
    label: 'LIVE',
    rows: ['MULTI CAM', 'RECAPS', 'FULL SETS'],
    poster: FRANK_POSTER,
    preview: FRANK_PREVIEW,
  },
  {
    slug: 'video-digital',
    label: 'DIGITAL',
    rows: ['SOCIAL CONTENT', 'PROMOTIONAL VIDEOS', 'BEHIND THE SCENES'],
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
    vimeoId: '1247410730',
    poster: 'media/video-previews/singhara-v2-poster.jpg',
    preview: 'media/video-previews/singhara-v2.mp4',
  },

  /* LIVE */
  {
    slug: 'frank-walker',
    category: 'video-live',
    artist: 'FRANK WALKER',
    title: 'RBC STAGE',
    vimeoId: '1247510528',
    startAt: 0,
    poster: FRANK_POSTER,
    preview: FRANK_PREVIEW,
  },
  {
    slug: 'maribou-state',
    category: 'video-live',
    artist: 'MARIBOU STATE',
    title: 'LIVE AT HISTORY',
    vimeoId: '1098364694',
    poster: 'media/video-previews/maribou-state-poster.jpg',
    preview: 'media/video-previews/maribou-state.mp4',
  },
  {
    slug: 'kelland',
    category: 'video-live',
    artist: 'KELLAND',
    title: 'CYPRESS MOUNTAIN FULL SET',
    youtubeId: 'xT1E1rrcbe8',
    poster: KELLAND_POSTER,
    preview: KELLAND_PREVIEW,
  },
  {
    slug: 'sistek',
    category: 'video-live',
    artist: 'SISTEK',
    title: 'YOKO LUNA MONTREAL',
    vimeoId: '1117974303',
    poster: 'media/video-previews/sistek-poster.jpg',
    preview: 'media/video-previews/sistek.mp4',
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
    title: 'VELD MUSIC FESTIVAL',
    description: ['Social content photography for Wax Motif / Loud Luxury.', 'Shot by Viper Visuals.'],
  },
  'micky-press': {
    title: 'PRESS',
    description: ['Press photography.', 'Shot by Viper Visuals.'],
  },
  kays: {
    title: 'SPORTS SPEC',
    description: ['Sports photography shoot.', 'Shot by Viper Visuals.'],
  },
  nikkaela: {
    title: 'LOOKBOOK',
    description: ['Lookbook photography for Our Block Clothing.', 'Shot by Viper Visuals.'],
  },
};

/* Gallery cover followed by the original Weeknd project photographs, in page order. */
const WEEKND_PHOTOS = [
  'media/photography/the-weeknd-gallery-header.jpg',
  'cec61291-bb6f-4fca-8492-04c0ef2c6853_rw_3840.jpg?h=9a1fa40a5f62ddc62d348042262e3122',
  'ec69fe31-b665-4bb7-86d9-26c54247c600_rw_3840.jpg?h=939f2cf4f9b08114c9bac4ef46e47342',
  'a0883ffc-6d45-422e-82bd-64776a8977d1_rw_1200.jpg?h=5a7bf62aed471dcadb75ed787410c83d',
  '1f3ebfc7-5fe1-47bc-92f8-a961a82abdc2_rw_3840.jpg?h=7d49650eaef31fbbb82f111ac772d953',
  'f7a2467b-9563-4ef1-8d19-c46c969d37f3_rw_3840.jpg?h=67f0111f58c20c86d783742b9120f721',
  '915ffc7b-3aed-4b01-a468-8a7ea104ecdb_rw_3840.jpg?h=652adc8cf8529f0443f5d4576d4d7396',
  '4bac671f-14e2-4dc4-83b5-a5c8041fc167_rw_1920.jpg?h=82a4be2d45aa0776b60d416b8f843aa9',
  'c2238d88-fe71-417e-ab34-a2d9bd710ebd_rw_3840.jpg?h=3af095f715c338768754dcd70cec626f',
  '81b2858d-e11a-4229-bfde-85d4f5ee41d9_rw_1920.jpg?h=ac144f2d594ffc42c1a172712af1912a',
  '58f4dae2-dd20-439f-a239-dfb143bb1d64_rw_3840.jpg?h=eb4324b44c900c147851ca55ee5df978',
  '9d76fa9b-9290-4a82-995b-2cd5889e1a18_rw_3840.jpg?h=60b1dc0311bb35e5ccb55d578e55e4a5',
  '45e9c9db-bd73-4ab6-aa44-dae8dda6db39_rw_3840.jpg?h=dc4ec963f70a99bb22a454b8839d70f6',
  'b351049e-8dcd-4dd1-8f7b-f029d3dcbe21_rw_1920.jpg?h=ed13f71118f93122976ab99085076a6a',
  '2aaaa8b2-10b3-4d97-a6ad-1c13fc013c02_rw_3840.jpg?h=a653658d08af3e47a6bbd97599617c3e',
  '87a84fdc-e0f6-4ead-90e6-30c7ba16114d_rw_3840.jpg?h=429719bd1527d816381349bcf277e36b',
  'abb33da6-bea1-4d3f-97b6-71fead7e6596_rw_3840.jpg?h=5ecf4847253bc844fc9c4dad22c786f0',
  'a6dae923-085b-44d5-a13e-399d9e56019f_rw_3840.jpg?h=23c975cebf5dca5b018c99c303bc3479',
  'ad0294eb-81a8-489d-be71-ea60823d354d_rw_3840.jpg?h=b753ee2185d8aa3b94d091e9e1768c64',
  'c2d13993-1f3d-4413-a519-5b974255b7af_rw_3840.jpg?h=acdcd41894db72131fa4f79dabe9c170',
  '394a517a-2e66-4e0e-a12b-6412990ec52a_rw_3840.jpg?h=cca3768c99e030797bf1e2f8f4f4ccfd',
  '7a3ad9e2-f19e-4c20-8585-1d026cce04c6_rw_3840.jpg?h=a473a5c51de6b46535ca9b19a5974594',
  '9f13c49d-1a0e-48ee-a067-44b2b640afa6_rw_3840.jpg?h=16269e048c636f381196b54e70bbd7f7',
  '1c809347-4d32-45d0-8bb3-155d5417d8aa_rw_3840.jpg?h=8d3da4cc3a806df9c689f5e54f8ca7fb',
  'bebb48fc-df74-49f6-9327-cb6be2536da2_rw_3840.jpg?h=84f3e92bd31eb21f51d452187187dc93',
  '3019eafb-18fe-4d5a-b950-c804119c5abb_rw_3840.jpg?h=9431bbecc1c7ea8195da902496184c03',
  '1c10d27e-895f-4874-ad45-8af96312c5cb_rw_3840.jpg?h=618e077c078ddac379aac9ade2ceaa17',
  '676c8fcb-fc39-4ffe-a0bf-7976ffb27a20_rw_3840.jpg?h=4b18356ad5f97d740a815ffc726fc173',
  'cce06a3a-adda-402b-a614-62c0855b8e14_rw_3840.jpg?h=48507717ec3e5f919290a17a5bfb12fb',
  '11dbfc9d-e692-41ff-a688-a56592a33368_rw_3840.jpg?h=e2f0e8ccd097c9b20db6d3b95bf2a6f9',
  'd3288cf7-4cb6-46aa-bf20-60515b3b686d_rw_3840.jpg?h=c8c96a845e0b6629432a49f8e0322cbb',
];

/* Original photographs from vipervisuals.ca/pics and /social-content. */
const SZA_PHOTOS = [
  'media/photography/sza-header.jpg',
  'b1b73388-b884-4f49-8a62-c1604be435cc_rw_1200.jpg?h=d894294b92706b85eb5fa2a18aa8e063',
  'aa554319-6494-4a59-88b2-e57c300705e0_rw_1200.jpg?h=5fc4c7c2a0029b771812ab73739b9d27',
  'ad1d0419-f849-4924-a2cc-57730a1e2f40_rw_1200.jpg?h=550027faab972134763082fd03aed5d5',
  '98525afd-e4db-45c6-a368-09492972c4d8_rw_1200.jpg?h=3504c10496c246a9e40eae1df8c6360a',
  'a5713aee-a26c-4d92-99d6-954abd8f4102_rw_1200.jpg?h=10a032cd03733e047398272d8162d9cc',
  '0f5e27ca-1459-4f19-995e-f03139f84859_rw_1200.jpg?h=4ba3d7573ffe809251022fe01ddcb6cb',
  '53ddc3ef-d7c0-41b0-ab1c-0b25e81ea749_rw_1200.jpg?h=9871634f527e8f0491aa8f53efa0d448',
  '5e06169b-6c79-48d0-b59a-b3805b5c23b7_rw_1200.jpg?h=9af5eb43fe9885e00325c07bcedb186c',
];
const WAX_MOTIF_PHOTOS = [
  'a909d33c-4c05-4f5b-a2e6-bc4cdc0d6ed2_rw_1200.jpg?h=35720df75f84b2ae26162785ca111aef',
  '1e798ad2-ecb9-4641-8b21-e0159619b2e5_rw_1200.jpg?h=38c5f4bd367c301b50632449daeb996f',
  '552012c3-11ae-4e56-84a9-5a365d1b52f7_rw_1200.jpg?h=fc9f315c5dd3527fedce6d877df9a3a7',
  '17a4dbf8-d1ba-4792-b867-95ab345704de_rw_1200.jpg?h=d3c4754048ed57ea69ad528745472014',
  'aeda9ea6-318f-4f2f-a0f6-e57d46b93b95_rw_1200.jpg?h=b38c8707f704374b4d0106ecc68f401b',
  '34f5740f-bd89-4a6a-a9cd-e777d0ba3a8d_rw_1200.jpg?h=ebdd5e4b69275f9cb4bc96a844b59904',
  '71f9c56b-087b-4382-8e46-479c895c5570_rw_1200.jpg?h=a11cbe39c7055159ba8b0c5e156bc594',
  '2cf90ccc-2797-4dda-82bf-008d9adb418a_rw_1200.jpg?h=5515497b9d8ce3996390f4a520ed6552',
  '8455c49b-56ee-48cf-81e8-147720d3b8e9_rw_1200.jpg?h=875be999bc4dd572bf306c93c04c89a0',
  'c94cc966-1d70-4c3a-bf35-b3a499e87ef3_rw_1200.jpg?h=85de067da204826684612b445511f37e',
  '790b9170-c7d3-42dc-a8e3-8e9019621f13_rw_1200.jpg?h=61a1b413f576eaccfa3dd50a92bc88d4',
  '6cd50610-cfe6-4bad-ad65-bbad86243ab7_rw_1200.jpg?h=0bc99c9febd1b6491f9e186fa72c7a94',
];
/* Third Party at Veld Music Festival, in the original project order. */
const THIRD_PARTY_PHOTOS = [
  'db2fcdc6fdf84cc2b7e87dfa87035f90',
  '37aa6e9d5cb04c0c81150144ca8b24b8',
  'b91b6ea94d764afcbd1c65de5bc86823',
  'ca2e70563a63434194b57dc902df38a0',
  '7fd968636fa0434cb595e2909c5c0c29',
  '151520b7448d4201b89efa20b06529ae',
  '7a2be3e8f623435298d2554e5422fff6',
].map(id => `https://d2kbe88412276p.cloudfront.net/creative-work-portfolio-project-files/360215/${id}_feed_v3_645w.webp`);
/* First three are temporary screenshot crops; the rest are supplied photos. */
const CODY_LAWLESS_PHOTOS = [
  'media/photography/cody-lawless/01.jpg',
  'media/photography/cody-lawless/02.jpg',
  'media/photography/cody-lawless/03.jpg',
  'media/photography/cody-lawless/04.jpg',
  'media/photography/cody-lawless/05.jpg',
  'media/photography/cody-lawless/06.jpg',
  'media/photography/cody-lawless/07.jpg',
];
/* Dakota photographs previously shown in Commercial. */
const DAKOTA_PHOTOS = [
  '7c18839d-a44d-4417-9a21-dda72410eb54_rw_1200.jpg?h=c4160a86c0fdeed19b50cd69d4e7daee',
  '34a337ad-2cc1-48e6-92c0-16e04ed1f464_rw_1200.jpg?h=6f46af7819c2bf2ce2bc645829d7c757',
  '941625a4-5e8d-4bd5-b8cd-5fa68ff8218e_rw_1200.jpg?h=f30ba0a8690758dfd265def9d6ec79be',
  'media/photography/dakota/01.jpg',
  'media/photography/dakota/02.jpg',
  'media/photography/dakota/03.jpg',
  'media/photography/dakota/04.jpg',
];
/* Run It Up music video behind-the-scenes photographs, in original page order. */
const RUN_IT_UP_PHOTOS = [
  'f250c653-56d3-4334-bcc7-ebc39fc17e21_rw_1920.jpg?h=95c7ded764a20f9699729bfafe7111ad',
  '49678e72-180d-4df0-aae2-abf640473e85_rw_1920.jpg?h=d9debeeafef44bd853649a56cca2c797',
  '9a750632-ab12-49bf-8c5e-c85cdb8f7e2e_rw_3840.jpg?h=6ba2d44ba9560348e1b9a696d895bd85',
  '761dd51f-a67e-4fcc-83eb-473301ba5af6_rw_1920.jpg?h=6555672e4d52bf85b801296c17484a77',
  '4918111f-a225-43c2-8dd2-c96ca85e9b5d_rw_1920.jpg?h=64064ffb3a871fb8cc53b946388a042f',
  'd2d311c5-f65a-46c6-b792-3df45fa2062f_rw_1200.jpg?h=a5c6601f8bb67d46817aa3c0d843d3b1',
  'c921f1ba-04d2-4db8-93de-6514dc755451_rw_1920.jpg?h=7f9b2a57f91728564d6aee974ae28df8',
  'bcd84f0d-d75f-4c66-8e49-5fd0b08c9a63_rw_3840.jpg?h=063120c8043acf657a57417265ecdc26',
  '30d55d98-52ba-43d3-af66-0b8baa349621_rw_1920.jpg?h=3a6954647c732a16707b374a385a0cdf',
  '91f281bc-b57d-4785-9051-e9bed689064f_rw_1920.png?h=4dcc0daec198853dab8622401fa440da',
  'e808ebe2-cf26-4d2c-b894-8ffa5cc6443a_rw_1920.jpg?h=357eb2966a37c0442ed9fe221d588957',
  'f4651b93-3aab-4d86-a777-e155a5b98b95_rw_1920.jpg?h=41d6237dc177b3f9b6c327f4bc02fdd9',
  '494de2e7-8e67-4c27-a04c-69f1c20cb250_rw_3840.jpg?h=886b40f0ff22e1c351896bc986ebca21',
  '96ed1fbd-b09f-4a1f-b835-450af8b87f9e_rw_1920.jpg?h=f30e5682d4e780997b5d1dc5da4affbe',
  '0c767ed7-f466-4985-859f-6677e05aa9b1_rw_1200.jpg?h=191d1959a40dea2d16c6a79e9d81a917',
  'a462265d-7509-4ca5-b770-533044aec8dd_rw_1920.jpg?h=63176b83c6651b9b49e98da56062d6d7',
  '8c440047-8957-4af6-973b-91dbcf08e306_rw_1200.jpg?h=ca22eaa95a509aeae9ada358c3cd7e82',
  '813a6184-9df3-45c0-9432-1900eee493e2_rw_1920.jpg?h=b5dc673147ebb6c8737807d1ba776277',
  'd3fd1a41-33c0-43b0-866b-4b6581a95257_rw_1200.jpg?h=cca2343b34a12d71888999f428558ec1',
  '48a8b610-0bda-496d-910b-ff0c86a1dcab_rw_1920.jpg?h=a595ecd47f5326fa2123f24b82a389cd',
  'c0022439-1843-4e1b-a12c-fbd3bb90bc87_rw_1920.jpg?h=1e5786aa3a415d765b44b6a7de56154b',
  'c00710fe-9341-4a49-aaf9-4f9c42bed954_rw_1200.jpg?h=5a83b712fd08bb8c873f7c1f7566f97c',
];
/* Marcolino Aniel sports photographs from the original project, in page order. */
const MARCOLINO_PHOTOS = [
  '0943fa60-09f0-4b12-88af-9af03e4eecd3_rw_1200.jpg?h=7534e6b797f517aecc5c8760c7e8bb91',
  '6f9bc303-3af2-4c75-8ad3-9190a3aebf27_rw_1200.jpg?h=564b08d3f6bd1b8478da043c25e2e552',
  'f0e91cfa-717f-48b4-be21-58085049421b_rw_1200.jpg?h=5f4b1a406706ebfbcc4bc9683fbe3adb',
  'bd7ac2f7-b0d3-4bfa-9edd-e471092095c7_rw_1920.jpg?h=f6226a3757e9e8e6507bed8021f22647',
  'd993127a-c779-4f86-8bbd-946160b6e602_rw_1920.jpg?h=9f481ef9bd4f54f1fa3095d85deaf4af',
  'cf35c326-8558-4edd-ac82-be35046ba8d7_rw_1920.jpg?h=5084deb66af0f4e9896d953a97603bb6',
  '3afbc933-2512-4d48-9c78-0a697ee48041_rw_1920.jpg?h=54cd73e5b973a59bfa4c6e391fd9209f',
  '1f8106f3-b8d1-4622-aff3-e9f65199af57_rw_1920.jpg?h=fcec059cd3fefd1a71d202d52f0bf804',
  '12845262-1972-4836-b486-579d2161fd51_rw_1920.jpg?h=a62bced8da175c31d2749633390bd073',
];
/* Our Block Clothing photographs from the original project, in page order. */
const OUR_BLOCK_PHOTOS = [
  'a5671ad6-a7f5-465a-821b-1f1d6aa5851d_rw_1920.jpg?h=1a5326fdff17e01940c1f1a506615b99',
  '11140c19-3d34-4fc5-ae46-f1a6f8606ea5_rw_1200.jpg?h=39f7dadef1d3a81620ccf809cd5de4e2',
  '00e68b48-4956-4264-9244-6bc09504899b_rw_1920.jpg?h=a7ca69deaac3a0475bac2ed1f6ee3c9d',
  '8b0143c6-8d6d-41d4-9a9a-27303235a333_rw_1200.jpg?h=fb31a95440f8bc18c2df14f8ae062a0a',
  'ceb0009a-1229-439c-9cf2-91869fc0d231_rw_1200.jpg?h=69e21257dfc99e4d579a58cab374b154',
];
/* Amaal Nuux single release press photographs. */
const AMAAL_SINGLE_RELEASE_PHOTOS = [
  '44ad4c8b-ad5c-4fe5-b5a7-69a118150242_rw_1920.jpg?h=ed93f885f0ea1225f4f84a9a00635c13',
  'ec4200cd-c5fe-470b-90f7-a98f22ccff6b_rw_1920.jpg?h=29571b2f52129c158cf808bd5e829bf8',
  '88ffd44c-59e9-4d77-820a-69c8188591af_rw_1920.jpg?h=da600528a823bccb3d86672846db671d',
];
/* Press photographs for Micky Weeks. */
const PRESS_PHOTOS = [
  '421cd922-fc35-4a7c-9998-76e42ad70cd2_rw_1200.jpg?h=9d1e81c2025e9605345fe0979138b630',
  '5c7b0cf9-c71c-403e-9533-7d3a767c971a_rw_1200.jpg?h=3bf4151fbeb1e80ab009f7e1557056ca',
  '60c64b32-2f2b-4615-aa61-2521534f87dc_rw_1200.jpg?h=01916c5d05e4d6107e7a31003046002f',
  '1b6ce5fc-e580-4999-8c5a-ed9e09da7b78_rw_1200.jpg?h=076aaf161be223653b86265b963a1609',
  '0201cf6e-dc1f-48c5-a7f1-814051b9768a_rw_1200.jpg?h=a6ea4e87d89cb8cbc1b86b823a50ae21',
  '9ea88396-6af5-4074-b9ab-2ffb29953b49_rw_1200.jpg?h=76cd88ddae7b44570d1fada0d643f342',
];
/* Artwork from the original Red Light rollout project. */
const AMAAL_ROLLOUT_IMAGES = [
  'e2d01d0d-73c9-4c37-b62c-67f4901672bb_rw_1200.jpg?h=6df47481d10310a442e93b67dfe27e46',
  '6b865877-9f6c-4667-887d-37951a92f10b_rw_1920.jpg?h=3a4aed079072938d8a55d4f66f4ac3bb',
  '783c136b-ea41-4293-a8ef-2a18170a91d0_rw_1200.jpg?h=c74ada9ade48d5e8fccd7b07ce1b9a7c',
  'e10892f9-2dff-422c-a94a-3466f801fd65_rw_1920.jpg?h=f7bc2d76300ecc24209183481c66a52e',
  'e983a916-85a5-4ea7-8911-895c69ffa6ad_rw_1920.jpg?h=cf692e840f6e0db13bb0ef408a5bf84e',
];
const PHOTO_GALLERIES = {
  'the-kid-laroi': {
    artist: 'THE KID LAROI',
    title: 'MAGNETIC FESTIVAL',
    photos: [1, 2, 3, 4, 5, 6].map(number => `media/photography/the-kid-laroi/${String(number).padStart(2, '0')}.jpg`),
  },
  'earl-sweatshirt': {
    artist: 'EARL SWEATSHIRT',
    title: 'LIVE AT HISTORY',
    photos: [1, 2, 3, 4, 5, 6, 7].map(number => `media/photography/earl-sweatshirt/${String(number).padStart(2, '0')}.jpg`),
  },
  'the-weeknd': { artist: 'THE WEEKND', title: 'AFTER HOURS TILL DAWN TOUR', photos: WEEKND_PHOTOS },
  'run-it-up': { artist: 'RUN IT UP', title: "MUSIC VIDEO BTS FOR FRENCH MONTANA FENIX FLEXIN' & MAX B", photos: RUN_IT_UP_PHOTOS },
  sza: { artist: 'SZA', title: 'SOS TOUR', photos: SZA_PHOTOS },
  'wax-motif': { artist: 'WAX MOTIF / LOUD LUXURY', title: 'VELD MUSIC FESTIVAL', photos: WAX_MOTIF_PHOTOS },
  'third-party': { artist: 'THIRD PARTY', title: 'VELD MUSIC FESTIVAL', photos: THIRD_PARTY_PHOTOS },
  'amaal-single-release-press': { artist: 'AMAAL NUUX', title: 'SINGLE RELEASE PRESS', photos: AMAAL_SINGLE_RELEASE_PHOTOS },
  nikkaela: { artist: 'OUR BLOCK CLOTHING', title: 'LOOKBOOK', photos: OUR_BLOCK_PHOTOS },
  kays: { artist: 'MARCOLINO ANIEL', title: 'SPORTS SPEC', photos: MARCOLINO_PHOTOS },
  dakota: { artist: 'DAKOTA', title: '', photos: DAKOTA_PHOTOS },
  'cody-lawless': { artist: 'CODY LAWLESS', title: 'PRESS IMAGES, MUSIC VIDEO BTS', photos: CODY_LAWLESS_PHOTOS },
  'micky-press': { artist: 'MICKY WEEKES', title: 'PRESS', photos: PRESS_PHOTOS },
  'amaal-red-light-rollout': { artist: 'AMAAL', title: 'RED LIGHT ROLLOUT', photos: AMAAL_ROLLOUT_IMAGES },
};

/* PHOTOGRAPHY CATEGORIES (3 category tiles on #/photo) */
const PHOTOGRAPHY_CATEGORIES = [
  {
    slug: 'photo-performance',
    label: 'COVERAGE',
    rows: ['CONCERTS', 'EVENTS', 'BEHIND THE SCENES'],
    separator: ' . ',
    poster: `${CDN}2aaaa8b2-10b3-4d97-a6ad-1c13fc013c02_rw_3840.jpg?h=a653658d08af3e47a6bbd97599617c3e`,
  },
  {
    slug: 'photo-editorial',
    label: 'CREATIVE',
    rows: ['PRESS SHOOTS', 'ALBUM COVERS', 'CONCEPTUAL'],
    separator: ' . ',
    poster: `${CDN}44ad4c8b-ad5c-4fe5-b5a7-69a118150242_rw_1920.jpg?h=ed93f885f0ea1225f4f84a9a00635c13`,
  },
  {
    slug: 'photo-commercial',
    label: 'COMMERCIAL',
    rows: ['BRANDS', 'PRODUCT', 'CORPORATE'],
    separator: ' . ',
    poster: CDN + OUR_BLOCK_PHOTOS[0],
  },
];

/* DESIGN CATEGORIES — artwork from the existing Viper Visuals design page. */
const DESIGN_CATEGORIES = [
  {
    slug: 'brand-identity',
    label: 'BRAND IDENTITY',
    poster: `${CDN}b6b20203-a625-4d43-b919-d3b11c50da83_rw_1920.jpg?h=2e42c3aa8d475a5ec72bd8544a825964`,
  },
  {
    slug: 'merchandise',
    label: 'MERCHANDISE',
    poster: `${CDN}571da5f2-b58e-45b6-a534-6ddd43434285_rw_1920.jpg?h=be4ab4c22f4956bb992b1a386523c1dd`,
  },
  {
    slug: 'album-vinyl-artwork',
    label: 'ALBUM & VINYL ARTWORK',
    lines: ['ALBUM & VINYL', 'ARTWORK'],
    poster: `${CDN}77bdf339-7cfa-4d4c-bf39-3b2779031516_rw_1920.jpg?h=73864d3dd53551f6b1b6efc32bbef86d`,
  },
];

/* PHOTOGRAPHY PROJECTS — individual photos within each category */
const PHOTO_PROJECTS = {
  'photo-performance': [
    {
      slug: 'the-weeknd',
      artist: 'THE WEEKND',
      title: 'AFTER HOURS TILL DAWN TOUR',
      poster: 'media/photography/the-weeknd-placeholder.jpg',
    },
    {
      slug: 'run-it-up',
      artist: 'RUN IT UP',
      title: "MUSIC VIDEO BTS FOR FRENCH MONTANA FENIX FLEXIN' & MAX B",
      poster: CDN + RUN_IT_UP_PHOTOS[0],
    },
    {
      slug: 'sza',
      artist: 'SZA',
      title: 'SOS TOUR',
      poster: SZA_PHOTOS[0],
    },
    {
      slug: 'wax-motif',
      artist: 'WAX MOTIF / LOUD LUXURY',
      title: 'VELD MUSIC FESTIVAL',
      poster: `${CDN}6cd50610-cfe6-4bad-ad65-bbad86243ab7_rw_1200.jpg?h=0bc99c9febd1b6491f9e186fa72c7a94`,
    },
    {
      slug: 'third-party',
      artist: 'THIRD PARTY',
      title: 'VELD MUSIC FESTIVAL',
      poster: THIRD_PARTY_PHOTOS[0],
    },
    {
      slug: 'the-kid-laroi',
      artist: 'THE KID LAROI',
      title: 'MAGNETIC FESTIVAL',
      poster: 'media/photography/the-kid-laroi/01.jpg',
    },
    {
      slug: 'earl-sweatshirt',
      artist: 'EARL SWEATSHIRT',
      title: 'LIVE AT HISTORY',
      poster: 'media/photography/earl-sweatshirt/01.jpg',
    },
  ],
  'photo-editorial': [
    {
      slug: 'amaal-single-release-press',
      artist: 'AMAAL NUUX',
      title: 'SINGLE RELEASE PRESS',
      poster: CDN + AMAAL_SINGLE_RELEASE_PHOTOS[0],
    },
    {
      slug: 'micky-press',
      artist: 'MICKY WEEKES',
      title: 'PRESS',
      poster: CDN + PRESS_PHOTOS[0],
    },
    {
      slug: 'dakota',
      artist: 'DAKOTA',
      title: '',
      poster: CDN + DAKOTA_PHOTOS[0],
    },
    {
      slug: 'cody-lawless',
      artist: 'CODY LAWLESS',
      title: 'PRESS IMAGES, MUSIC VIDEO BTS',
      poster: CODY_LAWLESS_PHOTOS[0],
    },
    {
      slug: 'amaal-red-light-rollout',
      artist: 'AMAAL',
      title: 'RED LIGHT ROLLOUT',
      poster: CDN + AMAAL_ROLLOUT_IMAGES[1],
    },
  ],
  'photo-commercial': [
    {
      slug: 'nikkaela',
      artist: 'OUR BLOCK CLOTHING',
      title: 'LOOKBOOK',
      poster: CDN + OUR_BLOCK_PHOTOS[0],
    },
    {
      slug: 'kays',
      artist: 'MARCOLINO ANIEL',
      title: 'SPORTS SPEC',
      poster: CDN + MARCOLINO_PHOTOS[0],
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

let cleanupScrollIndicator = () => {};

function mount(fragment) {
  cleanupScrollIndicator();
  outlet.innerHTML = '';
  outlet.appendChild(document.importNode(fragment, true));
  setupHorizontalScrollIndicator();
  requestAnimationFrame(() => {
    const el = outlet.firstElementChild;
    if (el) el.classList.add('loaded');
  });
}

function setupHorizontalScrollIndicator() {
  const grid = outlet.querySelector('.category-grid');
  if (!grid) {
    cleanupScrollIndicator = () => {};
    return;
  }

  const indicator = document.createElement('div');
  indicator.className = 'scroll-indicator';
  indicator.hidden = true;
  indicator.innerHTML = `
    <div class="scroll-indicator-track">
      <span class="scroll-indicator-fill" aria-hidden="true"></span>
      <input class="scroll-indicator-range" type="range" min="0" max="1000" value="0" aria-label="Gallery scroll position">
    </div>
    <button class="scroll-indicator-next" type="button" aria-label="Scroll gallery to the right">SCROLL TO EXPLORE <span aria-hidden="true">→</span></button>
  `;
  grid.parentElement.appendChild(indicator);
  const range = indicator.querySelector('.scroll-indicator-range');
  const fill = indicator.querySelector('.scroll-indicator-fill');
  const next = indicator.querySelector('.scroll-indicator-next');

  function update() {
    const maxScroll = Math.max(0, grid.scrollWidth - grid.clientWidth);
    indicator.hidden = maxScroll <= 2;
    const progress = maxScroll > 0 ? Math.max(0, Math.min(1, grid.scrollLeft / maxScroll)) : 0;
    range.value = Math.round(progress * 1000);
    range.setAttribute('aria-valuetext', `${Math.round(progress * 100)}%`);
    fill.style.width = `${25 + progress * 75}%`;
    next.disabled = maxScroll <= 2 || progress >= 0.999;
  }

  function onRangeInput() {
    grid.scrollLeft = (grid.scrollWidth - grid.clientWidth) * Number(range.value) / 1000;
    update();
  }
  function onNextClick() {
    const tile = grid.querySelector('.category-tile');
    const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
    const amount = tile ? tile.getBoundingClientRect().width + gap : grid.clientWidth * 0.8;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    grid.scrollBy({ left: amount, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  grid.addEventListener('scroll', update, { passive: true });
  range.addEventListener('input', onRangeInput);
  next.addEventListener('click', onNextClick);
  window.addEventListener('resize', update);
  const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(update) : null;
  if (observer) observer.observe(grid);
  update();
  cleanupScrollIndicator = () => {
    grid.removeEventListener('scroll', update);
    range.removeEventListener('input', onRangeInput);
    next.removeEventListener('click', onNextClick);
    window.removeEventListener('resize', update);
    if (observer) observer.disconnect();
    cleanupScrollIndicator = () => {};
  };
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
// Use explicit parents so Back works even when a page is opened directly.
function getBackTarget() {
  const path = (location.hash || '#/').split('?')[0];
  if (path.startsWith('#/photo/')) return { href: '#/photo', label: 'Photography' };
  if (path.startsWith('#/video/')) return { href: '#/video', label: 'Video production' };
  if (path.startsWith('#/design/')) return { href: '#/design', label: 'Design' };

  const projectMatch = path.match(/^#\/project\/([^/]+)$/);
  if (projectMatch) {
    const slug = decodeURIComponent(projectMatch[1]);
    const video = MUSIC_VIDEOS.find(item => item.slug === slug);
    if (video) {
      const category = VIDEO_CATEGORIES.find(item => item.slug === video.category);
      return { href: `#/video/${video.category}`, label: category ? category.label : 'Video production' };
    }
    const photoCategory = Object.entries(PHOTO_PROJECTS).find(([, items]) => items.some(item => item.slug === slug));
    if (photoCategory) {
      const category = PHOTOGRAPHY_CATEGORIES.find(item => item.slug === photoCategory[0]);
      return { href: `#/photo/${photoCategory[0]}`, label: category ? category.label : 'Photography' };
    }
    if (SOCIAL_CONTENT.some(item => item.slug === slug)) return { href: '#/social', label: 'Social content' };
    if (RECAPS.some(item => item.slug === slug)) return { href: '#/recaps', label: 'Recaps' };
  }
  return { href: '#/', label: 'Home' };
}

function renderFooter() {
  const back = getBackTarget();
  const igIcon = `<img class="footer-image-icon" src="assets/img/social/instagram-win98.png" alt="">`;
  const mailIcon = `<img class="footer-image-icon" src="assets/img/social/email-win98.png" alt="">`;
  return `
    <footer class="site-footer">
      <a class="footer-back" href="${escapeHtml(back.href)}" aria-label="Back to ${escapeHtml(back.label)}"><span aria-hidden="true">←</span> BACK</a>
      <div class="footer-social">
        <a href="https://www.instagram.com/thevipervisuals" target="_blank" rel="noopener" class="footer-link footer-image-link" aria-label="Instagram">${igIcon}</a>
        <a href="mailto:hello@vipervisuals.ca" target="_blank" rel="noopener" class="footer-link footer-image-link" aria-label="Email">${mailIcon}</a>
      </div>
    </footer>
  `;
}

// Landing-page cards share one layout; project galleries keep their existing tiles.
function renderLandingTile(category, route) {
  const title = escapeHtml(category.label);
  const labels = category.rows;
  const description = escapeHtml(labels.join(category.separator || ' · '));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const poster = reducedMotion && category.stillPoster ? category.stillPoster : category.poster;
  const media = renderPreviewMedia(category.preview, poster, category.label, 'category-tile-media');
  return `
    <a href="#/${route}/${escapeHtml(category.slug)}" class="category-tile landing-tile" aria-label="${title}: ${description}">
      <div class="tile-media-box">
        ${media}
        <div class="tile-rest-fade" aria-hidden="true"></div>
        <div class="tile-rest-lockup" aria-hidden="true">
          <span class="tile-rest-title">${title}</span>
          <span class="tile-rest-cats">${description}</span>
        </div>

      </div>
    </a>`;
}

/* ------------------------------------------------------------------ */
/* STEP 1: Music Videos category page                                 */
/* ------------------------------------------------------------------ */
function renderMusicVideos() {
  document.body.className = '';
  setActiveNav('#/video');

  const tilesHtml = VIDEO_CATEGORIES.map((c) => renderLandingTile(c, 'video')).join('');

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

  const tilesHtml = PHOTOGRAPHY_CATEGORIES.map((c) => renderLandingTile(c, 'photo')).join('');

  const frag = tpl(`
    <section class="photo-category">
      <div class="category-grid">${tilesHtml}</div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);
}

function renderDesignCategories() {
  document.body.className = '';
  setActiveNav('#/design');
  const tiles = DESIGN_CATEGORIES.map(category => {
    const title = escapeHtml(category.label);
    const lines = (category.lines || [category.label]).map(escapeHtml).join('<br>');
    return `
      <a href="#/design/${escapeHtml(category.slug)}" class="category-tile design-tile" aria-label="${title}">
        <img class="category-tile-media" src="${escapeHtml(category.poster)}" alt="">
        <div class="tile-rest-fade" aria-hidden="true"></div>
        <div class="tile-rest-lockup"><span class="tile-rest-title">${lines}</span></div>
      </a>`;
  }).join('');
  mount(tpl(`
    <section class="design-category">
      <div class="category-grid">${tiles}</div>
      ${renderFooter()}
    </section>
  `));
}

function renderDesignSubcategory(slug) {
  const category = DESIGN_CATEGORIES.find(item => item.slug === slug);
  if (!category) { renderNotFound(); return; }
  document.body.className = '';
  setActiveNav('#/design');
  mount(tpl(`
    <section class="design-category">
      <div class="design-empty">
        <h1>${escapeHtml(category.label)}</h1>
        <p>PROJECTS NOT YET ADDED</p>
      </div>
      ${renderFooter()}
    </section>
  `));
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

function renderPhotoGallery(gallery) {
  document.body.className = '';
  setActiveNav('#/photo');
  const images = gallery.photos.map((path, index) => `
    <div class="category-tile photo-gallery-tile">
      <img class="category-tile-media" src="${escapeHtml(path.startsWith('media/') || path.startsWith('https://') ? path : CDN + path)}"
        alt="${escapeHtml(gallery.artist)}${gallery.title ? `, ${escapeHtml(gallery.title)}` : ''} — photograph ${index + 1}"
        ${index < 3 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
    </div>
  `).join('');
  mount(tpl(`
    <section class="photo-category">
      <div class="category-grid" role="region" aria-label="${escapeHtml(gallery.artist)} photo gallery" tabindex="0">${images}</div>
      ${renderFooter()}
    </section>
  `));
}

function renderProject(slug) {
  if (Object.hasOwn(PHOTO_GALLERIES, slug)) {
    renderPhotoGallery(PHOTO_GALLERIES[slug]);
    return;
  }
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
      <button class="project-play-btn" data-provider="${provider}" data-video-id="${escapeHtml(videoId)}" data-start-at="${videoProject.startAt ?? 3}" aria-label="Play video">
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
    <section class="project-page${isVideo ? ' video-project-page' : ''}">
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
      const startAt = Number(playBtn.dataset.startAt);
      let embedUrl = '';
      if (provider === 'youtube') {
        embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&start=${startAt}`;
      } else if (provider === 'vimeo') {
        embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1#t=${startAt}s`;
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
      <div class="category-grid about-layout" role="region" aria-label="About Viper Visuals" tabindex="0">
        <div class="about-left category-tile">
          ${renderPreviewMedia('media/about/about-me.mp4', 'media/about/about-me-poster.jpg', 'Photographer holding a camera', 'about-video')}
        </div>
        <div class="about-right">
          <div class="about-text">
            <p class="about-lead">Toronto-based creative director, videographer and photographer creating bold music videos, social content and visual design for artists and brands worldwide.</p>
            <p>We create bold, captivating visuals that amplify the voices of music artists and brands, connecting them to their audience through unforgettable content.</p>
          </div>
          <section class="about-services" aria-labelledby="services-heading">
            <h2 id="services-heading">SERVICES</h2>
            <ul>
              <li>VIDEO PRODUCTION</li>
              <li>PHOTOGRAPHY</li>
              <li>BRAND IDENTITY</li>
              <li>MERCHANDISE</li>
              <li>ALBUM &amp; VINYL ARTWORK</li>
              <li>MIXED MEDIA</li>
              <li>WEB DESIGN</li>
              <li>MOTION GRAPHICS</li>
              <li>AI &amp; VR</li>
              <li>CONSULTING</li>
            </ul>
          </section>
        </div>
      </div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);
}

function renderPhotoSubcategory(categorySlug) {
  document.body.className = '';
  setActiveNav('#/photo');

  const items = PHOTO_PROJECTS[categorySlug];

  const tilesHtml = items.map(
    (m) => `
    <a href="#/project/${escapeHtml(m.slug)}" class="category-tile photo-project-tile" aria-label="${escapeHtml(m.artist)}${m.title ? `: ${escapeHtml(m.title)}` : ''}">
      <img class="category-tile-media" src="${escapeHtml(m.poster)}" alt="">
      <div class="tile-rest-fade" aria-hidden="true"></div>
      <div class="tile-rest-lockup" aria-hidden="true">
        <span class="tile-rest-title">${escapeHtml(m.artist)}</span>
        ${m.title ? `<span class="tile-rest-cats">${escapeHtml(m.title)}</span>` : ''}
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

  const items = MUSIC_VIDEOS.filter((m) => m.category === categorySlug);
  const tilesHtml = items.map((m) => {
    const songFirst = categorySlug === 'video-cinematic' && m.title;
    const primary = songFirst ? m.title : m.artist;
    const secondary = songFirst ? m.artist : m.title;
    return `
    <a href="#/project/${escapeHtml(m.slug)}" class="category-tile video-project-tile" aria-label="${escapeHtml(primary)}${secondary ? `: ${escapeHtml(secondary)}` : ''}">
      ${renderPreviewMedia(m.preview, m.poster, m.title || m.artist, 'category-tile-media')}
      <div class="tile-rest-fade" aria-hidden="true"></div>
      <div class="tile-rest-lockup" aria-hidden="true">
        <span class="tile-rest-title">${escapeHtml(primary)}</span>
        ${secondary ? `<span class="tile-rest-cats">${escapeHtml(secondary)}</span>` : ''}
      </div>
    </a>
  `;
  }).join('');

  const frag = tpl(`
    <section class="video-category${categorySlug === 'video-cinematic' ? ' cinematic-category' : ''}">
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
      <div class="category-grid contact-content" role="region" aria-label="Contact Viper Visuals" tabindex="0">
        <div class="contact-copy category-tile">
          <div class="contact-intro">
            <p>Based in Toronto, available worldwide</p>
            <h1 aria-label="Good work starts with a conversation">
              <svg class="contact-headline" viewBox="0 0 1000 710" preserveAspectRatio="none" aria-hidden="true">
                <text x="-5" y="225" text-anchor="start" textLength="1005" lengthAdjust="spacingAndGlyphs">GOOD WORK</text>
                <text x="-5" y="460" text-anchor="start" textLength="1005" lengthAdjust="spacingAndGlyphs">STARTS WITH A</text>
                <text x="-5" y="695" text-anchor="start" textLength="1005" lengthAdjust="spacingAndGlyphs">CONVERSATION</text>
              </svg>
            </h1>
          </div>
        </div>
        <form class="contact-form" id="contact-form">
          <div class="contact-fields">
            <div class="contact-field">
              <label for="form-name">NAME <span aria-hidden="true">*</span></label>
              <input type="text" id="form-name" name="name" autocomplete="name" placeholder="Your name" required>
            </div>
            <div class="contact-field">
              <label for="form-email">EMAIL <span aria-hidden="true">*</span></label>
              <input type="email" id="form-email" name="email" autocomplete="email" placeholder="Your email" required>
            </div>
            <div class="contact-field contact-field-wide contact-field-select">
              <label for="form-project">PROJECT TYPE <span aria-hidden="true">*</span></label>
              <select id="form-project" name="project" required>
                <option value="" selected disabled>CHOOSE A PROJECT</option>
                <option value="Video production">VIDEO PRODUCTION</option>
                <option value="Photography">PHOTOGRAPHY</option>
                <option value="Brand identity">BRAND IDENTITY</option>
                <option value="Merchandise">MERCHANDISE</option>
                <option value="Album &amp; vinyl artwork">ALBUM &amp; VINYL ARTWORK</option>
                <option value="Mixed media">MIXED MEDIA</option>
                <option value="Web design">WEB DESIGN</option>
                <option value="Motion graphics">MOTION GRAPHICS</option>
                <option value="AI &amp; VR">AI &amp; VR</option>
                <option value="Consulting">CONSULTING</option>
                <option value="Other / multiple services">OTHER / MULTIPLE SERVICES</option>
              </select>
            </div>
            <div class="contact-field">
              <label for="form-timeline">TIMELINE <span aria-hidden="true">*</span></label>
              <input type="text" id="form-timeline" name="timeline" placeholder="e.g. June" required>
            </div>
            <div class="contact-field">
              <label for="form-budget">BUDGET <span class="contact-optional">(OPTIONAL)</span></label>
              <input type="text" id="form-budget" name="budget" placeholder="Your budget">
            </div>
            <div class="contact-field contact-field-wide contact-message">
              <label for="form-message">PROJECT DETAILS <span aria-hidden="true">*</span></label>
              <textarea id="form-message" name="message" placeholder="Tell us about your project." required></textarea>
            </div>
          </div>
          <div class="contact-actions">
            <button type="submit">PREPARE ENQUIRY <span aria-hidden="true">↗</span></button>
            <p class="contact-note" id="form-status" role="status">OPENS YOUR EMAIL APP TO SEND.</p>
          </div>
        </form>
      </div>
      ${renderFooter()}
    </section>
  `);
  mount(frag);

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = new FormData(form);
    const project = fields.get('project');
    const subject = `Project enquiry: ${project}`;
    const body = [
      `Name: ${fields.get('name')}`,
      `Email: ${fields.get('email')}`,
      `Project type: ${project}`,
      `Timeline: ${fields.get('timeline')}`,
      `Budget: ${fields.get('budget') || 'Not specified'}`,
      '',
      'Project details:',
      fields.get('message'),
    ].join('\n');
    document.getElementById('form-status').textContent = 'YOUR EMAIL APP SHOULD OPEN. PLEASE SEND YOUR ENQUIRY THERE.';
    window.location.href = `mailto:hello@vipervisuals.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function renderNotFound() {
  document.body.className = '';
  const frag = tpl(`
    <section class="section">
      <div style="padding-top: calc(100 * var(--u)); text-align: center;">
        <div style="font-family:var(--font-azeret);font-size:calc(14 * var(--u));letter-spacing:-0.4px;">Page not found</div>
        <a href="#/">Return to home</a>
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
  } else if (path === '#/design') {
    renderDesignCategories();
  } else if (path.startsWith('#/design/')) {
    renderDesignSubcategory(path.slice('#/design/'.length));
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

// Refresh only the landing cards if the system motion preference changes.
const landingMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const refreshLandingMotion = () => {
  const path = (location.hash || '#/').split('?')[0];
  if (path === '#/video' || path === '#/photo') router();
};
if (landingMotionPreference.addEventListener) {
  landingMotionPreference.addEventListener('change', refreshLandingMotion);
} else if (landingMotionPreference.addListener) {
  landingMotionPreference.addListener(refreshLandingMotion);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
