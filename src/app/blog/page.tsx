import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Блог — Аренда авто с водителем в Алматы | Советы и гиды | Bek Auto",
  description:
    "Блог Bek Auto: советы по аренде авто, VIP-трансферу, выбору автомобиля для мероприятий, обзоры премиальных авто и путеводители по Алматы.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

const categories = [
  {
    name: "VIP-трансфер и аренда авто",
    color: "#c9a84c",
    articles: [
      { slug: "kak-zakazat-vip-transfer-almaty", title: "Как заказать VIP-трансфер в Алматы: пошаговое руководство" },
      { slug: "chto-vhodit-v-stoimost-arendy-avto-s-voditelem", title: "Что входит в стоимость аренды авто с водителем" },
      { slug: "raznitsa-mezhdu-taksi-i-vip-transferom", title: "В чём разница между такси и VIP-трансфером" },
      { slug: "kak-vibrat-avto-dlya-delovoy-vstrechi", title: "Как выбрать автомобиль для деловой встречи в Алматы" },
      { slug: "pochasovaya-arenda-avto-almaty", title: "Почасовая аренда авто в Алматы: всё что нужно знать" },
      { slug: "dolgosrochnaya-arenda-avto-dlya-ekspata", title: "Долгосрочная аренда авто с водителем для экспата в Алматы" },
      { slug: "korporativnyy-transport-almaty", title: "Корпоративный транспорт в Алматы: как организовать" },
      { slug: "vip-transfer-s-detmi-almaty", title: "VIP-трансфер с детьми в Алматы: детское кресло и безопасность" },
      { slug: "arenda-avto-dlya-fotosessii-almaty", title: "Аренда авто для фотосессии в Алматы: какой автомобиль выбрать" },
      { slug: "mezhdunarodnyy-transfer-almaty-astana", title: "Межгородской трансфер Алматы — Астана на премиум-авто" },
    ],
  },
  {
    name: "Трансфер из аэропорта",
    color: "#e2b96f",
    articles: [
      { slug: "transfer-iz-aeroporta-almaty-tseny", title: "Трансфер из аэропорта Алматы 2024: цены и условия" },
      { slug: "kak-vstretyat-v-aeroportu-almaty", title: "Как встретить гостей в аэропорту Алматы с табличкой" },
      { slug: "transfer-aeroporta-dlya-inostrantsev", title: "Трансфер из аэропорта для иностранных гостей в Алматы" },
      { slug: "vip-zal-aeroport-almaty", title: "VIP-зал в аэропорту Алматы: обзор услуг и стоимость" },
      { slug: "nozhoy-zaderzhka-reysa-transfer", title: "Что делать если рейс задержан? Трансфер без доплат" },
      { slug: "delovoy-transfer-aeroport", title: "Деловой трансфер: встреча бизнес-партнёров в аэропорту" },
      { slug: "grupp-transfer-aeroporta-almaty", title: "Групповой трансфер из аэропорта Алматы: Mercedes V-Class и Sprinter" },
    ],
  },
  {
    name: "Свадьба и мероприятия",
    color: "#c9a84c",
    articles: [
      { slug: "svadebnyy-avtomobil-almaty-2024", title: "Свадебный автомобиль в Алматы 2024: лучшие варианты" },
      { slug: "svadba-na-maybahe-almaty", title: "Свадьба на Maybach в Алматы: как организовать незабываемый день" },
      { slug: "svadebnyy-kortezh-almaty", title: "Свадебный кортеж в Алматы: сколько машин нужно" },
      { slug: "transport-dlya-korporativa-almaty", title: "Транспорт для корпоратива в Алматы: от 10 до 500 гостей" },
      { slug: "avto-dlya-graduirovki-almaty", title: "Авто на выпускной в Алматы: Ferrari не нужен, Maybach лучше" },
      { slug: "transfer-konferentsiya-almaty", title: "Трансфер для участников конференции: организация и логистика" },
      { slug: "vip-transport-gala-uzhin", title: "VIP-транспорт для гала-ужина: как произвести впечатление" },
      { slug: "arenda-avto-dlya-semki", title: "Аренда авто для кино- и фотосъёмки в Алматы" },
    ],
  },
  {
    name: "Обзоры автомобилей",
    color: "#e2b96f",
    articles: [
      { slug: "mercedes-s-class-obzor-dlya-arendi", title: "Mercedes S-Class W223 для аренды: почему это лучший выбор" },
      { slug: "mercedes-maybach-obzor", title: "Mercedes Maybach S-Class: обзор роскошного седана для VIP" },
      { slug: "lexus-lx-600-ultra-luxury-obzor", title: "Lexus LX 600 Ultra Luxury: японское совершенство для VIP" },
      { slug: "cadillac-escalade-2024-obzor", title: "Cadillac Escalade 2024: американская роскошь в Алматы" },
      { slug: "mercedes-v-class-dlya-grup", title: "Mercedes V-Class для групповых поездок: обзор и преимущества" },
      { slug: "mercedes-sprinter-vip-obzor", title: "Mercedes Sprinter VIP: переговорная на колёсах" },
      { slug: "toyota-land-cruiser-300-obzor", title: "Toyota Land Cruiser 300: зачем брать его с водителем" },
      { slug: "sravnenie-s-class-vs-maybach", title: "Mercedes S-Class vs Mercedes Maybach: что выбрать для VIP" },
      { slug: "luchshie-avto-dlya-biznesa-almaty", title: "Лучшие автомобили для деловых встреч в Алматы 2024" },
    ],
  },
  {
    name: "Для иностранных гостей",
    color: "#c9a84c",
    articles: [
      { slug: "almaty-guide-for-expats", title: "Путеводитель по Алматы для экспатов: транспорт и жизнь" },
      { slug: "best-restaurants-almaty-vip", title: "Лучшие рестораны Алматы для деловых обедов и ужинов" },
      { slug: "what-to-see-almaty", title: "Что посмотреть в Алматы: топ-10 мест для иностранных гостей" },
      { slug: "business-etiquette-kazakhstan", title: "Деловой этикет в Казахстане: что нужно знать иностранцам" },
      { slug: "english-speaking-driver-almaty", title: "English-speaking driver in Almaty: where to find one" },
      { slug: "how-to-get-from-airport-almaty", title: "How to get from Almaty airport to city centre: guide" },
      { slug: "vip-hotels-almaty", title: "Топ-7 лучших отелей Алматы для VIP-клиентов" },
    ],
  },
  {
    name: "SEO и полезные советы",
    color: "#e2b96f",
    articles: [
      { slug: "kak-splanirovat-pereezd-almaty", title: "Как спланировать переезд в Алматы: транспортный аспект" },
      { slug: "arenda-avto-ili-taksi-chto-vybrat", title: "Аренда авто с водителем или такси: что выгоднее" },
      { slug: "konferentsialnost-v-transporte", title: "Конфиденциальность в VIP-транспорте: почему это важно" },
      { slug: "kak-organizovat-delegatsiyu-almaty", title: "Как организовать транспорт для делегации в Алматы" },
      { slug: "checklisy-dlya-organizatorov-meropriyatiy", title: "Чек-лист организатора мероприятий: транспорт" },
      { slug: "top-5-oshibok-pri-arende-avto", title: "5 главных ошибок при аренде авто с водителем в Алматы" },
      { slug: "transport-dlya-investorov-almaty", title: "Транспорт для инвесторов в Алматы: первое впечатление" },
      { slug: "arenda-avto-na-novyy-god-almaty", title: "Аренда авто с водителем на Новый год в Алматы" },
      { slug: "transport-svadba-zhenis-toi", title: "Транспорт на свадьбу Жеңіс той в Алматы: традиции и VIP" },
      { slug: "pocemu-vip-transfer-luchse-kaршering", title: "Почему VIP-трансфер лучше каршеринга для бизнеса" },
    ],
  },
  {
    name: "Корпоративные клиенты",
    color: "#c9a84c",
    articles: [
      { slug: "korporativnyy-dogovor-arenda-avto", title: "Корпоративный договор на аренду авто: что учесть" },
      { slug: "transport-dlya-posol-stva", title: "Транспорт для посольства: требования и стандарты" },
      { slug: "logistika-transport-konferentsiya", title: "Логистика транспорта для международной конференции" },
      { slug: "nds-zakryvayushchie-dokumenty-arenda", title: "НДС и закрывающие документы при аренде авто для бизнеса" },
      { slug: "skidki-korporativnym-klientam", title: "Скидки для корпоративных клиентов: как получить лучшую цену" },
      { slug: "transport-dlya-otela-almaty", title: "Транспортное обслуживание гостей отеля: партнёрство" },
      { slug: "personal-voditiel-almaty", title: "Персональный водитель в Алматы: месяц, квартал, год" },
      { slug: "arenda-flota-avto-dlya-kompanii", title: "Аренда флота автомобилей для компании в Алматы" },
    ],
  },
  {
    name: "Туризм и путешествия",
    color: "#e2b96f",
    articles: [
      { slug: "almaty-chimbulak-tour", title: "Тур Алматы — Чимбулак на премиум-авто: маршрут и цены" },
      { slug: "almaty-kolsay-tour", title: "Поездка на озёра Кольсай и Кайынды на комфортном авто" },
      { slug: "almaty-charyn-tour", title: "Тур на Чарынский каньон из Алматы с водителем" },
      { slug: "almaty-medeu-shymbulak", title: "Медеу и Шымбулак: как добраться с VIP-водителем" },
      { slug: "almaty-kok-tobe", title: "Кок-Тобе из Алматы: частная экскурсия с водителем" },
      { slug: "mezhgorodskie-tury-almaty-astana", title: "Межгородские туры: Алматы — Астана — Шымкент на авто" },
    ],
  },
];

const totalArticles = categories.reduce((sum, c) => sum + c.articles.length, 0);

export default function BlogPage() {
  return (
    <>
      <div className="pt-32 pb-16" style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#525252" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Главная</Link></li>
              <li>/</li>
              <li style={{ color: "#a3a3a3" }}>Блог</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-divider" style={{ width: "32px" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#c9a84c" }}>Блог и гиды</span>
          </div>
          <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em" }}>
            Полезные статьи об аренде авто
          </h1>
          <p style={{ color: "#a3a3a3" }}>{totalArticles} статей по аренде VIP-авто, трансферу и путешествиям в Алматы</p>
        </div>
      </div>

      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-custom">
          {categories.map((cat) => (
            <div key={cat.name} className="mb-14 last:mb-0">
              <h2
                className="text-lg font-bold mb-6 flex items-center gap-3"
                style={{ color: "#ffffff" }}
              >
                <div style={{ width: "20px", height: "1px", background: cat.color }} />
                {cat.name}
                <span className="text-xs font-normal ml-1" style={{ color: "#525252" }}>
                  {cat.articles.length} статей
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="blog-card p-5 rounded-xl group block"
                    style={{ background: "#111111", border: "1px solid #1a1a1a" }}
                  >
                    <h3
                      className="text-sm font-medium leading-snug transition-colors duration-200"
                      style={{ color: "#d4d4d4" }}
                    >
                      {article.title}
                    </h3>
                    <div
                      className="mt-3 flex items-center gap-1 text-xs font-medium"
                      style={{ color: "#525252" }}
                    >
                      Читать
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
