import type { Dictionary } from "./types";

const ko: Dictionary = {
  meta: {
    title: "Cognex | 머신 비전 & AI 솔루션",
    description:
      "산업 자동화를 위한 세계 최고의 머신 비전 솔루션을 제공하는 Cognex입니다. 높은 정확도와 사용 편의성으로 자동화 문제를 해결합니다.",
  },

  header: {
    homeAria: "Cognex 홈으로 이동",
    searchPlaceholder: "검색",
    searchAria: "검색",
    myCognex: "MyCognex",
    languageAria: "언어 선택",
    navAria: "주요 내비게이션",
    mobileNavAria: "모바일 내비게이션",
    menuOpenAria: "메뉴 열기",
    menuCloseAria: "메뉴 닫기",
    gnbLabels: ["제품", "애플리케이션", "지원", "도구 및 자료", "회사 소개"],
    mobileNavLabels: ["제품", "애플리케이션", "지원", "도구 및 자료", "Why Cognex", "회사"],
    mobileCta: {
      line1: "어떤 제품이 필요한지",
      line2: "잘 모르시겠다면?",
      linkLabel: "제품 찾아보기",
    },
  },

  footer: {
    footerAria: "사이트 푸터",
    companyName: "Cognex 본사",
    phoneAria: "전화 문의",
    instagramAria: "Cognex 인스타그램",
    youtubeAria: "Cognex 유튜브",
    navAria: "푸터 내비게이션",
    legalAria: "법적 고지 내비게이션",
    navLabels: ["제품", "고객사례", "회사소개", "채용", "지원"],
    legalLabels: ["개인정보보호정책", "서비스 약관", "Partner Portal", "Cookies Settings"],
    newsletterTitle: "Cognex 소식 받기",
    emailPlaceholder: "이메일 주소",
    countryAria: "국가/지역 선택",
    countryPlaceholder: "국가 / 지역",
    countries: ["대한민국", "미국", "중국", "일본", "독일", "영국"],
    salesButton: "세일즈 문의",
  },

  hero: {
    ariaLabel: "히어로 섹션",
    title: ["지속적으로 제공하는", "새로운 AI 비전"],
    body: "높은 정확도와 사용 편의성으로 자동화 문제를 해결하도록 설계된 Cognex의 최신 AI 기반 제품을 확인해보세요.",
    cta: "Download Product Guide",
    slideAria: (i, label) => `슬라이드 ${i + 1}: ${label}`,
    slideGoToAria: (i) => `슬라이드 ${i + 1}로 이동`,
    slides: [
      { label: ["복잡한 자동화 과제를 해결하는", "처리능력과 유연성"], alt: "Cognex In-Sight AI 머신 비전 시스템" },
      { label: ["OneVision을 통한", "AI 검사 프로세스 표준화&확장"], alt: "Cognex OneVision 소프트웨어" },
      { label: ["AI 기반의 초고속 검사로", "원활한 생산라인 운영"], alt: "Cognex 비전 센서" },
      { label: ["500개 이상의 업체가 선택한", "Cognex AI 비전"], alt: "Cognex 3D 레이저 스캐너" },
    ],
  },

  company: {
    ariaLabel: "회사 소개 섹션",
    title: "산업 자동화를 위한 세계 최고의 머신 비전 솔루션을 제공합니다.",
    body: "산업 생산에 가장 중요한 핵심 특성을 고유하게 제공함으로써 AI 기반 비전 자동화로의 전환을 주도하고 있습니다.",
    circles: [
      { label: "회사 개요", sub: "Who we are" },
      { label: "기술 및 혁신", sub: "Technology & AI" },
      { label: "주요 적용 산업", sub: "Industries" },
    ],
    stats: ["설립일", "글로벌 누적 설치", "세계 주요 거점", "특허 보유수"],
  },

  coreFeatures: {
    ariaLabel: "핵심 특장점 섹션",
    title: "Cognex를 선택해야 하는 이유",
    features: [
      {
        title: "복잡한 자동화 과제 해결",
        body: "고성능 처리능력과 뛰어난 유연성으로 어떠한 복잡한 자동화 문제도 정확하고 효율적으로 해결합니다.",
      },
      {
        title: "AI 검사 프로세스 표준화",
        body: "OneVision 기반의 통합 플랫폼으로 AI 검사 프로세스를 손쉽게 표준화하고 현장 규모에 맞게 확장합니다.",
      },
      {
        title: "초고속 AI 비전 검사",
        body: "AI 기반 초고속 검사 기술로 생산라인을 끊김 없이 운영하며, 불량률을 최소화하고 품질을 극대화합니다.",
      },
      {
        title: "검증된 글로벌 솔루션",
        body: "전 세계 500개 이상의 기업이 신뢰하는 Cognex AI 비전 솔루션으로 업계 표준을 선도합니다.",
      },
    ],
  },

  products: {
    ariaLabel: "제품 카테고리 섹션",
    detailLabel: "자세히 보기",
    items: [
      { title: "비전 센서 및\n시스템", alt: "Cognex 비전 센서 및 시스템" },
      { title: "3D 비전\n시스템", alt: "Cognex 3D 비전 시스템" },
      { title: "바코드\n리더기", alt: "Cognex 바코드 리더기" },
      { title: "비전\n소프트웨어", alt: "Cognex 비전 소프트웨어" },
      { title: "물류\n솔루션", alt: "Cognex 물류 솔루션" },
      { title: "렌즈, 조명 및\n부속품", alt: "Cognex 렌즈 조명 부속품" },
    ],
  },

  solutions: {
    ariaLabel: "기술 적용 분야 섹션",
    eyebrow: "SOLUTIONS / 성과",
    title: "기술 적용 분야",
    viewAllLabel: "전체 보기",
    detailLabel: "자세히 보기",
    mainTabs: { application: "애플리케이션", industry: "산업" },
    appTabs: [
      "어셈블리 검사 및 검증",
      "자동 결함 감지",
      "바코드 스캐닝 및 추적",
      "자동 분류 및 분류",
      "측정 및 치수 확인",
      "가이드 및 정렬",
      "광학 문자 인식 (OCR)",
    ],
    industryTabs: ["반도체", "식음료", "자동차", "제약", "전자부품", "물류"],
    appContent: [
      { title: "어셈블리 검사 및 검증", body: "첨단 머신 비전 기술로 복잡한 어셈블리 공정의 모든 구성 요소를 정밀하게 검사하고 검증하여 제품 품질과 생산 신뢰성을 보장합니다. 실제 콘텐츠는 추후 업데이트 예정입니다." },
      { title: "자동 결함 감지", body: "첨단 머신 비전과 AI의 강력한 기능을 통해 모든 결함을 감지하여 일관된 품질을 보장하고 비용이 많이 드는 오류를 줄입니다. 실제 콘텐츠는 추후 업데이트 예정입니다." },
      { title: "바코드 스캐닝 및 추적", body: "고속 바코드 판독 기술로 공급망 전반의 제품 추적성을 확보하고, 물류 효율과 데이터 정확성을 동시에 높입니다. 실제 콘텐츠는 추후 업데이트 예정입니다." },
      { title: "자동 분류 및 분류", body: "정밀 비전 시스템을 통해 제품을 형태·색상·크기 기준으로 자동 분류하고 불량품을 신속하게 배출하여 생산 효율을 극대화합니다. 실제 콘텐츠는 추후 업데이트 예정입니다." },
      { title: "측정 및 치수 확인", body: "비접촉식 정밀 측정 기술로 마이크로미터 단위의 치수 편차까지 실시간으로 검출하여 설계 규격 준수를 자동으로 보장합니다. 실제 콘텐츠는 추후 업데이트 예정입니다." },
      { title: "가이드 및 정렬", body: "비전 기반 가이드 시스템이 로봇 암과 자동화 장비의 정확한 위치 정렬을 실시간으로 지원하여 조립 정밀도를 향상시킵니다. 실제 콘텐츠는 추후 업데이트 예정입니다." },
      { title: "광학 문자 인식 (OCR)", body: "딥러닝 기반 OCR 엔진이 다양한 서체·방향·표면의 문자를 정확하게 판독하여 추적성 확보와 데이터 품질 향상에 기여합니다. 실제 콘텐츠는 추후 업데이트 예정입니다." },
    ],
    industryContent: [
      { title: "반도체", body: "웨이퍼·패키지 검사부터 마킹 판독까지, 반도체 제조 전 공정에 걸쳐 수율을 높이고 불량을 최소화합니다." },
      { title: "식음료", body: "라벨 검사, 이물질 감지, 용량 확인 등 식음료 라인의 품질 및 안전 기준을 자동으로 충족합니다." },
      { title: "자동차", body: "차체·엔진·전장부품의 결함 감지와 조립 검증을 통해 자동차 제조 품질을 보장합니다." },
      { title: "제약", body: "라벨·바코드·외관 검사로 의약품 규정 준수와 제품 추적성을 자동화합니다." },
      { title: "전자부품", body: "PCB·커넥터·소형 부품의 정밀 검사로 전자제품 생산 품질을 극대화합니다." },
      { title: "물류", body: "물류 센터의 바코드 판독과 자동 분류로 처리 속도와 정확도를 동시에 높입니다." },
    ],
  },

  resources: {
    ariaLabel: "인기 리소스 섹션",
    title: "인기 리소스",
    prevAria: "이전 슬라이드",
    nextAria: "다음 슬라이드",
    detailLabel: "자세히 보기",
    items: [
      { title: "QC용 비전 시스템 도입 사례", body: "Cognex 비전 시스템을 활용해 생산 라인 품질 관리를 완전 자동화한 사례를 소개합니다." },
      { title: "In-Sight 2000 바코드 판독 적용", body: "In-Sight 2000 시리즈를 활용한 고속 바코드 판독 솔루션의 설정 및 운용 가이드입니다." },
      { title: "자율 로봇을 위한 물류 비전", body: "자율 이동 로봇(AMR)과 비전 시스템의 통합으로 스마트 물류 센터를 구현하는 방법입니다." },
      { title: "고성능 바코드 머신비전 가이드", body: "다양한 바코드 유형과 환경에서 최적의 판독률을 확보하기 위한 기술 브리핑입니다." },
      { title: "소비재 제품 품질 보장 솔루션", body: "소비재 생산 라인에서 AI 비전으로 외관 불량과 라벨 오류를 실시간 감지한 사례입니다." },
      { title: "AI 기반 자동 결함 감지", body: "딥러닝 기반 결함 감지 모델을 빠르게 배포하고 현장에 적용하는 실전 가이드입니다." },
    ],
  },
};

export default ko;
