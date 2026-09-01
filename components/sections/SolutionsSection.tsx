"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";
import { APP_TAB_ICONS, APP_CONTENT_STATIC } from "@/datas/applications";

/* ── 아이콘 마스크 컴포넌트 ── */
function TabIcon({ name, active }: { name: string; active: boolean }) {
  return (
    <span
      className="block w-5 h-5"
      style={{
        WebkitMaskImage: `url('/icons/${name}.png')`,
        maskImage: `url('/icons/${name}.png')`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        backgroundColor: active ? "#111111" : "#999999",
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
  const [appTab, setAppTab] = useState(0);

  const appTabs = dict.appTabs.map((label, i) => ({ label, icon: APP_TAB_ICONS[i] }));
  const appContent = dict.appContent.map((c, i) => ({ ...c, ...APP_CONTENT_STATIC[i] }));

  const content = appContent[appTab];

  return (
    <section id="solutions" aria-label={dict.ariaLabel} className="bg-white">
      <div>

        {/* ── 섹션 헤더 ── */}
        <div className="flex flex-col items-start gap-4 mb-8 pc:flex-row pc:items-end pc:justify-between pc:mb-10">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
              {dict.eyebrow}
            </p>
            <h2 className="text-[1.85rem] pc:text-[2.4rem] font-bold text-dark leading-tight">
              {dict.title}
            </h2>
          </div>
          <Link
            href={localeHref(lang, "/")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-dark border border-border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors shrink-0"
          >
            {dict.viewAllLabel}
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── 주 탭 (애플리케이션 / 산업) — 산업 데이터 준비 전까지 비활성 표시만 ── */}
        <div className="flex items-center gap-6 border-b border-border mb-6">
          <span className="pb-3 text-sm pc:text-base font-bold text-dark border-b-2 border-dark -mb-px">
            {dict.mainTabs.application}
          </span>
          <span className="pb-3 text-sm pc:text-base font-medium text-muted/50 cursor-not-allowed select-none">
            {dict.mainTabs.industry}
          </span>
        </div>

        {/* ── 애플리케이션 탭 (아이콘 + 레이블) ── */}
        <div className="overflow-x-auto pb-1 mb-8 pc:mb-10 scrollbar-none">
          <div className="flex gap-2 min-w-max pc:min-w-0">
            {appTabs.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setAppTab(i)}
                className={`flex flex-col items-center gap-2 px-4 py-3 pc:flex-1 pc:px-3 pc:py-4 rounded-xl text-xs font-medium transition-colors ${
                  appTab === i
                    ? "bg-primary-hover text-dark"
                    : "bg-zinc-100 text-muted hover:bg-zinc-200"
                }`}
              >
                <TabIcon name={t.icon} active={appTab === i} />
                <span className="whitespace-nowrap leading-tight text-center">
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── 콘텐츠 카드 ── */}
        <div
          key={appTab}
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
            <Image
              src="/icons/ui-video-on.png"
              alt=""
              aria-hidden="true"
              width={64}
              height={64}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 pc:w-16 pc:h-16"
            />
          </div>

          {/* 텍스트 */}
          <div className="flex flex-col justify-center gap-5 p-8 pc:p-12">
            <span className="self-start text-[10px] font-bold tracking-widest text-white bg-dark px-3 py-1.5 rounded-full uppercase">
              APPLICATION
            </span>
            <h3 className="text-xl pc:text-2xl font-bold text-dark leading-snug">
              {content.title}
            </h3>
            <p className="text-sm pc:text-base text-muted leading-relaxed">
              {content.body}
            </p>
            <Link
             href={localeHref(lang, "/")}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-dark border border-border rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors self-start"
            >
              {dict.detailLabel}
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
