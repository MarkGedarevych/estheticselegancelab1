import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS_INFO, SEO_DEFAULTS } from "@/lib/constants";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_DEFAULTS.siteUrl),
  title: {
    default: SEO_DEFAULTS.defaultTitle,
    template: SEO_DEFAULTS.titleTemplate,
  },
  description: SEO_DEFAULTS.defaultDescription,
  keywords: [
    "esthetician Roseville CA",
    "facials Roseville",
    "dermaplaning Roseville",
    "chemical peels Roseville",
    "skincare Roseville CA",
    "spa Roseville",
    "lash lift Roseville",
    "microneedling Roseville",
    "Karina Gedarevych",
    "Esthetics Elegance Lab",
  ],
  authors: [{ name: BUSINESS_INFO.owner }],
  creator: BUSINESS_INFO.owner,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO_DEFAULTS.siteUrl,
    siteName: SEO_DEFAULTS.siteName,
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.defaultDescription,
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - Premium Skincare in Roseville, CA`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.defaultDescription,
    images: [SEO_DEFAULTS.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href={SEO_DEFAULTS.siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "@id": `${SEO_DEFAULTS.siteUrl}/#organization`,
              name: BUSINESS_INFO.name,
              image: `${SEO_DEFAULTS.siteUrl}/images/og-image.jpg`,
              url: SEO_DEFAULTS.siteUrl,
              telephone: BUSINESS_INFO.phone,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS_INFO.address.street,
                addressLocality: BUSINESS_INFO.address.city,
                addressRegion: BUSINESS_INFO.address.state,
                postalCode: BUSINESS_INFO.address.zip,
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.7521,
                longitude: -121.2880,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              founder: {
                "@type": "Person",
                name: BUSINESS_INFO.owner,
                jobTitle: BUSINESS_INFO.ownerTitle,
              },
              sameAs: [
                BUSINESS_INFO.social.instagram,
                BUSINESS_INFO.social.facebook,
              ],
              areaServed: [
                { "@type": "City", name: "Roseville" },
                { "@type": "City", name: "Rocklin" },
                { "@type": "City", name: "Lincoln" },
                { "@type": "City", name: "Granite Bay" },
                { "@type": "City", name: "Citrus Heights" },
                { "@type": "City", name: "Folsom" },
                { "@type": "City", name: "Orangevale" },
                { "@type": "City", name: "Antelope" },
                { "@type": "City", name: "Loomis" },
                { "@type": "City", name: "Auburn" },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased bg-[var(--color-page)]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
