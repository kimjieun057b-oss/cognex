"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  PhoneIcon,
  InstagramIcon,
  YoutubeIcon,
  ChevronDownIcon,
  ArrowUpIcon,
  SearchIcon,
} from "@/components/icons";
import ProductFinderModal from "@/components/modals/ProductFinderModal";
import type { Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";
import type { Dictionary } from "@/i18n/dictionaries";

const fieldClass =
  "w-full bg-transparent border border-white/25 rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/50 transition-colors";

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["footer"];
}) {
  const navLinks = siteConfig.footerLinks.nav.map((link, i) => ({
    ...link,
    label: dict.navLabels[i],
  }));
  const legalLinks = siteConfig.footerLinks.legal.map((link, i) => ({
    ...link,
    label: dict.legalLabels[i],
  }));

  const [finderOpen, setFinderOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ProductFinderModal lang={lang} open={finderOpen} onClose={() => setFinderOpen(false)} />

      {/* 우측 하단 플로팅 버튼: 검색 + 맨 위로 이동 */}
      <div className="fixed bottom-6 right-5 pc:right-10 z-50 flex flex-col items-center gap-3">
        <button
          type="button"
          aria-label="제품 찾기"
          onClick={() => setFinderOpen(true)}
          className="w-11 h-11 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15)] flex items-center justify-center hover:shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-shadow"
        >
          <SearchIcon className="w-4.5 h-4.5 text-black" />
        </button>
        <button
          type="button"
          aria-label="맨 위로 이동"
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <ArrowUpIcon className="w-4.5 h-4.5 text-black" />
        </button>
      </div>

      <footer className="bg-dark text-white" aria-label={dict.footerAria}>
      <div className="max-w-300 mx-auto px-5 pc:px-10 pt-12 pc:pt-16 pb-8">
        {/* ── 상단 콘텐츠 영역 ── */}
        <div className="flex flex-col gap-10 pc:flex-row pc:justify-between pc:gap-16">

          {/* 왼쪽: 로고 + (모바일 내비게이션) + 주소 + 소셜 */}
          <div className="flex flex-col gap-6 pc:gap-5">
            <Link href={localeHref(lang, "/")} aria-label={dict.footerAria} className="inline-block w-36">
              <Image
                src="/icons/logo-white.png"
                alt="Cognex"
                width={257}
                height={32}
                className="w-full h-auto"
              />
            </Link>

            {/* 모바일: 내비게이션 (세로 목록) */}
            <nav aria-label={dict.navAria} className="pc:hidden">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={localeHref(lang, "/")}
                      className="text-base font-semibold text-white hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <address className="not-italic text-sm text-white/60 leading-6">
              <p className="font-semibold text-white">{dict.companyName}</p>
              <p>{siteConfig.address.full}</p>
            </address>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.phone}
                aria-label={dict.phoneAria}
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.instagramAria}
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.youtubeAria}
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* 오른쪽: PC 내비게이션(상단) + 뉴스레터 폼 */}
          <div className="flex flex-col gap-6 w-full pc:w-auto pc:min-w-md">
            {/* PC: 내비게이션 (가로 나열, 로고와 상단 정렬) */}
            <nav aria-label={dict.navAria} className="hidden pc:block">
              <ul className="flex items-center gap-10">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={localeHref(lang, "/")}
                      className="text-sm font-medium text-white hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 뉴스레터 */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-white">{dict.newsletterTitle}</p>

              <div className="flex gap-3">
                <div className="flex flex-col pc:flex-row gap-3 flex-1">
                  <input
                    type="email"
                    placeholder={dict.emailPlaceholder}
                    className={fieldClass}
                  />

                  <div className="relative pc:shrink-0 pc:w-40">
                    <select
                      defaultValue=""
                      className={`${fieldClass} appearance-none cursor-pointer pr-9 text-white/70`}
                      aria-label={dict.countryAria}
                    >
                      <option value="" disabled>{dict.countryPlaceholder}</option>
                      {dict.countries.map((c) => (
                        <option key={c} value={c} className="text-dark bg-white">
                          {c}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="w-3 h-3 text-white/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <button
                  type="button"
                  className="shrink-0 self-stretch px-6 border border-white/25 rounded text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  {dict.salesButton}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── 구분선 ── */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col gap-4 pc:flex-row pc:items-center pc:justify-between">
          <p className="text-xs text-white/40">{siteConfig.copyright}</p>

          <nav aria-label={dict.legalAria}>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localeHref(lang, "/")}
                    className="text-xs text-white/40 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
    </>
  );
}
