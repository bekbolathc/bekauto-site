import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVehicleBySlug, getRelatedVehicles } from "@/lib/data/fleet";
import { VehiclePage } from "@/components/fleet/VehiclePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "toyota-land-cruiser";

export const metadata: Metadata = {
  title: "Toyota Land Cruiser 300 с водителем в Алматы | Аренда от 20 000 ₸/ч",
  description:
    "Аренда Toyota Land Cruiser 300 с водителем в Алматы. Легендарная надёжность для туров и деловых поездок. Полный привод, комфорт бизнес-класса. От 20 000 ₸/ч.",
  alternates: { canonical: `${SITE_URL}/fleet/${SLUG}` },
};

export default function LandCruiserPage() {
  const vehicle = getVehicleBySlug(SLUG);
  if (!vehicle) notFound();
  const related = getRelatedVehicles(SLUG, 3);
  return <VehiclePage vehicle={vehicle} related={related} />;
}
