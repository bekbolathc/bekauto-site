import type { Metadata } from "next";
import Link from "next/link";
import { fleet } from "@/lib/data/fleet";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Автопарк — Mercedes, Lexus, Cadillac с водителем в Алматы",
  description:
    "Весь автопарк Bek Auto: Mercedes S-Class, Maybach, V-Class, Sprinter, Cadillac Escalade, Toyota Land Cruiser, Lexus LX. Аренда с водителем в Алматы от 20 000 ₸/ч.",
  alternates: { canonical: `${SITE_URL}/fleet` },
};

const categories = [
  { key: "sedan", label: "Седаны" },
  { key: "suv", label: "Внедорожники" },
  { key: "minivan", label: "Минивэны" },
  { key: "minibus", label: "Минибусы" },
];

function categoryLabel(cat: string) {
  const map: Record<string, string> = { sedan: "Седан", suv: "Внедорожник", minivan: "Минивэн", minibus: "Минибус" };
  return map[cat] ?? cat;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Автопарк Bek Auto",
  url: `${SITE_URL}/fleet`,
  numberOfItems: fleet.length,
  itemListElement: fleet.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: v.name,
    url: `${SITE_URL}/fleet/${v.slug}`,
  })),
};

export default function FleetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div
        className="pt-32 pb-16"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #111111 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#525252" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Главная</Link></li>
              <li>/</li>
              <li style={{ color: "#a3a3a3" }}>Автопарк</li>
            </ol>
          </nav>
          <SectionTitle
            label="Автопарк"
            title="Премиум-автомобили с водителем"
            subtitle="Весь флот 2018–2024 года выпуска. Mercedes, Lexus, Cadillac, Toyota — выберите автомобиль под вашу задачу."
          />
        </div>
      </div>

      {/* Fleet by category */}
      <div style={{ background: "#0a0a0a" }} className="section-padding">
        <div className="container-custom">
          {categories.map((cat) => {
            const vehicles = fleet.filter((v) => v.category === cat.key);
            if (!vehicles.length) return null;
            return (
              <div key={cat.key} className="mb-16 last:mb-0">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="gold-divider" style={{ width: "24px" }} />
                  {cat.label}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vehicles.map((vehicle) => (
                    <Link
                      key={vehicle.id}
                      href={`/fleet/${vehicle.slug}`}
                      className="card-dark hover-lift group overflow-hidden rounded-2xl"
                    >
                      {/* Image placeholder */}
                      <div
                        className="relative overflow-hidden"
                        style={{ height: "200px", background: `linear-gradient(135deg, ${vehicle.color} 0%, #1a1a1a 100%)` }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0.15 }}>
                          <svg viewBox="0 0 200 70" fill="none" width="70%">
                            <path d="M20 54 L40 22 L80 16 L160 16 L185 22 L195 54 L20 54 Z" fill="#c9a84c"/>
                            <circle cx="55" cy="58" r="12" fill="#c9a84c"/>
                            <circle cx="155" cy="58" r="12" fill="#c9a84c"/>
                          </svg>
                        </div>
                        {vehicle.popular && (
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "#c9a84c", color: "#0a0a0a" }}>
                            ХИТ
                          </div>
                        )}
                        <div className="absolute bottom-0 inset-x-0 h-16" style={{ background: "linear-gradient(to top, rgba(17,17,17,0.9), transparent)" }} />
                      </div>

                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-white text-base">{vehicle.name}</h3>
                            <p className="text-xs mt-0.5" style={{ color: "#737373" }}>{vehicle.year}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-sm" style={{ color: "#c9a84c" }}>
                              от {vehicle.pricePerHour.toLocaleString("ru")} ₸/ч
                            </div>
                          </div>
                        </div>
                        <p className="text-xs leading-relaxed mb-4" style={{ color: "#737373" }}>
                          {vehicle.shortDesc}
                        </p>
                        <div className="flex items-center justify-between text-xs" style={{ color: "#525252" }}>
                          <span>{vehicle.passengers} пасс. · {vehicle.luggage} багажа</span>
                          <span className="flex items-center gap-1" style={{ color: "#c9a84c" }}>
                            Подробнее
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SEO text */}
      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-custom max-w-4xl">
          <h2 className="text-xl font-bold text-white mb-4">Аренда автомобилей представительского класса в Алматы</h2>
          <div className="text-sm leading-relaxed" style={{ color: "#737373" }}>
            <p className="mb-3">
              Bek Auto предлагает аренду автомобилей бизнес и представительского класса с водителем в Алматы.
              Весь наш автопарк — это автомобили 2018–2024 годов выпуска, прошедшие тщательный технический контроль
              и оснащённые всем необходимым для комфортной поездки.
            </p>
            <p>
              Выбирайте из 7 автомобилей: от элегантного Mercedes S-Class для деловых встреч до вместительного
              Mercedes Sprinter для корпоративных делегаций. Все автомобили доступны с профессиональным водителем,
              водой на борту, Wi-Fi и зарядными устройствами.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
