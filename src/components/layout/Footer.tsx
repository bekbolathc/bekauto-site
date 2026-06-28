"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/utils";

const fleetLinks = [
  { label: "Mercedes S-Class", href: "/fleet/mercedes-s-class" },
  { label: "Mercedes Maybach", href: "/fleet/mercedes-maybach" },
  { label: "Mercedes V-Class", href: "/fleet/mercedes-v-class" },
  { label: "Mercedes Sprinter", href: "/fleet/mercedes-sprinter" },
  { label: "Cadillac Escalade", href: "/fleet/cadillac-escalade" },
  { label: "Toyota Land Cruiser", href: "/fleet/toyota-land-cruiser" },
  { label: "Lexus LX 600", href: "/fleet/lexus-lx" },
];

const serviceLinks = [
  { label: "Трансфер из аэропорта", href: "/services/airport-transfer" },
  { label: "VIP-трансфер", href: "/services/vip-transfer" },
  { label: "Авто для бизнеса", href: "/services/business" },
  { label: "Свадебный автомобиль", href: "/services/wedding" },
  { label: "Авто на мероприятия", href: "/services/events" },
  { label: "Авто для делегаций", href: "/services/delegations" },
  { label: "Почасовая аренда", href: "/services/hourly" },
];

const companyLinks = [
  { label: "О компании", href: "/about" },
  { label: "Отзывы клиентов", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/contacts" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
      aria-label="Подвал сайта"
    >
      {/* Top CTA band */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        <div className="container-custom py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold text-white mb-1">Готовы заказать автомобиль?</p>
            <p style={{ color: "#a3a3a3" }} className="text-sm">
              Ответим за 5 минут. Работаем 24/7.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={COMPANY.callUrl} className="btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.5a2 2 0 0 1 1.94-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm"
                style={{ background: "linear-gradient(135deg, #c9a84c 0%, #e2b96f 100%)", color: "#0a0a0a" }}
              >
                BA
              </div>
              <div>
                <div className="font-bold text-white text-base">Bek Auto</div>
                <div className="text-xs" style={{ color: "#c9a84c", letterSpacing: "0.08em" }}>АЛМАТЫ</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#737373" }}>
              Премиальная аренда автомобилей с водителем в Алматы. Более 11 лет на рынке,
              2000+ довольных клиентов. Работаем 24/7, 365 дней в году.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={COMPANY.callUrl}
                className="flex items-center gap-2.5 transition-colors duration-200"
                style={{ color: "#a3a3a3" }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#c9a84c")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#a3a3a3")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#c9a84c", flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.5a2 2 0 0 1 1.94-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {COMPANY.phone}
              </a>
              <div className="flex items-start gap-2.5" style={{ color: "#737373" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#c9a84c", flexShrink: 0, marginTop: "2px" }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2.5" style={{ color: "#737373" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#c9a84c", flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                Круглосуточно, 24/7
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.06)", color: "#a3a3a3" }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.background = "rgba(201,168,76,0.15)";
                  (e.currentTarget).style.color = "#c9a84c";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget).style.color = "#a3a3a3";
                }}
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.06)", color: "#a3a3a3" }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.background = "rgba(201,168,76,0.15)";
                  (e.currentTarget).style.color = "#c9a84c";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget).style.color = "#a3a3a3";
                }}
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              <a
                href={COMPANY.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.06)", color: "#a3a3a3" }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.background = "rgba(201,168,76,0.15)";
                  (e.currentTarget).style.color = "#c9a84c";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget).style.color = "#a3a3a3";
                }}
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Fleet */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest" style={{ letterSpacing: "0.1em" }}>
              Автопарк
            </h3>
            <ul className="flex flex-col gap-2">
              {fleetLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#737373" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#c9a84c")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#737373")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest" style={{ letterSpacing: "0.1em" }}>
              Услуги
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#737373" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#c9a84c")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#737373")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest" style={{ letterSpacing: "0.1em" }}>
              Компания
            </h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#737373" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#c9a84c")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#737373")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#c9a84c" }}>Работаем 24/7</p>
              <p className="text-xs" style={{ color: "#737373" }}>Принимаем заявки в любое время суток</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#525252" }}>
            © {new Date().getFullYear()} {COMPANY.name}. Все права защищены.
          </p>
          <p className="text-xs" style={{ color: "#525252" }}>
            Алматы, Казахстан · Аренда авто с водителем
          </p>
        </div>
      </div>
    </footer>
  );
}
