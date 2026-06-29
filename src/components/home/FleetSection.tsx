"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fleet } from "@/lib/data/fleet";
import { SectionTitle } from "@/components/ui/SectionTitle";

const carImages: Record<string, string> = {
  "mercedes-s-class": "https://picsum.photos/seed/mercedes-s-class-luxury-sedan/800/450",
  "mercedes-maybach": "https://picsum.photos/seed/maybach-vip-luxury-sedan/800/450",
  "mercedes-v-class": "https://picsum.photos/seed/mercedes-vclass-premium-van/800/450",
  "mercedes-sprinter": "https://picsum.photos/seed/sprinter-vip-shuttle/800/450",
  "cadillac-escalade": "https://picsum.photos/seed/cadillac-escalade-suv/800/450",
  "toyota-land-cruiser": "https://picsum.photos/seed/land-cruiser-300-suv/800/450",
  "lexus-lx": "https://picsum.photos/seed/lexus-lx600-luxury/800/450",
};

const categoryLabel: Record<string, string> = {
  sedan: "Седан",
  suv: "Внедорожник",
  minivan: "Минивэн",
  minibus: "Минибус",
};

export function FleetSection() {
  const featured = fleet.filter((v) => v.popular).slice(0, 4);
  const shouldReduce = useReducedMotion();

  return (
    <section className="section-padding" style={{ background: "#080808" }}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            label="Автопарк"
            title="Премиум-автомобили для любого случая"
            subtitle="Весь флот 2018–2024 года выпуска. Регулярное техническое обслуживание."
          />
          <Link
            href="/fleet"
            className="btn-outline flex-shrink-0"
            style={{ alignSelf: "flex-start" }}
          >
            Весь автопарк
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              initial={shouldReduce ? false : { opacity: 0, y: 28 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/fleet/${vehicle.slug}`}
                className="group block relative overflow-hidden rounded-2xl hover-lift"
                style={{ background: "#111111", border: "1px solid #1a1a1a" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1a1a1a";
                }}
              >
                {/* Car image */}
                <div className="relative overflow-hidden" style={{ height: "240px" }}>
                  <Image
                    src={carImages[vehicle.slug] ?? `https://picsum.photos/seed/${vehicle.slug}/800/450`}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.85) contrast(1.05)" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(17,17,17,0.75) 100%)",
                    }}
                  />
                  {/* Category badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(10,10,10,0.7)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: "#c9a84c",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {categoryLabel[vehicle.category]}
                  </div>
                  {i === 0 && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: "#c9a84c", color: "#0a0a0a" }}
                    >
                      ХИТ
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-white text-lg leading-tight">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs mt-0.5" style={{ color: "#737373" }}>
                        {vehicle.fullName} · {vehicle.year}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-bold" style={{ color: "#c9a84c" }}>
                        от {vehicle.pricePerHour.toLocaleString("ru")} ₸/ч
                      </div>
                      <div className="text-xs" style={{ color: "#525252" }}>
                        день от {vehicle.priceHalfDay.toLocaleString("ru")} ₸
                      </div>
                    </div>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "#737373" }}
                  >
                    {vehicle.shortDesc}
                  </p>

                  <div className="flex items-center justify-between">
                    <div
                      className="flex items-center gap-4 text-xs"
                      style={{ color: "#525252" }}
                    >
                      <span className="flex items-center gap-1">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        {vehicle.passengers} пасс.
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        {vehicle.luggage} багажа
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-1 text-sm font-medium transition-all duration-300 group-hover:gap-2"
                      style={{ color: "#c9a84c" }}
                    >
                      Подробнее
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
