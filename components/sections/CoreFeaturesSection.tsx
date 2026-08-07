import type { SVGProps } from "react";

/* ── 아이콘 ── */
function IconProcessing(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...p}>
      <rect x="6" y="6" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 16h10M16 11v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M2 16h4M26 16h4M16 2v4M16 26v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconAI(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...p}>
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M16 3v4M16 25v4M3 16h4M25 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconSpeed(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...p}>
      <path d="M4 22a12 12 0 1 1 24 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 22V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 22l7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="22" r="2" fill="currentColor" />
    </svg>
  );
}

function IconGlobe(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...p}>
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 3c0 0-5 5-5 13s5 13 5 13M16 3c0 0 5 5 5 13s-5 13-5 13" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 16h26M5 10h22M5 22h22" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/* ── 데이터 ── */
const FEATURES = [
  {
    icon: IconProcessing,
    title: "복잡한 자동화 과제 해결",
    body: "고성능 처리능력과 뛰어난 유연성으로 어떠한 복잡한 자동화 문제도 정확하고 효율적으로 해결합니다.",
    tag: "Processing & Flexibility",
  },
  {
    icon: IconAI,
    title: "AI 검사 프로세스 표준화",
    body: "OneVision 기반의 통합 플랫폼으로 AI 검사 프로세스를 손쉽게 표준화하고 현장 규모에 맞게 확장합니다.",
    tag: "OneVision Platform",
  },
  {
    icon: IconSpeed,
    title: "초고속 AI 비전 검사",
    body: "AI 기반 초고속 검사 기술로 생산라인을 끊김 없이 운영하며, 불량률을 최소화하고 품질을 극대화합니다.",
    tag: "High-Speed Inspection",
  },
  {
    icon: IconGlobe,
    title: "검증된 글로벌 솔루션",
    body: "전 세계 500개 이상의 기업이 신뢰하는 Cognex AI 비전 솔루션으로 업계 표준을 선도합니다.",
    tag: "Global Standard",
  },
] as const;

/* ── 메인 컴포넌트 ── */
export default function CoreFeaturesSection() {
  return (
    <section id="features" aria-label="핵심 특장점 섹션" className="bg-zinc-50 py-20 pc:py-28">
      <div className="max-w-300 mx-auto px-5 pc:px-10">

        {/* 섹션 헤더 */}
        <div className="mb-12 pc:mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
            WHY COGNEX
          </p>
          <h2 className="text-[1.85rem] pc:text-[2.4rem] font-bold text-dark leading-tight">
            Cognex를 선택해야 하는 이유
          </h2>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 pc:grid-cols-4 gap-4">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="
                  group relative flex flex-col gap-5 p-7 pc:p-8
                  bg-white border border-border rounded-2xl
                  cursor-default select-none
                  transition-colors duration-300
                  hover:bg-primary hover:border-primary
                "
              >
                {/* 태그 */}
                <span className="text-[10px] font-semibold tracking-widest text-muted uppercase
                                 group-hover:text-dark/50 transition-colors duration-300">
                  {f.tag}
                </span>

                {/* 아이콘 */}
                <Icon className="w-8 h-8 text-primary group-hover:text-dark transition-colors duration-300" />

                {/* 텍스트 */}
                <div className="flex flex-col gap-2 mt-auto">
                  <h3 className="text-base font-bold text-dark leading-snug
                                 group-hover:text-dark transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed
                                group-hover:text-dark/65 transition-colors duration-300">
                    {f.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
