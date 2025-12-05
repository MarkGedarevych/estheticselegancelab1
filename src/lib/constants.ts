// Business configuration
export const BUSINESS_INFO = {
  name: "Esthetics Elegance Lab",
  owner: "Karina Gedarevych",
  ownerTitle: "Licensed Esthetician",
  address: {
    street: "404 Roseville Square, #6",
    city: "Roseville",
    state: "CA",
    zip: "95678",
    full: "404 Roseville Square, #6, Roseville, CA 95678"
  },
  phone: "(916) 778-8195",
  phoneLink: "tel:+19167788195",
  email: "info@estheticselegancelab.com",
  hours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed"
  },
  social: {
    instagram: "https://www.instagram.com/estheticselegancelab/",
    facebook: "https://www.facebook.com/profile.php?id=61583977661924"
  }
} as const;

export const SERVICE_AREAS = [
  "Roseville",
  "Rocklin",
  "Lincoln",
  "Granite Bay",
  "Citrus Heights",
  "Folsom",
  "Orangevale",
  "Antelope",
  "Loomis",
  "Auburn",
  "Sacramento County",
  "Placer County"
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
] as const;

export const SEO_DEFAULTS = {
  siteName: "Esthetics Elegance Lab",
  titleTemplate: "%s | Esthetics Elegance Lab | Roseville, CA",
  defaultTitle: "Esthetics Elegance Lab | Premium Esthetician Services in Roseville, CA",
  defaultDescription: "Experience luxurious, personalized skincare treatments in Roseville, CA. Karina Gedarevych offers facials, dermaplaning, chemical peels, and more. Book your appointment today!",
  siteUrl: "https://estheticselegancelab.com",
  ogImage: "/images/og-image.jpg"
} as const;

