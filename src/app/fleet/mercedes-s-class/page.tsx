import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVehicleBySlug, getRelatedVehicles } from "@/lib/data/fleet";
import { VehiclePage } from "@/components/fleet/VehiclePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "mercedes-s-class";

export const metadata: Metadata = {
  title: "Mercedes S-Class с водителем в Алматы | Аренда от 25 000 ₸/ч",
  description:
    "Аренда Mercedes S-Class W222/W223 с водителем в Алматы. Массажные сиденья, Burmester, панорама. VIP-трансфер, бизнес-встречи. Цена от 25 000 ₸/ч. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/fleet/${SLUG}` },
  openGraph: {
    title: "Аренда Mercedes S-Class с водителем в Алматы — Bek Auto",
    description: "Mercedes S-Class W222/W223 с профессиональным водителем. Идеал для VIP-трансфера и деловых встреч в Алматы.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Аренда Mercedes S-Class с водителем в Алматы",
  description: "Mercedes-Benz S-Class W222/W223. Массажные сиденья, Burmester 3D, панорама. Аренда с профессиональным водителем 24/7.",
  offers: {
    "@type": "Offer",
    price: "25000",
    priceCurrency: "KZT",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "150",
  },
};

export default function MercedesSClassPage() {
  const vehicle = getVehicleBySlug(SLUG);
  if (!vehicle) notFound();
  const related = getRelatedVehicles(SLUG, 3);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <VehiclePage vehicle={vehicle} related={related} />
    </>
  );
}
