import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO, SEO_DEFAULTS } from "@/lib/constants";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Karina Gedarevych | Licensed Esthetician in Roseville, CA",
  description: `Meet Karina Gedarevych, the licensed esthetician behind ${BUSINESS_INFO.name}. Learn about her expertise, approach to skincare, and commitment to helping clients in Roseville achieve their best skin.`,
  openGraph: {
    title: "About Karina Gedarevych | Licensed Esthetician in Roseville, CA",
    description: `Meet Karina Gedarevych, the licensed esthetician behind ${BUSINESS_INFO.name}. Learn about her expertise, approach to skincare, and commitment to helping clients in Roseville achieve their best skin.`,
    url: `${SEO_DEFAULTS.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--color-section)] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-support)]/20 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
              About
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-text-main)] mb-6">
              Meet Karina Gedarevych
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
              Licensed Esthetician & Founder of Esthetics Elegance Lab
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image Column */}
            <div className="lg:sticky lg:top-32">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)]/40 to-[var(--color-accent)]/40 rounded-3xl transform rotate-2" />
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/karina.png.png"
                    alt="Karina Gedarevych - Licensed Esthetician at Esthetics Elegance Lab in Roseville, CA"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Credentials Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-text-main)] mb-3">
                    Credentials
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "California Licensed Esthetician",
                      "Advanced Skincare Certified",
                      "Chemical Peel Specialist",
                      "Microneedling Certified"
                    ].map((credential, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                        <svg className="w-4 h-4 text-[var(--color-support-dark)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:pt-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-medium text-[var(--color-text-main)] mb-6">
                  My Journey to Esthetics
                </h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                  My passion for skincare began with my own skin struggles. After years of battling 
                  various skin concerns, I discovered the transformative power of professional 
                  treatments and fell in love with the art and science of esthetics.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                  This personal journey led me to pursue formal education and training in esthetics. 
                  I became a licensed esthetician in California and have since dedicated myself to 
                  helping others achieve the healthy, radiant skin they deserve.
                </p>

                <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-medium text-[var(--color-text-main)] mt-12 mb-6">
                  My Approach to Skincare
                </h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                  I believe that beautiful skin starts with understanding. Every client who walks 
                  into Esthetics Elegance Lab receives a comprehensive skin analysis and personalized 
                  treatment plan. No two people have the same skin, so why should they receive the 
                  same treatment?
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                  My philosophy centers on three pillars:
                </p>

                <div className="grid gap-6 my-8">
                  {[
                    {
                      title: "Education",
                      description: "I take time to explain what's happening with your skin and why certain treatments are recommended. Knowledge empowers you to make the best decisions for your skin."
                    },
                    {
                      title: "Personalization",
                      description: "Every treatment is customized to your unique skin type, concerns, lifestyle, and goals. There are no one-size-fits-all solutions here."
                    },
                    {
                      title: "Results",
                      description: "While relaxation is a wonderful benefit, my primary focus is achieving real, visible results that make you feel confident in your skin."
                    }
                  ].map((pillar, i) => (
                    <div key={i} className="card">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--color-text-main)] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-[var(--color-text-muted)]">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>

                <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-medium text-[var(--color-text-main)] mt-12 mb-6">
                  Continuing Education
                </h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                  The skincare industry is constantly evolving, and I&apos;m committed to staying at 
                  the forefront of new techniques, technologies, and treatments. I regularly attend 
                  advanced training courses and industry conferences to bring the latest innovations 
                  to my clients in Roseville and the surrounding areas.
                </p>

                <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-medium text-[var(--color-text-main)] mt-12 mb-6">
                  The Studio Experience
                </h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                  Located in Roseville Square, Esthetics Elegance Lab offers a serene escape from 
                  the everyday. The moment you step through our doors, you&apos;ll feel the stress 
                  melt away. Our studio is designed to be a sanctuary — clean, calming, and focused 
                  entirely on your comfort and care.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                  I use only professional-grade products from trusted brands, carefully selected 
                  for their efficacy and quality ingredients. Your skin deserves the best, and 
                  that&apos;s exactly what you&apos;ll receive here.
                </p>

                <Link href="/contact" className="btn-primary">
                  Book Your Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[var(--color-section)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-medium text-[var(--color-text-main)] mb-6">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Genuine Care",
                description: "Your comfort and satisfaction are my top priorities. I treat every client like family."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Expert Knowledge",
                description: "Years of training and experience ensure you receive the highest quality treatments."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Dedicated Time",
                description: "No rushed appointments. Every session is scheduled with ample time for thorough care."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: "Premium Products",
                description: "Only professional-grade, high-quality products touch your skin."
              }
            ].map((value, i) => (
              <div key={i} className="card text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center mx-auto mb-4 text-[var(--color-support-dark)]">
                  {value.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-text-main)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Start Your Skincare Journey?"
        description="Book a consultation and let's discuss your skin goals together."
      />
    </>
  );
}

