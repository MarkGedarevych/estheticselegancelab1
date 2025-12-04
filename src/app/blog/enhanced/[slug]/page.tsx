import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allEnhancedBlogPosts, getEnhancedBlogBySlug, getRelatedPosts } from "@/data/all-blogs";
import { BUSINESS_INFO, SEO_DEFAULTS } from "@/lib/constants";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import BlogFAQSection from "@/components/BlogFAQSection";
import BlogContactForm from "@/components/BlogContactForm";
import BlogCard from "@/components/BlogCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allEnhancedBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getEnhancedBlogBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${SEO_DEFAULTS.siteUrl}/blog/enhanced/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate,
      authors: [post.author],
      images: [
        {
          url: `${SEO_DEFAULTS.siteUrl}${post.featuredImage.src}`,
          width: 1200,
          height: 630,
          alt: post.featuredImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [`${SEO_DEFAULTS.siteUrl}${post.featuredImage.src}`],
    },
  };
}

export default async function EnhancedBlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getEnhancedBlogBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  // BlogPosting Schema with FAQs
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${SEO_DEFAULTS.siteUrl}${post.featuredImage.src}`,
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
      "@id": `${SEO_DEFAULTS.siteUrl}/blog/enhanced/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    wordCount: post.sections.reduce((acc, s) => acc + s.content.split(' ').length, 0),
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SEO_DEFAULTS.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SEO_DEFAULTS.siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SEO_DEFAULTS.siteUrl}/blog/enhanced/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-[var(--color-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="pb-8 bg-[var(--color-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block bg-[var(--color-primary-light)] text-[var(--color-text-main)] text-sm font-medium px-4 py-1 rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-text-main)] mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-white font-medium">{post.author.charAt(0)}</span>
                </div>
                <div>
                  <span className="block text-[var(--color-text-main)] font-medium">{post.author}</span>
                  <span className="text-xs">{post.authorCredentials}</span>
                </div>
              </div>
              <span>•</span>
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

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-support)]/30">
            <Image
              src={post.featuredImage.src}
              alt={post.featuredImage.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <article className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Sidebar with TOC */}
            <aside className="hidden lg:block">
              <BlogTableOfContents items={post.tableOfContents} />
            </aside>

            {/* Main Content */}
            <div className="max-w-3xl">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-8">
                <details className="bg-[var(--color-section)] rounded-2xl p-4">
                  <summary className="font-medium text-[var(--color-text-main)] cursor-pointer flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h12" />
                    </svg>
                    Table of Contents
                  </summary>
                  <nav className="mt-4 space-y-2">
                    {post.tableOfContents.map((item, index) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm py-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                      >
                        <span className="text-[var(--color-support-dark)] mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </details>
              </div>

              {/* Article Sections */}
              {post.sections.map((section, sectionIndex) => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-medium text-[var(--color-text-main)] mb-6">
                    {section.title}
                  </h2>
                  <div
                    className="prose prose-lg max-w-none
                      prose-headings:font-[family-name:var(--font-heading)] 
                      prose-headings:text-[var(--color-text-main)]
                      prose-headings:font-medium
                      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                      prose-p:text-[var(--color-text-muted)]
                      prose-p:leading-relaxed
                      prose-p:mb-4
                      prose-a:text-[var(--color-support-dark)]
                      prose-a:no-underline
                      prose-a:hover:underline
                      prose-strong:text-[var(--color-text-main)]
                      prose-ul:text-[var(--color-text-muted)]
                      prose-ul:my-4
                      prose-li:text-[var(--color-text-muted)]
                      prose-li:my-1
                      prose-ol:text-[var(--color-text-muted)]"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />

                  {/* Insert image after certain sections */}
                  {post.images[sectionIndex] && sectionIndex < 4 && (
                    <figure className="my-8">
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-[var(--color-section)]">
                        <Image
                          src={post.images[sectionIndex].src}
                          alt={post.images[sectionIndex].alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 768px"
                        />
                      </div>
                      {post.images[sectionIndex].caption && (
                        <figcaption className="mt-3 text-center text-sm text-[var(--color-text-muted)] italic">
                          {post.images[sectionIndex].caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </section>
              ))}

              {/* Tags */}
              <div className="py-8 border-t border-[var(--color-border-subtle)]">
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

              {/* Author Box */}
              <div className="bg-[var(--color-section)] rounded-2xl p-8 my-8">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-medium">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--color-text-main)] mb-1">
                      About the Author
                    </h3>
                    <p className="text-[var(--color-support-dark)] text-sm font-medium mb-3">
                      {post.author} • {post.authorCredentials}
                    </p>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                      {post.authorBio}
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

              {/* FAQ Section */}
              <BlogFAQSection faqs={post.faqs} />

              {/* Contact Form */}
              <div className="my-12">
                <BlogContactForm />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[var(--color-section)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] text-center mb-12">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/enhanced/${relatedPost.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-support)]/30 relative">
                    <Image
                      src={relatedPost.featuredImage.src}
                      alt={relatedPost.featuredImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-[var(--color-support-dark)] font-medium">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-text-main)] mt-2 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-medium text-[var(--color-text-main)] mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
            Book a consultation with {BUSINESS_INFO.owner} at {BUSINESS_INFO.name} in Roseville, CA 
            and start your journey to healthier, more radiant skin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Book Your Consultation
            </Link>
            <a href={BUSINESS_INFO.phoneLink} className="btn-secondary">
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

