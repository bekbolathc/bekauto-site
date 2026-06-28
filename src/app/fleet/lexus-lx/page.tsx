import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVehicleBySlug, getRelatedVehicles } from "@/lib/data/fleet";
import { VehiclePage } from "@/components/fleet/VehiclePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "lexus-lx";

export const metadata: Metadata = {
  title: "Lexus LX 600 Ultra Luxury с водителем в Алматы | Аренда от 40 000 ₸/ч",
  description:
    "Аренда Lexus LX 600 Ultra Luxury с водителем в Алматы. VIP-кресла с массажем, Mark Levinson 25 дин., мини-бар. Японский эталон роскоши. От 40 000 ₸/ч. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/fleet/${SLUG}` },
};

export default function LexusPage() {
  const vehicle = getVehicleBySlug(SLUG);
  if (!vehicle) notFound();
  const related = getRelatedVehicles(SLUG, 3);
  return <VehiclePage vehicle={vehicle} related={related} />;
}
