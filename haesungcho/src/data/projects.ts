// ─────────────────────────────────────────────────────────────
// 프로젝트 상세 페이지 콘텐츠
//
// 이미지 경로 규칙: public/images/projects/<slug>/<번호>.jpg
//   - hero.jpg  : 상단 대표 이미지 (없으면 Works 썸네일을 대신 사용)
//   - 01.jpg, 02.jpg … : 아래 블록에 나오는 순서대로 번호가 매겨짐
// 파일이 아직 없으면 화면에 회색 자리표시와 파일 이름이 보입니다.
// 비율(ratio)은 자리표시와 나란히 놓인 이미지 높이 맞춤에 쓰입니다.
//
// 블록 종류
//   full  : 한 장 (wide = 화면 끝까지, inset = 좌우 여백, narrow = 가운데 좁게)
//   row   : 여러 장을 높이 맞춰 가로로
//   grid  : 같은 크기로 n열 격자
//   text  : 제목 + 본문 (+ 옆에 이미지)
//   video : 영상 (public/videos/<slug>/<번호>.mp4)
// ─────────────────────────────────────────────────────────────

export type Img = { src: string; ratio: number; alt?: string };
export type Body = string | { h: string };
export type Block =
  | { t: 'full'; img: Img; width?: 'wide' | 'inset' | 'narrow'; bg?: string; fit?: { w: number; align: 'left' | 'right' | 'center' } }
  | { t: 'row'; imgs: Img[]; bg?: string; inset?: boolean }
  | { t: 'grid'; imgs: Img[]; cols: number; bg?: string; inset?: boolean }
  | { t: 'text'; variant?: 'aside'; heading?: string; body: Body[]; img?: Img; video?: { src: string; poster?: string; ratio: number }; imgSide?: 'left' | 'right'; bg?: string; ink?: 'light' }
  | { t: 'pairs'; items: { h: string; body: string }[]; bg?: string; ink?: 'light' }
  | { t: 'split'; left: Img[]; right: Img[]; bg?: string }
  | { t: 'youtube'; ids: string[]; ratio: number; bg?: string; inset?: boolean }
  | { t: 'video'; src: string; poster?: string; ratio: number; bg?: string; width?: 'wide' | 'narrow' };

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string; // 정보 줄의 한 줄 설명 (줄바꿈은 \n)
  year: number;
  intro: Body[]; // **굵게** 표기 가능
  hero: Img;
  heroVideo?: { src: string; poster?: string }; // 대표 이미지 자리에 넣을 영상 (자동 재생)
  heroYoutube?: string; // 대표 이미지 자리에 정사각형으로 잘라 넣을 유튜브 영상 ID
  more?: { label?: string; href: string };
  blocks: Block[];
};

const DARK = '#000';

// 프로젝트별 이미지 번호를 순서대로 매겨주는 도우미
function pics(slug: string) {
  let n = 0;
  const img = (ratio: number, alt = ''): Img => ({ src: `/images/projects/${slug}/${String(++n).padStart(2, '0')}.jpg`, ratio, alt });
  const many = (count: number, ratio: number) => Array.from({ length: count }, () => img(ratio));
  const hero = (ratio: number, alt = ''): Img => ({ src: `/images/projects/${slug}/hero.jpg`, ratio, alt });
  const at = (num: number, ratio: number, alt = '', ext = 'jpg'): Img => ({ src: `/images/projects/${slug}/${String(num).padStart(2, '0')}.${ext}`, ratio, alt });
  const video = (ratio: number) => ({ src: `/videos/${slug}/${String(++n).padStart(2, '0')}.mp4`, ratio });
  return { img, many, hero, video, at };
}

const TODO = '— 본문 추가 예정 —';

// ── Hankyul ───────────────────────────────────────────────
const hk = pics('hankyul');
const hankyul: Project = {
  slug: 'hankyul',
  title: 'Hankyul',
  category: 'Branding',
  description: 'Premium Car Wash and Exhibition\nBrand Space Experience Design',
  year: 2023,
  intro: [
    'HANKYUL is a premium car wash brand designed to offer a seamless, automated car wash experience, featuring minimalist visual interactions that focus on efficiency and ease of use. With a commitment to delivering fast and intuitive service, HANKYUL combines advanced technology with user-friendly design. In addition to offering touchless car wash services, the brand incorporates a variety of high-tech features that enhance the overall experience, providing customers with a sophisticated and innovative solution for car care.',
    "This project was developed as part of an academic-industrial collaboration with Hankook Tires, blending academic research with practical application to create a forward-thinking service. The collaboration aimed to push the boundaries of traditional car wash services by integrating cutting-edge technology and design. Additionally, HANKYUL was awarded a prize in the company's internal competition.",
  ],
  hero: hk.hero(1.408, 'HANKYUL kiosk display'),
  more: { href: 'https://www.behance.net/gallery/200299293/HANKYUL-Autominimal-Car-Wash' },
  blocks: [
    { t: 'row', imgs: [hk.img(1.552, 'Welcome wall'), hk.img(1.049, 'After care signage')] },
    {
      t: 'text',
      heading: 'Seamless Art Direction: Space, Product CMF, and Facade Design',
      body: ['Comprehensive art direction was applied to every aspect, from space and product CMF (Color, Material, Finish) to the shapes of the facade, ensuring a unified and cohesive visual experience throughout.'],
      img: hk.img(1.279, 'Facade at night'),
    },
    { t: 'full', img: hk.img(2.348, 'HANKYUL custom typeface specimen'), bg: DARK },
    {
      t: 'text',
      heading: 'Car Wash-Inspired Custom Font & Visual Toolkit',
      body: ['The graphic motifs were inspired by the car wash process, seamlessly integrated into the custom font and visual base toolkit. These elements were carefully crafted to reflect the dynamic flow and precision of the car wash experience.'],
      img: hk.img(0.84, 'Logotype, symbol and typography system'),
      imgSide: 'left',
    },
    { t: 'full', img: hk.img(1.765, 'Graphic applications'), bg: DARK },
    {
      t: 'text',
      heading: 'Consistent Graphic Application',
      body: ['The graphic elements were consistently applied across print materials, social media platforms, app design, and merchandise, ensuring a cohesive brand experience across all touchpoints.'],
      img: hk.img(1.534, 'Kiosk in a subway station'),
    },
    { t: 'row', imgs: [hk.img(1.779, 'Social media posts'), hk.img(1.025, 'App screens')], bg: DARK },
  ],
};

// ── Grandiflora ───────────────────────────────────────────
const gf = pics('grandiflora');
const CORAL = '#ea6762';
const grandiflora: Project = {
  slug: 'grandiflora',
  title: 'Grandiflora',
  category: 'Type',
  description: 'Korean and Latin typeface Set\nInspired by Art Nouveau Style',
  year: 2023,
  intro: [
    'Grandiflora, or in its original language, Neungsohwa is a decorative Hangeul typeface inspired by the Art Nouveau style of the 20th century. It is presented exclusively in hairline weight to highlight the elegant curves and ornamental characteristics of Hangeul. As Art Nouveau is commonly represented by vines and florals, the typeface was named after the most beloved summer vines of Korea, Campsis grandiflora (Neungsohwa).',
    '**-Available on Google Fonts\n-Type Specimen sold in 4 independent bookstores in Seoul, South Korea\n-2022 Seoul Artbook Fair Unlimited Edition 14\n-2023 TDC 69 Winner Typographic Excellence**',
    'In collaboration with JAMO Type Collective',
  ],
  hero: gf.hero(1.197, 'Grandiflora Love Poem books'),
  more: { label: 'DOWNLOAD', href: 'https://fonts.google.com/specimen/Grandiflora+One' },
  blocks: [
    { t: 'full', img: gf.at(1, 1.77, 'Ornaments rendered in 3D') },
    { t: 'full', img: gf.at(2, 0.256, 'Web specimen') },
    { t: 'full', img: gf.at(3, 1, 'Grandiflora poster') },
    {
      t: 'pairs',
      items: [
        { h: 'Hangeul & Latin Bilingual Typeface', body: 'A comprehensive typeface featuring a full set of Hangeul and Latin characters, designed to ensure consistency and versatility across multilingual projects.' },
        { h: '72 Ornaments & Alternative Set of Glyphs', body: 'Includes 72 ornamental glyphs and alternate swash sets, adding decorative flair and expressive flexibility to typographic compositions.' },
      ],
      bg: CORAL,
      ink: 'light',
    },
    { t: 'full', img: gf.at(4, 1.77, 'jamo.works cards and folded book') },
    { t: 'full', img: gf.at(5, 1.717, 'je ne veux pas travailler') },
    { t: 'row', imgs: [gf.at(6, 1, '사랑 jamo.works'), gf.at(7, 1, '능소화 Grandiflora')] },
    { t: 'row', imgs: [gf.at(8, 1, 'Love poem book on display'), gf.at(9, 1, 'Love poem books')] },
    { t: 'full', img: gf.at(10, 1.475, 'Love poem book spread') },
    { t: 'full', img: gf.at(11, 1.463, 'jamo.works web typewriter') },
    {
      t: 'pairs',
      items: [
        { h: 'Type Specimen Book & Exhibition Merchandise', body: 'The typeface was promoted through a specially designed type specimen book and exhibition merchandise, featured in bookstores, book fairs, and exhibitions in Korea, expanding its reach and visibility within the design community.' },
      ],
    },
    { t: 'full', img: gf.at(12, 1.414, '능소화 Grandiflora 인쇄가의 꽃') },
    { t: 'full', img: gf.at(13, 1.414, 'Korean description') },
    { t: 'full', img: gf.at(14, 1.414, 'English description') },
    { t: 'full', img: gf.at(15, 1.414, 'Sonnet 18') },
    { t: 'full', img: gf.at(16, 1.022, 'Glyph and ornament set') },
    { t: 'full', img: gf.at(17, 1.463, 'Exhibition view') },
    { t: 'row', imgs: [gf.at(18, 1, 'TDC Certificate of Typographic Excellence'), gf.at(19, 1, 'Grandiflora 꽃')] },
  ],
};

// ── Hotel Chaehwa ─────────────────────────────────────────
const hc = pics('hotel-chaehwa');
const chaehwa: Project = {
  slug: 'hotel-chaehwa',
  title: 'Hotel Chaehwa',
  category: 'Branding',
  description: 'Interactive Virtual Showroom\nfor Korean Cultural Heritage',
  year: 2021,
  intro: [
    'Hotel Chaehwa is an innovative interactive brand showroom designed to inspire social awareness of Chaehwa, a cherished national cultural heritage, through an immersive virtual hotel experience. By seamlessly blending modern digital environments with traditional cultural values, Hotel Chaehwa serves as a platform that encourages the recognition and preservation of cultural heritage in a contemporary context.',
    "Aimed specifically at the Zalpha generation, who are well-versed in online spaces, Hotel Chaehwa fosters engagement through a new “play culture.” The platform creates an intuitive, interactive experience that sparks curiosity and encourages younger audiences to take an active interest in the cultural heritage around them. By transforming cultural education into an engaging digital experience, Hotel Chaehwa offers an innovative way for the younger generation to connect with and appreciate Korea's rich cultural legacy.",
  ],
  hero: hc.hero(1.413, 'Royal banquet hall'),
  more: { href: 'https://www.behance.net/gallery/120752411/-Hotel-Chaehwa' },
  blocks: [
    { t: 'full', img: hc.at(1, 1.216, 'VR showroom interface: Junhwa'), width: 'inset' },
    {
      t: 'text',
      heading: 'A Hotel-Concept Showroom Reinterpreting Royal Korean Heritage',
      body: ["Hotel Chaehwa is an immersive hotel-concept showroom that reimagines the experience of royal Korean heritage through a modern lens. This innovative space blends traditional elements of Korean royalty with contemporary design, creating an interactive experience that invites visitors to explore the grandeur and cultural significance of Korea's royal history."],
      img: hc.at(2, 1.345, 'Classy Bedroom Suite and keycard'),
    },
    { t: 'full', img: hc.at(3, 1.8, 'Keycard and visual identity system'), bg: DARK },
    {
      t: 'text',
      heading: 'Heritage-Inspired Visual Identity',
      body: ['The visual identity of Hotel Chaehwa is deeply rooted in elements of royal Korean heritage, drawing from traditional patterns, colors, and symbolic motifs. These visual cues are reinterpreted with a contemporary sensibility, creating a cohesive identity that bridges the past and present.'],
    },
    { t: 'full', img: hc.at(4, 1.063, 'Inviting Bathroom Suite'), width: 'inset' },
    {
      t: 'text',
      heading: 'Unlimited exploration within the VR',
      body: ['Hotel Chaehwa presents an interactive heritage showroom built around carefully curated branded content. By blending storytelling with experiential design, the showroom transforms cultural heritage into an engaging brand narrative. Visitors navigate through immersive digital and spatial environments, where branded visuals, media, and artifacts reinterpret traditional Korean heritage in a format that resonates with contemporary audiences.'],
    },
    { t: 'full', img: hc.at(5, 0.996, 'Romantic Teatime Suite'), width: 'inset' },
    {
      t: 'text',
      heading: 'Interactive educational system',
      body: ['Move the space through arrows and direction keys in the showroom space, or pop-ups based on the order of scenarios. Users can discover items placed in the space and collect new information about our culture and cultural properties.'],
    },
    { t: 'full', img: hc.at(6, 1.667, 'Showroom on desktop'), bg: '#fff' },
  ],
};

// ── Evergreen ─────────────────────────────────────────────
const eg = pics('evergreen');
const GREEN = '#1f4e3d';
const evergreen: Project = {
  slug: 'evergreen',
  title: 'Evergreen',
  category: 'Branding',
  description: 'Delivery Mobility Service for BMW\nSustainability Campaign Brand Identity',
  year: 2022,
  intro: [
    'Evergreen is a delivery robot brand created to bridge the gap between the public and SeedVault, an initiative focused on plant preservation and research. Developed through a Creative Workshop with BMW Designworks in Munich, Evergreen combines innovative technology with environmental sustainability.',
    'Experts are predicting that most of the plants on Earth will gradually become extinct in the near future, leading to a severe food crisis. Worse, there is currently very little public awareness of this critical social issue. Evergreen is a public service that bridges the gap between SeedVault, which preserves seeds for the future, and the general public. It uses mobility to get people to donate seeds, which are then delivered to Seedvault. By rewarding users with capsule food, which is one of the types of food that will be consumed if plants become extinct in the future, we raise awareness of the importance of seed conservation and get people interested in taking action for a sustainable future. Our small actions create a sustainable environment.',
  ],
  hero: eg.hero(1.588, 'Evergreen billboard and delivery robot'),
  more: { href: 'https://galleries.sparkawards.com/index.cfm?year=2023&entry=F2239F0E-9EC0-0961-C2222EDDF4DFF540' },
  blocks: [
    { t: 'full', img: eg.at(1, 1.738, 'Capsule food kit') },
    { t: 'full', img: eg.at(2, 1.778, 'Connecting the Seedvault & the Public') },
    {
      t: 'text',
      heading: 'A Visual Identity Inspired by Seeds and Sustainability',
      body: ["The visual identity of Evergreen is rooted in the symbolism of seeds, representing growth, sustainability, and the cyclical nature of life. The design incorporates organic, fluid shapes and earthy tones, evoking a sense of harmony with nature. Soft, rounded forms in the logo and overall branding reflect positivity and nurturing, while the color palette of greens, ivory, and muted earth tones reinforces the connection to sustainability and environmental care. This visual concept captures the essence of Evergreen's mission to promote sustainable practices in an approachable, everyday manner."],
      img: eg.at(3, 0.897, 'Logo system and design system'),
    },
    { t: 'full', img: eg.at(4, 1.732, 'Everyday grinning together in green') },
    { t: 'row', imgs: [eg.at(5, 2.037, 'Seeds gather and grow'), eg.at(6, 2.037, 'Typography')] },
    {
      t: 'split',
      left: [eg.at(12, 1.613, 'Capsule food lid', 'png'), eg.at(13, 1.534, 'Capsule food manual')],
      right: [eg.at(14, 0.3, 'Seed result receipt', 'png')],
    },
    {
      t: 'text',
      heading: 'Capsule Food Meal Kit: A Reward Experience for Donation',
      body: ['The Capsule food offers a unique and engaging reward experience for donors, featuring sleek, round packaging designed for both functionality and aesthetic appeal. The eco-friendly packaging uses sustainable materials and reflects the futuristic nature of the food pill concept.'],
      img: eg.at(7, 1.748, 'Meal kit'),
    },
    { t: 'full', img: eg.at(8, 1.547, 'Seed scan interface'), width: 'inset' },
    { t: 'row', imgs: [eg.at(9, 1, 'Delivery robot and UI'), eg.at(10, 0.889, 'Capsule box and receipt')] },
    { t: 'full', img: eg.at(11, 1.891, 'Capsule pills') },
  ],
};

// ── Cathedral ─────────────────────────────────────────────
const cd = pics('cathedral');
const cathedral: Project = {
  slug: 'cathedral',
  title: 'Cathedral',
  category: '3D Graphic',
  description: 'Redefining Catholicism as\nPremium Brand Space Identity',
  year: 2023,
  intro: [
    'Experimental brand identity design project redefining the most popular religion of all time, catholicism as a premium brand. The project was constructed for a academic workshop exhibition:',
    'Sociocultural design studio 3\n“Everything about this show is a lie”\n“Cathedral is a luxury showroom.”',
    "“Nowadays, shop windows not only present products. They also, and above all, communicate the brand's concepts and identity. Over time, they gained complexity by incorporating constructive elements ranging from lighting, different types of support, colors and materials, to projections, music and other artifices that attract people's attention.” -Archdaily",
    "The cathedral is a brand showroom promoting a world-class high-end lifestyle brand called Catholicism. The Cathedral promotes the brand's social contribution value within a cultural experience, inducing premium subscription (Tithe) and membership Plans (Baptism and communion).",
  ],
  hero: cd.hero(1.413, 'Cathedral brochures'),
  more: { href: 'https://www.behance.net/gallery/169150163/Cathedral-is-a-Luxury-Showroom' },
  blocks: [
    { t: 'full', img: cd.at(1, 1.778, 'Showroom windows'), bg: DARK },
    { t: 'full', img: cd.at(2, 1.778, 'Branded merchandise'), bg: DARK },
    {
      t: 'text',
      heading: 'Bible inspired Brochures & Catholic Branded Merchandise',
      body: [
        'Rooted in the rich visual heritage of Catholicism, these brand prints seamlessly blend tradition with contemporary design. Drawing inspiration from religious manuscripts, iconography, and sacred motifs,',
        'each piece reflects the depth of faith and the timeless beauty of spiritual art. Designed with reverence and authenticity, these prints elevate brand storytelling, creating a visual language that resonates with devotion and meaning.',
      ],
      img: cd.at(3, 0.833, 'Cathedral poster'),
      bg: DARK,
      ink: 'light',
    },
    { t: 'row', imgs: [cd.at(4, 1.778, 'Shopping bags and tags'), cd.at(5, 1.778, 'Bag with Bible and rosary')], bg: DARK },
    { t: 'row', imgs: [cd.at(6, 1.14, 'Brochure, booklet and card book'), cd.at(7, 1.469, 'Brochure spread')], bg: DARK, inset: true },
    {
      t: 'text',
      heading: 'Catholicism Reimagined as a Brand Store',
      body: ['Each artwork was accompanied by a trifold card book, featuring vibrant fluorescent foil coating that highlighted the intricate details and added a striking visual dimension to the presentation.'],
      bg: DARK,
      ink: 'light',
    },
    { t: 'row', imgs: [cd.at(8, 0.792, 'Exhibition display'), cd.at(9, 0.792, 'Shopping bags close-up')], bg: DARK, inset: true },
    { t: 'full', img: cd.at(10, 1.778, 'Cathedral sign'), bg: DARK },
    { t: 'full', img: cd.at(11, 1.778, 'Organ and stained glass'), bg: DARK },
    { t: 'full', img: cd.at(12, 1.778, 'Altar arch'), bg: DARK },
    { t: 'full', img: cd.at(13, 2.4, 'Cathedral is a luxury showroom'), bg: DARK },
  ],
};

// ── Alessia Archive ───────────────────────────────────────
const al = pics('alessia-archive');
const alessia: Project = {
  slug: 'alessia-archive',
  title: 'Alessia Archive',
  category: 'Branding, UXUI',
  description: 'Brand Identity and Website Development\nfor Italian Fashion Designer Alessia Scarpelli',
  year: 2026,
  intro: [
    'A professional archive for Alessia Scarpelli, an Italy-based fashion designer, pattern maker, and art director with over 15 years of experience working internationally. The project aims to document her creative practice and technical expertise while establishing her professional identity as a fashion design expert and future educator.',
    'Inspired by fashion magazines, the website explores an editorial approach to digital interaction. Horizontal scrolling, asymmetrical layouts, and generous use of white space shape a dynamic browsing experience with a distinctive visual rhythm. The visual identity balances contemporary aesthetics with heritage-inspired elements, combining expressive neon colours, modern typography, and references to craftsmanship to create a distinctive and cohesive visual language.',
  ],
  hero: al.hero(1.131, 'Alessia Scarpelli website on an iMac'),
  more: { href: 'https://alessiascarpelli.com/' },
  blocks: [
    { t: 'video', src: '/videos/alessia-archive/web.mp4', poster: '/videos/alessia-archive/web-poster.jpg', ratio: 16 / 9, bg: DARK },
    { t: 'video', src: '/videos/alessia-archive/mobile.mp4', poster: '/videos/alessia-archive/mobile-poster.jpg', ratio: 16 / 9, bg: DARK },
    { t: 'full', img: al.at(1, 1.031, 'Vertical category tabs'), bg: DARK, fit: { w: 78, align: 'left' } },
    { t: 'full', img: al.at(2, 0.982, 'Magazine-inspired interaction and layout'), bg: DARK, fit: { w: 74, align: 'right' } },
    { t: 'full', img: al.at(3, 0.966, 'Fashion Design page and horizontal interaction'), bg: DARK, fit: { w: 74, align: 'left' } },
    { t: 'full', img: al.at(4, 0.774, 'Mobile interface focused on editorial layout'), bg: DARK, fit: { w: 61, align: 'center' } },
    {
      t: 'text',
      variant: 'aside',
      heading: 'Cohesive Visual System for the Fashion Archive',
      body: ["An analysis of Alessia's 15-year fashion archive informed the development of a cohesive visual system that brings her diverse body of work together. Recurring colours and visual characteristics were identified and translated into a unified design language. A colour palette centred on the vivid neon hues found throughout her previous work was established, while the combination of Faculty Glyphic and ABC Areal created a typographic identity that balances heritage-inspired character with contemporary sensibility."],
      bg: DARK,
      ink: 'light',
    },
    { t: 'video', src: '/videos/alessia-archive/branding.mp4', poster: '/videos/alessia-archive/branding-poster.jpg', ratio: 16 / 9, bg: DARK },
    { t: 'full', img: al.at(5, 1.778, 'Colour palette'), bg: DARK },
    { t: 'full', img: al.at(6, 1.778, 'Moodboard'), bg: DARK },
    { t: 'full', img: al.at(7, 1.778, 'Typography'), bg: DARK },
    { t: 'full', img: al.at(8, 1.778, 'Logo variations'), bg: DARK },
  ],
};

// ── Leon Clowes ───────────────────────────────────────────
const lc = pics('leon-clowes');
const leon: Project = {
  slug: 'leon-clowes',
  title: 'Leon Clowes',
  category: 'Printed Matter',
  description: "Music Album Design for\n‘Empirical Evidence of the Existence of Angels’",
  year: 2026,
  intro: [
    "The overall concept was inspired by the artist Leon Clowes' handwritten notes and feather drawings created for Empirical Evidence of the Existence of Angels. These personal sketches and annotations informed a graphic language that feels intimate, reflective, and exploratory, translating the themes of observation, belief, and discovery into a visual form. The design concept is rooted in ideas of documentation, evidence, and archival record-keeping, inspired by the title Empirical Evidence of the Existence of Angels.",
  ],
  hero: lc.hero(1.202, 'Cassette tape and J-card'),
  more: { href: 'https://naviarrecords.bandcamp.com/album/empirical-evidence-of-the-existence-of-angels' },
  blocks: [
    { t: 'full', img: lc.at(1, 1.38, 'Cassette Album & J-Card Design'), bg: DARK },
    {
      t: 'text',
      variant: 'aside',
      heading: "Interpreting the Artists' Philosophy",
      body: ["The J-card serves as the equivalent of a book cover, establishing and communicating the overall visual concept of the release. As the primary expression of the project's identity, four distinct design concepts were developed, each exploring a different interpretation of the archival and evidential themes while remaining connected to Leon's notes, drawings, and the broader narrative of the album."],
      bg: DARK,
      ink: 'light',
    },
    { t: 'full', img: lc.at(2, 0.753, 'J-card, spine and tape'), bg: DARK, width: 'inset' },
    { t: 'full', img: lc.at(3, 1.493, 'Four J-card concepts'), bg: DARK, width: 'inset' },
    { t: 'full', img: lc.at(4, 1.666, 'Tape and spine variations'), bg: DARK, width: 'inset' },
    {
      t: 'text',
      variant: 'aside',
      heading: 'Production A/B Testing',
      body: [
        'The cassette tape design was developed in alignment with the J-card concepts, using a minimal and distilled approach that highlights only the most essential visual elements.',
        "-) Spine Design: Each exploring a different interpretation of the archival and evidential themes while remaining connected to Leon's notes, drawings, and the broader narrative of the album.",
      ],
      bg: DARK,
      ink: 'light',
    },
  ],
};

// ── Corners ───────────────────────────────────────────────
const cr = pics('corners');
const corners: Project = {
  slug: 'corners',
  title: 'Corners',
  category: 'Printed Matter',
  description: "Poster Series for\nIndependent Film ‘Moseori’",
  year: 2024,
  intro: [
    "Corners is a risograph poster series created for an independent film exhibition, designed for the film ‘Moseori’(meaning corners, in Korean) written and produced by Korean film director Seohyun Lee. The design was inspired by a key motif from the film; the protagonist's habit of writing memos on the corners of books, symbolizing moments of reflection and the beginning of a personal journey.",
    'The posters translate this intimate gesture into visual form, using layered textures and subtle compositions to evoke the tactile quality of printed notes and the emotional depth of the narrative.',
    'The series was exhibited at Bincan in Seoul and featured in metro station billboards.',
  ],
  hero: cr.hero(1.42, 'Corners posters'),
  blocks: [
    { t: 'full', img: cr.img(1.6, 'Poster in a metro station') },
    { t: 'row', imgs: [cr.img(0.9), cr.img(0.75)], bg: DARK },
    {
      t: 'text',
      heading: 'Risograph Print & Digital Media Promotion',
      body: ["The poster was created using Risograph printing to capture the delicacy of the protagonist's handwritten notes, which also serve as typographic motifs. A central gradient subtly guides the viewer's eye away from the middle and toward the corners, where the main message is located. This design was also adapted for digital display in metro stations."],
      bg: DARK,
      ink: 'light',
    },
    { t: 'full', img: cr.img(1.1, 'Two posters'), bg: DARK },
    { t: 'row', imgs: [cr.img(0.75), cr.img(0.75)], bg: DARK, inset: true },
  ],
};

// ── IRAY LEGENDS ──────────────────────────────────────────
const ir = pics('iray-legends');
const iray: Project = {
  slug: 'iray-legends',
  title: 'IRAY LEGENDS',
  category: '3D Graphic',
  description: 'Promotion Motion Poster\nfor Recruitment 2021',
  year: 2021,
  intro: [
    'This motion poster series was created to promote recruitment for the 3D design club IRAY. Based on the brand story “Myth of the IRAY Tribe”',
    "developed by the video promotion team, the project expanded the narrative by integrating references to the legend of Atlantis, creating key visuals that evoke mystery, discovery, and imagination.\nThe concept centered on the idea of lost treasures of the IRAY tribe hidden beneath the ocean, symbolizing an invitation for new members to join the creative journey. Reflecting the club's three career training courses—look development, animation, and motion—three representative charms were designed, each embodying the spirit of its respective field.",
    "The series consists of four posters in total: three square-format designs for each course and one horizontal poster combining all three visuals. The posters were published on IRAY's Instagram account and later printed as official club merchandise included in the welcome kit.",
  ],
  hero: ir.hero(1, 'I-RAY LEGENDS square poster'),
  heroYoutube: 'HN-qwuzv7Sg',
  blocks: [
    { t: 'youtube', ids: ['CabHO6PUITc'], ratio: 16 / 9, bg: DARK },
    { t: 'video', src: '/videos/iray-legends/promo.mp4', poster: '/videos/iray-legends/promo-poster.jpg', ratio: 1, bg: DARK, width: 'narrow' },
  ],
};

// ── OMNI ──────────────────────────────────────────────────
const om = pics('omni');
const omni: Project = {
  slug: 'omni',
  title: 'OMNI',
  category: 'Branding, UXUI',
  description: 'Real-Time Customizable\nMobility Brand for Digital Natives',
  year: 2022,
  intro: [
    'OMNI is a next-generation personalized mobility service designed for real-time customization through an integrated digital interface. More than just a means of transportation, OMNI functions as a dynamic content platform—blending mobility with digital interaction to create a futuristic travel experience. Users can tailor their environment, access media, and interact with content seamlessly, transforming each journey into a personalized, tech-driven experience.',
    'This six-month-long project was developed in collaboration with BMW Designworks in Munich, bringing together cross-disciplinary insights and global design expertise to envision the future of smart, immersive mobility.',
  ],
  hero: om.hero(1.413, 'OMNI glass logotype'),
  more: { href: 'https://www.behance.net/gallery/172885907/OMNI' },
  blocks: [
    { t: 'full', img: om.at(1, 1.776, 'Dashboard invitation screen'), bg: '#fff' },
    {
      t: 'text',
      heading: 'Circular GUI & Brand System: Bridging the Physical and Digital',
      body: ["OMNI's circular GUI and brand system embody the concept of bridging physical and digital realms, offering intuitive, seamless interaction through radial design that enhances spatial awareness and immersive mobility experiences."],
      img: om.at(2, 1.135, 'Circular home bar and dial UI'),
      bg: '#fff',
    },
    { t: 'row', imgs: [om.at(3, 1.5, 'Dashboard on a scooter'), om.at(4, 1.759, 'Logo, typography, iconography and color system')], bg: '#fff' },
    { t: 'full', img: om.at(5, 1.778, 'Skins and customization screens'), bg: '#fff' },
    { t: 'full', img: om.at(6, 1.778, 'Bridging the online & offline'), bg: '#fff' },
    {
      t: 'text',
      heading: 'User as Creator: Redefining the Car Experience',
      body: [
        "OMNI redefines the traditional automotive experience by positioning the user as a creator of their own journey. With real-time customization, users have the power to personalize the vehicle's interface, content, and in-cabin environment, making each ride unique.",
        'This approach goes beyond mere transportation, transforming the vehicle into a creative platform. By seamlessly blending physical mobility with digital content, OMNI enables users to curate their experience, making the car a reflection of their personal style, preferences, and needs.',
      ],
      img: om.at(7, 0.744, 'Create: real-time customization'),
      bg: '#fff',
    },
    { t: 'full', img: om.at(8, 1.774, 'Customized scooters on a light track'), bg: '#fff' },
    { t: 'row', imgs: [om.at(9, 0.757, 'Collect'), om.at(10, 0.757, 'Connect')], bg: '#fff', inset: true },
    { t: 'full', img: om.at(11, 1.528, 'Skin gallery dashboard'), bg: '#fff', width: 'inset' },
    { t: 'full', img: om.at(12, 1.778, 'Runway show'), bg: '#fff' },
    { t: 'full', img: om.at(13, 1.775, 'Scooter lineup'), bg: '#fff' },
  ],
};

// ── KDM+ ──────────────────────────────────────────────────
const kd = pics('kdmp');
const kdmp: Project = {
  slug: 'kdmp',
  title: 'KDM+',
  category: '3D Graphic',
  description: 'Logo Motion Graphic for\nKorea Design Membership',
  year: 2023,
  intro: [
    "As part of **Korea Design Membership's (KDM)** brand identity renewal project, the work focused on developing the **logo animation** and leading the overall **branding direction**. In collaboration with a team of **five graphic designers**, the project redefined KDM's heritage and transformed it into a **modern, futuristic identity** that embodies innovation and creative energy.",
    "The refreshed brand expresses **youthful dynamism and forward-thinking design**, inspiring emerging designers and fostering new ideas. Through a vibrant and immersive logo animation, the brand captures KDM's evolution and its commitment to advancing design culture.",
  ],
  hero: kd.hero(1, 'KDM+ logo'),
  heroVideo: { src: '/videos/kdmp/logo-motion.mp4', poster: '/videos/kdmp/poster.jpg' },
  more: { href: '#' },
  blocks: [],
};

// ── Your Odyssey ──────────────────────────────────────────
const yo = pics('your-odyssey');
const odyssey: Project = {
  slug: 'your-odyssey',
  title: 'Your Odyssey',
  category: 'Printed Matter',
  description: '3D Artwork & Merchandise Design\nInspired by Greek Mythology',
  year: 2022,
  intro: [
    'This project interprets the theme of “adventure” through the motifs of Greek mythology, offering an interactive exhibition where visitors can explore their own adventurous nature. Visitors become adventurers, uncovering the legends of the 12 gods as they engage with the experience.',
    'The exhibition is structured around various adventure-related questions, and by answering them, adventurers can analyze their responses to discover which of the 12 gods they resemble. Afterward, they can enjoy 3D graphic art books and card sets, viewing graphic representations and myths of the god that matches them. Additionally, they will receive recommendations for an adventure partner that best suits their personality.',
    'This project is part of a group exhibition by the 3D graphic design club, IRAY, showcasing the creative potential of immersive and interactive design.',
  ],
  hero: yo.hero(1.413, 'Your Odyssey card books'),
  more: { href: 'https://www.behance.net/gallery/165187067/Your-Odyssey-' },
  blocks: [
    { t: 'full', img: yo.at(1, 2.131, 'Artbook and card books'), bg: DARK },
    {
      t: 'text',
      heading: 'End-to-End Creation: 3D Graphic Art and Merchandise for the Exhibition',
      body: ['From crafting the 3D graphic art to designing and producing merchandise for the exhibition, our team handled every aspect of this project. We meticulously created immersive visuals and tangible items that brought the interactive experience to life, ensuring a cohesive and engaging journey for all visitors.'],
      img: yo.at(2, 0.688, 'Athena poster in a lightbox'),
      video: { src: '/videos/your-odyssey/athena.mp4', poster: '/videos/your-odyssey/athena-poster.jpg', ratio: 0.732 },
      bg: DARK,
      ink: 'light',
    },
    { t: 'full', img: yo.at(3, 1.345, 'Twelve trifold card books'), bg: DARK, width: 'inset' },
    { t: 'video', src: '/videos/your-odyssey/trifold.mp4', poster: '/videos/your-odyssey/trifold-poster.jpg', ratio: 1.778, bg: DARK },
    {
      t: 'text',
      body: [
        { h: '1. Fluorescent Foil-Coated Trifold Card Books for Each Artwork' },
        'Each artwork was accompanied by a trifold card book, featuring vibrant fluorescent foil coating that highlighted the intricate details and added a striking visual dimension to the presentation.',
        { h: '2. Landscape-Size Artbook for Graphic Render Archive' },
        'The exhibition content was thoughtfully archived in a beautifully crafted artbook, preserving the visual and thematic essence of the experience for future reference and appreciation.',
      ],
      img: yo.at(5, 0.803, 'Foil card books'),
      bg: DARK,
      ink: 'light',
    },
    { t: 'full', img: yo.at(6, 2.4, 'Card book cover, holographic foil'), bg: DARK, width: 'inset' },
    { t: 'full', img: yo.at(7, 2.4, 'Artbook cover'), bg: DARK, width: 'inset' },
    { t: 'full', img: yo.at(8, 1.534, 'Artbooks standing'), bg: DARK },
    { t: 'row', imgs: [yo.at(9, 1.5, 'Artbook opened'), yo.at(10, 1.5, 'Dionysus spread')], bg: DARK },
    { t: 'full', img: yo.at(11, 1.066, 'Artbook spreads'), bg: DARK, width: 'inset' },
    { t: 'full', img: yo.at(12, 2.4, 'Table of contents'), bg: DARK, width: 'inset' },
    { t: 'full', img: yo.at(13, 2.4, 'Credits'), bg: DARK, width: 'inset' },
  ],
};

// ── Tales from Typography ─────────────────────────────────
const tt = pics('tales-from-typography');
const TAUPE = '#3a3535';
const tales: Project = {
  slug: 'tales-from-typography',
  title: 'Tales from Typography',
  category: 'Printed Matter',
  description: 'Study on fable books\nand ornamental typography',
  year: 2020,
  intro: [
    'This project explores the intersection of typography and storytelling through the design of a classical fable book. The concept began with a self-written fable inspired by reflections on the typography course experience, reimagined as a fairytale filled with challenges, lessons, and discoveries. To visualize this narrative, a two week research process was conducted on nineteenth century book design, focusing on typographic grids, ornamental details, and historical page formats. Insights such as the narrower proportions of traditional fable books informed the overall structure and design approach.',
    'Several page spread variations were developed and refined to match the tone and pacing of the text. The contents page features ornamental type decorations reminiscent of vintage fairytale books, while graphic elements derived from course posters were reworked into symmetrical, decorative compositions that align with the classical layout system. The result is a book that merges historical design sensibilities with a contemporary and reflective narrative about learning and creativity.',
  ],
  hero: tt.hero(1.413, 'Book cover'),
  blocks: [
    { t: 'full', img: tt.at(1, 1.667, 'Title spread'), bg: TAUPE },
    { t: 'row', imgs: [tt.at(2, 1.358, 'Contents spread'), tt.at(3, 1.325, 'Preface spread')], bg: TAUPE },
    { t: 'full', img: tt.at(4, 1.846, 'Chapter I'), bg: TAUPE },
    { t: 'full', img: tt.at(5, 1.846, 'Chapter V'), bg: TAUPE },
  ],
};

// ── UAENA ─────────────────────────────────────────────────
const ua = pics('uaena');
const uaena: Project = {
  slug: 'uaena',
  title: 'UAENA',
  category: 'Branding',
  description: 'IU Fanclub UAENA\nBrand Identity Proposal',
  year: 2023,
  intro: [
    "The UAENA Rebranding Project redefines the visual identity of IU's official fan club, creating a cohesive brand system that reflects the evolving artistry and storytelling of the artist. The project addresses the inconsistency of previous seasonal branding and the lack of visual logic and storytelling compared to IU's musical value.",
    "Through the concept of “Everlasting Storyteller,” the rebrand positions IU as a timeless author whose creative journey unfolds across musical eras. The new identity emphasizes energetic elegance, genuine persistence, and fluid imperfection, drawing inspiration from IU's handwriting and organic motion. The logo and typography system reinterpret IU's original motifs, expressing the intimate connection between IU and UAENA—“You and I become one through music.” The visual system was applied across digital, print, and motion graphics, creating a unified and emotionally resonant brand experience.",
  ],
  hero: ua.hero(1.413, 'UAENA lightstick'),
  blocks: [
    { t: 'full', img: ua.at(1, 1.778, 'Rebranding project keyring') },
    { t: 'row', imgs: [ua.at(2, 1.467, 'Membership cards'), ua.at(3, 1.467, 'Card case')] },
    { t: 'full', img: ua.at(4, 1.778, 'Design principle') },
    { t: 'full', img: ua.at(5, 1.778, 'Motif and logo') },
    { t: 'row', imgs: [ua.at(6, 1, 'UAENA holographic logo'), ua.at(7, 1, 'IU vertical logo')] },
    { t: 'row', imgs: [ua.at(8, 1.778, 'Lightstick and box'), ua.at(9, 1.778, 'Lightstick in the dark')] },
  ],
};

export const projects: Project[] = [
  alessia, leon, hankyul, uaena, cathedral, grandiflora,
  // kdmp — 목록에서 뺌 (데이터는 위에 남아 있음)
  // corners — Alessia Archive로 교체됨 (데이터는 위에 남아 있음)
  omni, evergreen, odyssey, chaehwa, iray, tales,
];

export const projectHref = (slug: string) => `/projects/${slug}/`;
