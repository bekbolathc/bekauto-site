import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SITE_URL } from "@/lib/utils";
import { BookingForm } from "@/components/ui/BookingForm";

export const metadata: Metadata = {
  title: "Контакты Bek Auto — Телефон, WhatsApp, Адрес в Алматы",
  description:
    `Контакты Bek Auto: ${COMPANY.phone}. WhatsApp, Instagram. Адрес: ${COMPANY.address}. Аренда авто с водителем в Алматы 24/7.`,
  alternates: { canonical: `${SITE_URL}/contacts` },
};

export default function ContactsPage() {
  return (
    <>
      <div className="pt-32 pb-16" style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#525252" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Главная</Link></li>
              <li>/</li>
              <li style={{ color: "#a3a3a3" }}>Контакты</li>
            </ol>
          </nav>
          <h1 className="font-black text-white" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em" }}>
            Свяжитесь с нами
          </h1>
        </div>
      </div>

      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Контактная информация</h2>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.5a2 2 0 0 1 1.94-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    ),
                    label: "Телефон",
                    value: COMPANY.phone,
                    href: COMPANY.callUrl,
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                    ),
                    label: "WhatsApp",
                    value: "Написать в WhatsApp",
                    href: COMPANY.whatsappUrl,
                    external: true,
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    ),
                    label: "Адрес",
                    value: COMPANY.address,
                    href: undefined,
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    ),
                    label: "Режим работы",
                    value: "Круглосуточно, 24/7, 365 дней в году",
                    href: undefined,
                  },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4 p-5 rounded-xl" style={{ background: "#111111", border: "1px solid #1a1a1a" }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.1)", color: "#c9a84c" }}>
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-xs mb-1" style={{ color: "#737373" }}>{c.label}</div>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.external ? "_blank" : undefined}
                          rel={c.external ? "noopener noreferrer" : undefined}
                          className="font-semibold link-white"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div className="font-medium text-white text-sm">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3 className="text-base font-bold text-white mb-4">Социальные сети</h3>
                <div className="flex gap-3">
                  <a
                    href={COMPANY.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium"
                    style={{ background: "#111111", border: "1px solid #1a1a1a", color: "#a3a3a3" }}
                  >
                    Instagram
                  </a>
                  <a
                    href={COMPANY.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium"
                    style={{ background: "#111111", border: "1px solid #1a1a1a", color: "#a3a3a3" }}
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="p-8 rounded-2xl" style={{ background: "#111111", border: "1px solid #1a1a1a" }}>
                <BookingForm title="Написать нам" subtitle="Ответим в течение 5 минут" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
