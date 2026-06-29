"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { COMPANY } from "@/lib/utils";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100dvh" }}
      aria-label="Главный баннер"
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "#0a0a0a" }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 90% at 80% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Layout */}
      <div
        className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 pt-32 pb-16 lg:pt-0 lg:pb-0"
        style={{ minHeight: "100dvh" }}
      >
        {/* Left: Copy */}
        <div>
          {/* Badge — no pulsing dot */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8"
            style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.2)",
              color: "#c9a84c",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(8px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            Алматы · VIP-трансфер с 2013 года
          </div>

          {/* H1 */}
          <h1
            className="font-black text-white mb-6"
            style={{
              fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: "1.04",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            Аренда авто
            <br />
            <span className="gold-text">с водителем</span>
            <br />
            в Алматы
          </h1>

          {/* Subtext — under 20 words */}
          <p
            className="text-lg leading-relaxed mb-10"
            style={{
              color: "#a3a3a3",
              maxWidth: "460px",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(12px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Mercedes S-Class, Maybach, Lexus LX, Cadillac Escalade.
            Профессиональные водители. 24/7.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(12px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "1rem 2rem" }}
            >
              Заказать в WhatsApp
            </a>
            <a
              href={COMPANY.callUrl}
              className="btn-outline"
              style={{ fontSize: "1rem", padding: "1rem 2rem" }}
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>

        {/* Right: Car photo */}
        <div
          className="relative hidden lg:block"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateX(20px)",
            transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
          }}
        >
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ height: "560px" }}
          >
            <Image
              src="https://picsum.photos/seed/luxury-sedan-vip-almaty/900/560"
              alt="Премиум автомобиль с водителем — Bek Auto Алматы"
              fill
              priority
              className="object-cover"
              style={{ filter: "brightness(0.8) contrast(1.08)" }}
              sizes="50vw"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.55) 0%, transparent 55%)",
              }}
            />
            {/* Gold accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #c9a84c 50%, transparent)",
              }}
            />
          </div>

          {/* Floating price badge */}
          <div
            className="absolute -left-8 bottom-10 px-5 py-4 rounded-xl"
            style={{
              background: "rgba(10,10,10,0.96)",
              border: "1px solid rgba(201,168,76,0.2)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <div className="text-xs mb-0.5" style={{ color: "#525252" }}>
              Стоимость от
            </div>
            <div
              className="text-2xl font-black"
              style={{ color: "#c9a84c", letterSpacing: "-0.02em" }}
            >
              25 000 ₸/ч
            </div>
            <div className="text-xs mt-1" style={{ color: "#737373" }}>
              Mercedes S-Class
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
