"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";
import { ArrowUpRightIcon } from "@/components/icons";

const SLIDE_DURATION = 6000;

export type SuccessStoryView = {
  title: string;
  heading: string;
  body: string;
  image: string;
  href: string;
  ariaLabel: string;
};

export default function SuccessStoriesSection({
  lang,
  ariaLabel,
  eyebrow,
  title,
  viewAllLabel,
  detailLabel,
  stories,
}: {
  lang: Locale;
  ariaLabel: string;
  eyebrow: string;
  title: string;
  viewAllLabel: string;
  detailLabel: string;
  stories: SuccessStoryView[];
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % stories.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [stories.length]);

  const story = stories[current];

  return (
    <section id="success-stories" aria-label={ariaLabel} className="bg-dark">
      <div>
        {/* ── 헤더 ── */}
        <div className="flex flex-col items-start gap-5 pc:flex-row pc:items-end pc:justify-between pc:gap-4 mb-10 pc:mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
              {eyebrow}
            </p>
            <h2 className="text-[1.85rem] pc:text-[2.4rem] font-bold text-white leading-tight">
              {title}
            </h2>
          </div>

          <Link
            href={localeHref(lang, "/")}
            className="shrink-0 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            {viewAllLabel}
          </Link>
        </div>

        {/* ── 카드 ── */}
        <div key={current} aria-label={story.ariaLabel} style={{ animation: "fadeIn 0.4s ease" }}>
          <h3 className="text-xl pc:text-[1.7rem] font-bold text-white leading-snug mb-6 pc:mb-8 pc:max-w-2xl">
            {story.title}
          </h3>

          <div className="flex flex-col pc:flex-row pc:items-end gap-4 pc:gap-6">
            {/* 이미지 */}
            <div className="order-1 pc:order-2 relative w-full pc:flex-1 h-64 pc:h-105 rounded-2xl overflow-hidden bg-zinc-800">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover"
                sizes="(max-width: 1366px) 100vw, 60vw"
                priority
              />
            </div>

            {/* 텍스트 카드 */}
            <Link
              href={localeHref(lang, story.href)}
              className="group order-2 pc:order-1 shrink-0 w-full pc:w-90 bg-[#1c1c1c] hover:bg-dark-hero transition-colors rounded-2xl p-7 pc:p-8 flex flex-col gap-4"
            >
              <h4 className="text-base pc:text-lg font-bold text-white leading-snug">
                {story.heading}
              </h4>
              <p className="text-sm text-white/55 leading-relaxed">
                {story.body}
              </p>
              <span className="self-end inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 group-hover:text-white transition-colors">
                {detailLabel}
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
