import { SERVICE_AREAS, BUSINESS_INFO } from "@/lib/constants";

export default function LocalSEOSection() {
  return (
    <section className="bg-[var(--color-section)] section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-[var(--color-support-dark)] text-sm font-medium tracking-wider uppercase mb-4">
              Serving Northern California
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-medium text-[var(--color-text-main)] mb-6">
              Proudly Serving Roseville & Surrounding Communities
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-6">
              Located in the heart of Roseville, Esthetics Elegance Lab welcomes clients from 
              across Placer County and Sacramento County. Our convenient location at Roseville Square 
              makes us easily accessible from all neighboring cities.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
              Whether you&apos;re coming from Rocklin, Granite Bay, Folsom, or anywhere in between, 
              you&apos;ll find our studio offers a peaceful retreat from the everyday. Experience 
              the personalized care and expert treatments that have made us a trusted destination 
              for skincare in Northern California.
            </p>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-[var(--color-text-main)]"
                >
                  <svg
                    className="w-4 h-4 text-[var(--color-support-dark)] flex-shrink-0"
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
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder / Address Card */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-support)]/30 to-[var(--color-primary-light)] rounded-3xl transform rotate-3" />
            
            <div className="relative bg-white rounded-3xl p-8 shadow-lg">
              {/* Map Placeholder */}
              <div className="h-48 rounded-2xl bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-support)]/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-12 h-12 text-[var(--color-support-dark)] mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sm text-[var(--color-text-muted)]">Map view</p>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--color-text-main)] mb-2">
                    {BUSINESS_INFO.name}
                  </h3>
                  <address className="not-italic text-[var(--color-text-muted)]">
                    {BUSINESS_INFO.address.street}<br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                  </address>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[var(--color-text-main)]"
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
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="text-[var(--color-text-main)] font-medium hover:text-[var(--color-support-dark)] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                  <h4 className="text-sm font-medium text-[var(--color-text-main)] mb-2">Hours</h4>
                  <div className="text-sm text-[var(--color-text-muted)] space-y-1">
                    <p>Monday – Friday: {BUSINESS_INFO.hours.weekdays}</p>
                    <p>Saturday: {BUSINESS_INFO.hours.saturday}</p>
                    <p>Sunday: {BUSINESS_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

