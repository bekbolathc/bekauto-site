import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "hourly";
export const metadata: Metadata = {
  title: "Почасовая аренда авто с водителем в Алматы — от 20 000 ₸/ч | Bek Auto",
  description: "Почасовая аренда авто с водителем в Алматы. Минимум 3 часа. Мин. 20 000 ₸/ч. Неограниченные остановки, несколько адресов. Mercedes, Lexus, Cadillac.",
  alternates: { canonical: `${SITE_URL}/services/${SLUG}` },
};
export default function HourlyPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== SLUG).slice(0, 4);
  return <ServicePage service={service} relatedServices={related} />;
}
