"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon, TargetIcon, LayersIcon, BoltIcon, ShieldCheckIcon } from "@/components/icons";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";
import { CORE_FEATURES_STATIC, CORE_FEATURES_CYCLE_DURATION } from "@/datas/core-features";

const FEATURE_ICONS = {
  target: TargetIcon,
  layers: LayersIcon,
  bolt: BoltIcon,
  shield: ShieldCheckIcon,
} as const;

/* ── 메인 컴포넌트 ── */
export default function CoreFeaturesSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["coreFeatures"];
}) {
  const features = dict.features.map((f, i) => ({ ...f, ...CORE_FEATURES_STATIC[i] }));

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % features.length);
    }, CORE_FEATURES_CYCLE_DURATION);
    return () => clearInterval(id);
  }, [features.length]);

  return (
    <section
      id="features"
      aria-label={dict.ariaLabel}
      className="relative overflow-hidden bg-dark bg-[url('/images/advanced-background.png')] bg-cover bg-right"
    >
      <span className="absolute inset-0 bg-black/65" aria-hidden="true" />

      <div className="relative">

        {/* 섹션 헤더 */}
        <div className="flex items-end justify-between mb-10 pc:mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
              ADVANCED MACHINE VISION MADE EASY
            </p>
            <h2 className="text-[1.85rem] pc:text-[2.4rem] font-bold text-white leading-tight">
              {dict.title}
            </h2>
          </div>
          <Link
            href={localeHref(lang, "/")}
            className="hidden pc:inline-flex items-center gap-1.5 text-sm font-medium text-white border border-white/30 rounded-full px-4 py-2 hover:bg-white/10 transition-colors shrink-0"
          >
            {dict.viewAllLabel}
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 카드 목록 — 모바일: 100% 너비로 세로 나열 / PC: 4등분 가로 배치 */}
        <div className="space-y-4 pc:space-y-0 pc:flex pc:gap-4">
          {features.map((f, i) => {
            const Icon = FEATURE_ICONS[f.icon];
            return (
              <div
                key={f.title}
                className={`flex flex-col justify-end w-full pc:flex-1 min-h-56 pc:min-h-72 gap-3 p-6 pc:p-8 border bg-black/35 backdrop-blur-sm cursor-default select-none transition-colors duration-700 ${
                  i === active ? "border-primary" : "border-white/10"
                }`}
              >
                <p className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase">
                  {f.eyebrow}
                </p>
                <Icon className="w-7 h-7 text-primary" />
                <h3 className="text-lg pc:text-xl font-bold text-white leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
