/**
 * HeroSection — Deep Navy Command Center theme
 * Split layout: text left, visual right. Cyan accent, JetBrains Mono labels.
 */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Cybersecurity Analyst",
  "Network Engineer",
  "Systems Administrator",
  "Digital Forensics Investigator",
  "IT Operations Specialist",
];

function TypingText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = texts[index];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), 35);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, index, texts]);

  return (
    <span style={{ color: "#00d4ff" }}>
      {displayed}
      <span
        className="inline-block w-0.5 h-5 ml-0.5 align-middle"
        style={{
          background: "#00d4ff",
          animation: "blink 1s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0d1b2a" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/manus-storage/hero-bg_f3e60558.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.35,
        }}
      />
      {/* Gradient overlay — ensures text contrast */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(13,27,42,0.98) 40%, rgba(13,27,42,0.6) 70%, rgba(13,27,42,0.3) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-0"
        style={{
          background: "linear-gradient(to bottom, transparent, #0d1b2a)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="section-label inline-flex items-center gap-2"
            >
              <span
                className="inline-block w-8 h-px"
                style={{ background: "#00d4ff" }}
              />
              IT Student Portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold leading-none mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#e8f4f8",
              letterSpacing: "-0.02em",
            }}
          >
            Ethan Koh
          </motion.h1>

          {/* Typing role */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "#8ba8c0",
            }}
          >
            <TypingText texts={roles} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mb-10 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              color: "#8ba8c0",
              maxWidth: "480px",
            }}
          >
            I build resilient systems and dismantle digital threats. Specialising in
            cybersecurity, network engineering, and systems administration.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-200"
              style={{
                background: "#00d4ff",
                color: "#0d1b2a",
                borderRadius: "4px",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "0.03em",
                boxShadow: "0 0 20px rgba(0,212,255,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 35px rgba(0,212,255,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 20px rgba(0,212,255,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-200"
              style={{
                background: "transparent",
                color: "#00d4ff",
                border: "1px solid rgba(0,212,255,0.4)",
                borderRadius: "4px",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "0.03em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#00d4ff";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(0,212,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(0,212,255,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { value: "14+", label: "Skills" },
              { value: "3", label: "Certifications" },
              { value: "4", label: "Specialisations" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="font-display font-bold"
                  style={{ fontSize: "2rem", color: "#00d4ff", lineHeight: 1 }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#8ba8c0",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            color: "#8ba8c0",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, #00d4ff, transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
