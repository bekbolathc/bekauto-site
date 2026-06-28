import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "delegations";
export const metadata: Metadata = {
  title: "Транспорт для делегаций в Алматы — Протокольное обслуживание | Bek Auto",
  description: "Организация транспорта для делегаций в Алматы. Кортежи, протокольная встреча в аэропорту, координатор. Посольства, государственные организации. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/services/${SLUG}` },
};
export default function DelegationsPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== SLUG).slice(0, 4);
  return <ServicePage service={service} relatedServices={related} />;
}
