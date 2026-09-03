"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CloseIcon,
  SearchIcon,
  ShieldCheckIcon,
  TargetIcon,
  BoltIcon,
} from "@/components/icons";
import type { Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";
import {
  FINDER_STEP1_QUESTION,
  FINDER_STEP1_OPTIONS,
  FINDER_STEP2_QUESTION,
  FINDER_STEP2_OPTIONS,
  FINDER_STEP3_QUESTION,
  FINDER_STEP3_OPTIONS,
  FINDER_RESULTS,
  FINDER_DEFAULT_RESULTS,
  type FinderStep1Id,
} from "@/datas/product-finder";

const STEP1_ICONS = {
  search: SearchIcon,
  shield: ShieldCheckIcon,
  target: TargetIcon,
  bolt: BoltIcon,
};

type Step = 1 | 2 | 3 | 4;

export default function ProductFinderModal({
  lang,
  open,
  onClose,
}: {
  lang: Locale;
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<Step>(1);
  const [step1, setStep1] = useState<FinderStep1Id | null>(null);
  const [step2, setStep2] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) return;
    // 닫힘 트랜지션 이후 다음에 열었을 때 처음 단계부터 시작하도록 초기화
    const timer = setTimeout(() => {
      setStep(1);
      setStep1(null);
      setStep2(null);
    }, 300);
    return () => clearTimeout(timer);
  }, [open]);

  if (!open) return null;

  const handleStep1 = (id: FinderStep1Id) => {
    setStep1(id);
    setStep(2);
  };

  const handleStep2 = (id: string) => {
    setStep2(id);
    setStep(3);
  };

  const handleStep3 = () => {
    setStep(4);
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
    else if (step === 4) setStep(3);
  };

  const handleRestart = () => {
    setStep(1);
    setStep1(null);
    setStep2(null);
  };

  const step2Options = step1 ? FINDER_STEP2_OPTIONS[step1] : [];
  const resultKey = step1 && step2 ? `${step1}-${step2}` : "";
  const results = FINDER_RESULTS[resultKey] ?? FINDER_DEFAULT_RESULTS;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="제품 찾기"
    >
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

      {/* 패널 */}
      <div className="relative w-full max-w-xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* 헤더 */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wide">Product Finder</p>
            <h3 className="text-lg font-bold text-dark">어떤 제품이 필요하신가요?</h3>
          </div>
          <button
            type="button"
            aria-label="닫기"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors shrink-0"
          >
            <CloseIcon className="w-4 h-4 text-dark" />
          </button>
        </div>

        {/* 진행 단계 표시 */}
        {step < 4 && (
          <div className="flex items-center gap-1.5 px-6 pt-4 shrink-0">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className={`h-1 flex-1 rounded-full transition-colors ${n <= step ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        )}

        {/* 본문 */}
        <div className="px-6 py-6 overflow-y-auto">
          {step === 1 && (
            <div>
              <p className="text-sm font-semibold text-dark mb-4">{FINDER_STEP1_QUESTION}</p>
              <div className="grid grid-cols-2 gap-3">
                {FINDER_STEP1_OPTIONS.map((opt) => {
                  const Icon = STEP1_ICONS[opt.icon];
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleStep1(opt.id)}
                      className="flex flex-col items-start gap-2 p-4 rounded-xl border border-border text-left hover:border-dark hover:bg-black/[0.02] transition-colors"
                    >
                      <span className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5 text-dark" />
                      </span>
                      <span className="text-sm font-bold text-dark">{opt.label}</span>
                      <span className="text-xs text-muted leading-snug">{opt.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-sm font-semibold text-dark mb-4">{FINDER_STEP2_QUESTION}</p>
              <div className="flex flex-col gap-2.5">
                {step2Options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleStep2(opt.id)}
                    className="px-4 py-3 rounded-xl border border-border text-left text-sm font-medium text-dark hover:border-dark hover:bg-black/[0.02] transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="text-sm font-semibold text-dark mb-4">{FINDER_STEP3_QUESTION}</p>
              <div className="grid grid-cols-2 gap-2.5">
                {FINDER_STEP3_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={handleStep3}
                    className="px-4 py-3 rounded-xl border border-border text-center text-sm font-medium text-dark hover:border-dark hover:bg-black/[0.02] transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <p className="text-sm font-semibold text-dark mb-1">추천 제품</p>
              <p className="text-xs text-muted mb-4">선택하신 조건에 맞는 제품을 확인해보세요.</p>
              <div className="flex flex-col gap-3">
                {results.map((product) => (
                  <Link
                    key={product.name}
                    href={localeHref(lang, "/")}
                    onClick={onClose}
                    className="flex items-center gap-4 p-3 rounded-xl border border-border hover:border-dark transition-colors"
                  >
                    <div className="w-16 h-16 shrink-0 rounded-lg bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="object-contain w-full h-full p-1.5"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold tracking-wide text-muted uppercase truncate">{product.tag}</p>
                      <p className="text-sm font-bold text-dark">{product.name}</p>
                      <p className="text-xs text-muted leading-snug line-clamp-2">{product.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 하단 버튼 */}
        {step > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-border shrink-0">
            <button
              type="button"
              onClick={handleBack}
              className="text-sm font-medium text-muted hover:text-dark transition-colors"
            >
              이전
            </button>
            {step === 4 && (
              <button
                type="button"
                onClick={handleRestart}
                className="text-sm font-medium text-dark hover:opacity-70 transition-opacity"
              >
                처음부터 다시
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
