import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { BUSINESS_INFO, SEO_DEFAULTS } from "@/lib/constants";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pricing | Esthetician Service Prices | Roseville, CA",
  description: `View pricing for all esthetician services at ${BUSINESS_INFO.name} in Roseville, CA. Transparent pricing for facials, dermaplaning, chemical peels, and more.`,
  openGraph: {
    title: "Pricing | Esthetician Service Prices | Roseville, CA",
    description: `View pricing for all esthetician services at ${BUSINESS_INFO.name} in Roseville, CA. Transparent pricing for facials, dermaplaning, chemical peels, and more.`,
    url: `${SEO_DEFAULTS.siteUrl}/pricing`,
  },
};

const pricingCategories = [
  {
    title: "Facial Treatments",
    services: [
      { name: "Express Facial (30 min)", price: "$65" },
      { name: "Classic Facial (60 min)", price: "$95" },
      { name: "Signature Luxury Facial (90 min)", price: "$150" },
      { name: "Acne Treatment Facial", price: "$110" },
      { name: "Anti-Aging Facial", price: "$135" },
      { name: "Hydrating Facial", price: "$105" },
    ],
  },
  {
    title: "Advanced Treatments",
    services: [
      { name: "Dermaplaning", price: "$85" },
      { name: "Dermaplaning + Facial", price: "$145" },
      { name: "Light Chemical Peel", price: "$100" },
      { name: "Medium Chemical Peel", price: "$150" },
      { name: "Microneedling (Face)", price: "$250" },
      { name: "Microneedling (Face + Neck)", price: "$325" },
    ],
  },
  {
    title: "Lashes & Brows",
    services: [
      { name: "Lash Lift", price: "$75" },
      { name: "Lash Tint", price: "$35" },
      { name: "Lash Lift + Tint", price: "$95" },
      { name: "Brow Shaping", price: "$35" },
      { name: "Brow Tint", price: "$25" },
      { name: "Brow Lamination", price: "$75" },
    ],
  },
  {
    title: "Waxing Services",
    services: [
      { name: "Eyebrow Wax", price: "$20" },
      { name: "Lip Wax", price: "$15" },
      { name: "Chin Wax", price: "$15" },
      { name: "Full Face Wax", price: "$55" },
      { name: "Underarm Wax", price: "$30" },
      { name: "Half Arm Wax", price: "$35" },
      { name: "Full Arm Wax", price: "$55" },
    ],
  },
  {
    title: "Packages & Add-Ons",
    services: [
      { name: "LED Light Therapy (add-on)", price: "$35" },
      { name: "High Frequency (add-on)", price: "$25" },
      { name: "Extractions (add-on)", price: "$20" },
      { name: "Lip Treatment (add-on)", price: "$15" },
      { name: "Eye Treatment (add-on)", price: "$20" },
      { name: "Hand or Arm Massage (add-on)", price: "$25" },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--color-section)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/30 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
              Pricing
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-text-main)] mb-6">
              Service Menu & Pricing
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
              Transparent pricing for all our professional skincare services. 
              Each treatment is customized to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Note */}
          <div className="bg-[var(--color-accent-soft)] rounded-2xl p-6 mb-12 text-center">
            <p className="text-[var(--color-text-main)]">
              <strong>Note:</strong> Prices may vary based on individual treatment needs. 
              A consultation is included with your first visit to determine the best treatment plan for you.
            </p>
          </div>

          {/* Pricing Categories */}
          <div className="space-y-12">
            {pricingCategories.map((category, i) => (
              <div key={i} className="card">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-[var(--color-text-main)] mb-6 pb-4 border-b border-[var(--color-border-subtle)]">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.services.map((service, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between py-3 border-b border-[var(--color-border-subtle)] last:border-b-0"
                    >
                      <span className="text-[var(--color-text-main)]">{service.name}</span>
                      <span className="font-medium text-[var(--color-support-dark)] ml-4">
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Booking Info */}
          <div className="mt-16 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-[var(--color-text-main)] mb-4">
              Ready to Book?
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8 max-w-xl mx-auto">
              Contact us to schedule your appointment. We recommend booking in advance 
              to secure your preferred date and time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Book Appointment
              </Link>
              <a href={BUSINESS_INFO.phoneLink} className="btn-secondary w-full sm:w-auto">
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding bg-[var(--color-section)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] text-center mb-12">
            Booking Policies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cancellation Policy",
                content: "We require 24-hour notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee."
              },
              {
                title: "Deposits",
                content: "A deposit may be required for certain services or new clients. This will be applied to your service total."
              },
              {
                title: "Arrival Time",
                content: "Please arrive 5-10 minutes before your appointment to complete any necessary paperwork and ensure full treatment time."
              },
              {
                title: "Payment Methods",
                content: "We accept cash, all major credit cards, and digital payments including Apple Pay and Google Pay."
              }
            ].map((policy, i) => (
              <div key={i} className="card">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-text-main)] mb-2">
                  {policy.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  {policy.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] text-center mb-12">
            Popular Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card group"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--color-text-main)] mb-2 group-hover:text-[var(--color-support-dark)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">
                  {service.shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--color-text-muted)]">{service.duration}</span>
                  <span className="text-[var(--color-support-dark)] font-medium">{service.priceRange}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

