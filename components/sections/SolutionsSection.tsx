"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";

type MainTab = "application" | "industry";
const MAIN_TAB_IDS: readonly MainTab[] = ["application", "industry"];

/* ── 정적 데이터 (아이콘/이미지/href — 언어 무관) ── */
const APP_TAB_ICONS = [
  "icon-assembly-inspection",
  "icon-defect-detection",
  "icon-barcode-tracking",
  "icon-classification",
  "icon-measurement",
  "icon-guide-alignment",
  "icon-ocr",
] as const;

const APP_CONTENT_STATIC = [
  { image: "/images/solution-factory.png", href: "/solutions/assembly" },
  { image: "/images/solution-semiconductor.png", href: "/solutions/defect-detection" },
  { image: "/images/solution-barcode.png", href: "/solutions/barcode" },
  { image: "/images/solution-manufacturing.png", href: "/solutions/sorting" },
  { image: "/images/solution-bottle-inspection.png", href: "/solutions/measurement" },
  { image: "/images/solution-ai-inspection.png", href: "/solutions/guidance" },
  { image: "/images/solution-factory-2.png", href: "/solutions/ocr" },
] as const;

const INDUSTRY_CONTENT_STATIC = [
  { image: "/images/solution-semiconductor.png", href: "/solutions/semiconductor" },
  { image: "/images/solution-bottle-inspection.png", href: "/solutions/food-beverage" },
  { image: "/images/solution-factory.png", href: "/solutions/automotive" },
  { image: "/images/solution-manufacturing.png", href: "/solutions/pharma" },
  { image: "/images/solution-ai-inspection.png", href: "/solutions/electronics" },
  { image: "/images/solution-barcode.png", href: "/solutions/logistics" },
] as const;

/* ── 아이콘 마스크 컴포넌트 ── */
function TabIcon({ name, active }: { name: string; active: boolean }) {
  return (
    <span
      className="block w-5 h-5"
      style={{
        WebkitMaskImage: `url('/icons/${name}.svg')`,
        maskImage: `url('/icons/${name}.svg')`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        backgroundColor: active ? "#f5c400" : "#999999",
        transition: "background-color 0.2s ease",
      }}
    />
  );
}

/* ── 메인 컴포넌트 ── */
export default function SolutionsSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["solutions"];
}) {
  const [mainTab, setMainTab] = useState<MainTab>("application");
  const [appTab, setAppTab] = useState(0);
  const [indTab, setIndTab] = useState(0);

  const appTabs = dict.appTabs.map((label, i) => ({ label, icon: APP_TAB_ICONS[i] }));
  const appContent = dict.appContent.map((c, i) => ({ ...c, ...APP_CONTENT_STATIC[i] }));
  const industryContent = dict.industryContent.map((c, i) => ({ ...c, ...INDUSTRY_CONTENT_STATIC[i] }));

  const content = mainTab === "application" ? appContent[appTab] : industryContent[indTab];
  const mainTabLabels: Record<MainTab, string> = {
    application: dict.mainTabs.application,
    industry: dict.mainTabs.industry,
  };

  return (
    <section id="solutions" aria-label={dict.ariaLabel} className="bg-white py-20 pc:py-28">
      <div className="max-w-300 mx-auto px-5 pc:px-10">

        {/* ── 섹션 헤더 ── */}
        <div className="flex items-end justify-between mb-8 pc:mb-10">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
              {dict.eyebrow}
            </p>
            <h2 className="text-[1.85rem] pc:text-[2.4rem] font-bold text-dark leading-tight">
              {dict.title}
            </h2>
          </div>
          <Link
            href={localeHref(lang, "/solutions")}
            className="hidden pc:inline-flex items-center gap-1.5 text-sm font-medium text-dark border border-border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors shrink-0"
          >
            {dict.viewAllLabel}
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── 주 탭 (애플리케이션 / 산업) ── */}
        <div className="flex gap-2 mb-6">
          {MAIN_TAB_IDS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setMainTab(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                mainTab === tab
                  ? "bg-dark text-white"
                  : "text-muted hover:text-dark hover:bg-gray-100"
              }`}
            >
              {mainTabLabels[tab]}
            </button>
          ))}
        </div>

        {/* ── 보조 탭 (아이콘 + 레이블 / 산업 명칭) ── */}
        <div className="overflow-x-auto pb-1 mb-8 pc:mb-10 scrollbar-none">
          <div className="flex gap-2 min-w-max pc:min-w-0">
            {mainTab === "application"
              ? appTabs.map((t, i) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setAppTab(i)}
                    className={`flex flex-col items-center gap-1.5 px-3 pc:px-4 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                      appTab === i
                        ? "bg-dark border-dark text-white"
                        : "border-border text-muted hover:border-dark/30 hover:text-dark"
                    }`}
                  >
                    <TabIcon name={t.icon} active={appTab === i} />
                    <span className="whitespace-nowrap leading-tight text-center max-w-20">
                      {t.label}
                    </span>
                  </button>
                ))
              : dict.industryTabs.map((tab, i) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setIndTab(i)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all whitespace-nowrap ${
                      indTab === i
                        ? "bg-dark border-dark text-white"
                        : "border-border text-muted hover:border-dark/30 hover:text-dark"
                    }`}
                  >
                    {tab}
                  </button>
                ))
            }
          </div>
        </div>

        {/* ── 콘텐츠 카드 ── */}
        <div
          key={`${mainTab}-${mainTab === "application" ? appTab : indTab}`}
          className="flex flex-col pc:flex-row gap-0 rounded-2xl overflow-hidden border border-border"
          style={{ animation: "fadeIn 0.3s ease" }}
        >
          {/* 이미지 */}
          <div className="relative w-full pc:w-[55%] aspect-4/3 pc:aspect-auto pc:min-h-90 shrink-0 bg-zinc-100">
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-cover"
              sizes="(max-width: 1366px) 100vw, 660px"
            />
          </div>

          {/* 텍스트 */}
          <div className="flex flex-col justify-center gap-5 p-8 pc:p-12">
            <span className="self-start text-[10px] font-bold tracking-widest text-dark border border-dark px-3 py-1 rounded-full uppercase">
              {mainTab === "application" ? "APPLICATION" : "INDUSTRY"}
            </span>
            <h3 className="text-xl pc:text-2xl font-bold text-dark leading-snug">
              {content.title}
            </h3>
            <p className="text-sm pc:text-base text-muted leading-relaxed">
              {content.body}
            </p>
            <Link
              href={localeHref(lang, content.href)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark hover:underline self-start"
            >
              {dict.detailLabel}
              <ArrowUpRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 모바일 전체 보기 */}
        <div className="pc:hidden mt-6 text-center">
          <Link
            href={localeHref(lang, "/solutions")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-dark border border-border rounded-full px-5 py-2.5"
          >
            {dict.viewAllLabel} <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
