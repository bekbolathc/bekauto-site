import type { Metadata } from "next";
import Link from "next/link";
import { reviews } from "@/lib/data/reviews";
import { COMPANY, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Отзывы клиентов Bek Auto — 2000+ довольных клиентов в Алматы",
  description:
    "Реальные отзывы о Bek Auto. Посольства, корпорации, свадьбы, туристы. Рейтинг 5.0. 2000+ клиентов за 11 лет. VIP-трансфер в Алматы.",
  alternates: { canonical: `${SITE_URL}/reviews` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bek Auto",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "2000",
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
    author: { "@type": "Person", name: r.name },
    reviewBody: r.text,
  })),
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? "#c9a84c" : "rgba(201,168,76,0.2)"} stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="pt-32 pb-16" style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#525252" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Главная</Link></li>
              <li>/</li>
              <li style={{ color: "#a3a3a3" }}>Отзывы</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-divider" style={{ width: "32px" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#c9a84c" }}>Отзывы клиентов</span>
          </div>
          <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em" }}>
            2000+ довольных клиентов за 11 лет
          </h1>

          {/* Rating summary */}
          <div className="flex items-center gap-6 mt-6">
            <div>
              <div className="text-5xl font-black" style={{ background: "linear-gradient(135deg, #c9a84c, #e2b96f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>5.0</div>
              <Stars rating={5} />
              <div className="text-sm mt-1" style={{ color: "#737373" }}>2000+ отзывов</div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((review) => (
              <div key={review.id} className="p-6 lg:p-8 rounded-2xl" style={{ background: "#111111", border: "1px solid #1a1a1a" }}>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold"
                      style={{ background: "linear-gradient(135deg, #c9a84c, #e2b96f)", color: "#0a0a0a", fontSize: "1.125rem" }}
                    >
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{review.name}</div>
                      <div className="text-xs" style={{ color: "#737373" }}>
                        {review.role}{review.company ? `, ${review.company}` : ""}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Stars rating={review.rating} />
                    <span className="text-xs" style={{ color: "#525252" }}>{review.service}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div
              className="inline-block p-6 rounded-2xl"
              style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <p className="text-lg font-semibold text-white mb-3">Стали нашим клиентом?</p>
              <p className="text-sm mb-5" style={{ color: "#737373" }}>Поделитесь своим опытом — это помогает другим сделать правильный выбор</p>
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Оставить отзыв в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
