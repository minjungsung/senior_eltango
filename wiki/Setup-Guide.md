# Setup Guide

> 로컬 개발 환경 설정, Vercel 배포 가이드

## 사전 요구사항

| 도구 | 최소 버전 | 용도 |
|------|----------|------|
| Node.js | 18.17+ | 런타임 |
| npm | 9.0+ | 패키지 관리 |
| Git | 2.30+ | 소스 관리 |

## 로컬 개발 환경

### 1단계: 리포지토리 클론

```bash
git clone https://github.com/minjungsung/senior_eltango.git
cd senior_eltango
```

### 2단계: 의존성 설치

```bash
npm install
```

### 3단계: 환경 변수 설정 (필요한 경우)

```bash
# .env.local 파일 생성
cp .env.example .env.local

# 환경 변수 편집
vi .env.local
```

### 4단계: 개발 서버 실행

```bash
# 개발 서버 시작 (Hot Reload 지원)
npm run dev

# 브라우저에서 확인
# http://localhost:3000
```

### 개발 서버 옵션

```bash
# 기본 실행
npm run dev

# 특정 포트로 실행
npm run dev -- -p 3001

# 네트워크에서 접근 가능하게 실행 (모바일 테스트용)
npm run dev -- -H 0.0.0.0
```

## 개발 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (Hot Reload) |
| `npm run build` | 프로덕션 빌드 |
| `npm start` | 빌드된 앱 실행 |
| `npm run lint` | ESLint 실행 |
| `npm run lint:fix` | ESLint 자동 수정 |

## 프로덕션 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 확인
# .next/ 디렉토리에 빌드 출력

# 빌드된 앱 로컬 실행
npm start
# http://localhost:3000
```

### 빌드 최적화 확인

빌드 완료 시 출력되는 정보:
- 페이지별 사이즈
- Static/SSR/ISR 구분
- First Load JS 사이즈

```
Route (app)                    Size     First Load JS
├ / (locale redirect)          189 B          85 kB
├ /[locale]                    2.3 kB         95 kB
├ /[locale]/lessons            1.8 kB         93 kB
└ /[locale]/vocabulary         1.5 kB         91 kB
```

## Vercel 배포

### 방법 1: Git 연동 자동 배포 (권장)

1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 리포지토리 `senior_eltango` 선택
4. Framework Preset: "Next.js" 자동 감지
5. "Deploy" 클릭

이후 `main` 브랜치에 push할 때마다 자동 배포됩니다.

### 방법 2: Vercel CLI

```bash
# Vercel CLI 설치
npm install -g vercel

# 프로젝트 연결 및 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 환경 변수 설정 (Vercel)

Vercel 대시보드에서 환경 변수를 설정합니다:

1. Project Settings > Environment Variables
2. 필요한 변수 추가

| 변수명 | 설명 | 환경 |
|--------|------|------|
| `NEXT_PUBLIC_SITE_URL` | 사이트 URL | Production |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | Production |

### Preview 배포

`main` 이외의 브랜치에 push하면 자동으로 Preview 배포가 생성됩니다:
- 고유한 URL 할당 (예: `senior-eltango-xxx.vercel.app`)
- PR에 자동으로 Preview URL 코멘트
- 프로덕션에 영향 없이 테스트 가능

### 커스텀 도메인 설정

```bash
# Vercel CLI로 도메인 추가
vercel domains add your-domain.com

# 또는 Vercel 대시보드에서:
# Project Settings > Domains > Add Domain
```

## 프로젝트 설정 파일

### next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 이미지 최적화
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // 국제화 설정은 middleware에서 처리
};

module.exports = nextConfig;
```

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'senior-sm': '18px',    // 시니어용 소형 텍스트
        'senior-base': '20px',  // 시니어용 기본 텍스트
        'senior-lg': '24px',    // 시니어용 큰 텍스트
        'senior-xl': '30px',    // 시니어용 제목
      },
      spacing: {
        'touch': '48px',        // 최소 터치 영역
      },
    },
  },
  plugins: [],
};
```

### tsconfig.json 주요 설정

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 문제 해결

| 문제 | 해결 방법 |
|------|----------|
| `npm install` 실패 | Node.js 버전 확인 (18.17+), `rm -rf node_modules && npm install` |
| 개발 서버 포트 충돌 | `npm run dev -- -p 3001`로 포트 변경 |
| ESLint 오류 | `npm run lint:fix`로 자동 수정, 수동 수정 필요한 항목 확인 |
| 빌드 실패 | `npm run build` 로그 확인, TypeScript 타입 오류 수정 |
| Vercel 배포 실패 | Vercel 대시보드에서 빌드 로그 확인 |
| 한글 폰트 깨짐 | next/font 설정 확인, 폰트 파일 존재 여부 확인 |
| i18n 누락 | messages/ 파일에 번역 키 추가 |
