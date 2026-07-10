/**
 * ContactSection — Deep Navy Command Center theme
 * Clean contact layout with social links
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { toast } from "sonner";

const contactLinks = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com",
    icon: "in",
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com",
    icon: "⌥",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
       >
            <span className="section-label inline-flex items-center gap-2 mb-4">
              <span className="inline-block w-8 h-px" style={{ background: "#00d4ff" }} />
              Contact
            </span>
            <h2
              className="font-display font-bold mb-5"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#e8f4f8",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Let's Build<br />
              <span style={{ color: "#00d4ff" }}>Something Secure.</span>
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#8ba8c0",
                fontSize: "1rem",
                maxWidth: "380px",
              }}
            >
              Open to internships, entry-level roles, and collaborative projects in
              cybersecurity, network engineering, and systems administration.
            </p>

            {/* Contact links */}
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg group transition-all duration-200"
                  style={{
                    background: "rgba(26, 45, 66, 0.4)",
                    border: "1px solid rgba(0,212,255,0.12)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(0,212,255,0.35)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(26, 45, 66, 0.7)";
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(0,212,255,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(26, 45, 66, 0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded text-sm font-bold flex-shrink-0"
                    style={{
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      color: "#00d4ff",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs mb-0.5"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#8ba8c0",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {link.label}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#e8f4f8", fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.value}
                    </p>
                  </div>
                  <span
                    className="ml-auto text-xs transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "#00d4ff" }}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: quick message form */}
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 rounded-lg"
            style={{
              background: "rgba(26, 45, 66, 0.4)",
              border: "1px solid rgba(0,212,255,0.15)",
            }}
          >
            <h3
              className="font-display font-semibold mb-6"
              style={{ fontSize: "1.1rem", color: "#e8f4f8" }}
            >
              Send a Message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast("Message received — this form is a placeholder. Connect via email or LinkedIn.");
              }}
              className="flex flex-col gap-4"
            >
              <div>
                <label
                  className="block text-xs mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#8ba8c0",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(13,27,42,0.6)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: "#e8f4f8",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#00d4ff";
                    (e.currentTarget as HTMLInputElement).style.boxShadow =
                      "0 0 0 2px rgba(0,212,255,0.1)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor =
                      "rgba(0,212,255,0.15)";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#8ba8c0",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(13,27,42,0.6)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: "#e8f4f8",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#00d4ff";
                    (e.currentTarget as HTMLInputElement).style.boxShadow =
                      "0 0 0 2px rgba(0,212,255,0.1)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor =
                      "rgba(0,212,255,0.15)";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#8ba8c0",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="What are you working on?"
                  className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "rgba(13,27,42,0.6)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: "#e8f4f8",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#00d4ff";
                    (e.currentTarget as HTMLTextAreaElement).style.boxShadow =
                      "0 0 0 2px rgba(0,212,255,0.1)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLTextAreaElement).style.borderColor =
                      "rgba(0,212,255,0.15)";
                    (e.currentTarget as HTMLTextAreaElement).style.boxShadow = "none";
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 font-semibold text-sm transition-all duration-200"
                style={{
                  background: "#00d4ff",
                  color: "#0d1b2a",
                  borderRadius: "4px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.03em",
                  boxShadow: "0 0 20px rgba(0,212,255,0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 35px rgba(0,212,255,0.45)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 20px rgba(0,212,255,0.25)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
