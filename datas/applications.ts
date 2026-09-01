/* ── SolutionsSection: 애플리케이션 탭 정적 데이터 (아이콘/이미지/href — 언어 무관) ── */

export const APP_TAB_ICONS = [
  "solutions-assembly-inspection",
  "solutions-defect-detection",
  "solutions-barcode-tracking",
  "solutions-classification",
  "solutions-measurement",
  "solutions-guide-alignment",
  "solutions-ocr",
] as const;

export const APP_CONTENT_STATIC = [
  { image: "/images/solutions/solutions-assembly-inspection.png", href: "/solutions/assembly" },
  { image: "/images/solutions/solutions-defect-detection.png", href: "/solutions/defect-detection" },
  { image: "/images/solutions/solutions-barcode-tracking.png", href: "/solutions/barcode" },
  { image: "/images/solutions/solutions-classification.png", href: "/solutions/sorting" },
  { image: "/images/solutions/solutions-measurement.png", href: "/solutions/measurement" },
  { image: "/images/solutions-guide-alignment.png", href: "/solutions/guidance" },
  { image: "/images/solutions-ocr.png", href: "/solutions/ocr" },
] as const;
