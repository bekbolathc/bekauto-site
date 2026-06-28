"use client";

import Link from "next/link";
import { fleet } from "@/lib/data/fleet";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FleetSection() {
  const featured = fleet.filter((v) => v.popular).slice(0, 4);

  return (
    <section className="section-padding" style={{ background: "#080808" }}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            label="Автопарк"
            title="Премиум-автомобили для любого случая"
            subtitle="Весь флот 2018–2024 года выпуска. Регулярное техническое обслуживание."
          />
          <Link href="/fleet" className="btn-outline flex-shrink-0" style={{ alignSelf: "flex-start" }}>
            Весь автопарк
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((vehicle, i) => (
            <Link
              key={vehicle.id}
              href={`/fleet/${vehicle.slug}`}
              className="group block relative overflow-hidden rounded-2xl hover-lift"
              style={{
                background: "#111111",
                border: "1px solid #1a1a1a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1a1a1a";
              }}
            >
              {/* Car image placeholder */}
              <div
                className="w-full relative overflow-hidden"
                style={{ height: "220px" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${vehicle.color} 0%, #1a1a1a 100%)`,
                  }}
                />
                {/* Car silhouette placeholder */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ opacity: 0.15 }}
                >
                  <svg viewBox="0 0 120 40" fill="none" width="60%" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 28 L20 14 L40 10 L80 10 L100 14 L110 28 L10 28 Z"
                      fill="#c9a84c"
                    />
                    <circle cx="30" cy="30" r="7" fill="#c9a84c" />
                    <circle cx="90" cy="30" r="7" fill="#c9a84c" />
                  </svg>
                </div>
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, transparent 40%, rgba(17,17,17,0.8) 100%)",
                  }}
                />
                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#c9a84c",
                  }}
                >
                  {vehicle.category === "sedan" ? "Седан" : vehicle.category === "suv" ? "Внедорожник" : vehicle.category === "minivan" ? "Минивэн" : "Минибус"}
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
                    <h3 className="font-bold text-white text-lg leading-tight">{vehicle.name}</h3>
                    <p className="text-xs mt-0.5" style={{ color: "#737373" }}>{vehicle.fullName} · {vehicle.year}</p>
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

                <p className="text-sm leading-relaxed mb-4" style={{ color: "#737373" }}>
                  {vehicle.shortDesc}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs" style={{ color: "#525252" }}>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      {vehicle.passengers} пасс.
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 0 1-8 0"/>
                      </svg>
                      {vehicle.luggage} багажа
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1 text-sm font-medium transition-all duration-300 group-hover:gap-2"
                    style={{ color: "#c9a84c" }}
                  >
                    Подробнее
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
