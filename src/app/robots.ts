import type { MetadataRoute } from 'next'

const BASE_URL = 'https://its-hyeyeon.vercel.app'

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
