"use client";

import Link from "next/link";
import type { Service } from "@/lib/data/services";
import { BookingForm } from "@/components/ui/BookingForm";
import { COMPANY } from "@/lib/utils";

interface ServicePageProps {
  service: Service;
  relatedServices: Service[];
}

export function ServicePage({ service, relatedServices }: ServicePageProps) {
  const whatsappMsg = encodeURIComponent(
    `Здравствуйте! Интересует услуга: ${service.title}.\nДата и время:\nДетали:`
  );

  return (
    <>
      {/* Breadcrumb */}
      <nav
        className="pt-24 pb-4"
        aria-label="Хлебные крошки"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm" style={{ color: "#525252" }}>
            <li><Link href="/" className="hover:text-white transition-colors">Главная</Link></li>
            <li>/</li>
            <li><Link href="/services/airport-transfer" className="hover:text-white transition-colors">Услуги</Link></li>
            <li>/</li>
            <li style={{ color: "#a3a3a3" }}>{service.shortTitle}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #111111 60%, #0a0a0a 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="gold-divider" style={{ width: "32px" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#c9a84c" }}>
                Алматы · 24/7
              </span>
            </div>
            <h1
              className="font-black text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
            >
              {service.title}
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#a3a3a3", maxWidth: "600px" }}>
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${COMPANY.whatsappUrl}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "1rem", padding: "0.9375rem 2rem" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Заказать через WhatsApp
              </a>
              <a href={COMPANY.callUrl} className="btn-outline" style={{ padding: "0.9375rem 2rem" }}>
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Что входит в услугу</h2>
              <ul className="flex flex-col gap-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(201,168,76,0.15)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Target audience */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-white mb-4">Кому подходит услуга</h3>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.map((audience) => (
                    <span
                      key={audience}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#a3a3a3" }}
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking form */}
            <div
              className="p-8 rounded-2xl"
              style={{ background: "#111111", border: "1px solid #1a1a1a" }}
            >
              <BookingForm
                title={`Заказать: ${service.shortTitle}`}
                subtitle="Ответим в течение 5 минут"
                preselectedService={service.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-padding" style={{ background: "#0a0a0a" }}>
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Почему выбирают Bek Auto</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "11+ лет опыта", desc: "Ведущий VIP-перевозчик Алматы" },
              { title: "2000+ клиентов", desc: "Посольства, компании, частные лица" },
              { title: "24/7", desc: "Работаем без выходных и праздников" },
              { title: "Гарантия", desc: "Возврат при ненадлежащем сервисе" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl text-center"
                style={{ background: "#111111", border: "1px solid #1a1a1a" }}
              >
                <div className="font-bold text-white mb-1">{item.title}</div>
                <div className="text-xs" style={{ color: "#737373" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="section-padding" style={{ background: "#080808" }}>
          <div className="container-custom max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Часто задаваемые вопросы</h2>
            <div className="flex flex-col gap-4">
              {service.faq.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl"
                  style={{ background: "#111111", border: "1px solid #1a1a1a" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5"
                      style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
                    >
                      ?
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-2">{item.q}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-padding" style={{ background: "#0a0a0a" }}>
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-white mb-8">Другие услуги</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedServices.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="card-dark p-5 group hover-lift block"
                >
                  <h3 className="font-semibold text-white text-sm mb-2">{s.shortTitle}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#737373" }}>{s.shortDesc}</p>
                  {s.priceFrom && (
                    <div className="mt-3 text-xs font-semibold" style={{ color: "#c9a84c" }}>
                      от {s.priceFrom.toLocaleString("ru")} ₸/ч
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
