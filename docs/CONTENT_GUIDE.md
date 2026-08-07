# [프로젝트명] Content Guide (Production)

> 본 문서는 실서비스 배포용 웹사이트의 페이지별 상세 섹션 구조, 텍스트 카피라이팅, 미디어 에셋, CTA, UI 컴포넌트 명세를 정의합니다.
> 모든 섹션은 HTML5 시맨틱 태그(`header`, `section`, `article`, `footer` 등) 및 H1~H3 태그 계층 구조를 엄격히 준수합니다.

---

## 1. Global / Common Elements (공통 요소)

### Header / Navigation Bar
- **Logo**: SVG 브랜딩 로고 (`alt="[회사명] 로고"`)
- **Nav Links**: `서비스 소개`, `포트폴리오`, `실시간 견적`, `FAQ`
- **Right CTA**: [견적 문의하기] (Primary Accent Color 적용)

### Footer
- **기업 정보**: 상호명, 대표자명, 사업자등록번호, 통신판매업신고번호, 주소
- **연락처**: 이메일, 대표전화, 운영시간
- **하단 링크**: 이용약관, 개인정보처리방침
- **Copyright**: `© 2026 [회사명]. All rights reserved.`

---

## 2. `/` (Main Page)

### Section 1: Hero Section (시각적 최우선 영역)
- **시맨틱 태그**: `<section id="hero">`
- **배경/미디어**: WebP 최적화 배경 이미지 또는 Lottie 애니메이션 (`next/image` - `priority` 필수 적용)
- **Heading (H1)**: 
  > **"웹사이트 제작, 복잡한 상담 없이 1분 만에 견적 확인"**
- **Sub-heading (P)**: 
  > "투명한 정찰제 가격과 AI 자동 견적 시스템으로 원하는 프로젝트를 바로 시작하세요."
- **CTA Group**:
  - **Primary CTA**: "실시간 견적 계산하기" (`/estimate` 링크 이동)
  - **Secondary CTA**: "포트폴리오 보기" (`/portfolio` 스크롤 이동)

---

### Section 2: Social Proof / Key Metrics (신뢰도 확보)
- **시맨틱 태그**: `<section id="metrics">`
- **레이아웃**: 4-Column Metric Grid
- **콘텐츠 데이터**:
  1. `98%` — 고객 만족도
  2. `150+` — 프로젝트 완료 수
  3. `1분` — 평균 견적 산출 시간
  4. `24시간` — 문의 답변율

---

### Section 3: Core Features / Services (핵심 제공 가치)
- **시맨틱 태그**: `<section id="services">`
- **Heading (H2)**: **"왜 [서비스명]을 선택해야 할까요?"**
- **카드 컴포넌트 목록 (3 Columns)**:
  - **Card 1**:
    - **Visual**: `icon-speed.svg`
    - **Title (H3)**: 압도적인 제작 속도
    - **Body**: Next.js App Router 기반의 고성능 아키텍처로 빠른 로딩 속도를 보장합니다.
  - **Card 2**:
    - **Visual**: `icon-seo.svg`
    - **Title (H3)**: 검색엔진 & AI 완벽 최적화
    - **Body**: Google, Naver 및 AI 검색(Perplexity, ChatGPT)에 노출되는 SEO/GEO 구조를 기본 적용합니다.
  - **Card 3**:
    - **Visual**: `icon-price.svg`
    - **Title (H3)**: 투명한 견적 시스템
    - **Body**: 숨은 추가 비용 없이 필요한 기능만 조합하여 합리적인 견적을 제시합니다.

---

### Section 4: Interactive Quote Preview (간이 견적 계산기)
- **시맨틱 태그**: `<section id="quick-quote">`
- **Heading (H2)**: **"예상 제작 비용을 바로 확인해보세요"**
- **UI Component**:
  - **Step 1**: 사이트 유형 선택 (랜딩페이지 / 브랜드 사이트 / 쇼핑몰)
  - **Step 2**: 페이지 수 슬라이더 (1~10페이지)
  - **Live Output**: 실시간 예상 비용 계산 텍스트
  - **Action Button**: "상세 견적 받고 문의하기" (`/estimate`로 선택값 state 전달)

---

### Section 5: FAQ Section (자주 묻는 질문)
- **시맨틱 태그**: `<section id="faq">`
- **Heading (H2)**: **"자주 묻는 질문"**
- **UI Component**: Accordion Component
- **Schema Mapping**: `FAQPage` JSON-LD 태그 스키마 자동 생성
- **FAQ Items**:
  - **Q1**: 제작 기간은 얼마나 걸리나요?
    - **A1**: 일반 랜딩페이지 기준 약 1~2주, 기능형 홈페이지의 경우 2~4주가 소요됩니다.
  - **Q2**: 제작 후 유지보수나 수정도 가능한가요?
    - **A2**: 네, 기본 검수 기간 제공 및 텍스트/이미지 수정 가이드를 함께 전달드립니다.

---

### Section 6: Final CTA Banner (최종 전환 유도)
- **시맨틱 태그**: `<section id="final-cta">`
- **Heading (H2)**: **"지금 바로 당신의 프로젝트를 시작하세요"**
- **Sub-heading**: "전문가와의 상담이 필요하시다면 언제든 편하게 문의해 주세요."
- **CTA Button**: "지금 상담 신청하기" (모달 팝업 또는 `/contact` 이동)

---

## 3. `/portfolio/[id]` (포트폴리오 상세)

### Section 1: Header & Overview
- **Breadcrumb**: `홈 > 포트폴리오 > [프로젝트명]`
- **Heading (H1)**: `[프로젝트명] - [한 줄 요약]`
- **Meta Tags**:
  - **고객사**: [고객사명]
  - **제작 기간**: [2주]
  - **적용 기술**: `Next.js`, `TypeScript`, `Supabase`, `Tailwind CSS`
- **Live Preview Link**: "실제 사이트 방문하기 ↗" (`target="_blank" rel="noopener noreferrer"`)

### Section 2: Visual Showcase
- **Image List**:
  - 메인 히어로 캡처 이미지 (`alt="[프로젝트명] 메인 화면"` / `sizes="100vw"`)
  - 모바일 반응형 뷰 캡처 이미지
  - 주요 기능 상세 스크린샷 갤러리

### Section 3: Project Detail Content
- **Heading (H2)**: **"프로젝트 과제 및 해결 성과"**
- **Text Body**: 
  - **Challenge**: 클라이언트의 기존 사이트가 가진 문제점
  - **Solution**: 구현한 핵심 UI/UX 솔루션 및 Supabase 연동 처리 방식