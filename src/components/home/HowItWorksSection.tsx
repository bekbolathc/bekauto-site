import Link from "next/link";
import { COMPANY } from "@/lib/utils";

const steps = [
  {
    title: "Оставьте заявку",
    desc: "Напишите в WhatsApp, позвоните или заполните форму на сайте. Укажите дату, время и маршрут.",
  },
  {
    title: "Подтверждение",
    desc: "Менеджер свяжется в течение 5 минут, уточнит детали и подберёт автомобиль.",
  },
  {
    title: "Подача автомобиля",
    desc: "Водитель прибывает заблаговременно. Без опозданий — гарантированно.",
  },
  {
    title: "Комфортная поездка",
    desc: "Наслаждайтесь поездкой. Вода, Wi-Fi, зарядка — всё включено.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding" style={{ background: "#080808" }}>
      <div className="container-custom">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <h2
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}
            >
              Как это работает
            </h2>
          </div>
          <div>
            <p style={{ color: "#737373", lineHeight: "1.7" }}>
              Заказать автомобиль с водителем — просто. Вся коммуникация через WhatsApp или звонок.
            </p>
          </div>
        </div>

        {/* Steps — 2x2 grid with left-border accent, no numbered circles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {steps.map((step) => (
            <div
              key={step.title}
              className="pl-6 py-2"
              style={{ borderLeft: "2px solid rgba(201,168,76,0.35)" }}
            >
              <h3
                className="font-semibold text-white mb-2"
                style={{ fontSize: "1rem" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "1rem 2rem" }}
          >
            Заказать через WhatsApp
          </a>
          <a
            href={COMPANY.callUrl}
            className="btn-outline"
            style={{ fontSize: "1rem", padding: "1rem 2rem" }}
          >
            Позвонить: {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
