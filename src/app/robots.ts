import type { MetadataRoute } from 'next'

const BASE_URL = 'https://yeon.dev' // 배포 후 실제 도메인으로 교체

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/_next/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
