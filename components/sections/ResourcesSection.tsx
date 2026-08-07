"use client";

import { useRef } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";

/* ── 아이콘 ── */
function ChevronLeft() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="w-5 h-5">
      <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="w-5 h-5">
      <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5">
      <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── 정적 데이터 (카테고리 태그/이미지/href — 언어 무관) ── */
const RESOURCE_STATIC = [
  { category: "CASE STUDY", image: "/images/solution-semiconductor.png", href: "/resources/qc-vision" },
  { category: "APPLICATION NOTE", image: "/images/product-vision-sensor.png", href: "/resources/insight-2000" },
  { category: "WHITE PAPER", image: "/images/product-robot-vision.png", href: "/resources/amr-vision" },
  { category: "TECH BRIEF", image: "/images/solution-barcode.png", href: "/resources/barcode-guide" },
  { category: "CASE STUDY", image: "/images/solution-bottle-inspection.png", href: "/resources/consumer-goods" },
  { category: "APPLICATION NOTE", image: "/images/solution-ai-inspection.png", href: "/resources/ai-defect" },
] as const;

type Resource = {
  category: string;
  image: string;
  href: string;
  title: string;
  body: string;
};

/* ── 메인 컴포넌트 ── */
export default function ResourcesSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["resources"];
}) {
  const sliderRef = useRef<Slider>(null);

  const resources: Resource[] = dict.items.map((item, i) => ({ ...item, ...RESOURCE_STATIC[i] }));

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.2, centerMode: false },
      },
    ],
  };

  return (
    <section
      id="resources"
      aria-label={dict.ariaLabel}
      className="bg-dark-nav py-20 pc:py-28 overflow-hidden"
    >
      <div className="max-w-300 mx-auto px-5 pc:px-10">

        {/* ── 헤더 ── */}
        <div className="flex items-end justify-between mb-10 pc:mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
              POPULAR RESOURCES
            </p>
            <h2 className="text-[1.85rem] pc:text-[2.4rem] font-bold text-white leading-tight">
              {dict.title}
            </h2>
          </div>

          {/* 화살표 버튼 */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label={dict.prevAria}
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/60 hover:bg-white/10 transition-all"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              aria-label={dict.nextAria}
              onClick={() => sliderRef.current?.slickNext()}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/60 hover:bg-white/10 transition-all"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

      </div>

      {/* ── 슬라이더 (컨테이너 밖까지 넘침) ── */}
      <div className="pl-5 pc:pl-[max(1.25rem,calc(50vw-580px))]">
        <Slider ref={sliderRef} {...settings}>
          {resources.map((r) => (
            <div key={r.href} className="pr-4 pc:pr-5">
              <ResourceCard resource={r} lang={lang} detailLabel={dict.detailLabel} />
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
}

/* ── 리소스 카드 ── */
function ResourceCard({
  resource,
  lang,
  detailLabel,
}: {
  resource: Resource;
  lang: Locale;
  detailLabel: string;
}) {
  return (
    <Link
      href={localeHref(lang, resource.href)}
      className="group block rounded-2xl overflow-hidden bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-colors"
    >
      {/* 이미지 */}
      <div className="relative h-44 pc:h-48 overflow-hidden bg-zinc-800">
        <Image
          src={resource.image}
          alt={resource.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 80vw, (max-width: 1366px) 33vw, 280px"
        />
      </div>

      {/* 텍스트 */}
      <div className="p-5 flex flex-col gap-2 min-h-40">
        <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
          {resource.category}
        </span>
        <h3 className="text-sm pc:text-base font-bold text-white leading-snug line-clamp-2">
          {resource.title}
        </h3>
        <p className="text-xs text-white/40 leading-relaxed line-clamp-3 flex-1">
          {resource.body}
        </p>
        <div className="flex justify-end mt-2">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/60 group-hover:text-white transition-colors">
            {detailLabel}
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </Link>
  );
}
