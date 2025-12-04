import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-page)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--color-support)]/20 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-xl mx-auto px-4 text-center">
        {/* 404 */}
        <div className="mb-8">
          <span className="font-[family-name:var(--font-heading)] text-[150px] md:text-[200px] font-bold text-[var(--color-primary)] leading-none">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-[var(--color-text-main)] mb-4">
          Page Not Found
        </h1>
        <p className="text-[var(--color-text-muted)] text-lg mb-8">
          Oops! The page you&apos;re looking for seems to have wandered off. 
          Let&apos;s get you back on track to beautiful skin.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            Back to Home
          </Link>
          <Link href="/services" className="btn-secondary w-full sm:w-auto">
            View Services
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-[var(--color-section)] rounded-2xl p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-text-main)] mb-4">
            Looking for something specific?
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link
              href="/about"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-support-dark)] transition-colors"
            >
              About Karina
            </Link>
            <Link
              href="/services"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-support-dark)] transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/pricing"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-support-dark)] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/reviews"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-support-dark)] transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/blog"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-support-dark)] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-support-dark)] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <p className="mt-8 text-[var(--color-text-muted)]">
          Need help? Call us at{" "}
          <a
            href={BUSINESS_INFO.phoneLink}
            className="text-[var(--color-support-dark)] font-medium hover:underline"
          >
            {BUSINESS_INFO.phone}
          </a>
        </p>
      </div>
    </section>
  );
}

