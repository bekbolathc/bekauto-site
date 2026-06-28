import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ — Часто задаваемые вопросы | Bek Auto Алматы",
  description:
    "Ответы на часто задаваемые вопросы об аренде авто с водителем в Алматы. Цены, оплата, бронирование, условия, документы. Bek Auto.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

const faqs = [
  {
    category: "Бронирование",
    items: [
      { q: "Как забронировать автомобиль?", a: "Напишите нам в WhatsApp, позвоните или заполните форму на сайте. Мы подтверждаем заказ в течение 5–15 минут." },
      { q: "За сколько времени нужно бронировать?", a: "Рекомендуем бронировать за 2–24 часа. Для VIP-мероприятий и свадеб — за несколько дней. Принимаем срочные заказы." },
      { q: "Можно ли отменить заказ?", a: "Да, отмена возможна за 2+ часа без штрафа. При отмене менее чем за 1 час — возможен штраф 50% от стоимости заказа." },
      { q: "Нужна ли предоплата?", a: "Для большинства заказов предоплата не нужна. Для корпоративных и длительных аренд возможна предоплата 30%." },
    ],
  },
  {
    category: "Цены и оплата",
    items: [
      { q: "Какова минимальная стоимость поездки?", a: "Минимальный заказ — 3 часа для большинства автомобилей. Для трансфера из аэропорта — фиксированная цена." },
      { q: "Что входит в стоимость?", a: "Стоимость включает: водителя, топливо, воду и напитки, Wi-Fi, зарядные устройства. Ожидание на объектах включено в почасовую стоимость." },
      { q: "Как оплатить?", a: "Оплата наличными или безналичным переводом. Для корпоративных клиентов — счёт с закрывающими документами." },
      { q: "Есть ли скидки?", a: "Да! При аренде на неделю — скидка 10%, на месяц — до 25%. Для свадебных агентств — партнёрская программа 10–15%." },
    ],
  },
  {
    category: "Автопарк",
    items: [
      { q: "Какие автомобили доступны?", a: "Mercedes S-Class, Mercedes Maybach, Mercedes V-Class, Mercedes Sprinter, Cadillac Escalade, Toyota Land Cruiser 300, Lexus LX 600. Все 2018–2024 года." },
      { q: "Сколько пассажиров помещается?", a: "В зависимости от автомобиля: седаны — до 3 пассажиров, минивэн V-Class — до 7, Sprinter VIP — до 14." },
      { q: "Все ли автомобили чистые?", a: "Все автомобили проходят детейлинг после каждой поездки. Внутри всегда чисто и ухожено." },
    ],
  },
  {
    category: "Водители",
    items: [
      { q: "Ваши водители говорят по-английски?", a: "Большинство наших водителей владеют английским на разговорном уровне. Уточните при бронировании, мы подберём подходящего водителя." },
      { q: "Водители будут в форме?", a: "Да, все водители работают в деловых костюмах. Для особых мероприятий можем организовать дополнительную форму." },
      { q: "Конфиденциальны ли ваши водители?", a: "Абсолютно. С каждым водителем подписано NDA. Информация о поездках, маршрутах и переговорах не разглашается." },
    ],
  },
  {
    category: "Услуги",
    items: [
      { q: "Вы встречаете в аэропорту с табличкой?", a: "Да, встреча с именной табличкой включена в стоимость трансфера. Водитель ожидает в зоне прилёта." },
      { q: "Что если рейс задержан?", a: "Мы отслеживаем рейс в реальном времени и автоматически корректируем время подачи без дополнительной оплаты." },
      { q: "Работаете ли вы с корпоративными клиентами?", a: "Да, предоставляем полный пакет корпоративных документов: договор, счёт, акт, НДС. Есть персональный менеджер." },
      { q: "Работаете ли вне Алматы?", a: "Да, выезжаем за пределы Алматы. Доступны межгородские маршруты (Астана, Шымкент и другие города Казахстана)." },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="pt-32 pb-16" style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#525252" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Главная</Link></li>
              <li>/</li>
              <li style={{ color: "#a3a3a3" }}>FAQ</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-divider" style={{ width: "32px" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#c9a84c" }}>Вопросы и ответы</span>
          </div>
          <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em" }}>
            Часто задаваемые вопросы
          </h1>
          <p style={{ color: "#a3a3a3" }}>
            Не нашли ответа? Напишите нам в{" "}
            <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c" }}>WhatsApp</a>{" "}
            — ответим в течение 5 минут.
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-custom max-w-4xl">
          {faqs.map((cat) => (
            <div key={cat.category} className="mb-12">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <div className="gold-divider" style={{ width: "20px" }} />
                {cat.category}
              </h2>
              <div className="flex flex-col gap-4">
                {cat.items.map((item, i) => (
                  <div key={i} className="p-6 rounded-xl" style={{ background: "#111111", border: "1px solid #1a1a1a" }}>
                    <h3 className="font-semibold text-white mb-3 text-sm">{item.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ background: "#0a0a0a" }}>
        <div className="container-custom text-center">
          <h2 className="text-xl font-bold text-white mb-3">Остались вопросы?</h2>
          <p className="mb-6" style={{ color: "#737373" }}>Наши менеджеры готовы ответить прямо сейчас</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Написать в WhatsApp</a>
            <a href={COMPANY.callUrl} className="btn-outline">Позвонить: {COMPANY.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
