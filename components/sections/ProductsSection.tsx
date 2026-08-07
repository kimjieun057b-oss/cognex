"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

const PRODUCTS = [
  {
    tag: "MACHINE VISION SYSTEM",
    title: "비전 센서 및\n시스템",
    image: "/images/product-smart-light.png",
    alt: "Cognex 비전 센서 및 시스템",
    href: "/products/vision-systems",
  },
  {
    tag: "3D MACHINE VISION SYSTEM",
    title: "3D 비전\n시스템",
    image: "/images/product-3d-laser.png",
    alt: "Cognex 3D 비전 시스템",
    href: "/products/3d-vision",
  },
  {
    tag: "BARCODE READERS & SCANNERS",
    title: "바코드\n리더기",
    image: "/images/product-vision-sensor.png",
    alt: "Cognex 바코드 리더기",
    href: "/products/barcode-readers",
  },
  {
    tag: "VISION SOFTWARE",
    title: "비전\n소프트웨어",
    image: "/images/product-software.png",
    alt: "Cognex 비전 소프트웨어",
    href: "/products/software",
  },
  {
    tag: "LOGISTICS SOLUTIONS",
    title: "물류\n솔루션",
    image: "/images/solution-barcode.png",
    alt: "Cognex 물류 솔루션",
    href: "/products/logistics",
  },
  {
    tag: "MACHINE VISION ACCESSORIES",
    title: "렌즈, 조명 및\n부속품",
    image: "/images/product-accessories.png",
    alt: "Cognex 렌즈 조명 부속품",
    href: "/products/accessories",
  },
] as const;

export default function ProductsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="products" aria-label="제품 카테고리 섹션">

      {/* ── PC: 가로 확장 아코디언 ── */}
      <div
        className="hidden pc:flex h-145 border-t border-border"
        onMouseLeave={() => setActive(0)}
      >
        {PRODUCTS.map((p, i) => (
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
                  href={p.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-dark hover:underline"
                  tabIndex={active === i ? 0 : -1}
                >
                  자세히 보기
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
        {PRODUCTS.map((p, i) => (
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
