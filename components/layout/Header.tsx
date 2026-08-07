"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  SearchIcon,
  GlobeIcon,
  ChevronDownIcon,
  HamburgerIcon,
  CloseIcon,
  ArrowUpRightIcon,
} from "@/components/icons";

function CognexLogo({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`text-xl font-bold tracking-[0.15em] ${dark ? "text-dark" : "text-white"}`}
      style={{ fontFamily: "inherit", letterSpacing: "0.12em" }}
    >
      COGNEX
    </span>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* ── PC 상단 흰색 바 ── */}
        <div className="hidden pc:block bg-white border-b border-border">
          <div className="max-w-400 mx-auto px-10 flex items-center justify-between h-18">
            <Link href="/" aria-label="Cognex 홈으로 이동">
              <CognexLogo dark />
            </Link>

            <div className="flex items-center gap-3">
              {/* 검색창 */}
              <label className="flex items-center gap-2 border border-border rounded-full px-4 py-2 w-64 cursor-text hover:border-muted transition-colors">
                <SearchIcon className="w-4 h-4 text-muted shrink-0" />
                <input
                  type="search"
                  placeholder="검색"
                  className="flex-1 text-sm outline-none bg-transparent placeholder:text-muted"
                />
              </label>

              {/* MyCognex */}
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium px-3 py-2 rounded hover:bg-gray-100 transition-colors"
              >
                MyCognex
                <ChevronDownIcon className="w-3 h-3" />
              </button>

              {/* 언어 */}
              <button
                type="button"
                aria-label="언어 선택"
                className="p-2 rounded-full border border-border hover:bg-gray-100 transition-colors"
              >
                <GlobeIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── PC GNB 어두운 바 ── */}
        <nav
          className="hidden pc:block bg-dark-nav"
          aria-label="주요 내비게이션"
        >
          <div className="max-w-400 mx-auto px-10">
            <ul className="flex items-center justify-center gap-10 h-12">
              {siteConfig.gnbLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
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
        <div className="pc:hidden bg-dark-nav h-12 flex items-center justify-between px-5">
          <Link href="/" aria-label="Cognex 홈으로 이동">
            <CognexLogo />
          </Link>

          <div className="flex items-center gap-4">
            <button type="button" aria-label="검색">
              <SearchIcon className="w-5 h-5 text-white" />
            </button>
            <button type="button" aria-label="언어 선택">
              <GlobeIcon className="w-5 h-5 text-white" />
            </button>
            <button
              type="button"
              aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? (
                <CloseIcon className="w-5 h-5 text-white" />
              ) : (
                <HamburgerIcon className="w-5 h-5 text-white" />
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
          aria-label="모바일 내비게이션"
        >
          <nav>
            <ul>
              {siteConfig.mobileNavLinks.map((link) => (
                <li key={link.href} className="border-b border-border">
                  <Link
                    href={link.href}
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
                어떤 제품이 필요한지
                <br />
                잘 모르시겠다면?
              </p>
              <Link
                href="/products"
                className="flex items-center gap-1 text-sm font-medium text-dark hover:underline"
                onClick={() => setMobileOpen(false)}
              >
                제품 찾아보기
                <ArrowUpRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
