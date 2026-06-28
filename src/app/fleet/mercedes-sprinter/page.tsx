import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVehicleBySlug, getRelatedVehicles } from "@/lib/data/fleet";
import { VehiclePage } from "@/components/fleet/VehiclePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "mercedes-sprinter";

export const metadata: Metadata = {
  title: "Mercedes Sprinter VIP с водителем в Алматы | Аренда минибуса 14 мест",
  description:
    "Аренда Mercedes Sprinter VIP в Алматы. 14 пассажирских мест, переговорный стол, TV, холодильник, Wi-Fi. Корпоративные делегации. От 25 000 ₸/ч. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/fleet/${SLUG}` },
};

export default function SprinterPage() {
  const vehicle = getVehicleBySlug(SLUG);
  if (!vehicle) notFound();
  const related = getRelatedVehicles(SLUG, 3);
  return <VehiclePage vehicle={vehicle} related={related} />;
}
