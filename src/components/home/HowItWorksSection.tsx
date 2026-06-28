import Link from "next/link";
import { COMPANY } from "@/lib/utils";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Оставьте заявку",
    desc: "Напишите в WhatsApp, позвоните или заполните форму на сайте. Укажите дату, время и маршрут.",
  },
  {
    number: "02",
    title: "Подтверждение",
    desc: "Наш менеджер свяжется с вами в течение 5 минут, уточнит детали и подберёт автомобиль.",
  },
  {
    number: "03",
    title: "Подача автомобиля",
    desc: "Водитель прибывает в указанное место заблаговременно. Никаких опозданий.",
  },
  {
    number: "04",
    title: "Комфортная поездка",
    desc: "Наслаждайтесь поездкой. Вода, Wi-Fi, зарядка — всё для вашего комфорта.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding" style={{ background: "#080808" }}>
      <div className="container-custom">
        <SectionTitle
          label="Как мы работаем"
          title="4 простых шага до идеальной поездки"
          subtitle="Заказать автомобиль с водителем — просто. Вся коммуникация через WhatsApp или звонок."
          center
        />

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute top-10 left-0 right-0 h-px hidden lg:block"
            style={{
              background: "linear-gradient(90deg, transparent, #2a2a2a 20%, #2a2a2a 80%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {/* Number circle */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center relative"
                    style={{
                      background: "linear-gradient(135deg, #c9a84c 0%, #e2b96f 100%)",
                      boxShadow: "0 8px 32px rgba(201,168,76,0.25)",
                    }}
                  >
                    <span
                      className="text-xl font-black"
                      style={{ color: "#0a0a0a" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-white text-base mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </section>
  );
}
