/**
 * EducationSection — Deep Navy Command Center theme
 * Education history with institution, degree, graduation date, and highlights
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    id: "edu1",
    degree: "Bachelor of Science in Information Systems",
    institution: "Singapore Management University",
    graduationDate: "Expected 2030",
    description:
      "Focus on cybersecurity, network engineering, and systems administration. Relevant coursework includes Network Security, Digital Forensics, and System Administration.",
    highlights: ["GPA: 3.8/4.0", "Dean's List", "Cybersecurity Club President"],
  },
  {
    id: "edu2",
    degree: "Diploma in CyberSecurity & Digital Forensics",
    institution: "Temasek Polytechnic",
    graduationDate: "Graduated 2024",
    description:
      "Awards: Director's List 2021",
    highlights: ["Cisco Networking","System Administration","Network Administration","Linux System Administration", "Web Development","Computer Forensics","Malware Analysis","Digital Forensics","Network Security","Mobile Forensics","CDFSIG ISACA Honorary Secretary"],
  },
  {
    id: "edu3",
    degree: "Higher Nitec in IT Systems & Networks With Merit",
    institution: "Institute of Technical Education",
    graduationDate: "Graduated 2021",
    description:
      "Awards: Director's List 2019 & 2020",
    highlights: ["Cisco Networking","System Administration","Network Administration","Linux System Administration"],
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
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
          className="mb-16"
        >
          <span className="section-label inline-flex items-center gap-2 mb-4">
            <span className="inline-block w-8 h-px" style={{ background: "#00d4ff" }} />
            Education
          </span>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#e8f4f8",
              letterSpacing: "-0.02em",
            }}
          >
            Academic Background
          </h2>
        </motion.div>

        {/* Education items */}
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-lg"
              style={{
                background: "rgba(26, 45, 66, 0.5)",
                border: "1px solid rgba(0,212,255,0.15)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.3)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.15)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3
                    className="font-display font-semibold mb-1"
                    style={{ fontSize: "1.1rem", color: "#e8f4f8" }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.8rem",
                      color: "#00d4ff",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {edu.institution}
                  </p>
                </div>
                <span
                  className="text-xs mt-3 md:mt-0 md:text-right"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#8ba8c0",
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {edu.graduationDate}
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
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-2.5 py-1 text-xs"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#f0a500",
                      border: "1px solid rgba(240,165,0,0.25)",
                      borderRadius: "3px",
                      background: "rgba(240,165,0,0.06)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {highlight}
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
