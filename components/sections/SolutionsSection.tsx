"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

/* ── 탭 데이터 ── */
const MAIN_TABS = ["애플리케이션", "산업"] as const;
type MainTab = (typeof MAIN_TABS)[number];

const APP_TABS = [
  { label: "어셈블리 검사 및 검증", icon: "icon-assembly-inspection" },
  { label: "자동 결함 감지",        icon: "icon-defect-detection"    },
  { label: "바코드 스캐닝 및 추적", icon: "icon-barcode-tracking"    },
  { label: "자동 분류 및 분류",     icon: "icon-classification"      },
  { label: "측정 및 치수 확인",     icon: "icon-measurement"         },
  { label: "가이드 및 정렬",        icon: "icon-guide-alignment"     },
  { label: "광학 문자 인식 (OCR)",  icon: "icon-ocr"                 },
] as const;

const INDUSTRY_TABS = [
  "반도체",
  "식음료",
  "자동차",
  "제약",
  "전자부품",
  "물류",
] as const;

/* ── 애플리케이션 콘텐츠 (더미) ── */
const APP_CONTENT = [
  {
    image: "/images/solution-factory.png",
    title: "어셈블리 검사 및 검증",
    body: "[더미] 첨단 머신 비전 기술로 복잡한 어셈블리 공정의 모든 구성 요소를 정밀하게 검사하고 검증하여 제품 품질과 생산 신뢰성을 보장합니다. 실제 콘텐츠는 추후 업데이트 예정입니다.",
    href: "/solutions/assembly",
  },
  {
    image: "/images/solution-semiconductor.png",
    title: "자동 결함 감지",
    body: "[더미] 첨단 머신 비전과 AI의 강력한 기능을 통해 모든 결함을 감지하여 일관된 품질을 보장하고 비용이 많이 드는 오류를 줄입니다. 실제 콘텐츠는 추후 업데이트 예정입니다.",
    href: "/solutions/defect-detection",
  },
  {
    image: "/images/solution-barcode.png",
    title: "바코드 스캐닝 및 추적",
    body: "[더미] 고속 바코드 판독 기술로 공급망 전반의 제품 추적성을 확보하고, 물류 효율과 데이터 정확성을 동시에 높입니다. 실제 콘텐츠는 추후 업데이트 예정입니다.",
    href: "/solutions/barcode",
  },
  {
    image: "/images/solution-manufacturing.png",
    title: "자동 분류 및 분류",
    body: "[더미] 정밀 비전 시스템을 통해 제품을 형태·색상·크기 기준으로 자동 분류하고 불량품을 신속하게 배출하여 생산 효율을 극대화합니다. 실제 콘텐츠는 추후 업데이트 예정입니다.",
    href: "/solutions/sorting",
  },
  {
    image: "/images/solution-bottle-inspection.png",
    title: "측정 및 치수 확인",
    body: "[더미] 비접촉식 정밀 측정 기술로 마이크로미터 단위의 치수 편차까지 실시간으로 검출하여 설계 규격 준수를 자동으로 보장합니다. 실제 콘텐츠는 추후 업데이트 예정입니다.",
    href: "/solutions/measurement",
  },
  {
    image: "/images/solution-ai-inspection.png",
    title: "가이드 및 정렬",
    body: "[더미] 비전 기반 가이드 시스템이 로봇 암과 자동화 장비의 정확한 위치 정렬을 실시간으로 지원하여 조립 정밀도를 향상시킵니다. 실제 콘텐츠는 추후 업데이트 예정입니다.",
    href: "/solutions/guidance",
  },
  {
    image: "/images/solution-factory-2.png",
    title: "광학 문자 인식 (OCR)",
    body: "[더미] 딥러닝 기반 OCR 엔진이 다양한 서체·방향·표면의 문자를 정확하게 판독하여 추적성 확보와 데이터 품질 향상에 기여합니다. 실제 콘텐츠는 추후 업데이트 예정입니다.",
    href: "/solutions/ocr",
  },
] as const;

/* ── 산업 콘텐츠 (더미) ── */
const INDUSTRY_CONTENT = [
  { image: "/images/solution-semiconductor.png",    title: "반도체",  body: "[더미] 웨이퍼·패키지 검사부터 마킹 판독까지, 반도체 제조 전 공정에 걸쳐 수율을 높이고 불량을 최소화합니다.", href: "/solutions/semiconductor" },
  { image: "/images/solution-bottle-inspection.png", title: "식음료", body: "[더미] 라벨 검사, 이물질 감지, 용량 확인 등 식음료 라인의 품질 및 안전 기준을 자동으로 충족합니다.", href: "/solutions/food-beverage" },
  { image: "/images/solution-factory.png",           title: "자동차",  body: "[더미] 차체·엔진·전장부품의 결함 감지와 조립 검증을 통해 자동차 제조 품질을 보장합니다.", href: "/solutions/automotive" },
  { image: "/images/solution-manufacturing.png",     title: "제약",    body: "[더미] 라벨·바코드·외관 검사로 의약품 규정 준수와 제품 추적성을 자동화합니다.", href: "/solutions/pharma" },
  { image: "/images/solution-ai-inspection.png",     title: "전자부품", body: "[더미] PCB·커넥터·소형 부품의 정밀 검사로 전자제품 생산 품질을 극대화합니다.", href: "/solutions/electronics" },
  { image: "/images/solution-barcode.png",           title: "물류",    body: "[더미] 물류 센터의 바코드 판독과 자동 분류로 처리 속도와 정확도를 동시에 높입니다.", href: "/solutions/logistics" },
] as const;

/* ── 아이콘 마스크 컴포넌트 ── */
function TabIcon({ name, active }: { name: string; active: boolean }) {
  return (
    <span
      className="block w-5 h-5"
      style={{
        WebkitMaskImage: `url('/icons/${name}.svg')`,
        maskImage: `url('/icons/${name}.svg')`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        backgroundColor: active ? "#f5c400" : "#999999",
        transition: "background-color 0.2s ease",
      }}
    />
  );
}

/* ── 메인 컴포넌트 ── */
export default function SolutionsSection() {
  const [mainTab, setMainTab] = useState<MainTab>("애플리케이션");
  const [appTab, setAppTab]   = useState(0);
  const [indTab, setIndTab]   = useState(0);

  const content = mainTab === "애플리케이션"
    ? APP_CONTENT[appTab]
    : INDUSTRY_CONTENT[indTab];

  return (
    <section id="solutions" aria-label="기술 적용 분야 섹션" className="bg-white py-20 pc:py-28">
      <div className="max-w-[1200px] mx-auto px-5 pc:px-10">

        {/* ── 섹션 헤더 ── */}
        <div className="flex items-end justify-between mb-8 pc:mb-10">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
              SOLUTIONS / 성과
            </p>
            <h2 className="text-[1.85rem] pc:text-[2.4rem] font-bold text-dark leading-tight">
              기술 적용 분야
            </h2>
          </div>
          <Link
            href="/solutions"
            className="hidden pc:inline-flex items-center gap-1.5 text-sm font-medium text-dark border border-border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors shrink-0"
          >
            전체 보기
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── 주 탭 (애플리케이션 / 산업) ── */}
        <div className="flex gap-2 mb-6">
          {MAIN_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setMainTab(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                mainTab === tab
                  ? "bg-dark text-white"
                  : "text-muted hover:text-dark hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── 보조 탭 (아이콘 + 레이블 / 산업 명칭) ── */}
        <div className="overflow-x-auto pb-1 mb-8 pc:mb-10 scrollbar-none">
          <div className="flex gap-2 min-w-max pc:min-w-0">
            {mainTab === "애플리케이션"
              ? APP_TABS.map((t, i) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setAppTab(i)}
                    className={`flex flex-col items-center gap-1.5 px-3 pc:px-4 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                      appTab === i
                        ? "bg-dark border-dark text-white"
                        : "border-border text-muted hover:border-dark/30 hover:text-dark"
                    }`}
                  >
                    <TabIcon name={t.icon} active={appTab === i} />
                    <span className="whitespace-nowrap leading-tight text-center max-w-[80px]">
                      {t.label}
                    </span>
                  </button>
                ))
              : INDUSTRY_TABS.map((tab, i) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setIndTab(i)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all whitespace-nowrap ${
                      indTab === i
                        ? "bg-dark border-dark text-white"
                        : "border-border text-muted hover:border-dark/30 hover:text-dark"
                    }`}
                  >
                    {tab}
                  </button>
                ))
            }
          </div>
        </div>

        {/* ── 콘텐츠 카드 ── */}
        <div
          key={`${mainTab}-${mainTab === "애플리케이션" ? appTab : indTab}`}
          className="flex flex-col pc:flex-row gap-0 rounded-2xl overflow-hidden border border-border"
          style={{ animation: "fadeIn 0.3s ease" }}
        >
          {/* 이미지 */}
          <div className="relative w-full pc:w-[55%] aspect-[4/3] pc:aspect-auto pc:min-h-[360px] shrink-0 bg-zinc-100">
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-cover"
              sizes="(max-width: 1366px) 100vw, 660px"
            />
          </div>

          {/* 텍스트 */}
          <div className="flex flex-col justify-center gap-5 p-8 pc:p-12">
            <span className="self-start text-[10px] font-bold tracking-widest text-dark border border-dark px-3 py-1 rounded-full uppercase">
              {mainTab === "애플리케이션" ? "APPLICATION" : "INDUSTRY"}
            </span>
            <h3 className="text-xl pc:text-2xl font-bold text-dark leading-snug">
              {content.title}
            </h3>
            <p className="text-sm pc:text-base text-muted leading-relaxed">
              {content.body}
            </p>
            <Link
              href={content.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark hover:underline self-start"
            >
              자세히 보기
              <ArrowUpRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 모바일 전체 보기 */}
        <div className="pc:hidden mt-6 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-dark border border-border rounded-full px-5 py-2.5"
          >
            전체 보기 <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
