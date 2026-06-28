import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVehicleBySlug, getRelatedVehicles } from "@/lib/data/fleet";
import { VehiclePage } from "@/components/fleet/VehiclePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "mercedes-v-class";

export const metadata: Metadata = {
  title: "Mercedes V-Class с водителем в Алматы | Аренда минивэна от 20 000 ₸/ч",
  description:
    "Аренда Mercedes V-Class с водителем в Алматы. 7 пассажиров, бизнес-класс. Групповой VIP-трансфер, корпоративные мероприятия, аэропорт. От 20 000 ₸/ч.",
  alternates: { canonical: `${SITE_URL}/fleet/${SLUG}` },
};

export default function VClassPage() {
  const vehicle = getVehicleBySlug(SLUG);
  if (!vehicle) notFound();
  const related = getRelatedVehicles(SLUG, 3);
  return <VehiclePage vehicle={vehicle} related={related} />;
}
