interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionTitle({ label, title, subtitle, center = false, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`} style={{ maxWidth: center ? "720px" : "680px", margin: center ? "0 auto 3rem" : "0 0 3rem" }}>
      {label && (
        <div className="flex items-center gap-3 mb-4" style={{ justifyContent: center ? "center" : "flex-start" }}>
          <div className="gold-divider" style={{ width: "32px", flexShrink: 0 }} />
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#c9a84c", letterSpacing: "0.12em" }}
          >
            {label}
          </span>
          <div className="gold-divider" style={{ width: "32px", flexShrink: 0 }} />
        </div>
      )}
      <h2
        className="font-bold leading-tight text-balance"
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          color: light ? "#ffffff" : "#ffffff",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 leading-relaxed"
          style={{
            color: "#737373",
            fontSize: "1rem",
            lineHeight: "1.7",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
