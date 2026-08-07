import "server-only";
import type { Locale } from "../locales";
import type { Dictionary } from "./types";

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  ko: () => import("./ko").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
  ja: () => import("./ja").then((m) => m.default),
  zh: () => import("./zh").then((m) => m.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> => loaders[locale]();

export type { Dictionary };
