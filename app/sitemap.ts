import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fitcommit.ai'
  const now = new Date()

  const routes = [
    '',
    '/privacy',
    '/terms',
    '/mental-health',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.6,
  }))
}


