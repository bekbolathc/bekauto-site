"use client";

import { BookingForm } from "@/components/ui/BookingForm";
import { COMPANY } from "@/lib/utils";

export function ContactSection() {
  return (
    <section className="section-padding" style={{ background: "#0a0a0a" }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-divider" style={{ width: "32px" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#c9a84c" }}>
                Связаться с нами
              </span>
            </div>
            <h2
              className="font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", letterSpacing: "-0.02em" }}
            >
              Готовы ответить
              <br />
              <span className="gold-text">в течение 5 минут</span>
            </h2>
            <p className="mb-10 leading-relaxed" style={{ color: "#737373" }}>
              Оставьте заявку любым удобным способом — мы свяжемся с вами моментально.
              Работаем 24/7, без выходных и праздников.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                style={{ background: "rgba(37,211,102,0.07)", border: "1px solid rgba(37,211,102,0.15)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(37,211,102,0.12)"; e.currentTarget.style.borderColor = "rgba(37,211,102,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(37,211,102,0.07)"; e.currentTarget.style.borderColor = "rgba(37,211,102,0.15)"; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#25D366" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">WhatsApp</div>
                  <div className="text-sm" style={{ color: "#4ade80" }}>Написать сейчас</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto" style={{ color: "#525252" }}>
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>

              <a
                href={COMPANY.callUrl}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.12)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.07)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #c9a84c 0%, #e2b96f 100%)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.5a2 2 0 0 1 1.94-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Позвонить</div>
                  <div className="text-sm" style={{ color: "#c9a84c" }}>{COMPANY.phone}</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto" style={{ color: "#525252" }}>
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-0.5">Адрес офиса</div>
                  <div className="text-sm leading-relaxed" style={{ color: "#737373" }}>{COMPANY.address}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="p-8 rounded-2xl"
            style={{ background: "#111111", border: "1px solid #1a1a1a" }}
          >
            <BookingForm
              title="Оставить заявку"
              subtitle="Ответим в течение 5 минут"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
