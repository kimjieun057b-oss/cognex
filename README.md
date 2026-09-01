# Cognex 기업 홈페이지 메인 화면 리디자인 프로젝트

## 프로젝트 개요

기존 Cognex 기업 홈페이지의 메인 화면을 리디자인하여, Next.js(App Router) 기반의 인터랙티브 UI와 Accessibility/SEO 구조로 새로 구현한 단일 페이지(SPA) 프로젝트다.

- **목표**: UI/UX 개선을 통한 브랜드 전문성·신뢰도 제고, SEO/GEO 최적화를 통한 검색 노출 증대
- **범위**: 확정된 Figma 디자인 기반의 메인페이지 완전 구현(모션/애니메이션 포함). 서브페이지 라우팅, 회원가입/로그인 등은 범위 밖
- **대상**: 제품 도입을 검토하는 B2B 담당자, 브랜드 정보를 확인하려는 일반 방문자 — Mobile First로 전 디바이스 대응(단일 브레이크포인트 `pc: 1366px`)
- **기술 스택**: Next.js(App Router) · TypeScript · Tailwind CSS v4(`app/globals.css`의 `@theme` 토큰 기반) · Vercel 배포

상세 요구사항은 [`docs/PRD.md`](docs/PRD.md), 개발 규칙은 [`docs/RULE.md`](docs/RULE.md)에 정리되어 있다.

## 폴더 구조

```
cgnx/
├─ app/
│  ├─ [lang]/            ← 언어별 동적 라우트 (layout.tsx, page.tsx)
│  └─ globals.css        ← Tailwind 테마 토큰(@theme) 정의
├─ components/
│  ├─ layout/             ← Header, Footer (모든 언어 페이지 공통)
│  ├─ sections/            ← 메인페이지를 구성하는 섹션 단위 컴포넌트
│  └─ icons.tsx            ← 공용 SVG 아이콘 모음
├─ config/
│  └─ site.ts              ← 브랜드명·연락처·GNB/Footer 링크 등 사이트 전역 상수
├─ datas/                  ← 섹션에서 쓰는 정적 목록 데이터(산업군, 애플리케이션, 고객 사례 등)
├─ i18n/
│  ├─ dictionaries/        ← 언어별 번역 데이터(ko/en/ja/zh) + 공통 타입
│  ├─ locales.ts           ← 지원 언어 목록/표시명
│  ├─ href.ts               ← 언어 프리픽스 링크 헬퍼
│  └─ resolve-locale.ts     ← URL의 lang 파라미터 검증/보정
├─ docs/                   ← PRD, 개발 규칙, 콘텐츠 가이드, 디자인 레퍼런스 이미지
├─ proxy.ts                ← 루트 접속 시 언어 감지 후 리다이렉트 (구 middleware.ts)
└─ public/                 ← 이미지·아이콘 정적 에셋
```

## 컴포넌트가 분리된 방식

**`layout/`과 `sections/`을 분리한 이유**는 성격이 다르기 때문이다. `layout/`(Header, Footer)은 모든 페이지에 공통으로 붙는 뼈대이고, `sections/`은 메인페이지 한 곳에서만 순서대로 나열되는 콘텐츠 블록이다. `app/[lang]/page.tsx`는 이 섹션 컴포넌트들을 기획서(`docs/PRD.md`)의 섹션 순서 그대로 import해서 나열하는 조립부 역할만 하고, 각 섹션의 내부 마크업·상태·인터랙션은 해당 컴포넌트 파일 안에 캡슐화되어 있다. 페이지 파일만 봐도 전체 구성이 한눈에 보이고, 섹션 하나를 수정할 때 다른 섹션에 영향을 주지 않는다.

**섹션별 구성과 목적** (PRD 기준 7개 섹션, Success Stories는 미구현):

| 섹션 컴포넌트 | 목적 | 핵심 인터랙션 |
|---|---|---|
| `HeroSection` | 강력한 첫인상과 핵심 가치 제안 | 자동 슬라이드 + 진행 게이지 애니메이션 |
| `CompanySection` | 회사 개요(연혁·기술·주요 산업) 전달 | 스크롤 진입 시 숫자 카운트업(`IntersectionObserver`) |
| `CoreFeaturesSection` | 선택 이유를 카드형으로 어필 | hover 시 포인트 컬러 전환 |
| `ProductsSection` | 주요 제품 카테고리 소개 | hover(PC)/tap(모바일) 시 해당 카드가 확장되는 아코디언 |
| `SolutionsSection` | 애플리케이션/산업별 기술 적용 사례 요약 | 탭 전환으로 콘텐츠 교체, 모바일은 가로 스크롤 탭 |
| `ResourcesSection` | 기술 자료 제공으로 신뢰도 구축 | 캐러셀(`react-slick`) 슬라이드 |

**섹션 내부 구성 원칙**은 대부분 같은 패턴을 따른다.

1. 이미지 경로·링크(href)·태그처럼 **언어와 무관한 값**은 컴포넌트 상단에 `_STATIC` 상수 배열로 고정한다.
2. 제목·본문 같은 **텍스트만** `dict`(번역 데이터)에서 받아, `index` 기준으로 static 배열과 합쳐(`map`) 사용한다.

```ts
// components/sections/ProductsSection.tsx
const PRODUCT_STATIC = [{ tag: "...", image: "...", href: "/products/vision-systems" }, /* ... */];
const products = dict.items.map((item, i) => ({ ...item, ...PRODUCT_STATIC[i] }));
```

이렇게 나눈 이유는, 이미지·링크·아이콘은 언어가 바뀌어도 동일해야 하는 값인데 이걸 4개 언어 dictionary 파일에 전부 중복 기입하면 하나를 바꿀 때 4곳을 고쳐야 하고 실수로 어긋나기 쉽기 때문이다. 컴포넌트에 한 번만 고정해두고 텍스트만 언어별로 갈아 끼우는 구조로 **번역 데이터는 순수하게 텍스트 콘텐츠만 책임지도록** 역할을 나눴다. (다국어 처리 전체 구조는 아래 참고)

## 다국어(i18n) 지원

한국어(기본) / 영어 / 일본어 / 중국어 4개 언어를 지원한다. 라이브러리 없이 Next.js App Router의 표준 컨벤션만으로 구현했다.

### 1. 라우팅 — `app/[lang]` 동적 세그먼트

```
app/
  [lang]/
    layout.tsx   ← 루트 레이아웃 (원래 app/layout.tsx)
    page.tsx     ← 홈 페이지 (원래 app/page.tsx)
```

`app/` 바로 아래 있던 `layout.tsx`, `page.tsx`를 `app/[lang]/` 안으로 옮겼다. 이제 URL은 `/ko`, `/en`, `/ja`, `/zh`처럼 언어 코드로 시작하고, `lang` 값이 모든 하위 페이지에 라우트 파라미터로 전달된다.

- `generateStaticParams()`로 4개 언어 페이지를 전부 **빌드 타임에 정적 생성**한다.
- 사용자가 `/`로 접속하면 루트의 **`proxy.ts`**(과거 `middleware.ts`)가 브라우저의 `Accept-Language` 헤더(또는 언어 전환 시 저장되는 `NEXT_LOCALE` 쿠키)를 보고 `/ko`, `/en` 등으로 자동 리다이렉트한다.

### 2. 번역 데이터 — `i18n/dictionaries`

언어별 텍스트는 `i18n/dictionaries/{ko,en,ja,zh}.ts` 파일에 정리했다. 넷 모두 같은 형태(`i18n/dictionaries/types.ts`의 `Dictionary` 타입)를 따르기 때문에, 번역이 하나라도 빠지면 TypeScript가 바로 에러를 잡아준다.

```ts
// i18n/dictionaries/ko.ts
const ko: Dictionary = {
  header: { searchPlaceholder: "검색", myCognex: "MyCognex", /* ... */ },
  hero: { title: ["지속적으로 제공하는", "새로운 AI 비전"], /* ... */ },
  // ...
};
```

이미지 경로·링크 주소·아이콘처럼 언어와 무관한 값은 각 컴포넌트 안의 정적 배열에 그대로 두고, **텍스트만** dictionary에서 가져와 `index`로 합쳐서 사용한다. 예를 들어 제품 카드 6개는 이미지·링크는 컴포넌트에 고정해두고, 제목만 언어별로 갈아 끼우는 식이다.

```ts
// components/sections/ProductsSection.tsx
const PRODUCT_STATIC = [{ image: "...", href: "/products/vision-systems" }, /* ... */];
const products = dict.items.map((item, i) => ({ ...item, ...PRODUCT_STATIC[i] }));
```

`i18n/dictionaries/index.ts`의 `getDictionary(lang)`이 필요한 언어 파일만 동적 `import()`로 불러오므로, 방문 언어의 번역 데이터만 번들에 포함된다.

### 3. `lang`을 컴포넌트까지 전달하는 방법

원래는 `next/root-params`(Server Component 전용 훅)로 어디서든 `lang`을 바로 꺼내 쓰는 방법을 염두에 뒀는데, 실제로 옮기면서 보니 Header·Hero·Products·Solutions 등 인터랙션이 있는 섹션은 전부 `"use client"` 컴포넌트였다. root-params는 클라이언트 컴포넌트에서 쓸 수 없어서, 대신 다음 방식으로 처리했다.

1. `app/[lang]/layout.tsx`, `app/[lang]/page.tsx`(둘 다 Server Component)에서 `params`로 `lang`을 받고 `getDictionary(lang)`으로 번역 데이터를 로드한다.
2. Header·Footer·각 섹션에 `lang`과 필요한 번역 조각(`dict.header`, `dict.hero` 등)만 **props로 한 단계** 내려준다.

레이아웃 → 페이지 → 섹션이 바로 부모-자식 관계라 실제로는 단계가 깊지 않았고, 그래서 props만으로도 prop drilling 문제 없이 충분했다. (참고: `Dictionary["hero"]`처럼 함수를 담은 값은 Server → Client 컴포넌트 경계를 못 넘기 때문에, `HeroSection`에 넘기기 전에 `page.tsx`에서 문자열로 미리 계산해서 순수 데이터만 전달하도록 했다.)

### 4. 링크 주소에 언어 프리픽스 붙이기

전체 사이트가 `/[lang]` 아래로 들어갔기 때문에 내부 링크도 전부 `/ko/products`처럼 언어가 붙어야 한다. `i18n/href.ts`의 `localeHref(lang, href)` 헬퍼 하나로 통일했다.

```ts
// i18n/href.ts
export function localeHref(lang: Locale, href: string) {
  if (href === "/") return `/${lang}`;
  return `/${lang}${href}`;
}
```

`config/site.ts`의 GNB·Footer 링크는 `href`만 남기고(라벨 제거), dictionary의 라벨 배열과 같은 순서로 짝지어 렌더링한다.

### 5. 언어 선택 드롭다운

`components/layout/Header.tsx`의 지구본 아이콘 버튼을 클릭하면 4개 언어 목록이 드롭다운으로 뜬다(`LanguageSwitcher` 내부 컴포넌트).

- `usePathname()`으로 현재 경로를 읽어와 맨 앞 언어 세그먼트만 바꿔서 이동한다. 예: `/ko/products` 상태에서 English를 클릭하면 `/en/products`로 이동.
- 바깥 영역 클릭 시 드롭다운이 자동으로 닫힌다.
- PC 헤더 / 모바일 헤더에 각각 독립적으로 동작한다.

### 새 언어를 추가하려면

1. `i18n/locales.ts`의 `locales` 배열과 `localeNames`에 코드 추가
2. `i18n/dictionaries/`에 새 언어 파일 추가 (`Dictionary` 타입을 그대로 구현하면 TypeScript가 빠진 항목을 알려줌)
3. `i18n/dictionaries/index.ts`의 `loaders`에 한 줄 추가

끝. 라우팅·리다이렉트·언어 스위처는 전부 `locales` 배열 기반으로 동작해서 별도 수정이 필요 없다.