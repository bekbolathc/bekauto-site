"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/utils";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Главный баннер"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient background (image placeholder) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0f0c05 100%)",
          }}
        />
        {/* Gold particle effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(to bottom, transparent, #0a0a0a)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Decorative car silhouette area */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 hidden lg:block"
          style={{
            background:
              "linear-gradient(135deg, transparent 30%, rgba(201,168,76,0.04) 100%)",
            borderLeft: "1px solid rgba(201,168,76,0.08)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.25)",
              color: "#c9a84c",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#c9a84c", animation: "pulse-gold 2s ease-in-out infinite" }}
            />
            Алматы · Работаем 24/7 · 11 лет на рынке
          </div>

          {/* H1 */}
          <h1
            className="font-black text-white leading-none mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "-0.03em",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            Аренда автомобиля
            <br />
            <span className="gold-text">с водителем</span>
            <br />
            в Алматы
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg leading-relaxed mb-10"
            style={{
              color: "#a3a3a3",
              maxWidth: "540px",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Mercedes S-Class, Maybach, Lexus LX, Cadillac Escalade.
            VIP-трансфер, трансфер из аэропорта, бизнес, свадьбы.
            Профессиональные водители. Конфиденциальность гарантирована.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Заказать в WhatsApp
            </a>
            <a
              href={COMPANY.callUrl}
              className="btn-outline"
              style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.5a2 2 0 0 1 1.94-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {COMPANY.phone}
            </a>
          </div>

          {/* Quick stats */}
          <div
            className="flex flex-wrap gap-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            {[
              { value: "11+", label: "лет на рынке" },
              { value: "2000+", label: "довольных клиентов" },
              { value: "7", label: "премиум автомобилей" },
              { value: "24/7", label: "доступность" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c 0%, #e2b96f 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "#737373" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: "opacity 1s ease 0.8s",
        }}
        aria-hidden="true"
      >
        <span className="text-xs" style={{ color: "#525252", letterSpacing: "0.1em" }}>ПРОКРУТИТЕ ВНИЗ</span>
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1px solid rgba(255,255,255,0.15)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: "#c9a84c",
              animation: "fadeUp 1.5s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>
    </section>
  );
}
