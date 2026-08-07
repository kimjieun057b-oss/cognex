"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import Image from "next/image";
import Link from "next/link";

const SLIDE_DURATION = 5000;

const SLIDES = [
  {
    label: ["복잡한 자동화 과제를 해결하는", "처리능력과 유연성"],
    image: "/images/product-insightai.png",
    alt: "Cognex In-Sight AI 머신 비전 시스템",
  },
  {
    label: ["OneVision을 통한", "AI 검사 프로세스 표준화&확장"],
    image: "/images/product-software.png",
    alt: "Cognex OneVision 소프트웨어",
  },
  {
    label: ["AI 기반의 초고속 검사로", "원활한 생산라인 운영"],
    image: "/images/product-vision-sensor.png",
    alt: "Cognex 비전 센서",
  },
  {
    label: ["500개 이상의 업체가 선택한", "Cognex AI 비전"],
    image: "/images/product-3d-laser.png",
    alt: "Cognex 3D 레이저 스캐너",
  },
] as const;

export default function HeroSection() {
  const sliderRef = useRef<Slider>(null);
  const [current, setCurrent] = useState(0);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: SLIDE_DURATION,
    speed: 500,
    fade: true,
    cssEase: "ease-in-out",
    beforeChange: (_old: number, next: number) => setCurrent(next),
  };

  const goTo = (i: number) => {
    sliderRef.current?.slickGoTo(i);
  };

  return (
    <section id="hero" aria-label="히어로 섹션" className="bg-dark-hero">

      {/* ── 메인 콘텐츠 ── */}
      <div className="max-w-[1200px] mx-auto px-5 pc:px-10">
        <div className="flex flex-col pc:flex-row pc:items-center pc:justify-between py-16 pc:py-24 gap-12 pc:gap-0">

          {/* 좌측: 고정 텍스트 */}
          <div className="flex flex-col gap-6 pc:max-w-[440px]">
            <h1 className="text-[2rem] pc:text-[3rem] font-bold text-white leading-tight">
              지속적으로 제공하는
              <br />
              새로운 AI 비전
            </h1>
            <p className="text-sm pc:text-base text-white/55 leading-relaxed">
              높은 정확도와 사용 편의성으로 자동화 문제를
              <br className="hidden pc:block" />
              해결하도록 설계된 Cognex의 최신 AI 기반 제품을
              <br className="hidden pc:block" />
              확인해보세요.
            </p>
            <Link
              href="/products"
              className="self-start bg-primary text-dark text-sm font-bold px-6 py-3 hover:bg-primary-hover transition-colors"
            >
              Download Product Guide
            </Link>
          </div>

          {/* 우측: 이미지 슬라이더 */}
          <div className="mx-auto pc:mx-0 w-[260px] pc:w-[360px] rounded-3xl overflow-hidden bg-white/5 shrink-0">
            <Slider ref={sliderRef} {...settings}>
              {SLIDES.map((slide) => (
                <div key={slide.image}>
                  <div className="flex items-center justify-center h-[260px] pc:h-[360px]">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      width={300}
                      height={300}
                      className="object-contain p-6 w-full h-full"
                      priority={slide.image === SLIDES[0].image}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* ── 하단 슬라이드 탭 ── */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 pc:px-10">

          {/* PC: 4컬럼 */}
          <div className="hidden pc:grid pc:grid-cols-4">
            {SLIDES.map((slide, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`슬라이드 ${i + 1}: ${slide.label.join(" ")}`}
                className={`text-left py-6 pr-8 transition-opacity ${
                  i === current ? "opacity-100" : "opacity-35 hover:opacity-55"
                }`}
              >
                {/* 게이지 바 — key로 리마운트해 애니메이션 리셋 */}
                <div className="relative h-[2px] bg-white/20 mb-4 overflow-hidden">
                  {i === current && (
                    <div
                      key={current}
                      className="absolute inset-y-0 left-0 bg-primary"
                      style={{
                        animation: `gaugeBar ${SLIDE_DURATION}ms linear forwards`,
                      }}
                    />
                  )}
                  {i < current && (
                    <div className="absolute inset-y-0 left-0 right-0 bg-primary/50" />
                  )}
                </div>
                <p
                  className={`text-sm text-white leading-snug ${
                    i === current ? "font-semibold" : "font-normal"
                  }`}
                >
                  {slide.label[0]}
                  <br />
                  {slide.label[1]}
                </p>
              </button>
            ))}
          </div>

          {/* 모바일: 현재 탭 + 점 인디케이터 */}
          <div className="pc:hidden py-5">
            <div className="relative h-[2px] bg-white/20 mb-4 overflow-hidden">
              <div
                key={current}
                className="absolute inset-y-0 left-0 bg-primary"
                style={{ animation: `gaugeBar ${SLIDE_DURATION}ms linear forwards` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white leading-snug">
                {SLIDES[current].label[0]}
                <br />
                {SLIDES[current].label[1]}
              </p>
              <div className="flex gap-1.5 shrink-0">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`슬라이드 ${i + 1}로 이동`}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-primary w-4" : "bg-white/30 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
