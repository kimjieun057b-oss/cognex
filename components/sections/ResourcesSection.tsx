"use client";

import { useRef } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import Image from "next/image";
import Link from "next/link";

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

/* ── 리소스 데이터 ── */
const RESOURCES = [
  {
    category: "CASE STUDY",
    title: "QC용 비전 시스템 도입 사례",
    body: "Cognex 비전 시스템을 활용해 생산 라인 품질 관리를 완전 자동화한 사례를 소개합니다.",
    image: "/images/solution-semiconductor.png",
    href: "/resources/qc-vision",
  },
  {
    category: "APPLICATION NOTE",
    title: "In-Sight 2000 바코드 판독 적용",
    body: "In-Sight 2000 시리즈를 활용한 고속 바코드 판독 솔루션의 설정 및 운용 가이드입니다.",
    image: "/images/product-vision-sensor.png",
    href: "/resources/insight-2000",
  },
  {
    category: "WHITE PAPER",
    title: "자율 로봇을 위한 물류 비전",
    body: "자율 이동 로봇(AMR)과 비전 시스템의 통합으로 스마트 물류 센터를 구현하는 방법입니다.",
    image: "/images/product-robot-vision.png",
    href: "/resources/amr-vision",
  },
  {
    category: "TECH BRIEF",
    title: "고성능 바코드 머신비전 가이드",
    body: "다양한 바코드 유형과 환경에서 최적의 판독률을 확보하기 위한 기술 브리핑입니다.",
    image: "/images/solution-barcode.png",
    href: "/resources/barcode-guide",
  },
  {
    category: "CASE STUDY",
    title: "소비재 제품 품질 보장 솔루션",
    body: "소비재 생산 라인에서 AI 비전으로 외관 불량과 라벨 오류를 실시간 감지한 사례입니다.",
    image: "/images/solution-bottle-inspection.png",
    href: "/resources/consumer-goods",
  },
  {
    category: "APPLICATION NOTE",
    title: "AI 기반 자동 결함 감지",
    body: "딥러닝 기반 결함 감지 모델을 빠르게 배포하고 현장에 적용하는 실전 가이드입니다.",
    image: "/images/solution-ai-inspection.png",
    href: "/resources/ai-defect",
  },
] as const;

/* ── 메인 컴포넌트 ── */
export default function ResourcesSection() {
  const sliderRef = useRef<Slider>(null);

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
      aria-label="인기 리소스 섹션"
      className="bg-dark-nav py-20 pc:py-28 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 pc:px-10">

        {/* ── 헤더 ── */}
        <div className="flex items-end justify-between mb-10 pc:mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
              POPULAR RESOURCES
            </p>
            <h2 className="text-[1.85rem] pc:text-[2.4rem] font-bold text-white leading-tight">
              인기 리소스
            </h2>
          </div>

          {/* 화살표 버튼 */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label="이전 슬라이드"
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/60 hover:bg-white/10 transition-all"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              aria-label="다음 슬라이드"
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
          {RESOURCES.map((r) => (
            <div key={r.href} className="pr-4 pc:pr-5">
              <ResourceCard resource={r} />
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
}: {
  resource: (typeof RESOURCES)[number];
}) {
  return (
    <Link
      href={resource.href}
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
      <div className="p-5 flex flex-col gap-2 min-h-[160px]">
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
            자세히 보기
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </Link>
  );
}
