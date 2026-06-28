"use client";

import { useState } from "react";
import { fleet } from "@/lib/data/fleet";
import { COMPANY } from "@/lib/utils";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function PriceCalculator() {
  const [selectedCar, setSelectedCar] = useState(fleet[0].id);
  const [hours, setHours] = useState(3);

  const car = fleet.find((v) => v.id === selectedCar) || fleet[0];
  const price = car.pricePerHour * hours;

  const message = encodeURIComponent(
    `Здравствуйте! Хочу рассчитать стоимость аренды:\nАвтомобиль: ${car.name}\nКоличество часов: ${hours}\nПримерная стоимость: ${price.toLocaleString("ru")} ₸\n\nПожалуйста, уточните детали.`
  );

  return (
    <section className="section-padding" style={{ background: "#080808" }}>
      <div className="container-custom">
        <SectionTitle
          label="Калькулятор"
          title="Рассчитайте стоимость поездки"
          subtitle="Выберите автомобиль и время — мы покажем примерную стоимость. Точная цена — после уточнения деталей."
          center
        />

        <div
          className="max-w-3xl mx-auto p-8 rounded-2xl"
          style={{
            background: "#111111",
            border: "1px solid #1a1a1a",
          }}
        >
          {/* Car selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-white mb-3">
              Выберите автомобиль
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {fleet.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedCar(vehicle.id)}
                  className="p-3 rounded-xl text-left transition-all duration-200"
                  style={{
                    background: selectedCar === vehicle.id ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${selectedCar === vehicle.id ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  <div
                    className="text-xs font-semibold mb-0.5"
                    style={{ color: selectedCar === vehicle.id ? "#c9a84c" : "#ffffff" }}
                  >
                    {vehicle.name}
                  </div>
                  <div className="text-xs" style={{ color: "#737373" }}>
                    {vehicle.passengers} пасс.
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Hours selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-white mb-3">
              Количество часов: <span style={{ color: "#c9a84c" }}>{hours} ч</span>
            </label>
            <input
              type="range"
              min={3}
              max={12}
              step={1}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #c9a84c 0%, #c9a84c ${((hours - 3) / 9) * 100}%, #2a2a2a ${((hours - 3) / 9) * 100}%, #2a2a2a 100%)`,
                outline: "none",
              }}
            />
            <div className="flex justify-between text-xs mt-2" style={{ color: "#525252" }}>
              <span>3 часа</span>
              <span>6 часов</span>
              <span>9 часов</span>
              <span>12 часов</span>
            </div>
          </div>

          {/* Price display */}
          <div
            className="p-6 rounded-xl mb-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div>
              <div className="text-sm mb-1" style={{ color: "#a3a3a3" }}>
                {car.name} · {hours} часов
              </div>
              <div
                className="text-4xl font-black"
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #e2b96f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {price.toLocaleString("ru")} ₸
              </div>
              <div className="text-xs mt-1" style={{ color: "#737373" }}>
                Примерная стоимость · {car.pricePerHour.toLocaleString("ru")} ₸/час
              </div>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-xs mb-1" style={{ color: "#737373" }}>На целый день</div>
              <div className="text-2xl font-bold text-white">
                {car.priceHalfDay.toLocaleString("ru")} ₸
              </div>
              <div className="text-xs" style={{ color: "#525252" }}>12 часов (полный день)</div>
            </div>
          </div>

          <a
            href={`${COMPANY.whatsappUrl}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
            style={{ fontSize: "1rem", padding: "1rem", justifyContent: "center" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Забронировать за {price.toLocaleString("ru")} ₸
          </a>
          <p className="text-xs text-center mt-3" style={{ color: "#525252" }}>
            * Цена предварительная. Точная стоимость зависит от маршрута и условий.
          </p>
        </div>
      </div>
    </section>
  );
}
