import type { Locale } from "./locales";

export function localeHref(lang: Locale, href: string): string {
  if (href === "#") return href;
  if (href === "/") return `/${lang}`;
  return `/${lang}${href}`;
}
