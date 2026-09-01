"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";
import { PRODUCT_STATIC } from "@/datas/products";

export default function ProductsSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["products"];
}) {
  const [active, setActive] = useState(0);

  const products = dict.items.map((item, i) => ({ ...item, ...PRODUCT_STATIC[i] }));

  return (
    <section id="products" aria-label={dict.ariaLabel}>

      {/* ── PC: 균등 너비 + 호버 시 배경 이미지 ── */}
      <div
        className="hidden pc:flex h-145 w-full max-w-none m-0 p-0 border-t border-border"
        onMouseLeave={() => setActive(0)}
      >
        {products.map((p, i) => {
          const isActive = active === i;
          return (
            <article
              key={p.tag}
              onMouseEnter={() => setActive(i)}
              className="relative flex-1 flex flex-col overflow-hidden border-r border-border last:border-r-0 cursor-pointer bg-white"
            >
              {/* 호버 배경 이미지 */}
              <div
                className="absolute inset-0 bg-[url('/images/products-item-background.png')] bg-cover bg-center"
                style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.4s ease" }}
                aria-hidden="true"
              />

              {/* 상단 텍스트 */}
              <div className="relative z-10 p-6 shrink-0">
                <p
                  className={`text-[10px] font-bold tracking-[0.15em] uppercase mb-2 truncate transition-colors duration-300 ${
                    isActive ? "text-dark" : "text-dark/30"
                  }`}
                >
                  {p.tag}
                </p>
                <h3 className="text-2xl font-bold text-dark leading-tight whitespace-pre-line">
                  {p.title}
                </h3>
                {/* 자세히 보기 — 활성 시에만 노출 */}
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: isActive ? "36px" : "0px",
                    marginTop: isActive ? "12px" : "0px",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(-6px)",
                    transition:
                      "max-height 0.4s ease, margin-top 0.3s ease, opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
                  }}
                >
                  <Link
                    href={localeHref(lang, "/")}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-dark hover:underline"
                    tabIndex={isActive ? 0 : -1}
                  >
                    {dict.detailLabel}
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* 제품 이미지 */}
              <div
                className="absolute bottom-0 left-0 right-0 z-10"
                style={{
                  height: isActive ? "58%" : "50%",
                  transition: "height 0.5s ease",
                }}
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-contain object-bottom p-6"
                  style={{
                    transform: isActive ? "scale(1.12)" : "scale(1)",
                    transition: "transform 0.5s ease",
                  }}
                  sizes="16vw"
                />
              </div>
            </article>
          );
        })}
      </div>

      {/* ── 모바일: 세로 아코디언 ── */}
      <div className="pc:hidden divide-y divide-border border-t border-border w-full max-w-none m-0 p-0">
        {products.map((p, i) => {
          const isActive = active === i;
          return (
            <div
              key={p.tag}
              className="relative overflow-hidden cursor-pointer bg-white"
              style={{
                height: isActive ? "260px" : "68px",
                transition: "height 0.5s ease",
              }}
              onClick={() => setActive(isActive ? 0 : i)}
            >
              {/* 활성 시 배경 이미지 */}
              <div
                className="absolute inset-0 bg-[url('/images/products-item-background.png')] bg-cover bg-center"
                style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.4s ease" }}
                aria-hidden="true"
              />

              <div className="relative z-10 px-5 py-4">
                <p
                  className={`text-[9px] font-bold tracking-widest uppercase mb-1 truncate transition-colors duration-300 ${
                    isActive ? "text-dark" : "text-dark/30"
                  }`}
                >
                  {p.tag}
                </p>
                <h3 className="text-sm font-bold text-dark leading-tight">
                  {p.title.replace("\n", " ")}
                </h3>
                {/* 자세히 보기 — 활성 시에만 노출 */}
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: isActive ? "24px" : "0px",
                    marginTop: isActive ? "8px" : "0px",
                    opacity: isActive ? 1 : 0,
                    transition: "max-height 0.4s ease, margin-top 0.3s ease, opacity 0.4s ease 0.1s",
                  }}
                >
                  <Link
                    href={localeHref(lang, "/")}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-dark hover:underline"
                    tabIndex={isActive ? 0 : -1}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {dict.detailLabel}
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* 이미지 (활성 시) */}
              <div
                className="absolute bottom-0 left-0 right-0 h-36 z-10"
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-contain object-bottom p-4"
                  sizes="360px"
                />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
