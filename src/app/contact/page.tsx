import type { Metadata } from "next";
import { BUSINESS_INFO, SEO_DEFAULTS, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Appointment | Contact Us | Roseville, CA",
  description: `Book your esthetician appointment at ${BUSINESS_INFO.name} in Roseville, CA. Contact ${BUSINESS_INFO.owner} for personalized skincare treatments.`,
  openGraph: {
    title: "Book Appointment | Contact Us | Roseville, CA",
    description: `Book your esthetician appointment at ${BUSINESS_INFO.name} in Roseville, CA. Contact ${BUSINESS_INFO.owner} for personalized skincare treatments.`,
    url: `${SEO_DEFAULTS.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  // ContactPage Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${BUSINESS_INFO.name}`,
    description: `Book your appointment or get in touch with ${BUSINESS_INFO.name} in Roseville, CA.`,
    url: `${SEO_DEFAULTS.siteUrl}/contact`,
    mainEntity: {
      "@type": "HealthAndBeautyBusiness",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.zip,
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--color-section)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-support)]/20 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
              Contact Us
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-text-main)] mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
              Ready to start your skincare journey? Get in touch to schedule your 
              personalized consultation and treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-[var(--color-text-main)] mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-[var(--color-text-main)] mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-[var(--color-text-main)] mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--color-text-main)] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[var(--color-text-main)] mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(916) 555-0123"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[var(--color-text-main)] mb-2"
                  >
                    Service Interested In
                  </label>
                  <select id="service" name="service">
                    <option value="">Select a service</option>
                    <option value="facial">Facial</option>
                    <option value="dermaplaning">Dermaplaning</option>
                    <option value="chemical-peel">Chemical Peel</option>
                    <option value="microneedling">Microneedling</option>
                    <option value="lash-lift">Lash Lift</option>
                    <option value="brows">Brow Services</option>
                    <option value="waxing">Waxing</option>
                    <option value="consultation">Consultation Only</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--color-text-main)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your skincare goals or any questions you have..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>

                <p className="text-sm text-[var(--color-text-muted)] text-center">
                  We&apos;ll respond within 24 hours. For immediate assistance, please call us.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-[var(--color-text-main)] mb-6">
                Get in Touch
              </h2>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={BUSINESS_INFO.phoneLink}
                  className="card flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-light)] flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors">
                    <svg
                      className="w-6 h-6 text-[var(--color-text-main)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">Call or Text</p>
                    <p className="font-medium text-[var(--color-text-main)] text-lg">
                      {BUSINESS_INFO.phone}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-support)]/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[var(--color-support-dark)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-muted)]">Visit Us</p>
                      <address className="not-italic font-medium text-[var(--color-text-main)]">
                        {BUSINESS_INFO.name}<br />
                        {BUSINESS_INFO.address.street}<br />
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                      </address>
                    </div>
                  </div>
                  {/* Map Placeholder */}
                  <div className="mt-4 h-48 rounded-xl bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-support)]/30 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-10 h-10 mx-auto text-[var(--color-support-dark)] mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      <p className="text-sm text-[var(--color-text-muted)]">Interactive map</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent-soft)] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[var(--color-text-main)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[var(--color-text-muted)] mb-2">Hours</p>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-[var(--color-text-main)]">Monday - Friday</span>
                          <span className="text-[var(--color-text-muted)]">{BUSINESS_INFO.hours.weekdays}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[var(--color-text-main)]">Saturday</span>
                          <span className="text-[var(--color-text-muted)]">{BUSINESS_INFO.hours.saturday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[var(--color-text-main)]">Sunday</span>
                          <span className="text-[var(--color-text-muted)]">{BUSINESS_INFO.hours.sunday}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="card">
                  <p className="text-sm text-[var(--color-text-muted)] mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    <a
                      href={BUSINESS_INFO.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl text-white font-medium transition-all hover:scale-105 hover:shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)' }}
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                    <a
                      href={BUSINESS_INFO.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl text-white font-medium transition-all hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: '#1877F2' }}
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Areas Served */}
              <div className="mt-8">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-text-main)] mb-4">
                  Proudly Serving
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="inline-block bg-[var(--color-section)] text-[var(--color-text-muted)] text-sm px-3 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

