import Link from "next/link";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card flex flex-col h-full opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    >
      {/* Image Placeholder */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-accent-soft)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[var(--color-support-dark)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[var(--color-text-main)]/0 group-hover:bg-[var(--color-text-main)]/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--color-text-main)] mb-3 group-hover:text-[var(--color-support-dark)] transition-colors">
          {service.title}
        </h3>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4 flex-1">
          {service.shortDescription}
        </p>
        
        {/* Meta Info */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {service.duration}
            </span>
          </div>
          <span className="text-[var(--color-support-dark)] font-medium text-sm">
            {service.priceRange}
          </span>
        </div>
      </div>

      {/* Arrow */}
      <div className="mt-4 flex items-center gap-2 text-[var(--color-support-dark)] text-sm font-medium">
        Learn More
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

