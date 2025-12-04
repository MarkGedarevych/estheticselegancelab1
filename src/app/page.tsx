import Link from "next/link";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { BUSINESS_INFO } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import LocalSEOSection from "@/components/LocalSEOSection";

export default function HomePage() {
  const featuredServices = services.slice(0, 4);
  const featuredReviews = reviews.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Esthetician Background Photo */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/hero-esthetician.jpg')`,
              backgroundPosition: 'center center',
            }}
          >
            {/* Fallback gradient if image doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-light)] via-[var(--color-accent-soft)] to-[var(--color-support)]" />
          </div>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-page)]/95 via-[var(--color-page)]/85 to-[var(--color-page)]/95" />
          <div className="absolute inset-0 bg-[var(--color-text-main)]/20" />
          
          {/* Subtle gradient accents */}
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[var(--color-accent)]/20 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[var(--color-support)]/20 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in-up shadow-lg border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[var(--color-support-dark)] animate-pulse" />
              <span className="text-sm text-[var(--color-text-main)] font-medium">
                Now accepting new clients in Roseville, CA
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 opacity-0 animate-fade-in-up delay-100 leading-tight drop-shadow-lg">
              Glow-Enhancing<br />
              <span className="text-white">Esthetician Services</span><br />
              in Roseville, CA
          </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up delay-200 drop-shadow-md">
              Experience personalized skincare treatments designed to reveal your most radiant, 
              confident self. Expert care by {BUSINESS_INFO.owner}, Licensed Esthetician.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Book Your Appointment
              </Link>
              <Link href="/services" className="btn-secondary w-full sm:w-auto">
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-0 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[var(--color-text-main)] font-medium">5-Star Reviews</span>
              </div>
              <div className="h-6 w-px bg-white/30" />
              <div className="text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold text-white">Licensed</span> Esthetician
              </div>
              <div className="h-6 w-px bg-white/30" />
              <div className="text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold text-white">Personalized</span> Treatments
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
          <div className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
            <span className="text-xs tracking-wider uppercase">Scroll to explore</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Meet Karina Section */}
      <section className="section-padding bg-[var(--color-section)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)]/50 to-[var(--color-accent)]/50 rounded-3xl transform -rotate-3" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-accent-soft)] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-white/50 flex items-center justify-center mb-4">
                    <svg className="w-16 h-16 text-[var(--color-support-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)]">Professional photo placeholder</p>
                </div>
              </div>
              {/* Decorative Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-support)]/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--color-support-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-text-main)]">Licensed Esthetician</p>
                    <p className="text-sm text-[var(--color-text-muted)]">State Certified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
                Meet Your Esthetician
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-medium text-[var(--color-text-main)] mb-6">
                Hi, I&apos;m Karina Gedarevych
              </h2>
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-6">
                Welcome to Esthetics Elegance Lab, where skincare meets artistry. As a licensed 
                esthetician in Roseville, I&apos;m passionate about helping each client achieve 
                their healthiest, most radiant skin.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                My approach combines advanced techniques with personalized attention. Every 
                treatment is tailored to your unique skin needs and goals. Whether you&apos;re 
                seeking relaxation, anti-aging solutions, or help with specific skin concerns, 
                you&apos;ll find a supportive, judgment-free environment here.
              </p>

              {/* Trust Signals */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Licensed & Certified Professional",
                  "Personalized Treatment Plans",
                  "Premium Products Only",
                  "Relaxing Studio Environment",
                  "Continuing Education",
                  "Client-Focused Care"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-support)]/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[var(--color-support-dark)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-[var(--color-text-main)]">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-secondary inline-flex">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
              Our Services
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-medium text-[var(--color-text-main)] mb-6">
              Treatments Tailored to Your Skin
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg">
              From rejuvenating facials to advanced skin treatments, discover our range 
              of professional services designed to enhance your natural beauty.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="section-padding bg-[var(--color-section)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
              Real Results
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-medium text-[var(--color-text-main)] mb-6">
              Before & After Transformations
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg">
              See the real results our clients have achieved with personalized skincare treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="card p-0 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-accent-soft)] flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg className="w-12 h-12 mx-auto text-[var(--color-support-dark)] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-[var(--color-text-muted)]">Before & After Photo</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-medium text-[var(--color-text-main)] mb-2">
                    {["Facial Rejuvenation", "Acne Treatment", "Chemical Peel Results"][i]}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Real client results after {["4 weeks", "6 sessions", "3 treatments"][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
              Client Love
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-medium text-[var(--color-text-main)] mb-6">
              What Our Clients Say
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg">
              Don&apos;t just take our word for it. Hear from clients who have experienced 
              the Esthetics Elegance Lab difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredReviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reviews" className="btn-secondary">
              Read All Reviews
            </Link>
          </div>
    </div>
      </section>

      {/* Local SEO Section */}
      <LocalSEOSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
