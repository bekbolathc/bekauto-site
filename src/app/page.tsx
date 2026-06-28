import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FleetSection } from "@/components/home/FleetSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PriceCalculator } from "@/components/home/PriceCalculator";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Bek Auto — Аренда автомобиля с водителем в Алматы",
  description:
    "Премиальная аренда авто с водителем в Алматы. Mercedes S-Class, Maybach, Lexus LX, Cadillac Escalade. Трансфер из аэропорта, VIP, бизнес, свадьбы. 24/7.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FleetSection />
      <PriceCalculator />
      <AdvantagesSection />
      <HowItWorksSection />
      <ReviewsSection />
      <ContactSection />

      {/* SEO text block */}
      <section
        className="section-padding"
        style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.04)" }}
        aria-label="Информация о компании"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose-dark">
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: "1.25rem", letterSpacing: "-0.01em" }}
            >
              Аренда автомобиля с водителем в Алматы — Bek Auto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed" style={{ color: "#737373" }}>
              <div>
                <p className="mb-4">
                  <strong className="text-white">Bek Auto</strong> — ведущая компания по аренде автомобилей
                  бизнес и представительского класса с водителем в Алматы. Более 11 лет мы предоставляем
                  первоклассный сервис для бизнесменов, VIP-клиентов, иностранных гостей, посольств и
                  корпоративных клиентов.
                </p>
                <p className="mb-4">
                  Наш <strong className="text-white">автопарк</strong> включает: Mercedes-Benz S-Class W222/W223,
                  Mercedes-Benz Maybach S-Class, Mercedes-Benz V-Class, Mercedes-Benz Sprinter VIP,
                  Cadillac Escalade ESV, Toyota Land Cruiser 300 и Lexus LX 600 Ultra Luxury.
                  Все автомобили 2018–2024 годов выпуска в идеальном техническом состоянии.
                </p>
                <p>
                  Мы специализируемся на <strong className="text-white">трансфере из аэропорта Алматы</strong>,
                  VIP-трансфере, организации транспорта для деловых делегаций, корпоративных мероприятий,
                  свадеб и туристических маршрутов по Казахстану.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  <strong className="text-white">Почасовая аренда</strong> начинается от 20 000 ₸/час при
                  минимальном заказе 3 часа. Стоимость аренды на полный день (12 часов) — от 150 000 ₸.
                  Точная цена зависит от выбранного автомобиля, маршрута и дополнительных услуг.
                </p>
                <p className="mb-4">
                  <strong className="text-white">Корпоративным клиентам</strong> предоставляем закрывающие
                  документы: счёт, акт, договор, НДС. Заключаем долгосрочные контракты с фиксированными
                  тарифами и персональным менеджером.
                </p>
                <p>
                  Доступны <strong className="text-white">24/7</strong>, включая праздники и выходные.
                  Работаем по всему Казахстану: Алматы, Астана, Шымкент и межгородские маршруты.
                  Для заказа свяжитесь по WhatsApp или позвоните нам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
