/**
 * CertificatesSection — Deep Navy Command Center theme
 * Card grid with amber accent for badges, cyan borders
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certificates = [
  {
    id: "ztca",
    title: "Zero Trust Certified Associate",
    abbr: "ZTCA",
    issuer: "Zero Trust Institute",
    description:
      "Validates expertise in Zero Trust architecture principles — the modern security model that eliminates implicit trust and continuously verifies every access request.",
    relevance: "Network Security · Identity & Access · Architecture",
    color: "#f0a500",
    icon: "🛡",
  },
  {
    id: "ai-ethics",
    title: "AI Ethics & Governance",
    abbr: "AI-EG",
    issuer: "Professional Certification Body",
    description:
      "Demonstrates understanding of ethical frameworks, governance models, and responsible AI deployment — critical for IT professionals working with AI-driven security tools.",
    relevance: "AI Governance · Risk Management · Policy",
    color: "#f0a500",
    icon: "⚖",
  },
  {
    id: "linux",
    title: "NDG Linux Unhatched",
    abbr: "NDG",
    issuer: "Cisco Networking Academy",
    description:
      "Foundational Linux certification covering command-line operations, file system navigation, and system administration basics — the bedrock of any IT infrastructure role.",
    relevance: "Linux · CLI · System Administration",
    color: "#f0a500",
    icon: "🐧",
  },
];

export default function CertificatesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="certificates"
      className="py-24 relative"
      style={{ background: "#0d1b2a" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label inline-flex items-center gap-2 mb-4">
            <span className="inline-block w-8 h-px" style={{ background: "#00d4ff" }} />
            Certifications
          </span>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8f4f8",
              letterSpacing: "-0.02em",
            }}
          >
            Verified Credentials
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-6 rounded-lg flex flex-col cyan-glow-hover"
              style={{
                background: "rgba(26, 45, 66, 0.5)",
                border: "1px solid rgba(0,212,255,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Badge */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded flex items-center justify-center text-xl"
                  style={{
                    background: "rgba(240, 165, 0, 0.1)",
                    border: "1px solid rgba(240,165,0,0.3)",
                  }}
                >
                  {cert.icon}
                </div>
                <span
                  className="px-2 py-1 text-xs font-bold"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#f0a500",
                    border: "1px solid rgba(240,165,0,0.35)",
                    borderRadius: "3px",
                    background: "rgba(240,165,0,0.07)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {cert.abbr}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display font-semibold mb-1"
                style={{ fontSize: "1rem", color: "#e8f4f8", lineHeight: 1.3 }}
              >
                {cert.title}
              </h3>
              <p
                className="text-xs mb-4"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#8ba8c0",
                  letterSpacing: "0.04em",
                }}
              >
                {cert.issuer}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ fontFamily: "'Inter', sans-serif", color: "#8ba8c0" }}
              >
                {cert.description}
              </p>

              {/* Relevance tags */}
              <div
                className="pt-4"
                style={{ borderTop: "1px solid rgba(0,212,255,0.1)" }}
              >
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#00d4ff",
                    letterSpacing: "0.04em",
                    opacity: 0.8,
                  }}
                >
                  {cert.relevance}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
