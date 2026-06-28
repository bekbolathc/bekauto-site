import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "business";
export const metadata: Metadata = {
  title: "Корпоративный транспорт и аренда авто для бизнеса в Алматы | Bek Auto",
  description: "Корпоративный транспорт для бизнеса в Алматы. Закрывающие документы, НДС, персональный менеджер. Mercedes S-Class, Maybach, V-Class. Договора и счета.",
  alternates: { canonical: `${SITE_URL}/services/${SLUG}` },
};
export default function BusinessPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== SLUG).slice(0, 4);
  return <ServicePage service={service} relatedServices={related} />;
}
