import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVehicleBySlug, getRelatedVehicles } from "@/lib/data/fleet";
import { VehiclePage } from "@/components/fleet/VehiclePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "mercedes-maybach";

export const metadata: Metadata = {
  title: "Mercedes Maybach с водителем в Алматы | Аренда от 50 000 ₸/ч",
  description:
    "Аренда Mercedes Maybach S-Class с водителем в Алматы. Ультра-роскошный седан: VIP-кресла, холодильник шампанского, Burmester 4D. От 50 000 ₸/ч. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/fleet/${SLUG}` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Аренда Mercedes Maybach с водителем в Алматы",
  description: "Mercedes-Benz Maybach S-Class. VIP-кресла с массажем, холодильник шампанского, Burmester 4D High-End. Автомобиль уровня глав государств.",
  offers: {
    "@type": "Offer",
    price: "50000",
    priceCurrency: "KZT",
    availability: "https://schema.org/InStock",
  },
};

export default function MaybachPage() {
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
