"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  {
    value: "11+",
    label: "Лет на рынке",
    desc: "Основана в 2013 году. Многолетний опыт VIP-транспорта в Алматы.",
  },
  {
    value: "2000+",
    label: "Довольных клиентов",
    desc: "Посольства, компании, корпорации и частные клиенты доверяют нам.",
  },
  {
    value: "7",
    label: "Премиум автомобилей",
    desc: "Mercedes, Lexus, Cadillac. Флот 2018–2024 годов выпуска.",
  },
  {
    value: "24/7",
    label: "Режим работы",
    desc: "Принимаем заказы в любое время. Доступны в праздники и выходные.",
  },
];

export function StatsSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="section-padding" style={{ background: "#080808" }}>
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)", borderRadius: "1rem", overflow: "hidden" }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={shouldReduce ? false : { opacity: 0 }}
              whileInView={shouldReduce ? {} : { opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 lg:p-10"
              style={{ background: "#080808" }}
            >
              <div
                className="text-3xl lg:text-4xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #e2b96f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.value}
              </div>
              <div className="font-semibold text-white text-sm mb-1">{stat.label}</div>
              <p className="text-xs leading-relaxed hidden lg:block" style={{ color: "#525252" }}>
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
