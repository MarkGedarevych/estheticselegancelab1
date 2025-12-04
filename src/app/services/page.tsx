import type { Metadata } from "next";
import { services } from "@/data/services";
import { BUSINESS_INFO, SEO_DEFAULTS } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Esthetician Services | Facials, Dermaplaning & More | Roseville, CA",
  description: `Explore our range of professional skincare services including facials, dermaplaning, chemical peels, lash lifts, and microneedling at ${BUSINESS_INFO.name} in Roseville, CA.`,
  openGraph: {
    title: "Esthetician Services | Facials, Dermaplaning & More | Roseville, CA",
    description: `Explore our range of professional skincare services including facials, dermaplaning, chemical peels, lash lifts, and microneedling at ${BUSINESS_INFO.name} in Roseville, CA.`,
    url: `${SEO_DEFAULTS.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--color-section)] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[var(--color-support)]/20 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
              Our Services
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-text-main)] mb-6">
              Professional Skincare Treatments
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
              Discover our full menu of personalized esthetician services designed to reveal 
              your healthiest, most radiant skin. Each treatment is customized to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-medium text-[var(--color-text-main)] mb-4">
              Treatments Tailored to You
            </h2>
            <p className="text-[var(--color-text-muted)]">
              Every service begins with a consultation to understand your skin concerns and goals. 
              From there, {BUSINESS_INFO.owner} creates a personalized treatment plan just for you.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-[var(--color-section)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
              The Experience
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-medium text-[var(--color-text-main)] mb-6">
              What to Expect
            </h2>
            <p className="text-[var(--color-text-muted)]">
              Your journey to beautiful skin is a seamless, relaxing experience from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We begin with a thorough skin analysis and discussion of your concerns and goals."
              },
              {
                step: "02",
                title: "Customization",
                description: "Based on your unique needs, we design a personalized treatment plan."
              },
              {
                step: "03",
                title: "Treatment",
                description: "Relax and enjoy your customized treatment in our peaceful studio environment."
              },
              {
                step: "04",
                title: "Aftercare",
                description: "Leave with personalized skincare recommendations to maintain your results."
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                {/* Connector Line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto mb-4">
                    <span className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-text-main)]">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-text-main)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-medium text-[var(--color-text-main)] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How do I know which service is right for me?",
                answer: "During your initial consultation, we'll analyze your skin and discuss your concerns and goals. Based on this, I'll recommend the most effective treatments for your unique needs."
              },
              {
                question: "How should I prepare for my appointment?",
                answer: "Arrive with clean skin, free of makeup if possible. Avoid active skincare ingredients like retinol for a few days before certain treatments. Specific prep instructions will be provided when you book."
              },
              {
                question: "Is there any downtime after treatments?",
                answer: "Most of our treatments have minimal to no downtime. Treatments like chemical peels may have a few days of recovery. We'll discuss expectations before every treatment."
              },
              {
                question: "How often should I schedule treatments?",
                answer: "This varies by treatment and individual needs. Generally, facials are recommended monthly, while other treatments may be spaced 4-6 weeks apart. We'll create a customized schedule for you."
              },
              {
                question: "What products do you use?",
                answer: "We use only professional-grade skincare products from trusted, high-quality brands. All products are carefully selected for their efficacy and safety."
              }
            ].map((faq, i) => (
              <details
                key={i}
                className="card group cursor-pointer"
              >
                <summary className="flex items-center justify-between font-medium text-[var(--color-text-main)] list-none">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-[var(--color-support-dark)] transform group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-[var(--color-text-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

