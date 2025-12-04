import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { BUSINESS_INFO, SEO_DEFAULTS } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SEO_DEFAULTS.siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // BlogPosting Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SEO_DEFAULTS.siteUrl}${post.image}`,
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorCredentials,
      url: `${SEO_DEFAULTS.siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      logo: {
        "@type": "ImageObject",
        url: `${SEO_DEFAULTS.siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SEO_DEFAULTS.siteUrl}/blog/${post.slug}`,
    },
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-[var(--color-section)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Link href="/" className="hover:text-[var(--color-text-main)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[var(--color-text-main)] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[var(--color-text-main)] line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="pb-12 bg-[var(--color-section)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block bg-[var(--color-primary-light)] text-[var(--color-text-main)] text-sm font-medium px-4 py-1 rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-text-main)] mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-[var(--color-text-muted)]">
              <span>
                {new Date(post.publishDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Placeholder */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-support)]/30 flex items-center justify-center">
            <div className="text-center p-8">
              <svg
                className="w-16 h-16 mx-auto text-[var(--color-support-dark)] mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-[var(--color-text-muted)]">Featured image placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding pt-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-[family-name:var(--font-heading)] 
              prose-headings:text-[var(--color-text-main)]
              prose-p:text-[var(--color-text-muted)]
              prose-p:leading-relaxed
              prose-a:text-[var(--color-support-dark)]
              prose-a:no-underline
              prose-a:hover:underline
              prose-strong:text-[var(--color-text-main)]
              prose-ul:text-[var(--color-text-muted)]
              prose-li:text-[var(--color-text-muted)]
              prose-h2:mt-12 prose-h2:mb-4
              prose-h3:mt-8 prose-h3:mb-3"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border-subtle)]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-[var(--color-section)] text-[var(--color-text-muted)] text-sm px-4 py-2 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Box - E-E-A-T */}
          <div className="mt-12 card">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl font-medium">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--color-text-main)] mb-1">
                  About {post.author}
                </h3>
                <p className="text-[var(--color-support-dark)] text-sm font-medium mb-3">
                  {post.authorCredentials}
                </p>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {post.author} is the founder of {BUSINESS_INFO.name} in Roseville, CA. 
                  With years of experience as a licensed esthetician, she is passionate about 
                  helping clients achieve their healthiest, most radiant skin through personalized 
                  treatments and expert guidance.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--color-support-dark)] text-sm font-medium mt-4 hover:underline"
                >
                  Learn more about {post.author.split(" ")[0]}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-[var(--color-section)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] text-center mb-12">
              More Articles You&apos;ll Love
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </>
  );
}

