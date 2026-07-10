# IT Portfolio — Design Ideas

## Three Approaches Considered

### 1. Terminal Noir
Monochrome hacker aesthetic with green-on-dark terminal motifs, monospace fonts, and scanline textures.
Probability: 0.04

### 2. Deep Navy Command Center
A sophisticated dark navy palette with electric cyan accents, clean geometric layouts, and a military/ops-room feel that communicates authority and precision.
Probability: 0.07

### 3. Slate Architect
A refined dark slate theme with amber/gold accents, editorial typography, and generous whitespace — feels like a premium design portfolio but for IT.
Probability: 0.03

---

## Chosen Approach: Deep Navy Command Center (Probability: 0.07)

### Design Movement
Cyberpunk-Adjacent Minimalism — the visual language of network operations centers and security dashboards, stripped of clutter and elevated with editorial restraint.

### Core Principles
1. **Precision over decoration** — every element earns its place; no gratuitous ornamentation
2. **Depth through layering** — dark backgrounds with subtle card elevation, glow effects, and translucent overlays
3. **Structured asymmetry** — left-anchored layouts, off-center compositions, sidebar-style navigation
4. **Data-forward typography** — numbers, labels, and tags are treated as design elements

### Color Philosophy
- **Background**: Deep navy `#0d1b2a` — dark but not black, retains warmth and depth
- **Surface**: Slightly lighter navy `#1a2d42` for cards and sections
- **Accent**: Electric cyan `#00d4ff` — the signature brand color, used sparingly for highlights, borders, and CTAs
- **Secondary accent**: Soft amber `#f0a500` for certificate badges and special callouts
- **Text**: Off-white `#e8f4f8` for primary, muted slate-blue for secondary
- **Emotional intent**: Conveys competence, calm authority, and technical mastery

### Layout Paradigm
Left-anchored vertical navigation with full-width scrollable sections. Hero uses a split layout (text left, visual right). Skills section uses a horizontal tag-cluster layout grouped by category. Certificates use a card grid with subtle glow borders.

### Signature Elements
1. **Cyan glow borders** — thin 1px borders with a soft cyan box-shadow on cards and active states
2. **Monospace data labels** — category tags, skill names, and section labels use a monospace font for a technical feel
3. **Diagonal section dividers** — subtle angled transitions between sections to break the grid monotony

### Interaction Philosophy
Interactions should feel precise and deliberate — like operating a well-designed terminal. Hover states reveal information; clicks feel immediate. No bouncy or playful animations — smooth, controlled ease-outs only.

### Animation
- Section entrance: fade-up with 40px translate, 400ms ease-out, staggered 60ms per item
- Card hover: subtle translateY(-4px) + glow intensity increase, 200ms ease-out
- Nav link hover: cyan underline slides in from left, 150ms ease-out
- Skill tags: scale(1.03) on hover, 120ms
- No looping animations except a subtle cursor blink in the hero tagline

### Typography System
- **Display/Headings**: `Space Grotesk` — geometric, modern, slightly technical
- **Body**: `Inter` used sparingly only for body paragraphs (acceptable here as secondary)
- **Monospace/Labels**: `JetBrains Mono` — for skill tags, section labels, code-like elements
- Hierarchy: 72px hero name → 48px section titles → 24px card titles → 16px body → 12px labels

### Brand Essence
**"The engineer who secures the stack."** — For recruiters and hiring managers who need a cybersecurity-fluent IT professional. Different because it communicates both depth (forensics, malware) and breadth (networking, sysadmin, dev).
Personality: **Precise. Authoritative. Curious.**

### Brand Voice
Headlines and CTAs sound direct and confident — no filler phrases.
- Example headline: *"I build systems. I break threats."*
- Example CTA: *"View my work"* (not "Get started" or "Learn more")
- Ban list: "Welcome to my portfolio", "Hello, I'm a passionate developer", "Get started today"

### Wordmark & Logo
A stylised shield icon with a circuit-trace cutout inside — rendered in cyan on transparent background. Used in nav and as favicon.

### Signature Brand Color
Electric Cyan `#00d4ff` — unmistakably this portfolio's color.

## Style Decisions
- Deep navy background (#0d1b2a) is the base — not pure black
- Cyan (#00d4ff) is the ONLY accent used for interactive elements and highlights
- Amber (#f0a500) reserved exclusively for certificate badges
- All section labels use JetBrains Mono in uppercase with letter-spacing
- Cards use a 1px cyan-tinted border with a very subtle glow on hover
- Skills are presented as capability cluster tags, NOT percentage bars
- Projects section is reframed as "Active Case Files" with case IDs and status indicators
- Portfolio must never ship with placeholder identity; hero and contact use real personal details
- Navigation is a top rail with left-anchored logo/wordmark; strong left-side identity presence
