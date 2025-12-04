import type { Metadata } from "next";
import { reviews, averageRating, totalReviews } from "@/data/reviews";
import { BUSINESS_INFO, SEO_DEFAULTS } from "@/lib/constants";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Client Reviews | 5-Star Esthetician Reviews | Roseville, CA",
  description: `Read real reviews from clients of ${BUSINESS_INFO.name} in Roseville, CA. See why our clients love ${BUSINESS_INFO.owner}'s personalized skincare treatments.`,
  openGraph: {
    title: "Client Reviews | 5-Star Esthetician Reviews | Roseville, CA",
    description: `Read real reviews from clients of ${BUSINESS_INFO.name} in Roseville, CA. See why our clients love ${BUSINESS_INFO.owner}'s personalized skincare treatments.`,
    url: `${SEO_DEFAULTS.siteUrl}/reviews`,
  },
};

export default function ReviewsPage() {
  // Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_INFO.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: totalReviews,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.slice(0, 5).map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      datePublished: review.date,
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--color-section)] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
              Client Reviews
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-text-main)] mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed mb-8">
              Don&apos;t just take our word for it. Read real reviews from clients who have 
              experienced the {BUSINESS_INFO.name} difference.
            </p>

            {/* Rating Summary */}
            <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-8 py-4 shadow-lg">
              <div className="text-center">
                <div className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--color-text-main)]">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex gap-1 justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="h-12 w-px bg-[var(--color-border-subtle)]" />
              <div className="text-left">
                <div className="font-medium text-[var(--color-text-main)]">
                  {totalReviews} Reviews
                </div>
                <div className="text-sm text-[var(--color-text-muted)]">
                  All verified clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="section-padding bg-[var(--color-section)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] mb-4">
            Had a Great Experience?
          </h2>
          <p className="text-[var(--color-text-muted)] mb-8">
            We&apos;d love to hear from you! Your feedback helps us continue to provide 
            exceptional service and helps others discover our studio.
          </p>
          <a
            href={BUSINESS_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Leave a Review
          </a>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Join Our Happy Clients?"
        description="Experience the personalized care that has earned us 5-star reviews."
      />
    </>
  );
}

