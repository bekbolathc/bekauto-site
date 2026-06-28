import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVehicleBySlug, getRelatedVehicles } from "@/lib/data/fleet";
import { VehiclePage } from "@/components/fleet/VehiclePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "cadillac-escalade";

export const metadata: Metadata = {
  title: "Cadillac Escalade с водителем в Алматы | Аренда от 35 000 ₸/ч",
  description:
    "Аренда Cadillac Escalade ESV с водителем в Алматы. 38\" OLED-экраны, AKG 36 динамиков, ночное видение. VIP-статус и мощь. От 35 000 ₸/ч. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/fleet/${SLUG}` },
};

export default function EscaladePage() {
  const vehicle = getVehicleBySlug(SLUG);
  if (!vehicle) notFound();
  const related = getRelatedVehicles(SLUG, 3);
  return <VehiclePage vehicle={vehicle} related={related} />;
}
