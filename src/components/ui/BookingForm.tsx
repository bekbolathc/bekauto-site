"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { COMPANY } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z.string().min(10, "Укажите корректный номер"),
  service: z.string().optional(),
  date: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface BookingFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  preselectedService?: string;
}

export function BookingForm({
  title = "Оставить заявку",
  subtitle = "Ответим в течение 5 минут",
  compact = false,
  preselectedService,
}: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: preselectedService },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const msg = `Новая заявка с сайта!\nИмя: ${data.name}\nТелефон: ${data.phone}${data.service ? `\nУслуга: ${data.service}` : ""}${data.date ? `\nДата: ${data.date}` : ""}${data.message ? `\nСообщение: ${data.message}` : ""}`;
    const url = `${COMPANY.whatsappUrl}?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(url, "_blank");
    }, 600);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(201,168,76,0.15)", border: "2px solid #c9a84c" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Заявка отправлена!</h3>
        <p style={{ color: "#a3a3a3" }}>Мы свяжемся с вами в ближайшие 5 минут.</p>
      </div>
    );
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "0.5rem",
    color: "#ffffff",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <div>
      {!compact && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <p style={{ color: "#a3a3a3" }}>{subtitle}</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Ваше имя *"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
              onBlur={(e) => (e.target.style.borderColor = errors.name ? "#ef4444" : "rgba(255,255,255,0.1)")}
            />
            {errors.name && (
              <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Номер телефона *"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
              onBlur={(e) => (e.target.style.borderColor = errors.phone ? "#ef4444" : "rgba(255,255,255,0.1)")}
            />
            {errors.phone && (
              <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.phone.message}</p>
            )}
          </div>
        </div>

        {!compact && (
          <>
            <select
              {...register("service")}
              style={{ ...inputStyle, cursor: "pointer" }}
              onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            >
              <option value="" style={{ background: "#111" }}>Выберите услугу</option>
              <option value="Трансфер из аэропорта" style={{ background: "#111" }}>Трансфер из аэропорта</option>
              <option value="VIP-трансфер" style={{ background: "#111" }}>VIP-трансфер</option>
              <option value="Авто для бизнеса" style={{ background: "#111" }}>Авто для бизнеса</option>
              <option value="Свадьба" style={{ background: "#111" }}>Свадебный автомобиль</option>
              <option value="Мероприятие" style={{ background: "#111" }}>Авто на мероприятие</option>
              <option value="Почасовая аренда" style={{ background: "#111" }}>Почасовая аренда</option>
              <option value="Долгосрочная аренда" style={{ background: "#111" }}>Долгосрочная аренда</option>
            </select>
            <input
              {...register("date")}
              type="date"
              style={{ ...inputStyle, colorScheme: "dark" }}
              onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
            <textarea
              {...register("message")}
              placeholder="Комментарий (маршрут, пожелания...)"
              rows={3}
              style={{ ...inputStyle, resize: "none" }}
              onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full"
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          {loading ? (
            <>
              <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
              </svg>
              Отправка...
            </>
          ) : (
            <>
              Отправить заявку
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </>
          )}
        </button>

        <p className="text-xs text-center" style={{ color: "#525252" }}>
          Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных
        </p>
      </form>
    </div>
  );
}
