# Cognex 기업 홈페이지 메인 화면 리디자인 프로젝트
- Figma MCP Server 와 Claude 연동하여 활용
- 토큰 소비량이 많아 역할 분담을 나누기로 결정
    - me: 이미지 추출, 이미지 이름 변경, 페이지 폴더링, 홈페이지 세팅 (메타, og, sitemap,xml, robots.txt 등), 기본 마크업(혹은 Section 하나씩만 MCP 호출하여 진행)
    - you: 난이도 있는 인터랙션, 애니메이션 모션, 기능구현, 보안 검증
    - 26.08.07 : 디자인시스템, 이미지추출, 폴더링 없이 메인화면 구축 토큰 사용량 약 32%
- MCP를 섹션별로 쪼개서 호출하면 토큰 소모량을 아껴준다.
- AI는  이전 질문과 이전 답변 전체를 매번 다시 읽으며(Context Accumulation) 다음 답변을 생성하게 되는데 만약 1번섹션만 수정 시, 전체 데이터에서 1번섹션을 찾는데도 토큰이 소비됨
- 한 섹션 완성되면 새로운 채팅 열기

---

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