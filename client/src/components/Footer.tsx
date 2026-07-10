/**
 * Footer — Deep Navy Command Center theme
 */
export default function Footer() {
  return (
    <footer
      className="py-8 relative"
      style={{
        background: "#0a1520",
        borderTop: "1px solid rgba(0,212,255,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/manus-storage/logo_31cb510e.png"
            alt="Logo"
            className="w-6 h-6 object-contain"
            style={{ filter: "drop-shadow(0 0 4px rgba(0,212,255,0.4))" }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#8ba8c0",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            IT Portfolio
          </span>
        </div>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "#4a6a85",
            letterSpacing: "0.08em",
          }}
        >
          Built with precision · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          {["About", "Skills", "Certificates", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "#4a6a85",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.15s ease-out",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#00d4ff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#4a6a85";
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
