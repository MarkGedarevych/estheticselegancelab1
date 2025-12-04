import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "default" | "minimal" | "accent";
}

export default function CTASection({
  title = "Ready to Reveal Your Best Skin?",
  description = "Book your personalized consultation today and discover the difference expert skincare can make.",
  primaryButtonText = "Book Appointment",
  primaryButtonHref = "/contact",
  secondaryButtonText = "View Services",
  secondaryButtonHref = "/services",
  variant = "default"
}: CTASectionProps) {
  const bgClass = {
    default: "bg-gradient-to-br from-[var(--color-primary-light)] via-[var(--color-primary)] to-[var(--color-primary-dark)]",
    minimal: "bg-[var(--color-section)]",
    accent: "bg-gradient-to-br from-[var(--color-accent-soft)] via-[var(--color-accent)] to-[var(--color-primary)]"
  }[variant];

  return (
    <section className={`${bgClass} section-padding relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-support)]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-medium text-[var(--color-text-main)] mb-6">
          {title}
        </h2>
        <p className="text-[var(--color-text-muted)] text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href={primaryButtonHref} className="btn-primary w-full sm:w-auto">
            {primaryButtonText}
          </Link>
          <Link href={secondaryButtonHref} className="btn-secondary w-full sm:w-auto">
            {secondaryButtonText}
          </Link>
        </div>

        {/* Contact Info */}
        <p className="text-[var(--color-text-muted)]">
          Or call us directly at{" "}
          <a
            href={BUSINESS_INFO.phoneLink}
            className="text-[var(--color-text-main)] font-medium hover:text-[var(--color-support-dark)] transition-colors"
          >
            {BUSINESS_INFO.phone}
          </a>
        </p>
      </div>
    </section>
  );
}

