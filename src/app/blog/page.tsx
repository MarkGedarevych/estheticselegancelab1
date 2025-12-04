import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { BUSINESS_INFO, SEO_DEFAULTS } from "@/lib/constants";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Skincare Blog | Tips & Insights | Roseville, CA",
  description: `Expert skincare tips, treatment insights, and beauty advice from ${BUSINESS_INFO.owner} at ${BUSINESS_INFO.name} in Roseville, CA.`,
  openGraph: {
    title: "Skincare Blog | Tips & Insights | Roseville, CA",
    description: `Expert skincare tips, treatment insights, and beauty advice from ${BUSINESS_INFO.owner} at ${BUSINESS_INFO.name} in Roseville, CA.`,
    url: `${SEO_DEFAULTS.siteUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
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
              Discover skincare tips, treatment insights, and expert advice from 
              {BUSINESS_INFO.owner}. Learn how to achieve and maintain your healthiest skin.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <div className="mb-16">
              <BlogCard post={blogPosts[0]} index={0} />
            </div>
          )}

          {/* Rest of Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-[var(--color-section)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] mb-4">
            Stay in the Loop
          </h2>
          <p className="text-[var(--color-text-muted)] mb-8">
            Subscribe to our newsletter for skincare tips, special offers, and updates 
            from {BUSINESS_INFO.name}.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1"
              required
            />
            <button type="submit" className="btn-primary">
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

