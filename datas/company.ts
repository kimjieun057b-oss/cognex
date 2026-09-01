/* ── CompanySection: 정적 데이터 (통계 수치/원형 버튼 투명도 — 언어 무관) ── */

export const STATS_VALUES = [
  { value: 1981, suffix: "", isYear: true },
  { value: 4000, suffix: "+", isYear: false },
  { value: 20, suffix: "+", isYear: false },
  { value: 1000, suffix: "+", isYear: false },
] as const;

export const CIRCLE_OPACITY = ["ff", "99", "44"] as const;
