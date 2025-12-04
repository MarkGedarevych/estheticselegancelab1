import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allEnhancedBlogPosts, blogStats } from "@/data/all-blogs";
import { BUSINESS_INFO, SEO_DEFAULTS } from "@/lib/constants";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Skincare Blog | Expert Tips & Insights | Roseville, CA",
  description: `Expert skincare tips, treatment insights, and beauty advice from ${BUSINESS_INFO.owner} at ${BUSINESS_INFO.name} in Roseville, CA. Learn about facials, chemical peels, microneedling, and more.`,
  openGraph: {
    title: "Skincare Blog | Expert Tips & Insights | Roseville, CA",
    description: `Expert skincare tips, treatment insights, and beauty advice from ${BUSINESS_INFO.owner} at ${BUSINESS_INFO.name} in Roseville, CA.`,
    url: `${SEO_DEFAULTS.siteUrl}/blog/enhanced`,
  },
};

export default function EnhancedBlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...allEnhancedBlogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  
  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  // Blog listing schema
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${BUSINESS_INFO.name} Skincare Blog`,
    description: `Expert skincare tips and advice from ${BUSINESS_INFO.owner}`,
    url: `${SEO_DEFAULTS.siteUrl}/blog/enhanced`,
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
    },
    blogPost: sortedPosts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.publishDate,
      author: {
        "@type": "Person",
        name: post.author,
      },
      url: `${SEO_DEFAULTS.siteUrl}/blog/enhanced/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--color-section)] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-support)]/20 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
              Skincare Blog
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-text-main)] mb-6">
              Expert Tips & Insights
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
              Discover in-depth guides, skincare tips, and expert advice from{' '}
              {BUSINESS_INFO.owner}. Learn how to achieve and maintain your healthiest, most radiant skin.
            </p>
          </div>

          {/* Blog Stats */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-text-main)]">
                {blogStats.totalPosts}
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">Articles</div>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-text-main)]">
                {blogStats.categories.length}
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">Categories</div>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-text-main)]">
                {blogStats.allTags.length}+
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">Topics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase">
                Featured Article
              </span>
            </div>
            
            <Link
              href={`/blog/enhanced/${featuredPost.slug}`}
              className="block group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-support)]/30">
                  <Image
                    src={featuredPost.featuredImage.src}
                    alt={featuredPost.featuredImage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div>
                  <span className="inline-block bg-[var(--color-primary-light)] text-[var(--color-text-main)] text-sm font-medium px-4 py-1 rounded-full mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl lg:text-4xl font-medium text-[var(--color-text-main)] mb-4 group-hover:text-[var(--color-support-dark)] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[var(--color-text-muted)] mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span>
                      {new Date(featuredPost.publishDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-[var(--color-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm text-[var(--color-text-muted)] py-2 mr-2">Browse by category:</span>
            {blogStats.categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm rounded-full bg-white border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:bg-[var(--color-primary-light)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-main)] transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/enhanced/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-support)]/30 overflow-hidden">
                  <Image
                    src={post.featuredImage.src}
                    alt={post.featuredImage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-[var(--color-support-dark)] bg-[var(--color-support)]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--color-text-main)] mb-3 line-clamp-2 group-hover:text-[var(--color-support-dark)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">
                      {new Date(post.publishDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-[var(--color-support-dark)] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-[var(--color-section)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] mb-4">
            Stay Updated
          </h2>
          <p className="text-[var(--color-text-muted)] mb-8">
            Subscribe to receive the latest skincare tips, treatment insights, and exclusive offers 
            from {BUSINESS_INFO.name}.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-xl border border-[var(--color-border-subtle)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Skin?"
        description="Book a consultation and let's discuss your skincare goals."
      />
    </>
  );
}

