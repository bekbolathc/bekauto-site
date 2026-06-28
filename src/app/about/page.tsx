import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SITE_URL } from "@/lib/utils";
import { BookingForm } from "@/components/ui/BookingForm";

export const metadata: Metadata = {
  title: "О компании Bek Auto — 11 лет VIP-трансфера в Алматы",
  description:
    "О компании Bek Auto: 11 лет на рынке, 2000+ клиентов. Профессиональные водители, премиум автопарк. Посольства, компании, VIP-клиенты. Алматы, Казахстан.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const timeline = [
  { year: "2013", event: "Основание компании. Первые 2 автомобиля и первые корпоративные клиенты." },
  { year: "2015", event: "Расширение автопарка до 5 автомобилей. Первые контракты с посольствами." },
  { year: "2017", event: "Введение Mercedes Maybach в автопарк. Выход на сегмент ультра-люкс." },
  { year: "2019", event: "500-й клиент. Расширение до 7 автомобилей премиум-класса." },
  { year: "2021", event: "Обновление всего флота. Новые Lexus LX 600, Cadillac Escalade 2021." },
  { year: "2024", event: "2000+ довольных клиентов. Признание лучшим VIP-перевозчиком Алматы." },
];

const values = [
  { title: "Пунктуальность", desc: "Каждый автомобиль прибывает заблаговременно. Опоздание — это недопустимо для нас." },
  { title: "Конфиденциальность", desc: "NDA с каждым водителем. Информация о наших клиентах не разглашается никогда." },
  { title: "Профессионализм", desc: "Водители в костюмах, прошедшие специальную подготовку и проверку." },
  { title: "Качество", desc: "Регулярный технический контроль, идеальная чистота и комплектация каждого автомобиля." },
];

const partners = [
  "Посольства иностранных государств",
  "Международные корпорации",
  "Пятизвёздочные отели Алматы",
  "Event-агентства",
  "Свадебные агентства",
  "Туроператоры",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16" style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#525252" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Главная</Link></li>
              <li>/</li>
              <li style={{ color: "#a3a3a3" }}>О компании</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-divider" style={{ width: "32px" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#c9a84c" }}>О компании</span>
          </div>
          <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Bek Auto — 11 лет доверия
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#a3a3a3", maxWidth: "640px" }}>
            Мы — ведущая компания по аренде автомобилей представительского класса с водителем в Алматы.
            С 2013 года обслуживаем посольства, международные компании и VIP-клиентов.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Наша миссия</h2>
              <p className="leading-relaxed mb-6" style={{ color: "#a3a3a3" }}>
                Мы не просто перевозим людей из точки А в точку Б. Мы создаём атмосферу первого класса —
                где каждая деталь продумана, каждый момент ценен, а наш клиент может сосредоточиться
                на своих задачах, пока мы заботимся обо всём остальном.
              </p>
              <p className="leading-relaxed" style={{ color: "#a3a3a3" }}>
                <strong className="text-white">Bek Auto</strong> — это компания, которой доверяют послы,
                генеральные директора крупнейших корпораций, звёзды шоу-бизнеса и взыскательные частные
                клиенты. Наша репутация строилась годами — и мы защищаем её каждый день.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "11+", label: "Лет опыта" },
                { value: "2000+", label: "Клиентов" },
                { value: "7", label: "Авто в парке" },
                { value: "24/7", label: "Доступность" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl text-center" style={{ background: "#111111", border: "1px solid #1a1a1a" }}>
                  <div className="text-3xl font-black mb-1" style={{ background: "linear-gradient(135deg, #c9a84c, #e2b96f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: "#737373" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "#0a0a0a" }}>
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-white mb-10">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl" style={{ background: "#111111", border: "1px solid #1a1a1a" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#c9a84c" }} />
                  <h3 className="font-bold text-white">{v.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">История компании</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: "rgba(201,168,76,0.2)" }} />
            <div className="flex flex-col gap-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs relative z-10"
                    style={{ background: "linear-gradient(135deg, #c9a84c, #e2b96f)", color: "#0a0a0a" }}
                  >
                    {item.year}
                  </div>
                  <div className="pt-3">
                    <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding" style={{ background: "#0a0a0a" }}>
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Нам доверяют</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {partners.map((p) => (
              <div key={p} className="p-4 rounded-xl text-center text-sm" style={{ background: "#111111", border: "1px solid #1a1a1a", color: "#a3a3a3" }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-custom max-w-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Сотрудничество</h2>
            <p style={{ color: "#737373" }}>Свяжитесь с нами для обсуждения условий</p>
          </div>
          <div className="p-8 rounded-2xl" style={{ background: "#111111", border: "1px solid #1a1a1a" }}>
            <BookingForm />
          </div>
          <div className="text-center mt-6">
            <a href={COMPANY.callUrl} className="text-sm font-semibold" style={{ color: "#c9a84c" }}>
              Или позвоните: {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
