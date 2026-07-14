/**
 * ExperienceSection — Deep Navy Command Center theme
 * Work experience timeline with company, role, duration, and description
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: "exp1",
    role: "Command Control Information System Specialist",
    company: "MINDEF",
    duration: "May 2024 – May 2026",
    description:
      "Dynamic communications leader with extensive experience directing the setup, operation, and maintenance of controlled communication equipment for high-visibility Brigade and Division-level military exercises. Proactive in coordinating field teams to diagnose and rapidly troubleshoot critical technical issues, consistently upholding mission-critical network availability and operational readiness. Highly skilled in real-time monitoring and preventative maintenance of communication systems to guarantee secure, high-performance, and uninterrupted connectivity during field operations.",
    technologies: ["Windows Server", "Linux", "Network Administration", "Cisco Networking","Cloud Infrastructure","End-point Management"],
  },
  {
    id: "exp2",
    role: "Malware Analyst",
    company: "Temasek Polytechnic Malware Analysis Centre",
    duration: "Apr 2023 – Feb 2024",
    description:
      "Versatile cybersecurity professional with comprehensive experience across the full spectrum of security operations, having successfully executed rotational roles from Tier 1 and Tier 2 Analyst to Support Staff and Security Manager. Proven expertise in advanced malware analysis and threat eradication within a specialized operations center. Adept at leveraging enterprise-grade security platforms, specifically utilizing Palo Alto Networks’ Cortex XDR and CrowdStrike’s Falcon X Sandbox through strategic vendor partnerships to secure environments and manage incidents.",
    technologies: ["Digital Forensics", "System Administration","CyberSecurity","Malware Analysis"],
  },
 
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
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
            Experience
          </span>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8f4f8",
              letterSpacing: "-0.02em",
            }}
          >
            Work History
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #00d4ff, transparent)" }}
          />

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1 w-4 h-4 rounded-full"
                  style={{
                    background: "#00d4ff",
                    boxShadow: "0 0 12px rgba(0,212,255,0.5)",
                    transform: "translateX(-7px)",
                  }}
                />

                {/* Card */}
                <div
                  className="p-6 rounded-lg"
                  style={{
                    background: "rgba(26, 45, 66, 0.5)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3
                        className="font-display font-semibold"
                        style={{ fontSize: "1.1rem", color: "#e8f4f8" }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.8rem",
                          color: "#00d4ff",
                          letterSpacing: "0.04em",
                          marginTop: "2px",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-xs mt-2 md:mt-0"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#8ba8c0",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="mb-4 leading-relaxed"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#8ba8c0",
                      fontSize: "0.95rem",
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs"
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
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
