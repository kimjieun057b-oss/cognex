"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { locales, localeNames, type Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";
import type { Dictionary } from "@/i18n/dictionaries";
import {
  SearchIcon,
  GlobeIcon,
  ChevronDownIcon,
  HamburgerIcon,
  CloseIcon,
  ArrowUpRightIcon,
} from "@/components/icons";
import Image from "next/image";

function LanguageSwitcher({
  lang,
  ariaLabel,
  variant,
}: {
  lang: Locale;
  ariaLabel: string;
  variant: "pc" | "mobile";
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={
          variant === "pc"
            ? "p-2 rounded-full bg-dark hover:opacity-90 transition-opacity"
            : "p-1.5 rounded-full bg-dark hover:opacity-90 transition-opacity"
        }
      >
        <GlobeIcon className="w-4 h-4 text-white" />
      </button>

      {open && (
        <ul
          role="menu"
          aria-label={ariaLabel}
          className="absolute right-0 top-full mt-2 w-36 rounded-xl border border-border bg-white py-1.5 shadow-lg z-50"
        >
          {locales.map((locale) => (
            <li key={locale} role="none">
              <Link
                href="/"
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                  locale === lang ? "font-semibold text-dark" : "text-muted"
                }`}
              >
                {localeNames[locale]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["header"];
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const gnbLinks = siteConfig.gnbLinks.map((link, i) => ({
    ...link,
    label: dict.gnbLabels[i],
  }));
  const mobileNavLinks = siteConfig.mobileNavLinks.map((link, i) => ({
    ...link,
    label: dict.mobileNavLabels[i],
  }));

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* ── PC 상단 흰색 바 ── */}
        <div className="hidden pc:block bg-white border-b border-border">
          <div className="max-w-300 mx-auto px-10 flex items-center justify-between h-18">
            <Link href={localeHref(lang, "/")} aria-label={dict.homeAria}>
              <Image src="/icons/logo-black.png" alt="logo" width={120} height={40} />
            </Link>

            <div className="flex items-center gap-3">
              {/* 검색창 */}
              <label className="flex items-center gap-2 border border-border rounded-full px-4 py-2.5 w-64 cursor-text hover:border-muted transition-colors">
                <SearchIcon className="w-4 h-4 text-muted shrink-0" />
                <input
                  type="search"
                  placeholder={dict.searchPlaceholder}
                  aria-label={dict.searchAria}
                  className="flex-1 text-sm outline-none bg-transparent placeholder:text-muted"
                />
              </label>

              {/* MyCognex */}
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm font-medium text-muted px-4 py-2.5 rounded-full border border-border hover:border-muted transition-colors"
              >
                <ChevronDownIcon className="w-3 h-3" />
                {dict.myCognex}
              </button>

              {/* 언어 */}
              <LanguageSwitcher lang={lang} ariaLabel={dict.languageAria} variant="pc" />
            </div>
          </div>
        </div>

        {/* ── PC GNB 어두운 바 ── */}
        <nav
          className="hidden pc:block bg-dark-nav"
          aria-label={dict.navAria}
        >
          <div className="max-w-300 mx-auto px-10">
            <ul className="flex items-center gap-10 h-12">
              {gnbLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localeHref(lang, "/")}
                    className="text-sm text-white/70 hover:text-white transition-colors py-4 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ── 모바일 헤더 바 ── */}
        <div className="pc:hidden bg-white border-b border-border h-12 flex items-center justify-between px-5">
          <Link href={localeHref(lang, "/")} aria-label={dict.homeAria}>
            <Image src="/icons/logo-black.png" alt="logo" width={100} height={34} />
          </Link>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-label={dict.searchAria}
              className="p-1.5 rounded-full border border-border hover:border-muted transition-colors"
            >
              <SearchIcon className="w-4 h-4 text-dark" />
            </button>
            <LanguageSwitcher lang={lang} ariaLabel={dict.languageAria} variant="mobile" />
            <button
              type="button"
              aria-label={mobileOpen ? dict.menuCloseAria : dict.menuOpenAria}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="p-1"
            >
              {mobileOpen ? (
                <CloseIcon className="w-5 h-5 text-dark" />
              ) : (
                <HamburgerIcon className="w-5 h-5 text-dark" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── 모바일 내비 오버레이 ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-12 z-40 bg-white overflow-y-auto pc:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={dict.mobileNavAria}
        >
          <nav>
            <ul>
              {mobileNavLinks.map((link) => (
                <li key={link.href} className="border-b border-border">
                  <Link
                    href={localeHref(lang, "/")}
                    className="flex items-center justify-between px-5 py-4 text-base font-medium text-dark hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDownIcon className="w-4 h-4 text-muted" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* 제품 탐색 CTA 카드 */}
            <div className="mx-5 my-6 rounded-2xl bg-gray-100 px-5 py-5">
              <p className="text-base font-medium leading-snug mb-4 text-dark">
                {dict.mobileCta.line1}
                <br />
                {dict.mobileCta.line2}
              </p>
              <Link
                href={localeHref(lang, "/")}
                className="flex items-center gap-1 text-sm font-medium text-dark hover:underline"
                onClick={() => setMobileOpen(false)}
              >
                {dict.mobileCta.linkLabel}
                <ArrowUpRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
