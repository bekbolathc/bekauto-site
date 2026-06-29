interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionTitle({ label, title, subtitle, center = false }: SectionTitleProps) {
  return (
    <div
      className={center ? "text-center" : ""}
      style={{
        maxWidth: center ? "680px" : "640px",
        margin: center ? "0 auto 3rem" : "0 0 3rem",
      }}
    >
      {label && (
        <div
          className="flex items-center gap-2 mb-3"
          style={{ justifyContent: center ? "center" : "flex-start" }}
        >
          <div
            style={{ width: "24px", height: "1px", background: "#c9a84c", flexShrink: 0 }}
          />
          <span
            className="text-xs font-semibold uppercase"
            style={{ color: "#c9a84c", letterSpacing: "0.1em" }}
          >
            {label}
          </span>
        </div>
      )}
      <h2
        className="font-bold leading-tight text-balance"
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          color: "#ffffff",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 leading-relaxed"
          style={{ color: "#737373", fontSize: "1rem", lineHeight: "1.7" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
