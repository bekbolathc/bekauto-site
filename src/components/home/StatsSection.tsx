const stats = [
  {
    value: "11+",
    label: "Лет на рынке",
    desc: "Основана в 2013 году. Многолетний опыт VIP-транспорта в Алматы.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    value: "2000+",
    label: "Довольных клиентов",
    desc: "Посольства, компании, корпорации и частные клиенты доверяют нам.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    value: "7",
    label: "Премиум автомобилей",
    desc: "Mercedes, Lexus, Cadillac. Флот 2018–2024 годов выпуска.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    value: "24/7",
    label: "Режим работы",
    desc: "Принимаем заказы в любое время. Доступны в праздники и выходные.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export function StatsSection() {
  return (
    <section className="section-padding" style={{ background: "#080808" }}>
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="card-dark p-6 lg:p-8 text-center group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  color: "#c9a84c",
                  transition: "background 0.3s ease",
                }}
              >
                {stat.icon}
              </div>
              <div
                className="text-3xl lg:text-4xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #e2b96f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="font-semibold text-white mb-2 text-sm">{stat.label}</div>
              <p className="text-xs leading-relaxed hidden lg:block" style={{ color: "#737373" }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
