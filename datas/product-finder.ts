/* ── 제품 찾기 모달: 설문(퀴즈) 더미 데이터 ── */
/* 실제 제품/추천 로직이 정해지면 이 파일의 값만 교체하면 됩니다. */

export type FinderOption = {
  id: string;
  label: string;
};

export type FinderStep1Option = FinderOption & {
  desc: string;
  icon: "search" | "shield" | "target" | "bolt";
};

export type FinderProduct = {
  name: string;
  tag: string;
  image: string;
  description: string;
  href: string;
};

/* 1단계: 목적 선택 */
export const FINDER_STEP1_QUESTION = "무엇을 하려고 하시나요?";

export const FINDER_STEP1_OPTIONS: FinderStep1Option[] = [
  { id: "identify", label: "제품 식별", desc: "바코드, 코드, 라벨을 읽고 추적합니다", icon: "search" },
  { id: "inspect", label: "품질 검사", desc: "결함을 검출하고 품질을 판별합니다", icon: "shield" },
  { id: "measure", label: "치수 측정", desc: "위치와 치수를 정밀하게 측정합니다", icon: "target" },
  { id: "guide", label: "로봇 가이던스", desc: "로봇의 위치와 방향을 안내합니다", icon: "bolt" },
];

export type FinderStep1Id = (typeof FINDER_STEP1_OPTIONS)[number]["id"];

/* 2단계: 형태 선택 (1단계 선택지에 종속) */
export const FINDER_STEP2_QUESTION = "어떤 형태를 찾고 계신가요?";

export const FINDER_STEP2_OPTIONS: Record<FinderStep1Id, FinderOption[]> = {
  identify: [
    { id: "fixed", label: "고정형 스캐너" },
    { id: "handheld", label: "핸드헬드 스캐너" },
    { id: "mobile", label: "모바일 단말기" },
  ],
  inspect: [
    { id: "2d", label: "2D 머신비전 시스템" },
    { id: "3d", label: "3D 머신비전 시스템" },
    { id: "sensor", label: "비전 센서" },
  ],
  measure: [
    { id: "2d", label: "2D 측정 시스템" },
    { id: "3d", label: "3D 측정 시스템" },
  ],
  guide: [
    { id: "robot", label: "로봇 가이던스 시스템" },
    { id: "sensor", label: "비전 센서" },
  ],
};

/* 3단계: 산업 분야 선택 (공통) */
export const FINDER_STEP3_QUESTION = "적용될 산업 분야를 선택해주세요";

export const FINDER_STEP3_OPTIONS: FinderOption[] = [
  { id: "electronics", label: "전자" },
  { id: "automotive", label: "자동차" },
  { id: "logistics", label: "물류/포장" },
  { id: "food", label: "식음료" },
  { id: "etc", label: "기타" },
];

/* 결과: `${1단계}-${2단계}` 조합 → 추천 제품 목록 (더미 데이터) */
export const FINDER_RESULTS: Record<string, FinderProduct[]> = {
  "identify-fixed": [
    {
      name: "DataMan 8700",
      tag: "BARCODE READERS & SCANNERS",
      image: "/images/product_categories/products-barcode-reader.png",
      description: "고속 라인에 최적화된 고정형 산업용 바코드 리더입니다.",
      href: "/products/barcode-readers",
    },
    {
      name: "DataMan 470",
      tag: "BARCODE READERS & SCANNERS",
      image: "/images/product_categories/products-barcode-reader.png",
      description: "다양한 코드 손상 환경에서도 안정적으로 판독합니다.",
      href: "/products/barcode-readers",
    },
  ],
  "identify-handheld": [
    {
      name: "DataMan 8072",
      tag: "BARCODE READERS & SCANNERS",
      image: "/images/product_categories/products-barcode-reader.png",
      description: "현장 작업자를 위한 휴대용 산업용 스캐너입니다.",
      href: "/products/barcode-readers",
    },
  ],
  "identify-mobile": [
    {
      name: "MX-1000",
      tag: "BARCODE READERS & SCANNERS",
      image: "/images/product_categories/products-barcode-reader.png",
      description: "물류 현장에 특화된 모바일 컴퓨터 스캐너입니다.",
      href: "/products/barcode-readers",
    },
  ],
  "inspect-2d": [
    {
      name: "In-Sight 2800",
      tag: "MACHINE VISION SYSTEM",
      image: "/images/product_categories/products-vision-system.png",
      description: "설치가 간편한 올인원 2D 머신비전 시스템입니다.",
      href: "/products/vision-systems",
    },
    {
      name: "In-Sight 7000",
      tag: "MACHINE VISION SYSTEM",
      image: "/images/product_categories/products-vision-system.png",
      description: "복잡한 검사 애플리케이션을 위한 고성능 시스템입니다.",
      href: "/products/vision-systems",
    },
  ],
  "inspect-3d": [
    {
      name: "3D-A5000",
      tag: "3D MACHINE VISION SYSTEM",
      image: "/images/product_categories/products-3d-vision-system.png",
      description: "고정밀 3D 포인트 클라우드로 미세 결함을 검출합니다.",
      href: "/products/3d-vision",
    },
  ],
  "inspect-sensor": [
    {
      name: "In-Sight 2000",
      tag: "MACHINE VISION SYSTEM",
      image: "/images/product_categories/products-vision-system.png",
      description: "단순 검사 자동화에 적합한 비전 센서입니다.",
      href: "/products/vision-systems",
    },
  ],
  "measure-2d": [
    {
      name: "In-Sight 2800",
      tag: "MACHINE VISION SYSTEM",
      image: "/images/product_categories/products-vision-system.png",
      description: "2D 좌표 기반의 정밀 위치/치수 측정을 지원합니다.",
      href: "/products/vision-systems",
    },
  ],
  "measure-3d": [
    {
      name: "3D-A5000",
      tag: "3D MACHINE VISION SYSTEM",
      image: "/images/product_categories/products-3d-vision-system.png",
      description: "3D 형상 데이터를 기반으로 정밀 치수를 측정합니다.",
      href: "/products/3d-vision",
    },
  ],
  "guide-robot": [
    {
      name: "In-Sight 3800",
      tag: "MACHINE VISION SYSTEM",
      image: "/images/product_categories/products-vision-system.png",
      description: "로봇 피킹/정렬을 위한 비전 가이던스에 최적화되어 있습니다.",
      href: "/products/vision-systems",
    },
  ],
  "guide-sensor": [
    {
      name: "In-Sight 2000",
      tag: "MACHINE VISION SYSTEM",
      image: "/images/product_categories/products-vision-system.png",
      description: "단순 위치 가이던스를 위한 비전 센서입니다.",
      href: "/products/vision-systems",
    },
  ],
};

/* 매핑에 없는 조합일 때 보여줄 기본 결과 */
export const FINDER_DEFAULT_RESULTS: FinderProduct[] = [
  {
    name: "VisionPro Software",
    tag: "VISION SOFTWARE",
    image: "/images/product_categories/products-vision-software.png",
    description: "다양한 산업 환경에 맞춰 커스터마이징 가능한 비전 소프트웨어입니다.",
    href: "/products/software",
  },
];
