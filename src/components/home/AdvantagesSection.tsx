"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";

const advantages = [
  {
    title: "11+ лет опыта",
    desc: "С 2013 года обслуживаем VIP-клиентов в Алматы. За это время — ни одной жалобы.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    title: "Профессиональные водители",
    desc: "Водители в костюмах, знающие город. Проходят ежегодную аттестацию и проверку службой безопасности.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    title: "Пунктуальность",
    desc: "Опоздание водителя — нонсенс для нас. Подача автомобиля точно в указанное время.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "Конфиденциальность",
    desc: "NDA с каждым водителем. Полная конфиденциальность маршрутов и переговоров.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: "Встреча с табличкой",
    desc: "Водитель встречает в аэропорту с именной табличкой и помогает с багажом.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 5.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
      </svg>
    ),
  },
  {
    title: "Вода и Wi-Fi",
    desc: "На борту всегда: охлаждённая вода, зарядные устройства USB-A/C, Wi-Fi и напитки.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
  },
  {
    title: "Страхование",
    desc: "Все автомобили застрахованы по КАСКО и ОСАГО. Пассажиры застрахованы от НС.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Помощь с багажом",
    desc: "Водитель выходит навстречу и помогает перенести вещи. Удобная посадка гарантирована.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
];

export function AdvantagesSection() {
  return (
    <section className="section-padding" style={{ background: "#0a0a0a" }}>
      <div className="container-custom">
        <SectionTitle
          label="Почему мы"
          title="Стандарты которыми мы гордимся"
          subtitle="Каждая деталь нашей работы — это результат 11 лет совершенствования сервиса мирового уровня."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className="p-6 rounded-2xl group transition-all duration-300"
              style={{
                background: "#111111",
                border: "1px solid #1a1a1a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
                e.currentTarget.style.background = "#141414";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1a1a1a";
                e.currentTarget.style.background = "#111111";
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(201,168,76,0.1)", color: "#c9a84c" }}
              >
                {adv.icon}
              </div>
              <h3 className="font-semibold text-white text-sm mb-2">{adv.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
