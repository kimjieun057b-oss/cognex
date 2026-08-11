"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";

const SLIDE_DURATION = 5000;

const SLIDE_IMAGES = [
  "/images/product-insightai.png",
  "/images/product-software.png",
  "/images/product-vision-sensor.png",
  "/images/product-3d-laser.png",
] as const;

export type HeroSlideView = {
  label: [string, string];
  alt: string;
  ariaLabel: string;
  goToAriaLabel: string;
};

export default function HeroSection({
  lang,
  ariaLabel,
  title,
  body,
  cta,
  slides: slideData,
}: {
  lang: Locale;
  ariaLabel: string;
  title: [string, string];
  body: string;
  cta: string;
  slides: HeroSlideView[];
}) {
  const sliderRef = useRef<Slider>(null);
  const [current, setCurrent] = useState(0);

  const slides = slideData.map((slide, i) => ({
    ...slide,
    image: SLIDE_IMAGES[i],
  }));

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
    <section id="hero" aria-label={ariaLabel} className="bg-dark-hero">

      {/* ── 메인 콘텐츠 ── */}
      <div className="max-w-300 mx-auto px-5 pc:px-10">
        <div className="flex flex-col pc:flex-row pc:items-center pc:justify-between py-16 pc:py-24 gap-12 pc:gap-0">

          {/* 좌측: 고정 텍스트 */}
          <div className="flex flex-col gap-6 pc:max-w-110">
            <h1 className="text-[2rem] pc:text-[3rem] font-bold text-white leading-tight">
              {title[0]}
              <br />
              {title[1]}
            </h1>
            <p className="text-sm pc:text-base text-white/55 leading-relaxed">
              {body}
            </p>
            <Link
              href={localeHref(lang, "/")}
              className="self-start bg-primary text-dark text-sm font-bold px-6 py-3 hover:bg-primary-hover transition-colors"
            >
              {cta}
            </Link>
          </div>

          {/* 우측: 이미지 슬라이더 */}
          <div className="mx-auto pc:mx-0 w-65 pc:w-90 rounded-3xl overflow-hidden bg-white/5 shrink-0">
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide) => (
                <div key={slide.image}>
                  <div className="flex items-center justify-center h-65 pc:h-90">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      width={300}
                      height={300}
                      className="object-contain p-6 w-full h-full"
                      priority={slide.image === SLIDE_IMAGES[0]}
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
        <div className="max-w-300 mx-auto px-5 pc:px-10">

          {/* PC: 4컬럼 */}
          <div className="hidden pc:grid pc:grid-cols-4">
            {slides.map((slide, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={slide.ariaLabel}
                className={`text-left py-6 pr-8 transition-opacity ${
                  i === current ? "opacity-100" : "opacity-35 hover:opacity-55"
                }`}
              >
                {/* 게이지 바 — key로 리마운트해 애니메이션 리셋 */}
                <div className="relative h-0.5 bg-white/20 mb-4 overflow-hidden">
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
            <div className="relative h-0.5 bg-white/20 mb-4 overflow-hidden">
              <div
                key={current}
                className="absolute inset-y-0 left-0 bg-primary"
                style={{ animation: `gaugeBar ${SLIDE_DURATION}ms linear forwards` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white leading-snug">
                {slides[current].label[0]}
                <br />
                {slides[current].label[1]}
              </p>
              <div className="flex gap-1.5 shrink-0">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={slides[i].goToAriaLabel}
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
