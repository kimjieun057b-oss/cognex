import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PhoneIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";

const COUNTRIES = [
  "대한민국",
  "United States",
  "China",
  "Japan",
  "Germany",
  "United Kingdom",
];

function CognexLogo() {
  return (
    <span className="text-xl font-bold tracking-[0.12em] text-white">
      COGNEX
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark text-white" aria-label="사이트 푸터">
      <div className="max-w-400 mx-auto px-5 pc:px-10 pt-12 pc:pt-16 pb-8">
        {/* ── 상단 콘텐츠 영역 ── */}
        <div className="flex flex-col gap-10 pc:flex-row pc:gap-0 pc:justify-between">

          {/* 왼쪽: 로고 + 주소 + 소셜 */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Cognex 홈으로 이동">
              <CognexLogo />
            </Link>

            <address className="not-italic text-sm text-white/60 leading-6">
              <p className="font-medium text-white/80">{siteConfig.address.company}</p>
              <p>{siteConfig.address.full}</p>
            </address>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.phone}
                aria-label="전화 문의"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-white/70" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cognex 인스타그램"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-white/70" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cognex 유튜브"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>

          {/* 가운데: 내비게이션 (PC only) */}
          <nav aria-label="푸터 내비게이션" className="hidden pc:block">
            <ul className="flex flex-col gap-4">
              {siteConfig.footerLinks.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 모바일: 내비게이션 링크 (가로 나열) */}
          <nav aria-label="푸터 내비게이션" className="pc:hidden">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {siteConfig.footerLinks.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 오른쪽: 뉴스레터 폼 */}
          <div className="flex flex-col gap-4 pc:max-w-xs w-full pc:w-auto">
            <p className="text-sm font-medium text-white/90">Cognex 소식 받기</p>

            <input
              type="email"
              placeholder="이메일 주소"
              className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/50 transition-colors"
            />

            <div className="flex gap-2">
              <select
                defaultValue=""
                className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2.5 text-sm text-white/70 outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer"
                aria-label="국가/지역 선택"
              >
                <option value="" disabled>국가 / 지역</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c} className="text-dark bg-white">
                    {c}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className="shrink-0 bg-white text-dark text-sm font-medium px-4 py-2.5 rounded hover:bg-white/90 transition-colors"
              >
                세일즈 문의
              </button>
            </div>
          </div>
        </div>

        {/* ── 구분선 ── */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col gap-4 pc:flex-row pc:items-center pc:justify-between">
          <p className="text-xs text-white/40">{siteConfig.copyright}</p>

          <nav aria-label="법적 고지 내비게이션">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
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
  );
}
