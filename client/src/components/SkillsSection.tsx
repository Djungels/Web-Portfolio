/**
 * SkillsSection — Deep Navy Command Center theme
 * Capability cluster tag layout — no percentage bars
 * Design: precision over decoration, data-forward, operational modules
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillClusters = [
  {
    id: "security",
    number: "01",
    label: "Cybersecurity & Forensics",
    description: "Threat analysis, digital investigation, and defensive security operations.",
    skills: [
      "Network Security",
      "Malware Analysis",
      "Malware Detection",
      "Digital Forensics",
      "Computer Forensics",
      "Mobile Forensics",
    ],
    accent: "#00d4ff",
  },
  {
    id: "networking",
    number: "02",
    label: "Networking",
    description: "Enterprise network design, administration, and Cisco infrastructure.",
    skills: [
      "Network Administration",
      "Cisco Networking",
    ],
    accent: "#00d4ff",
  },
  {
    id: "systems",
    number: "03",
    label: "Systems Administration",
    description: "Linux and Windows server management, IT operations, and infrastructure support.",
    skills: [
      "Linux System Administration",
      "Windows Server",
      "System Administration",
      "IT Operations",
    ],
    accent: "#00d4ff",
  },
  {
    id: "dev",
    number: "04",
    label: "Development",
    description: "Scripting, automation, and web-based tooling for IT and security workflows.",
    skills: [
      "Python",
      "Web Development",
    ],
    accent: "#00d4ff",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-24 relative"
      style={{ background: "#111e2e" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: "url(/manus-storage/skills-bg_5f4e8d2a.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{ background: "rgba(17, 30, 46, 0.88)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
            Technical Skills
          </span>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8f4f8",
              letterSpacing: "-0.02em",
            }}
          >
            The Stack I Operate In
          </h2>
        </motion.div>

        {/* Skill clusters grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillClusters.map((cluster, ci) => (
            <motion.div
              key={cluster.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="p-6 rounded-lg cyan-glow-hover"
              style={{
                background: "rgba(26, 45, 66, 0.55)",
                border: "1px solid rgba(0,212,255,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Cluster header */}
              <div className="flex items-start gap-4 mb-5">
                <span
                  className="font-bold leading-none mt-0.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "1.6rem",
                    color: "rgba(0,212,255,0.18)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {cluster.number}
                </span>
                <div>
                  <h3
                    className="font-display font-semibold mb-1"
                    style={{ fontSize: "0.95rem", color: "#e8f4f8" }}
                  >
                    {cluster.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "#8ba8c0",
                      lineHeight: 1.5,
                    }}
                  >
                    {cluster.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="mb-5 h-px"
                style={{ background: "rgba(0,212,255,0.1)" }}
              />

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cluster.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs transition-all duration-150"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#00d4ff",
                      border: "1px solid rgba(0,212,255,0.22)",
                      borderRadius: "3px",
                      background: "rgba(0,212,255,0.05)",
                      letterSpacing: "0.04em",
                      fontSize: "0.7rem",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.background =
                        "rgba(0,212,255,0.12)";
                      (e.currentTarget as HTMLSpanElement).style.borderColor = "#00d4ff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.background =
                        "rgba(0,212,255,0.05)";
                      (e.currentTarget as HTMLSpanElement).style.borderColor =
                        "rgba(0,212,255,0.22)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
