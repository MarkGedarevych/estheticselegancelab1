import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Your canonical domain (without protocol)
const CANONICAL_DOMAIN = 'estheticselegancelab.com';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const hostname = request.headers.get('host') || '';
  
  // Check if this is NOT the canonical domain
  // This includes .vercel.app domains, preview deployments, etc.
  const isCanonicalDomain = hostname === CANONICAL_DOMAIN || 
                            hostname === `www.${CANONICAL_DOMAIN}`;
  
  if (!isCanonicalDomain) {
    // Add X-Robots-Tag header to prevent indexing of non-canonical domains
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }
  
  return response;
}

// Run middleware on all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};


