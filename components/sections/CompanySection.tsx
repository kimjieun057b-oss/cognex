"use client";

import { useRef, useState, useEffect } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

/* ── 정적 데이터 ── */
const STATS_VALUES = [
  { value: 1981, suffix: "", isYear: true },
  { value: 4000, suffix: "+", isYear: false },
  { value: 20, suffix: "+", isYear: false },
  { value: 1000, suffix: "+", isYear: false },
] as const;

const CIRCLE_OPACITY = ["ff", "99", "44"] as const;

/* ── IntersectionObserver 훅 ── */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ── 숫자 카운트업 ── */
function CountUp({
  target, suffix, isYear, started,
}: {
  target: number; suffix: string; isYear: boolean; started: boolean;
}) {
  const [count, setCount] = useState(isYear ? target : 0);

  useEffect(() => {
    if (!started || isYear) return;
    const DURATION = 1600;
    const startTime = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, isYear]);

  const display = count >= 1000 ? count.toLocaleString("en-US") : String(count);
  return <>{display}{suffix}</>;
}

/* ── 메인 컴포넌트 ── */
export default function CompanySection({ dict }: { dict: Dictionary["company"] }) {
  const { ref: topRef,   inView: topIn   } = useInView(0.15);
  const { ref: statsRef, inView: statsIn } = useInView(0.35);

  const circles = dict.circles.map((c, i) => ({ ...c, opacity: CIRCLE_OPACITY[i] }));
  const stats = dict.stats.map((label, i) => ({ label, ...STATS_VALUES[i] }));

  return (
    <section id="company" aria-label={dict.ariaLabel} className="bg-white overflow-hidden">

      {/* ── 상단: 텍스트 + 원형 탐색 ── */}
      <div
        ref={topRef}
        className="max-w-300 mx-auto px-5 pc:px-10 pt-20 pc:pt-28 pb-20 pc:pb-0
                   flex flex-col pc:flex-row pc:items-start pc:justify-between gap-14"
      >
        {/* 텍스트 */}
        <div
          className="pc:max-w-135 transition-all duration-700"
          style={{
            opacity: topIn ? 1 : 0,
            transform: topIn ? "none" : "translateY(24px)",
          }}
        >
          <p className="text-[11px] font-bold tracking-[0.2em] text-primary mb-3 uppercase">
            COGNEX AI
          </p>
          <h2 className="text-[1.85rem] pc:text-[2.4rem] font-bold text-dark leading-tight mb-5">
            {dict.title}
          </h2>
          <p className="text-sm pc:text-base text-muted leading-relaxed max-w-115">
            {dict.body}
          </p>
        </div>

        {/* 원형 탐색 버튼 — PC: 우측 수직 배치 / 모바일: 가운데 수직 배치 */}
        <div className="flex flex-col items-center pc:items-end -space-y-6 pc:-space-y-8 shrink-0 pc:-mr-6">
          {circles.map((c, i) => (
            <button
              key={c.label}
              type="button"
              aria-label={c.label}
              className="flex flex-col items-center justify-center rounded-full
                         w-40 h-40 pc:w-52.5 pc:h-52.5
                         transition-all duration-500 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: `#FFEC38${c.opacity}`,
                opacity: topIn ? 1 : 0,
                transform: topIn
                  ? "translateY(0)"
                  : `translateY(${16 + i * 8}px)`,
                transitionDelay: `${100 + i * 180}ms`,
              }}
            >
              <span className="text-sm pc:text-base font-bold text-dark leading-tight">
                {c.label}
              </span>
              <span className="text-[11px] pc:text-xs text-dark/50 mt-1">
                {c.sub}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── 하단: 통계 바 ── */}
      {/* PC: 컨테이너 안쪽 250px 지점부터 우측으로 꽉 채운 라운드 박스 */}
      <div ref={statsRef} className="relative mt-4 pc:mt-0 pb-20 pc:pb-28">

        {/* Mobile */}
        <div className="pc:hidden mx-5">
          <div className="bg-gray-100 rounded-2xl py-8 px-6">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <StatItem key={stat.label} stat={stat} i={i} started={statsIn} />
              ))}
            </div>
          </div>
        </div>

        {/* PC — 좌측은 컨테이너 중간쯤에서 시작, 우측은 화면 끝까지 */}
        <div className="hidden pc:block">
          <div
            className="pc:ml-[max(0px,calc(50vw-600px+200px))] bg-gray-100 rounded-l-3xl py-12"
          >
            <div className="max-w-250 px-16">
              <div className="grid grid-cols-4 gap-0">
                {stats.map((stat, i) => (
                  <StatItem key={stat.label} stat={stat} i={i} started={statsIn} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── 통계 아이템 ── */
function StatItem({
  stat, i, started,
}: {
  stat: { label: string; value: number; suffix: string; isYear: boolean };
  i: number;
  started: boolean;
}) {
  return (
    <div
      className="transition-all duration-500"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "none" : "translateY(10px)",
        transitionDelay: `${i * 120}ms`,
      }}
    >
      <p className="text-xs pc:text-sm text-muted mb-2">{stat.label}</p>
      <p className="text-3xl pc:text-4xl font-bold text-dark tracking-tight">
        <CountUp
          target={stat.value}
          suffix={stat.suffix}
          isYear={stat.isYear}
          started={started}
        />
      </p>
    </div>
  );
}
