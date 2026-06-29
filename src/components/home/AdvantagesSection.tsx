"use client";

import { motion, useReducedMotion } from "framer-motion";

const advantages = [
  {
    title: "11+ лет опыта",
    desc: "С 2013 года обслуживаем VIP-клиентов в Алматы. За это время — ни одной жалобы на качество сервиса.",
    accent: true,
  },
  {
    title: "Профессиональные водители",
    desc: "Водители в костюмах, знающие город. Проходят ежегодную аттестацию и проверку службой безопасности.",
    glass: true,
  },
  {
    title: "Пунктуальность",
    desc: "Опоздание водителя — нонсенс для нас. Подача автомобиля точно в указанное время.",
  },
  {
    title: "Конфиденциальность",
    desc: "NDA с каждым водителем. Полная конфиденциальность маршрутов и переговоров.",
  },
  {
    title: "Встреча с табличкой",
    desc: "Водитель встречает в аэропорту с именной табличкой и помогает с багажом.",
  },
  {
    title: "Вода и Wi-Fi",
    desc: "На борту: охлаждённая вода, зарядные устройства USB-A/C и мобильный интернет.",
  },
  {
    title: "Страхование",
    desc: "Все автомобили застрахованы по КАСКО и ОСАГО. Пассажиры застрахованы от несчастных случаев.",
  },
  {
    title: "Помощь с багажом",
    desc: "Водитель выходит навстречу и помогает перенести вещи. Удобная посадка гарантирована.",
  },
];

function AdvantageTile({
  adv,
  index,
  shouldReduce,
}: {
  adv: (typeof advantages)[0];
  index: number;
  shouldReduce: boolean | null;
}) {
  const bg = adv.accent
    ? { background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)" }
    : adv.glass
    ? { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }
    : { background: "#111111", border: "1px solid #1a1a1a" };

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 rounded-2xl h-full"
      style={bg}
    >
      {adv.accent && (
        <div
          className="font-black mb-4 leading-none"
          style={{
            fontSize: "clamp(4rem, 8vw, 6.5rem)",
            background: "linear-gradient(135deg, #c9a84c 0%, #e2b96f 60%, #c9a84c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.04em",
          }}
        >
          11+
        </div>
      )}
      <h3
        className="font-semibold text-white mb-2"
        style={{ fontSize: adv.accent ? "1.1rem" : "0.9375rem" }}
      >
        {adv.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
        {adv.desc}
      </p>
    </motion.div>
  );
}

export function AdvantagesSection() {
  const shouldReduce = useReducedMotion();

  const [a0, a1, ...rest] = advantages;
  const row2 = rest.slice(0, 3);
  const row3 = rest.slice(3, 6);

  return (
    <section className="section-padding" style={{ background: "#0a0a0a" }}>
      <div className="container-custom">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <h2
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", letterSpacing: "-0.025em" }}
            >
              Стандарты,<br />которыми мы гордимся
            </h2>
          </div>
          <div>
            <p style={{ color: "#737373", lineHeight: "1.7" }}>
              Каждая деталь нашей работы — результат 11 лет совершенствования сервиса мирового уровня.
            </p>
          </div>
        </div>

        {/* Bento grid: row1 = 2/3 + 1/3, row2 = 3 equal, row3 = 3 equal */}
        <div className="grid grid-cols-1 gap-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <AdvantageTile adv={a0} index={0} shouldReduce={shouldReduce} />
            </div>
            <div>
              <AdvantageTile adv={a1} index={1} shouldReduce={shouldReduce} />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {row2.map((adv, i) => (
              <AdvantageTile key={adv.title} adv={adv} index={i + 2} shouldReduce={shouldReduce} />
            ))}
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {row3.map((adv, i) => (
              <AdvantageTile key={adv.title} adv={adv} index={i + 5} shouldReduce={shouldReduce} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
