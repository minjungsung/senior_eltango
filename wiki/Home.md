# Senior Eltango Wiki

> 시니어 대상 스페인어 학습 웹 애플리케이션 — Next.js, Tailwind CSS, Vercel 배포

## 프로젝트 개요

**Senior Eltango**는 시니어(어르신) 대상으로 설계된 스페인어 학습 웹 애플리케이션입니다. 큰 글자, 직관적인 인터페이스, 간결한 학습 경험을 통해 시니어 사용자가 쉽게 스페인어를 학습할 수 있도록 합니다.

### 핵심 특징
- **시니어 친화적 UI**: 큰 글자 크기, 높은 명암비, 심플한 레이아웃
- **단계별 학습**: 기초부터 차근차근 진행하는 커리큘럼
- **반응형 디자인**: 태블릿, 데스크톱 등 다양한 기기 지원
- **국제화 지원**: 한국어/영어 인터페이스
- **빠른 로딩**: Next.js SSR/SSG로 최적화된 성능
- **접근성**: WCAG 가이드라인 준수

## 기술 스택

| 카테고리 | 기술 |
|---------|------|
| 프레임워크 | Next.js 14 (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS |
| UI 컴포넌트 | shadcn/ui 스타일 |
| 배포 | Vercel |
| 린터 | ESLint |
| 패키지 관리 | npm |

## 프로젝트 구조

```
senior_eltango/
├── src/
│   ├── app/                    # Next.js App Router 페이지
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   ├── page.tsx            # 메인 페이지
│   │   └── [locale]/           # 국제화 라우팅
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       └── lessons/
│   │           └── page.tsx
│   ├── components/             # 재사용 가능한 컴포넌트
│   │   ├── ui/                 # 기본 UI 컴포넌트
│   │   ├── lesson-card.tsx     # 레슨 카드
│   │   ├── vocabulary.tsx      # 단어 학습
│   │   └── progress-bar.tsx    # 진행률 표시
│   ├── lib/                    # 유틸리티 함수
│   └── styles/                 # 글로벌 스타일
├── public/                     # 정적 에셋
│   └── images/
├── messages/                   # 국제화 메시지
│   ├── ko.json
│   └── en.json
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── .eslintrc.json
```

## Wiki 목차

| 페이지 | 설명 |
|--------|------|
| [Architecture](Architecture) | Next.js App Router 구조, 컴포넌트 설계 |
| [Setup Guide](Setup-Guide) | 로컬 개발, Vercel 배포 가이드 |

## 빠른 시작

```bash
# 리포지토리 클론
git clone https://github.com/minjungsung/senior_eltango.git
cd senior_eltango

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
# http://localhost:3000 에서 확인

# 프로덕션 빌드
npm run build
npm start
```

## 디자인 원칙

### 시니어 친화적 디자인 가이드라인

| 항목 | 가이드라인 |
|------|----------|
| 글자 크기 | 최소 18px, 본문 20px 이상 |
| 명암비 | WCAG AA 이상 (4.5:1) |
| 터치 영역 | 최소 48x48px |
| 색상 | 고대비 색상 조합, 색맹 고려 |
| 네비게이션 | 단순한 구조, 뒤로가기 항상 표시 |
| 피드백 | 명확한 시각적/청각적 피드백 |
| 폰트 | Sans-serif, 가독성 우선 |

자세한 내용은 [Architecture](Architecture) 페이지를 참조하세요.
