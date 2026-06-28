"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/utils";

const navLinks = [
  { label: "Главная", href: "/" },
  {
    label: "Автопарк",
    href: "/fleet",
    children: [
      { label: "Mercedes S-Class", href: "/fleet/mercedes-s-class" },
      { label: "Mercedes Maybach", href: "/fleet/mercedes-maybach" },
      { label: "Mercedes V-Class", href: "/fleet/mercedes-v-class" },
      { label: "Mercedes Sprinter", href: "/fleet/mercedes-sprinter" },
      { label: "Cadillac Escalade", href: "/fleet/cadillac-escalade" },
      { label: "Toyota Land Cruiser", href: "/fleet/toyota-land-cruiser" },
      { label: "Lexus LX", href: "/fleet/lexus-lx" },
    ],
  },
  {
    label: "Услуги",
    href: "/services",
    children: [
      { label: "Трансфер из аэропорта", href: "/services/airport-transfer" },
      { label: "VIP-трансфер", href: "/services/vip-transfer" },
      { label: "Авто для бизнеса", href: "/services/business" },
      { label: "Автомобиль на свадьбу", href: "/services/wedding" },
      { label: "Авто на мероприятия", href: "/services/events" },
      { label: "Авто для делегаций", href: "/services/delegations" },
      { label: "Иностранным гостям", href: "/services/foreign-guests" },
      { label: "Почасовая аренда", href: "/services/hourly" },
      { label: "Долгосрочная аренда", href: "/services/long-term" },
    ],
  },
  { label: "О компании", href: "/about" },
  { label: "Отзывы", href: "/reviews" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/contacts" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10,10,10,0.95)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18" style={{ height: "72px" }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Bek Auto — главная">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm"
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #e2b96f 100%)",
                  color: "#0a0a0a",
                  letterSpacing: "-0.02em",
                }}
              >
                BA
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-base tracking-tight">Bek Auto</div>
                <div className="text-xs" style={{ color: "#c9a84c", letterSpacing: "0.08em" }}>
                  АЛМАТЫ
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef} aria-label="Основная навигация">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
                      style={{ color: openDropdown === link.label ? "#c9a84c" : "#d4d4d4" }}
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{
                          transform: openDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          opacity: 0.6,
                        }}
                      >
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div
                        className="absolute top-full left-0 mt-1 py-2 rounded-xl shadow-2xl min-w-52"
                        style={{
                          background: "rgba(17,17,17,0.98)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          backdropFilter: "blur(20px)",
                        }}
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm transition-colors duration-150"
                            style={{ color: "#a3a3a3" }}
                            onMouseEnter={(e) => {
                              (e.target as HTMLAnchorElement).style.color = "#c9a84c";
                              (e.target as HTMLAnchorElement).style.background = "rgba(201,168,76,0.08)";
                            }}
                            onMouseLeave={(e) => {
                              (e.target as HTMLAnchorElement).style.color = "#a3a3a3";
                              (e.target as HTMLAnchorElement).style.background = "transparent";
                            }}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
                    style={{ color: "#d4d4d4" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#c9a84c")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#d4d4d4")}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={COMPANY.callUrl}
                className="text-sm font-semibold transition-colors duration-200"
                style={{ color: "#c9a84c" }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#e2b96f")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#c9a84c")}
              >
                {COMPANY.phone}
              </a>
              <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
                Заказать
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileOpen}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block h-0.5 w-6 rounded-full transition-all duration-300"
                  style={{
                    background: "#ffffff",
                    transform:
                      mobileOpen
                        ? i === 0 ? "rotate(45deg) translateY(8px)" : i === 1 ? "opacity-0 scale-x-0" : "rotate(-45deg) translateY(-8px)"
                        : "none",
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-opacity duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.8)" }}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-80 max-w-full overflow-y-auto"
          style={{
            background: "#0f0f0f",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="p-6 pt-20 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <div
                      className="px-4 py-3 text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "#c9a84c" }}
                    >
                      {link.label}
                    </div>
                    <div className="ml-4 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm rounded-lg transition-colors duration-150"
                          style={{ color: "#a3a3a3" }}
                          onClick={() => setMobileOpen(false)}
                          onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#ffffff")}
                          onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#a3a3a3")}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150"
                    style={{ color: "#d4d4d4" }}
                    onClick={() => setMobileOpen(false)}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#c9a84c")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#d4d4d4")}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a href={COMPANY.callUrl} className="btn-outline w-full text-center" style={{ justifyContent: "center" }}>
                Позвонить
              </a>
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
                style={{ justifyContent: "center" }}
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
