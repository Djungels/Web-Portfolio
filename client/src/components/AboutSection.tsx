/**
 * AboutSection — Deep Navy Command Center theme
 * Two-column layout: text left, visual right
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 relative"
      style={{ background: "#0d1b2a" }}
    >
      {/* Subtle top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <AnimatedSection>
            <span className="section-label inline-flex items-center gap-2 mb-4">
              <span className="inline-block w-8 h-px" style={{ background: "#00d4ff" }} />
              About Me
            </span>
            <h2
              className="font-display font-bold mb-6"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#e8f4f8",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Engineering Security.<br />
              <span style={{ color: "#00d4ff" }}>Mastering Systems.</span>
            </h2>
            <p
              className="mb-5 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", color: "#8ba8c0", fontSize: "1rem" }}
            >
              I am an IT student with a strong foundation in cybersecurity, network engineering,
              and systems administration. My academic journey has equipped me with hands-on
              experience across both offensive and defensive security disciplines — from
              malware analysis and digital forensics to Cisco networking and Linux
              system administration.
            </p>
            <p
              className="mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", color: "#8ba8c0", fontSize: "1rem" }}
            >
              I am driven by a curiosity to understand how systems work at a deep level,
              and a commitment to keeping them secure. Whether it is investigating a
              compromised endpoint or architecting a resilient network, I bring precision
              and methodical thinking to every challenge.
            </p>

            {/* Key info tags */}
            <div className="flex flex-wrap gap-3">
              {["Cybersecurity", "Digital Forensics", "Network Engineering", "Linux", "Python"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#00d4ff",
                      border: "1px solid rgba(0,212,255,0.25)",
                      borderRadius: "3px",
                      background: "rgba(0,212,255,0.05)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimatedSection>

          {/* Right: visual */}
          <AnimatedSection>
            <div
              className="relative rounded-lg overflow-hidden"
              style={{
                border: "1px solid rgba(0,212,255,0.2)",
                boxShadow: "0 0 40px rgba(0,212,255,0.1)",
              }}
            >
              <img
                src="/manus-storage/about-visual_f084f98b.jpg"
                alt="IT workspace visualization"
                className="w-full h-72 lg:h-96 object-cover"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(13,27,42,0.3) 0%, rgba(0,212,255,0.05) 100%)",
                }}
              />
              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-8 h-8"
                style={{
                  borderTop: "2px solid #00d4ff",
                  borderLeft: "2px solid #00d4ff",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8"
                style={{
                  borderBottom: "2px solid #00d4ff",
                  borderRight: "2px solid #00d4ff",
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
