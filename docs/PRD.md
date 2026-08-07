# [Cognex] PRD

## 1. Project Overview
- **프로젝트명**: Cognex 기업 홈페이지 메인 화면 리디자인 프로젝트
- **프로젝트 타입**: Homepage Portfolio
- **주요 목표**: 기존 Cognex 기업 홈페이지의 가독성 및 디자인을 리뉴얼하고 Next.js 기반의 인터랙티브 UI와 Accessibility/SEO 구조를 구현


## 2. Background
- **비즈니스 목적**
  - UI/UX 개선을 통한 브랜드 전문성 확보 및 사용자 신뢰도 제고
  - SEO/GEO 최적화를 통해 검색 엔진 및 AI 검색 결과 내 브랜드 노출량 증대
- **사용자 목적**
  - 원하는 서비스/기업 정보를 직관적이고 빠르게 파악 (가독성 개선)
  - 인터랙티브 요소를 통해 매력적인 브랜드 경험을 느끼고 용이하게 상담/문의 접수


## 3. Scope
### Included (구현 대상)
- 확정된 디자인 피그마 기반 완전 구현 (인터랙티브 모션 및 애니메이션 포함)
- SEO / GEO 전략 및 Lighthouse 최적화 적용 (Lighthouse 전 항목 90~95점 이상 달성)
- 핵심 기능:
  - 메인페이지 인터랙티브 히어로
  - 모바일 최적화 내비게이션(GNB/LNB)
  - Header의 다국어 지원 버튼을 클릭해 번역 지원 (한국어, 영어, 중국어, 일본어)
  - 어떤 제품을 찾으시나요? 폼을 선택하여 결과물 출력

### Excluded (범위 제외)
- 별도의 회원가입/로그인 및 마이페이지 기능 (관리자 데이터 조회는 Supabase 대시보드 활용)
- 어떤 제품을 찾으시나요? 폼을 선택하여 나온 결과물 (링크)를 클릭하여 서브페이지 이동
- 서브페이지 구현 (확장 미정)

## 4. Deployment & Architecture
- **상세 개발 규칙 및 폴더 구조**: [[RULE]](RULE.md) 참고
- **배포 환경**: Vercel (GitHub main 브랜치 자동 CI/CD 배포 및 커스텀 도메인 연동)

## 5. Target
- **타겟 페르소나**: 
  - Cognex 기업의 서비스/제품 도입을 검토 중인 B2B 구매 담당자 및 의사결정권자
  - 신규 브랜딩 정보 및 포트폴리오를 확인하고자 방문하는 일반 고객 및 파트너사
- **타겟 디바이스**: Mobile First (스마트폰 360px~, 태블릿 768px~, 데스크톱 1024px~ 전 기기 응답형 대응)


## 6. Sitemap & Page Structure

- **URL Structure**: `/app/page.tsx` (Single Page Website)
- **Section Structure**: 
  - Section 1: Hero Section (브랜드 소개)
  - Section 2: Company Introdution (회사 개요)
  - Section 3: Core Features (특장점)
  - Section 4: Products (제품 카테고리 선택)
  - Section 5: Solutions(기술 적용 분야)
  - Section 6: Success Stories (고객 사례)
  - Section 7: Popular Resources (인기 리소스)

---


## 7. Page & Section Definitions
> 메인페이지(`src/app/page.tsx`)의 순차적 섹션 구조와 각 섹션별 구현 목적, 디자인 레퍼런스, 핵심 인터랙션을 정의합니다.

### Section 1: Hero Section (브랜드 헤더 & 히어로)
- **목적**: 방문자에게 강력한 기업 첫인상 전달 및 핵심 가치 제안
- **Design Reference**:
  - **참고 URL/피그마**: Figma Frame: `#main`
  - **참고 포인트**: 굵은 타이포그래피 배치, 하단 슬라이드별 이름
- **핵심 기능/모션**: 슬라이드가 넘어가는 시간을 나타내는 게이지바 애니메이션, 슬라이드 순서가 오면 슬라이드 이름의 텍스트 굵기와 투명도 변화

### Section 2: Company Introdution (회사 개요)
- **목적**: Cognex 회사 개요
- **Design Reference**:
  - **참고 URL/피그마**: [세경하이테크의 '폴더블 시장 선발 기업' 섹션](https://sghitech.co.kr/kr/index.php)
  - **참고 포인트**: 스크롤을 내리면 인터랙션으로 비주얼 효과를 보임
- **핵심 기능/모션**: '회사개요', '기술 및 혁신', '주요 적용 산업' 의 차례로 나타남, 숫자가 늘어나는 애니메이션

### Section 3: Core Features (특장점)
- **목적**: Cognex를 선택해야하는 이유를 카드형으로 나열하여 어필
- **Design Reference**:
  - **참고 URL/피그마**: Figma Frame: `#select`
  - **참고 포인트**: 인터랙션 모션이 없는 정적인 카드 형식의 마크업
- **핵심 기능/모션**: hover 시, point color(yellow) 배경색으로 전환

### Section 4: Products (주요 제품 카테고리)
- **목적**: 주요 제품 카테고리 소개
- **Design Reference**:
  - **참고 URL/피그마**: [한빛 산업의 'Products' 섹션](https://www.hanvit-ind.com/)
  - **참고 포인트**: 전체 화면의 너비를 꽉 채운 UI, hover한 아이템 섹션의 너비가 늘어나는 비주얼 섹션
- **핵심 기능/모션**: hover 시, 배경색과 이미지의 크기 변화

### Section 5: Solutions (기술 적용 분야)
- **목적**: 많은 정보량을 가지고 있는 기술 분야 내용을 가독성 있게 시각화 & 요약
- **Design Reference**:
  - **참고 URL/피그마**: Figma Frame: `#solution`
  - **참고 포인트**: 애플리케이션/산업 군을 선택, 탭메뉴를 통해 기술 분야 확인
- **핵심 기능/모션**: 탭메뉴 선택 시, 해당 기술 분야 확인, 모바일 화면에서는 가로 스크롤하여 탭메뉴 선택 가능

### Section 6: Success Stories (고객 사례)
- **목적**: 기업 신뢰도 전달을 위한 고객 사례
- **Design Reference**:
  - **참고 URL/피그마**: [대웅제약의 'DAEWOONG이 나아가는 방향' 섹션](https://daewoong.co.kr/ko) / Figma Name: `#success`
  - **참고 포인트**: 고객 사례를 한눈에 확인
- **핵심 기능/모션**: 자동 슬라이드 (이미지는 옆으로 넘어가고, 텍스트는 나타남)

### Section 7: Popular Resources (인기 리소스)
- **목적**: 엔지니어 및 구매 결정권자에게 전문 기술 자료를 제공하여 브랜드 신뢰도 구축 및 리드 유도
- **Design Reference**:
  - **참고 URL/피그마**: Figma Name: `#resource`
  - **참고 포인트**: 깔끔한 그리드 레이아웃
- **핵심 기능/모션**: 화살표를 클릭하면 슬라이드 이동


## 8. Functional Requirements
- **[FN-01] 다국어 스위처 (i18n)**: GNB 내 언어 전환 기능 및 URL/Locale 상태 반영
- **[FN-02] 인터랙티브 스크롤 모션**: 스크롤 위치에 따른 섹션 애니메이션 및 마이크로 인터랙션


## 9. Responsive
- **기본 방침**: Mobile First 설계
- **Breakpoints**:
  - Mobile: `< 640px`
  - Tablet: `640px ~ 1024px`
  - Desktop: `> 1024px`


## 10. SEO & GEO Strategy
### SEO (검색엔진 최적화)
- **Metadata**: Next.js App Router `generateMetadata` 또는 static `metadata` 정의
- **URL Structure**: Clean & Search-Friendly URL
- **Canonical URL**: 모든 페이지 canonical 태그 자동 적용
- **JSON-LD Schema**: Organization, WebSite, BreadcrumbList 등 스키마 적합성 검증

### GEO (Generative Engine Optimization - AI 검색 최적화)
- **Stuctured Data**: Perplexity, SearchGPT 등 AI 검색 엔진이 구조를 파악하기 쉬운 텍스트/데이터 컨텍스트 제공
- **Entity Identification**: 명확한 브랜드/조직 정보(Organization Schema) 수록

## 12. Quality & Performance Requirements (Lighthouse Target)
### Performance Target Scores
- **Performance**: $\ge 90$
- **Accessibility**: $\ge 95$
- **SEO**: $\ge 95$
- **Best Practices**: $\ge 95$

### Mandatory Implementation Checklist
- [ ] **`next/image`**: 모든 이미지 요소에 최적화 규격 적용 (`priority`, `sizes`, `blurDataURL`)
- [ ] **Lazy Loading**: 비시각 영역 컴포넌트 및 이미지 지연 로딩
- [ ] **Font Optimization**: `next/font`를 통한 폰트 파일 로컬 호스팅 및 FOIT/FOUT 방지
- [ ] **Dynamic Import**: 중량 라이브러리/특수 컴포넌트(`next/dynamic`) 코드 분할(Code Splitting)
- [ ] **Image Optimization**: WebP/AVIF 포맷 자동 변환 활용