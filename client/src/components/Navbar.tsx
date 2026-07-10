/**
 * Navbar — Deep Navy Command Center theme
 * Fixed top nav with scroll-aware background, cyan accent, JetBrains Mono labels
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(13, 27, 42, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 212, 255, 0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative">
            <img
              src="/manus-storage/logo_31cb510e.png"
              alt="Logo"
              className="w-full h-full object-contain"
              style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,0.5))" }}
            />
          </div>
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00d4ff" }}
          >
            Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium group"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#8ba8c0",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.15s ease-out",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#00d4ff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#8ba8c0";
              }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px bg-cyan-400 transition-all duration-150 ease-out"
                style={{
                  width: "0%",
                  background: "#00d4ff",
                }}
              />
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: "#00d4ff",
              transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: "#00d4ff",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: "#00d4ff",
              transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: "rgba(13, 27, 42, 0.98)",
            borderBottom: "1px solid rgba(0, 212, 255, 0.15)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#8ba8c0",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
