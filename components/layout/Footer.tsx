import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PhoneIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";
import type { Locale } from "@/i18n/locales";
import { localeHref } from "@/i18n/href";
import type { Dictionary } from "@/i18n/dictionaries";

function CognexLogo() {
  return (
    <span className="text-xl font-bold tracking-[0.12em] text-white">
      COGNEX
    </span>
  );
}

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

  return (
    <footer className="bg-dark text-white" aria-label={dict.footerAria}>
      <div className="max-w-400 mx-auto px-5 pc:px-10 pt-12 pc:pt-16 pb-8">
        {/* ── 상단 콘텐츠 영역 ── */}
        <div className="flex flex-col gap-10 pc:flex-row pc:gap-0 pc:justify-between">

          {/* 왼쪽: 로고 + 주소 + 소셜 */}
          <div className="flex flex-col gap-5">
            <Link href={localeHref(lang, "/")} aria-label={dict.footerAria}>
              <CognexLogo />
            </Link>

            <address className="not-italic text-sm text-white/60 leading-6">
              <p className="font-medium text-white/80">{dict.companyName}</p>
              <p>{siteConfig.address.full}</p>
            </address>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.phone}
                aria-label={dict.phoneAria}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-white/70" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.instagramAria}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-white/70" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.youtubeAria}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>

          {/* 가운데: 내비게이션 (PC only) */}
          <nav aria-label={dict.navAria} className="hidden pc:block">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localeHref(lang, "/")}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 모바일: 내비게이션 링크 (가로 나열) */}
          <nav aria-label={dict.navAria} className="pc:hidden">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localeHref(lang, "/")}
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
            <p className="text-sm font-medium text-white/90">{dict.newsletterTitle}</p>

            <input
              type="email"
              placeholder={dict.emailPlaceholder}
              className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/50 transition-colors"
            />

            <div className="flex gap-2">
              <select
                defaultValue=""
                className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2.5 text-sm text-white/70 outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer"
                aria-label={dict.countryAria}
              >
                <option value="" disabled>{dict.countryPlaceholder}</option>
                {dict.countries.map((c) => (
                  <option key={c} value={c} className="text-dark bg-white">
                    {c}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className="shrink-0 bg-white text-dark text-sm font-medium px-4 py-2.5 rounded hover:bg-white/90 transition-colors"
              >
                {dict.salesButton}
              </button>
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
  );
}
