import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

const CANONICAL_DOMAIN = 'estheticselegancelab.com';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  
  // Check if this is the canonical domain
  const isCanonicalDomain = host === CANONICAL_DOMAIN || 
                            host === `www.${CANONICAL_DOMAIN}`;
  
  // If NOT on the canonical domain, block all indexing
  if (!isCanonicalDomain) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }
  
  // On the canonical domain, allow indexing with full robots.txt
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Block bad bots and scrapers
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
    ],
    sitemap: `https://${CANONICAL_DOMAIN}/sitemap.xml`,
    host: `https://${CANONICAL_DOMAIN}`,
  };
}

