"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-section)]/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-semibold text-[var(--color-text-main)] tracking-tight">
              Esthetics Elegance
            </span>
            <span className="font-[family-name:var(--font-heading)] text-sm text-[var(--color-support-dark)] tracking-[0.2em] uppercase">
              Lab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[var(--color-support-dark)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-support-dark)] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] text-sm font-medium transition-colors"
            >
              {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-text-main)]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[var(--color-section)] rounded-2xl p-6 shadow-lg border border-[var(--color-border-subtle)]">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[var(--color-support-dark)]"
                      : "text-[var(--color-text-muted)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-[var(--color-border-subtle)] my-2" />
              <a
                href={BUSINESS_INFO.phoneLink}
                className="text-[var(--color-text-main)] font-medium"
              >
                {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact" className="btn-primary text-center mt-2">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

