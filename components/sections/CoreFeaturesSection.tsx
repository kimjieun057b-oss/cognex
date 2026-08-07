import type { SVGProps } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

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

/* ── 정적 데이터 ── */
const FEATURE_ICONS = [IconProcessing, IconAI, IconSpeed, IconGlobe] as const;
const FEATURE_TAGS = [
  "Processing & Flexibility",
  "OneVision Platform",
  "High-Speed Inspection",
  "Global Standard",
] as const;

/* ── 메인 컴포넌트 ── */
export default function CoreFeaturesSection({ dict }: { dict: Dictionary["coreFeatures"] }) {
  const features = dict.features.map((f, i) => ({
    ...f,
    icon: FEATURE_ICONS[i],
    tag: FEATURE_TAGS[i],
  }));

  return (
    <section id="features" aria-label={dict.ariaLabel} className="bg-zinc-50 py-20 pc:py-28">
      <div className="max-w-300 mx-auto px-5 pc:px-10">

        {/* 섹션 헤더 */}
        <div className="mb-12 pc:mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
            WHY COGNEX
          </p>
          <h2 className="text-[1.85rem] pc:text-[2.4rem] font-bold text-dark leading-tight">
            {dict.title}
          </h2>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 pc:grid-cols-4 gap-4">
          {features.map((f) => {
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
