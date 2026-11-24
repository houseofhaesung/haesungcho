// 사이트 전체 콘텐츠. 텍스트나 목록을 바꿀 때는 이 파일만 수정하면 됩니다.

export const email = 'benitachoooo@naver.com';

export const nav = {
  left: [
    { label: 'About', ko: '소개', href: '/about/' },
    { label: 'Works', ko: '작업', href: '/works/' },
  ],
  home: { label: 'Haesung Cho', ko: '조혜성', href: '/' },
  right: [
    { label: 'Contact', ko: '문의', href: `mailto:${email}` },
  ],
};

// 메인 화면 표
export const selectedWorks = [
  { slug: 'alessia-archive', title: 'Alessia Archive', category: 'Branding', description: 'Italian Fashion Designer Website & Brand Identity', year: 2026,
    ko: { title: '알레시아', category: '브랜드 디자인', description: '이탈리아 패션 디자이너 웹사이트 아이덴티티' } },
  { slug: 'grandiflora', title: 'Grandiflora', category: 'Type', description: 'Art Nouveau Style Hangeul and Latin Typeface', year: 2023,
    ko: { title: '능소화', category: '서체 디자인', description: '아르누보 모티프의 한글 및 영문 서체' } },
  { slug: 'hankyul', title: 'Hankyul', category: 'Branding / Type', description: 'Hankook Tire Brand Space Identity', year: 2023,
    ko: { title: '한결', category: '브랜드 디자인', description: '한국타이어 프리미엄 브랜드 공간 아이덴티티' } },
  { slug: 'evergreen', title: 'Evergreen', category: 'Branding', description: 'BMW Conceptual Mobility Identity', year: 2022,
    ko: { title: '에버그린', category: '브랜드 디자인', description: 'BMW 컨셉추얼 모빌리티 아이덴티티' } },
  { slug: 'your-odyssey', title: 'Your Odyssey', category: 'Printed Matter', description: '3D Art Exhibition Booklet and Merchandise', year: 2022,
    ko: { title: '당신의 오딧세이', category: '인쇄 매체', description: '3D 아트 전시 책자 및 카드집 디자인' } },
  { slug: 'leon-clowes', title: 'Leon Clowes', category: 'Printed Matter', description: 'British Musician Experimental Album Design', year: 2026,
    ko: { title: '리온 클라우스', category: '인쇄 매체', description: '영국 실험 음악가 앨범 디자인' } },
];

// Works 화면 그리드
export const works = [
  { slug: 'alessia-archive', title: 'Alessia Archive', category: 'Branding, UXUI', year: 2026 },
  { slug: 'leon-clowes', title: 'Leon Clowes', category: 'Printed Matter', year: 2026 },
  { slug: 'hankyul', title: 'HANKYUL', category: 'Branding', year: 2023 },
  { slug: 'uaena', title: 'UAENA', category: 'Branding', year: 2023 },
  { slug: 'cathedral', title: 'Cathedral', category: 'Printed Matter', year: 2023 },
  { slug: 'grandiflora', title: 'Grandiflora', category: 'Type Design', year: 2023 },
  { slug: 'omni', title: 'OMNI', category: 'Branding, UXUI', year: 2023 },
  { slug: 'evergreen', title: 'Evergreen', category: 'Branding', year: 2022 },
  { slug: 'your-odyssey', title: 'Your Odyssey', category: 'Printed Matter', year: 2022 },
  { slug: 'hotel-chaehwa', title: 'Hotel Chaehwa', category: 'Branding', year: 2021 },
  { slug: 'iray-legends', title: 'IRAY LEGENDS', category: '3D Graphic', year: 2021, video: '/videos/iray-legends/thumb.mp4' },
  { slug: 'tales-from-typography', title: 'Tales from Typography', category: 'Printed Matter', year: 2020 },
].map((w: { slug: string; title: string; category: string; year: number; video?: string }) => ({ ...w, image: `/images/works/${w.slug}.jpg` }));

// About 화면 (영문 / 한글)
type Entry = { year: number; lines: string[] };
type AboutLang = {
  intro: string[]; introAccent: string; introLink: string; introLead?: string;
  heads: { bio: string; experience: string; education: string; exhibition: string };
  biography: string[];
  experience: Entry[]; education: Entry[]; exhibition: Entry[];
};

export const about: { en: AboutLang; ko: AboutLang } = {
  en: {
    intro: ['1.A graphic designer from South Korea.', '2.Her name means "comet" in Korean.'],
    introAccent: '(like, the shooting star)',
    introLink: 'https://en.wikipedia.org/wiki/Comet',
    heads: { bio: 'Biography', experience: 'Experience', education: 'Education', exhibition: 'Exhibition' },
    biography: [
      'Haesung Cho is a graphic designer focusing on typography and branding. She studied visual communication design at Hongik University in Seoul, South Korea and moved to Stuttgart, Germany to work at an international exhibition design agency, Atelier Brückner. Her scope of work ranges from brand identity to experiential visual design, but her biscriptual typeface, Grandiflora, highlights her specialty in typography.',
      'House of Haesung is an international graphic design studio specializing in multilingual typography and spatial brand identity.\nInspired by classical graphic art, we offer boutique branding that focuses on reviving cultural heritage, defining dynamic identity & creating timeless visual language.',
    ],
    experience: [
      { year: 2026, lines: ['House of Haesung', 'International graphic design services', 'Founder, Graphic Designer'] },
      { year: 2024, lines: ['Atelier Brueckner (Stuttgart, Germany)', 'Branding, exhibition, media, wayfinding', 'Graphic Designer (1 year)'] },
      { year: 2024, lines: ['Hotel Shilla (Seoul, South Korea)', 'Luxury hotel brand design and VMD', 'Graphic Designer (3 months)'] },
      { year: 2023, lines: ['Hankook Tire (Seoul, South Korea)', 'Brand Experience design for brand space', 'Academic Project (3 months)'] },
      { year: 2023, lines: ["D'strict (Seoul, South Korea)", 'Brand typeface design and research', 'Freelance Graphic Designer (1 month)'] },
      { year: 2022, lines: ['BMW Designworks (Munich, Germany)', 'UXUI and graphic design for New Mobility', 'Academic Project (6 months)'] },
      { year: 2022, lines: ['Google Fonts (Virtual, USA)', 'Korean & Latin Typeface Design', 'Freelance Type Designer for Grandiflora'] },
    ],
    education: [
      { year: 2023, lines: ['Gothenburg University, Sweden', 'Exchange Program'] },
      { year: 2022, lines: ['Korea Design Membership Plus 3rd', 'Korean Institution of Design Promotion'] },
      { year: 2021, lines: ['Parsons The New School, New York, USA', 'Online Exchange Program'] },
      { year: 2019, lines: ['Hongik University, South Korea', 'Visual Communication Design BFA'] },
    ],
    exhibition: [
      { year: 2024, lines: ['TDC 69 Awards Exhibition,', 'New York, USA, Seoul, Korea'] },
      { year: 2023, lines: ['JAMO Party & Talk show', 'What really matters, Seoul, Korea'] },
      { year: 2022, lines: ['Unlimited Edition, Seoul Book Design Fair', 'Participant as JAMO'] },
      { year: 2022, lines: ['Design Korea 2022, COEX, Seoul, Korea'] },
    ],
  },
  ko: {
    introLead: '혜성',
    intro: ['1.한국에서 온 그래픽 디자이너'],
    introAccent: '2.쏟아지는 별 (태양계 소천체)',
    introLink: 'https://ko.wikipedia.org/wiki/%ED%98%9C%EC%84%B1',
    heads: { bio: '소개', experience: '경력', education: '수학', exhibition: '전시' },
    // 레퍼런스 시안의 줄바꿈 그대로 (\n = 줄바꿈)
    biography: [
      '조혜성은 브랜딩과 타이포그래피에 기반을 둔 그래픽\n디자이너입니다. 한국, 서울에 위치한 홍익대학교에서\n시각디자인을 전공하고 독일, 슈투트가르트에 위치한\n인터네셔널 전시 디자인 에이전시 아틀리에 브루크너\n본사 그래픽 디자인팀에서 재직했습니다.\n브랜드 디자인부터 공간 경험 디자인까지 다양한\n작업 영역에서 활동하며, 바이스크립트 타입페이스\n능소화 서체를 디자인한 것을 계기로\n타이포그래피에 집중합니다.',
      '하우스 오브 혜성은 다국어 타이포그래피와 공간\n브랜딩에 전문성을 둔 인터네셔널 그래픽 디자인\n스튜디오입니다. 고전적인 그래픽 아트에서 주로\n영감을 찾으며, 브랜드의 헤리티지에 기반하여 유연한\n비주얼 아이덴티티를 제안하는 것에 집중합니다.',
    ],
    experience: [
      { year: 2026, lines: ['하우스 오브 혜성 (서울, 대한민국)', '인터네셔널 그래픽 디자인 스튜디오', '개인사업'] },
      { year: 2024, lines: ['아틀리에 브루크너 (슈투트가르트, 독일)', '박물관 브랜딩, 전시 디자인, 미디어, 웨이파인딩', '주니어 디자이너 2024.09-2025.10'] },
      { year: 2024, lines: ['호텔 신라 (서울, 대한민국)', '서울 디자인 그룹 호텔레저사업부', '사원 2024.02-2024.05'] },
      { year: 2023, lines: ['디스트릭트코리아 (서울, 대한민국)', '브랜드 신사업 전용서체 디자인 및 리서치', '프리랜서 2023.02-2023.03'] },
      { year: 2023, lines: ['한국타이어 (서울, 대한민국)', '브랜드 공간 디자인 산학협력', '산학협력 2023.06-2023.08'] },
      { year: 2022, lines: ['BMW Designworks (재택근무)', '신사업 개발을 위한 인터페이스 디자인', '산학협력 2022.06-2022.12'] },
      { year: 2022, lines: ['Google Fonts (재택근무)', '능소화체 디자인 및 출시', '프리랜서 2021.12-2022.08'] },
    ],
    education: [
      { year: 2023, lines: ['스웨덴 예테보리 대학교', '여름 계절학기 교환학생'] },
      { year: 2022, lines: ['코리아디자인멤버십플러스', '시각환경디자인, 3기'] },
      { year: 2021, lines: ['미국 파슨스 디자인스쿨', '온라인 학점교류 프로그램 참여'] },
      { year: 2019, lines: ['홍익대학교 시각디자인과 졸업'] },
    ],
    exhibition: [
      { year: 2024, lines: ['TDC 69 수상자 전시', 'New York, USA, Seoul, Korea'] },
      { year: 2023, lines: ['JAMO 파티', 'What really matters, Seoul, Korea'] },
      { year: 2022, lines: ['언리미티드 에디션 (서울 북디자인 페어)', 'Participant as JAMO'] },
      { year: 2022, lines: ['디자인코리아 2022, COEX, Seoul, Korea'] },
    ],
  },
};
