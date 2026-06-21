import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Core',
    items: [
      {
        name: 'React',
        level: 'Advanced',
        details: [
          '함수형 컴포넌트 및 커스텀 훅 설계',
          'Compound Component 패턴으로 유연하고 재사용 가능한 UI 설계',
          '성능 최적화 — memo, useMemo, useCallback, lazy',
          'React Router를 활용한 SPA 라우팅',
        ],
      },
      {
        name: 'TypeScript',
        level: 'Advanced',
        details: [
          '제네릭, 유틸리티 타입(Partial, Pick, Omit 등) 활용',
          'API 응답 타입 정의 및 타입 가드 작성',
          '컴포넌트 Props 인터페이스 및 enum 설계',
        ],
      },
      {
        name: 'Next.js',
        level: 'Intermediate',
        details: [
          'App Router 기반 페이지 및 레이아웃 설계',
          'Server / Client Component 경계를 고려한 데이터 패칭 설계',
          'Vercel 배포 및 성능 최적화 경험',
        ],
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'Advanced',
        details: [
          'Promise, async/await 비동기 처리',
          'DOM 직접 조작, 이벤트 핸들링, 타이머',
          '클로저, 프로토타입 체인 원리 이해',
        ],
      },
    ],
  },
  {
    title: 'State Management',
    items: [
      {
        name: 'TanStack Query',
        level: 'Intermediate',
        details: [
          '서버 상태 캐싱 전략',
          'Infinite Query를 활용한 무한 스크롤',
          '낙관적 업데이트(optimistic update) 구현',
        ],
      },
      {
        name: 'Zustand',
        level: 'Intermediate',
        details: [
          '전역 상태 스토어 설계 및 슬라이스 패턴',
          'persist 미들웨어로 localStorage 연동',
          'devtools 미들웨어 디버깅 활용',
        ],
      },
      {
        name: 'Framer Motion',
        level: 'Intermediate',
        details: [
          '페이지 트랜지션 및 레이아웃 애니메이션',
          'AnimatePresence 마운트/언마운트 애니메이션',
          'useMotionValue, useTransform으로 스크롤 연동',
        ],
      },
    ],
  },
  {
    title: 'Styling',
    items: [
      {
        name: 'Tailwind CSS',
        level: 'Advanced',
        details: [
          '유틸리티 퍼스트 방식으로 빠른 스타일링',
          '커스텀 테마 설정 및 플러그인 활용',
          'Responsive 디자인 및 다크 모드 구현',
        ],
      },
      {
        name: 'CSS Modules / CSS',
        level: 'Advanced',
        details: [
          'CSS 변수 기반 디자인 토큰 시스템 관리',
          'Flexbox / Grid 레이아웃 및 CSS 애니메이션',
        ],
      },
    ],
  },
  {
    title: 'Tools & Infra',
    items: [
      {
        name: 'Docker',
        level: 'Basic',
        details: [
          'Dockerfile 작성 및 컨테이너 실행',
          'docker-compose 멀티 서비스 구성',
        ],
      },
      {
        name: 'GitHub Actions',
        level: 'Basic',
        details: [
          'CI/CD 파이프라인 구성 및 자동화 배포',
          'PR 체크 자동화 워크플로우 작성',
        ],
      },
      {
        name: 'FastAPI / Spring Boot',
        level: 'Basic',
        details: [
          'REST API 설계 및 구현 경험',
          'FastAPI 기반 AI 모델 서빙 서버 연동',
          'Spring Boot MVC 패턴 이해 및 기여',
        ],
      },
      {
        name: 'MySQL / Supabase',
        level: 'Intermediate',
        details: [
          '관계형 DB 설계 및 JOIN 쿼리 작성',
          'Supabase Auth, Storage, Realtime 기능 활용',
          'Prisma ORM 스키마 설계 경험',
        ],
      },
    ],
  },
];
