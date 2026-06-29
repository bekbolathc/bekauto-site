import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { COMPANY, SITE_URL } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} — Аренда автомобиля с водителем в Алматы | VIP-трансфер 24/7`,
    template: `%s | ${COMPANY.name} — Аренда авто с водителем Алматы`,
  },
  description:
    "Аренда автомобиля с водителем в Алматы 24/7. Mercedes S-Class, Maybach, Lexus LX, Cadillac Escalade. Трансфер из аэропорта, VIP-трансфер, свадьбы, бизнес. " +
    COMPANY.phone,
  keywords: [
    "аренда авто с водителем Алматы",
    "VIP трансфер Алматы",
    "трансфер из аэропорта Алматы",
    "Mercedes с водителем Алматы",
    "Maybach аренда Алматы",
    "Lexus LX аренда Алматы",
    "Cadillac Escalade аренда Алматы",
    "свадебный автомобиль Алматы",
    "бизнес трансфер Алматы",
    "корпоративный транспорт Алматы",
  ],
  authors: [{ name: COMPANY.name, url: SITE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: { telephone: true, email: false, address: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Аренда автомобиля с водителем в Алматы`,
    description:
      "Премиум-аренда авто с водителем в Алматы. Mercedes S-Class, Maybach, Lexus LX, Cadillac Escalade. 11 лет опыта. 2000+ довольных клиентов. 24/7.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bek Auto — VIP аренда авто Алматы" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Аренда авто с водителем в Алматы`,
    description: "Премиум-аренда авто с водителем. Mercedes S-Class, Maybach, Lexus LX, Cadillac Escalade. 24/7.",
    images: ["/og-image.jpg"],
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: COMPANY.name,
      url: SITE_URL,
      telephone: COMPANY.phone,
      email: COMPANY.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Тимирязева 42 к15/109, офис 222, БЦ «Asia Most»",
        addressLocality: "Алматы",
        addressRegion: "Алматы",
        addressCountry: "KZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.238949,
        longitude: 76.945465,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "₸₸₸",
      image: `${SITE_URL}/og-image.jpg`,
      logo: `${SITE_URL}/logo.svg`,
      sameAs: [COMPANY.instagram, COMPANY.youtube],
      description:
        "Премиальная аренда автомобилей с водителем в Алматы. VIP-трансферы, трансфер из аэропорта, корпоративный транспорт, свадебные автомобили.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "2000",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY.name,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY.phone,
        contactType: "customer service",
        availableLanguage: ["Russian", "Kazakh", "English"],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
