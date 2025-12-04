import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { enhancedBlogPosts } from '@/data/blog-posts'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://estheticselegancelab.com'
  const currentDate = new Date().toISOString()

  // Main pages with their priorities and change frequencies
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts from enhanced blog posts
  const enhancedBlogPages: MetadataRoute.Sitemap = enhancedBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishDate || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Blog posts from regular blog posts (avoiding duplicates)
  const enhancedSlugs = new Set(enhancedBlogPosts.map((p) => p.slug))
  const regularBlogPages: MetadataRoute.Sitemap = blogPosts
    .filter((post) => !enhancedSlugs.has(post.slug))
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishDate || currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  return [...mainPages, ...servicePages, ...enhancedBlogPages, ...regularBlogPages]
}

