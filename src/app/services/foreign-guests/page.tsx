import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "foreign-guests";
export const metadata: Metadata = {
  title: "Трансфер для иностранных гостей в Алматы — English-speaking drivers | Bek Auto",
  description: "VIP-трансфер для иностранных гостей в Алматы. Водители со знанием английского, гиды, экскурсии по Казахстану. Посольства, отели, бизнес. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/services/${SLUG}` },
};
export default function ForeignGuestsPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== SLUG).slice(0, 4);
  return <ServicePage service={service} relatedServices={related} />;
}
