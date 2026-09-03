"use client";

import { useRef, useState, useEffect } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { STATS_VALUES, CIRCLE_OPACITY } from "@/datas/company";

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

  const display = !isYear && count >= 1000 ? count.toLocaleString("en-US") : String(count);
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
      <div className="pb-0">

        {/* ── 상단: 텍스트 + 원형 탐색 ── */}
        <div
          ref={topRef}
          className="flex flex-col pc:flex-row pc:items-start pc:justify-between gap-14"
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

          {/* 원형 탐색 버튼 — PC: 원형, 우측 겹쳐서 배치 / 모바일: 알약형, 세로로 나열 */}
          <div className="flex flex-col items-center pc:items-end gap-4 pc:gap-0 pc:-space-y-8 shrink-0 w-full pc:w-auto pc:-mr-6">
            {circles.map((c, i) => (
              <button
                key={c.label}
                type="button"
                aria-label={c.label}
                className="flex flex-col items-center justify-center rounded-full
                           w-full h-32 pc:w-52.5 pc:h-52.5
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
        {/* 좌우 화면 끝까지 꽉 채운 라운드 박스 — section>div의 max-w/padding 밖으로 bleed */}
        <div ref={statsRef} className="relative mt-16 pc:mt-20">

          {/* Mobile — 화면 양쪽 끝까지 */}
          <div className="pc:hidden mx-[calc(50%-50vw)]">
            <div className="bg-gray-100 rounded-tl-3xl py-8 px-6">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <StatItem key={stat.label} stat={stat} i={i} started={statsIn} />
                ))}
              </div>
            </div>
          </div>

          {/* PC — 좌측은 컨테이너 안쪽 200px 지점에서 시작, 우측은 화면 끝까지 */}
          <div className="hidden pc:block">
            <div className="pc:ml-50 pc:mr-[calc(50%-50vw)] bg-gray-100 rounded-l-3xl py-12">
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
