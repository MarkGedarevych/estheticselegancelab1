import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { BUSINESS_INFO, SEO_DEFAULTS } from "@/lib/constants";
import CTASection from "@/components/CTASection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} in Roseville, CA | ${BUSINESS_INFO.name}`,
    description: service.fullDescription.substring(0, 160),
    openGraph: {
      title: `${service.title} in Roseville, CA | ${BUSINESS_INFO.name}`,
      description: service.fullDescription.substring(0, 160),
      url: `${SEO_DEFAULTS.siteUrl}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // JSON-LD Schema for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDescription,
    provider: {
      "@type": "HealthAndBeautyBusiness",
      name: BUSINESS_INFO.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.zip,
      },
    },
    areaServed: {
      "@type": "City",
      name: "Roseville",
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-[var(--color-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Link href="/" className="hover:text-[var(--color-text-main)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--color-text-main)] transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[var(--color-text-main)]">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16 bg-[var(--color-section)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
                {service.duration} • {service.priceRange}
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[var(--color-text-main)] mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-[var(--color-text-muted)] leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Book This Service
                </Link>
                <a href={BUSINESS_INFO.phoneLink} className="btn-secondary">
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)]/40 to-[var(--color-support)]/40 rounded-3xl transform -rotate-2" />
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-accent-soft)] flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-20 h-20 mx-auto text-[var(--color-support-dark)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[var(--color-text-muted)]">{service.title} treatment photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] mb-8">
                Benefits of {service.title}
              </h2>
              <div className="grid gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-section)]">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-support)]/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[var(--color-support-dark)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[var(--color-text-main)]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] mb-8">
                Treatment Details
              </h2>
              <div className="card">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
                    <span className="text-[var(--color-text-muted)]">Duration</span>
                    <span className="font-medium text-[var(--color-text-main)]">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
                    <span className="text-[var(--color-text-muted)]">Price Range</span>
                    <span className="font-medium text-[var(--color-text-main)]">{service.priceRange}</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
                    <span className="text-[var(--color-text-muted)]">Suitable For</span>
                    <span className="font-medium text-[var(--color-text-main)]">Most skin types</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-text-muted)]">Downtime</span>
                    <span className="font-medium text-[var(--color-text-main)]">Minimal to none</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)]">
                  <Link href="/contact" className="btn-primary w-full text-center">
                    Book Your Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[var(--color-section)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--color-text-muted)]">
              Common questions about {service.title}
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="card group cursor-pointer">
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
                <p className="mt-4 text-[var(--color-text-muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] text-center mb-12">
            Other Services You May Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card group"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-text-main)] mb-2 group-hover:text-[var(--color-support-dark)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-4">
                    {s.shortDescription}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">{s.duration}</span>
                    <span className="text-[var(--color-support-dark)] font-medium">{s.priceRange}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Ready to Experience ${service.title}?`}
        description="Book your appointment today and discover the difference personalized skincare can make."
      />
    </>
  );
}

