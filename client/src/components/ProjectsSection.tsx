/**
 * ProjectsSection — Deep Navy Command Center theme
 * Reframed as "Case Files" — active labs and documented security experiments
 * Design: authoritative, operational, technical — not empty/coming-soon
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { toast } from "sonner";

const projects = [
  {
    id: "p1",
    caseId: "CASE-001",
    status: "In Development",
    statusColor: "#00d4ff",
    title: "Network Intrusion Detection System",
    tags: ["Python", "Network Security", "Malware Detection"],
    description:
      "Custom IDS built with Python to monitor network traffic for anomalous patterns and known threat signatures. Implements signature-based and heuristic detection methods.",
    domain: "Threat Detection",
  },
  {
    id: "p2",
    caseId: "CASE-002",
    status: "Documenting",
    statusColor: "#f0a500",
    title: "Digital Forensics Investigation Lab",
    tags: ["Digital Forensics", "Linux", "Computer Forensics"],
    description:
      "Structured forensic investigation workflow for analysing compromised systems. Covers evidence acquisition, chain of custody, and artefact analysis using open-source tooling.",
    domain: "Forensics",
  },
  {
    id: "p3",
    caseId: "CASE-003",
    status: "In Development",
    statusColor: "#00d4ff",
    title: "Zero Trust Network Architecture",
    tags: ["Zero Trust", "Cisco", "Network Administration"],
    description:
      "Design and implementation of a Zero Trust network model for a simulated enterprise environment. Applies ZTCA principles to Cisco infrastructure with micro-segmentation and identity verification.",
    domain: "Architecture",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{ background: "#111e2e" }}
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
          className="mb-4"
        >
          <span className="section-label inline-flex items-center gap-2 mb-4">
            <span className="inline-block w-8 h-px" style={{ background: "#00d4ff" }} />
            Projects
          </span>
          <h2
            className="font-display font-bold mb-3"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8f4f8",
              letterSpacing: "-0.02em",
            }}
          >
            Active Case Files
          </h2>
          <p
            className="mb-12"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#8ba8c0",
              fontSize: "0.95rem",
            }}
          >
            Security experiments, infrastructure builds, and forensic investigations currently
            under development.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-lg flex flex-col cyan-glow-hover"
              style={{
                background: "rgba(26, 45, 66, 0.5)",
                border: "1px solid rgba(0,212,255,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Case ID + status */}
              <div className="flex items-center justify-between mb-5">
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#4a6a85",
                    letterSpacing: "0.12em",
                  }}
                >
                  {project.caseId}
                </span>
                <span
                  className="flex items-center gap-1.5 px-2 py-0.5 text-xs"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: project.statusColor,
                    border: `1px solid ${project.statusColor}40`,
                    borderRadius: "3px",
                    background: `${project.statusColor}0a`,
                    fontSize: "0.65rem",
                    letterSpacing: "0.06em",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: project.statusColor,
                      boxShadow: `0 0 4px ${project.statusColor}`,
                    }}
                  />
                  {project.status}
                </span>
              </div>

              {/* Domain tag */}
              <div className="mb-3">
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#8ba8c0",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {project.domain}
                </span>
              </div>

              <h3
                className="font-display font-semibold mb-3"
                style={{ fontSize: "1rem", color: "#e8f4f8", lineHeight: 1.3 }}
              >
                {project.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ fontFamily: "'Inter', sans-serif", color: "#8ba8c0" }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#00d4ff",
                      border: "1px solid rgba(0,212,255,0.2)",
                      borderRadius: "3px",
                      background: "rgba(0,212,255,0.04)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => toast("Full case file will be published soon.")}
                className="w-full py-2 text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#00d4ff",
                  border: "1px solid rgba(0,212,255,0.25)",
                  borderRadius: "4px",
                  background: "transparent",
                  letterSpacing: "0.03em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(0,212,255,0.07)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#00d4ff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(0,212,255,0.25)";
                }}
              >
                Open Case File
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

