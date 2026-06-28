"use client";

import Link from "next/link";
import type { Vehicle } from "@/lib/data/fleet";
import { BookingForm } from "@/components/ui/BookingForm";
import { COMPANY, SITE_URL } from "@/lib/utils";

interface VehiclePageProps {
  vehicle: Vehicle;
  related: Vehicle[];
}

function categoryLabel(cat: Vehicle["category"]) {
  const map: Record<string, string> = {
    sedan: "Седан",
    suv: "Внедорожник",
    minivan: "Минивэн",
    minibus: "Минибус",
  };
  return map[cat] ?? cat;
}

export function VehiclePage({ vehicle, related }: VehiclePageProps) {
  const whatsappMsg = encodeURIComponent(
    `Здравствуйте! Хочу забронировать ${vehicle.name}.\nДата и время:\nМаршрут:`
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
            <li><Link href="/fleet" className="hover:text-white transition-colors">Автопарк</Link></li>
            <li>/</li>
            <li style={{ color: "#a3a3a3" }}>{vehicle.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-16"
        style={{
          background: `linear-gradient(135deg, #0a0a0a 0%, ${vehicle.color}40 50%, #0a0a0a 100%)`,
        }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Car image placeholder */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{ height: "360px", background: `linear-gradient(135deg, ${vehicle.color} 0%, #1a1a1a 100%)`, border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0.2 }}>
                <svg viewBox="0 0 200 70" fill="none" width="80%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 54 L40 22 L80 16 L160 16 L185 22 L195 54 L20 54 Z" fill="#c9a84c"/>
                  <circle cx="55" cy="58" r="12" fill="#c9a84c"/>
                  <circle cx="155" cy="58" r="12" fill="#c9a84c"/>
                  <path d="M40 22 L80 16 L80 34 L40 34 Z" fill="#0a0a0a" opacity="0.5"/>
                  <path d="M85 16 L150 16 L150 34 L85 34 Z" fill="#0a0a0a" opacity="0.5"/>
                </svg>
              </div>
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c" }}
              >
                {categoryLabel(vehicle.category)}
              </div>
              <div
                className="absolute bottom-0 inset-x-0 h-24"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9), transparent)" }}
              />
              <div className="absolute bottom-4 right-4 text-right">
                <div className="text-2xl font-black" style={{ color: "#c9a84c" }}>
                  от {vehicle.pricePerHour.toLocaleString("ru")} ₸/ч
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="gold-divider" style={{ width: "24px" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#c9a84c" }}>
                  {vehicle.year} · {categoryLabel(vehicle.category)}
                </span>
              </div>
              <h1
                className="font-black text-white leading-tight mb-2"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em" }}
              >
                {vehicle.name}
              </h1>
              <p className="mb-6 text-sm" style={{ color: "#737373" }}>{vehicle.fullName}</p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#a3a3a3" }}>
                {vehicle.description}
              </p>

              {/* Quick specs */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: "Пассажиров", value: `${vehicle.passengers} чел.` },
                  { label: "Багаж", value: `${vehicle.luggage} мест` },
                  { label: "Час аренды", value: `от ${vehicle.pricePerHour.toLocaleString("ru")} ₸` },
                  { label: "Полдня (6 ч)", value: `от ${(vehicle.pricePerHour * 6).toLocaleString("ru")} ₸` },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="text-xs mb-1" style={{ color: "#737373" }}>{spec.label}</div>
                    <div className="font-bold text-white">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`${COMPANY.whatsappUrl}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "1rem", padding: "0.875rem 1.75rem" }}
                >
                  Забронировать в WhatsApp
                </a>
                <a href={COMPANY.callUrl} className="btn-outline" style={{ padding: "0.875rem 1.75rem" }}>
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Комплектация и оснащение</h2>
              <ul className="flex flex-col gap-3">
                {vehicle.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm" style={{ color: "#a3a3a3" }}>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(201,168,76,0.15)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs + Occasions */}
            <div className="flex flex-col gap-6">
              {/* Tech specs */}
              {Object.keys(vehicle.specs).length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Технические характеристики</h2>
                  <div className="flex flex-col gap-2">
                    {vehicle.specs.engine && (
                      <div className="flex justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <span style={{ color: "#737373" }}>Двигатель</span>
                        <span className="font-medium text-white">{vehicle.specs.engine}</span>
                      </div>
                    )}
                    {vehicle.specs.power && (
                      <div className="flex justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <span style={{ color: "#737373" }}>Мощность</span>
                        <span className="font-medium text-white">{vehicle.specs.power}</span>
                      </div>
                    )}
                    {vehicle.specs.transmission && (
                      <div className="flex justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <span style={{ color: "#737373" }}>Трансмиссия</span>
                        <span className="font-medium text-white">{vehicle.specs.transmission}</span>
                      </div>
                    )}
                    {vehicle.specs.interior && (
                      <div className="flex justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <span style={{ color: "#737373" }}>Интерьер</span>
                        <span className="font-medium text-white">{vehicle.specs.interior}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span style={{ color: "#737373" }}>Год</span>
                      <span className="font-medium text-white">{vehicle.year}</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span style={{ color: "#737373" }}>Вместимость</span>
                      <span className="font-medium text-white">{vehicle.passengers} пассажиров</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Occasions */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Когда выбирают {vehicle.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {vehicle.occasions.map((occ) => (
                    <span
                      key={occ}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", color: "#c9a84c" }}
                    >
                      {occ}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding" style={{ background: "#0a0a0a" }}>
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Стоимость аренды {vehicle.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-8">
            {[
              { label: "Почасовая", value: vehicle.pricePerHour, unit: "₸/час", note: "мин. 3 часа" },
              { label: "Полдня", value: vehicle.priceHalfDay, unit: "₸", note: "12 часов", highlight: true },
              { label: "Сутки", value: vehicle.pricePerDay, unit: "₸", note: "24 часа" },
            ].map((p) => (
              <div
                key={p.label}
                className="p-6 rounded-2xl text-center"
                style={{
                  background: p.highlight ? "rgba(201,168,76,0.1)" : "#111111",
                  border: `1px solid ${p.highlight ? "rgba(201,168,76,0.3)" : "#1a1a1a"}`,
                }}
              >
                <div className="text-sm font-medium mb-2" style={{ color: "#737373" }}>{p.label}</div>
                <div
                  className="text-2xl font-black mb-1"
                  style={p.highlight ? {
                    background: "linear-gradient(135deg, #c9a84c, #e2b96f)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  } : { color: "#ffffff" }}
                >
                  от {p.value.toLocaleString("ru")} {p.unit}
                </div>
                <div className="text-xs" style={{ color: "#525252" }}>{p.note}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm" style={{ color: "#525252" }}>
            * Цены могут меняться в зависимости от маршрута и дополнительных услуг. Свяжитесь для точного расчёта.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-custom">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Забронировать {vehicle.name}</h2>
              <p style={{ color: "#737373" }}>Заполните форму — ответим в течение 5 минут</p>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: "#111111", border: "1px solid #1a1a1a" }}>
              <BookingForm preselectedService={vehicle.name} compact={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Related vehicles */}
      {related.length > 0 && (
        <section className="section-padding" style={{ background: "#0a0a0a" }}>
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-white mb-8">Похожие автомобили</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((v) => (
                <Link
                  key={v.id}
                  href={`/fleet/${v.slug}`}
                  className="card-dark p-6 group hover-lift block"
                >
                  <div
                    className="h-32 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${v.color} 0%, #1a1a1a 100%)`, opacity: 0.8 }}
                  />
                  <h3 className="font-bold text-white mb-1">{v.name}</h3>
                  <p className="text-xs mb-3" style={{ color: "#737373" }}>{v.shortDesc}</p>
                  <div className="text-sm font-semibold" style={{ color: "#c9a84c" }}>
                    от {v.pricePerHour.toLocaleString("ru")} ₸/ч
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
