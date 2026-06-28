import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "airport-transfer";

export const metadata: Metadata = {
  title: "Трансфер из аэропорта Алматы — Встреча с табличкой | Bek Auto",
  description:
    "Трансфер из аэропорта Алматы с водителем. Встреча с именной табличкой, помощь с багажом, мониторинг рейса. Mercedes, Lexus, Cadillac. Заказ 24/7. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/services/${SLUG}` },
  openGraph: {
    title: "Трансфер из аэропорта Алматы — Bek Auto",
    description: "VIP-трансфер из аэропорта Алматы. Встреча с табличкой, мониторинг рейса. Работаем 24/7.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Трансфер из аэропорта Алматы",
  description: "VIP-трансфер из аэропорта Алматы с профессиональным водителем. Встреча с именной табличкой, помощь с багажом, мониторинг рейса 24/7.",
  provider: { "@type": "LocalBusiness", name: "Bek Auto" },
  areaServed: { "@type": "City", name: "Алматы" },
  offers: {
    "@type": "Offer",
    price: "15000",
    priceCurrency: "KZT",
    availability: "https://schema.org/InStock",
  },
};

export default function AirportTransferPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== SLUG).slice(0, 4);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage service={service} relatedServices={related} />
    </>
  );
}
