"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { reviews } from "@/lib/data/reviews";
import { SectionTitle } from "@/components/ui/SectionTitle";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={i < rating ? "#c9a84c" : "rgba(201,168,76,0.2)"}
          stroke="none"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const featured = reviews.slice(0, 4);
  const shouldReduce = useReducedMotion();

  return (
    <section className="section-padding" style={{ background: "#0a0a0a" }}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            label="Отзывы клиентов"
            title="Что говорят о нас клиенты"
            subtitle="2000+ довольных клиентов за 11 лет."
          />
          <Link
            href="/reviews"
            className="btn-outline flex-shrink-0"
            style={{ alignSelf: "flex-start" }}
          >
            Все отзывы
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((review, i) => (
            <motion.div
              key={review.id}
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 lg:p-8 rounded-2xl"
              style={{ background: "#111111", border: "1px solid #1a1a1a" }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                    style={{
                      background: "linear-gradient(135deg, #c9a84c 0%, #e2b96f 100%)",
                      color: "#0a0a0a",
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{review.name}</div>
                    <div className="text-xs" style={{ color: "#737373" }}>
                      {review.role}
                      {review.company ? `, ${review.company}` : ""}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <StarRating rating={review.rating} />
                  <span className="text-xs" style={{ color: "#525252" }}>
                    {review.service}
                  </span>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6"
          style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}
        >
          <div className="text-center md:text-left">
            <div
              className="text-5xl font-black"
              style={{
                background: "linear-gradient(135deg, #c9a84c 0%, #e2b96f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              5.0
            </div>
            <div className="flex justify-center md:justify-start mt-1">
              <StarRating rating={5} />
            </div>
            <div className="text-sm mt-1" style={{ color: "#737373" }}>
              Средняя оценка
            </div>
          </div>
          <div
            className="w-px h-14 hidden md:block"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold text-white">2000+</div>
            <div className="text-sm mt-1" style={{ color: "#737373" }}>
              Довольных клиентов
            </div>
          </div>
          <div
            className="w-px h-14 hidden md:block"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm" style={{ color: "#a3a3a3" }}>
              Наши клиенты — посольства, корпорации, свадебные агентства, организаторы мероприятий и частные VIP-клиенты.
              Репутация, которую строили 11 лет.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
