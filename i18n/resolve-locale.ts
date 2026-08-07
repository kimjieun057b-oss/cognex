import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./locales";

export function resolveLocale(raw: string): Locale {
  if (isLocale(raw)) return raw;
  notFound();
}
