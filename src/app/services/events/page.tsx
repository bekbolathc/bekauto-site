import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "events";
export const metadata: Metadata = {
  title: "Аренда авто на мероприятие в Алматы — Конференции, Форумы | Bek Auto",
  description: "Транспорт для мероприятий в Алматы: конференции, форумы, корпоративы, гала-ужины. Флот от 1 до 20 авто. Координатор, встреча спикеров. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/services/${SLUG}` },
};
export default function EventsPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== SLUG).slice(0, 4);
  return <ServicePage service={service} relatedServices={related} />;
}
