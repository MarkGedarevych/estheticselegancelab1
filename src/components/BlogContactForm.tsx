'use client';

import { useState } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';

export default function BlogContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="bg-[var(--color-support)]/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--color-support)] flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-[var(--color-text-main)] mb-2">
          Thank You!
        </h3>
        <p className="text-[var(--color-text-muted)]">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-section)] rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-[var(--color-text-main)] mb-2">
          Ready to Get Started?
        </h3>
        <p className="text-[var(--color-text-muted)]">
          Book a consultation or ask us any questions about this service.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-main)] mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-border-subtle)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-main)] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-border-subtle)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
              placeholder="jane@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-main)] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-border-subtle)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
              placeholder="(916) 555-0123"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-[var(--color-text-main)] mb-2">
              Service of Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-border-subtle)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
            >
              <option value="">Select a service...</option>
              <option value="facial">Facials</option>
              <option value="dermaplaning">Dermaplaning</option>
              <option value="chemical-peel">Chemical Peels</option>
              <option value="microneedling">Microneedling</option>
              <option value="lash-lift">Lash Lift</option>
              <option value="waxing">Waxing</option>
              <option value="consultation">General Consultation</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-main)] mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border-subtle)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your skin concerns or any questions you have..."
          />
        </div>

        <button
          type="submit"
          className="w-full btn-primary"
        >
          Send Message
        </button>

        <p className="text-center text-sm text-[var(--color-text-muted)]">
          Or call us directly at{' '}
          <a href={BUSINESS_INFO.phoneLink} className="text-[var(--color-support-dark)] font-medium hover:underline">
            {BUSINESS_INFO.phone}
          </a>
        </p>
      </form>
    </div>
  );
}


