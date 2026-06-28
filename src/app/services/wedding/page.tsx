import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "wedding";
export const metadata: Metadata = {
  title: "Свадебный автомобиль в Алматы — Mercedes Maybach, Lexus LX | Bek Auto",
  description: "Аренда свадебного автомобиля в Алматы. Mercedes Maybach, Lexus LX, Cadillac Escalade. Украшение, шампанское, помощь с нарядом. Скидка 15% молодожёнам.",
  alternates: { canonical: `${SITE_URL}/services/${SLUG}` },
};
export default function WeddingPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== SLUG).slice(0, 4);
  return <ServicePage service={service} relatedServices={related} />;
}
