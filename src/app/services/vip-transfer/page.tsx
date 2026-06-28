import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { SITE_URL } from "@/lib/utils";

const SLUG = "vip-transfer";
export const metadata: Metadata = {
  title: "VIP-трансфер в Алматы — Mercedes Maybach, Lexus LX | Bek Auto",
  description: "VIP-трансфер в Алматы на Mercedes Maybach, Lexus LX 600, Cadillac Escalade с водителем. Конфиденциальность, профессиональные водители. 24/7. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/services/${SLUG}` },
};
export default function VipTransferPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== SLUG).slice(0, 4);
  return <ServicePage service={service} relatedServices={related} />;
}
