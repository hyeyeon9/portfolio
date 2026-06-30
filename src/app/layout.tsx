import type { Metadata } from 'next'
import Providers from '@/components/Providers'
import './globals.css'

const BASE_URL = 'https://yeon.dev' // 배포 후 실제 도메인으로 교체

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'yeon.dev | 구혜연 포트폴리오',
    template: '%s | yeon.dev',
  },
  description: '사용자가 머무는 화면을 만드는 프론트엔드 개발자 구혜연의 포트폴리오입니다. React · TypeScript · Next.js 기반 프로젝트 경험을 담았습니다.',
  keywords: ['프론트엔드 개발자', '구혜연', 'React', 'TypeScript', 'Next.js', '포트폴리오', 'portfolio'],

  openGraph: {
    title: '구혜연 | 프론트엔드 개발자 포트폴리오',
    description: '사용자가 머무는 화면을 만드는 프론트엔드 개발자 구혜연입니다.',
    url: BASE_URL,
    siteName: 'yeon.dev',
    images: [
      {
        url: '/og-image.png', // public/og-image.png 에 1200×630 이미지 추가 필요
        width: 1200,
        height: 630,
        alt: '구혜연 프론트엔드 개발자 포트폴리오',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: '구혜연 | 프론트엔드 개발자 포트폴리오',
    description: '사용자가 머무는 화면을 만드는 프론트엔드 개발자 구혜연입니다.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          crossOrigin="anonymous"
        />
        {/* Theme flash prevention: runs before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');})();`,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
