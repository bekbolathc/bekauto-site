import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "long-term";
export const metadata: Metadata = {
  title: "Долгосрочная аренда авто с водителем в Алматы — Скидки до 25% | Bek Auto",
  description: "Долгосрочная аренда авто с водителем в Алматы. День, неделя, месяц. Скидки до 25%. Корпоративные контракты, экспаты, посольства. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/services/${SLUG}` },
};
export default function LongTermPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== SLUG).slice(0, 4);
  return <ServicePage service={service} relatedServices={related} />;
}
