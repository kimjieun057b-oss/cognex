"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";

const PRODUCT_STATIC = [
  { tag: "MACHINE VISION SYSTEM", image: "/images/product-smart-light.png", href: "/products/vision-systems" },
  { tag: "3D MACHINE VISION SYSTEM", image: "/images/product-3d-laser.png", href: "/products/3d-vision" },
  { tag: "BARCODE READERS & SCANNERS", image: "/images/product-vision-sensor.png", href: "/products/barcode-readers" },
  { tag: "VISION SOFTWARE", image: "/images/product-software.png", href: "/products/software" },
  { tag: "LOGISTICS SOLUTIONS", image: "/images/solution-barcode.png", href: "/products/logistics" },
  { tag: "MACHINE VISION ACCESSORIES", image: "/images/product-accessories.png", href: "/products/accessories" },
] as const;

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

      {/* ── PC: 가로 확장 아코디언 ── */}
      <div
        className="hidden pc:flex h-145 border-t border-border"
        onMouseLeave={() => setActive(0)}
      >
        {products.map((p, i) => (
          <article
            key={p.tag}
            onMouseEnter={() => setActive(i)}
            className="relative flex flex-col overflow-hidden border-r border-border last:border-r-0 cursor-pointer"
            style={{
              flex: active === i ? "3 0 0" : "1 0 0",
              backgroundColor: active === i ? "#FFEC38" : "#ffffff",
              transition: "flex 0.5s ease, background-color 0.4s ease",
            }}
          >
            {/* 상단 텍스트 */}
            <div className="p-6 shrink-0">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-dark/30 mb-2 truncate">
                {p.tag}
              </p>
              <h3
                className="font-bold text-dark leading-tight whitespace-pre-line"
                style={{
                  fontSize: active === i ? "1.5rem" : "0.9rem",
                  transition: "font-size 0.4s ease",
                }}
              >
                {p.title}
              </h3>
              {/* 자세히 보기 — 활성 시에만 노출 */}
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: active === i ? "36px" : "0px",
                  marginTop: active === i ? "12px" : "0px",
                  transition: "max-height 0.4s ease, margin-top 0.3s ease",
                }}
              >
                <Link
                  href={localeHref(lang, "/")}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-dark hover:underline"
                  tabIndex={active === i ? 0 : -1}
                >
                  {dict.detailLabel}
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 제품 이미지 */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: active === i ? "58%" : "50%",
                transition: "height 0.5s ease",
              }}
            >
              <Image
                src={p.image}
                alt={p.alt}
                fill
                className="object-contain object-bottom p-6"
                style={{
                  transform: active === i ? "scale(1.08)" : "scale(1)",
                  transition: "transform 0.5s ease",
                }}
                sizes="(max-width: 1366px) 33vw, 16vw"
              />
            </div>
          </article>
        ))}
      </div>

      {/* ── 모바일: 세로 아코디언 ── */}
      <div className="pc:hidden divide-y divide-border border-t border-border">
        {products.map((p, i) => (
          <div
            key={p.tag}
            className="relative overflow-hidden cursor-pointer"
            style={{
              height: active === i ? "260px" : "68px",
              backgroundColor: active === i ? "#f5c400" : "#ffffff",
              transition: "height 0.5s ease, background-color 0.4s ease",
            }}
            onClick={() => setActive(active === i ? 0 : i)}
          >
            <div className="px-5 py-4">
              <p className="text-[9px] font-bold tracking-widest uppercase text-dark/30 mb-1 truncate">
                {p.tag}
              </p>
              <h3 className="text-sm font-bold text-dark leading-tight">
                {p.title.replace("\n", " ")}
              </h3>
            </div>

            {/* 이미지 (활성 시) */}
            <div
              className="absolute bottom-0 left-0 right-0 h-36"
              style={{
                opacity: active === i ? 1 : 0,
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
        ))}
      </div>

    </section>
  );
}
