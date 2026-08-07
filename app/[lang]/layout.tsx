import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { locales } from "@/i18n/locales";
import { resolveLocale } from "@/i18n/resolve-locale";
import { getDictionary } from "@/i18n/dictionaries";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-kr",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = resolveLocale(rawLang);
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = resolveLocale(rawLang);
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={notoSansKR.variable}>
      <body className="min-h-dvh flex flex-col antialiased">
        <Header lang={lang} dict={dict.header} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict.footer} />
      </body>
    </html>
  );
}
