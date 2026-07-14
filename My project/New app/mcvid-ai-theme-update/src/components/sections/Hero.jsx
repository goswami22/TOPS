import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ImagePlus,
  Mic,
  ChevronDown,
  Wand2,
  Play,
  Clock,
  Timer,
  MonitorPlay,
  Film,
  Check,
  ArrowUpRight,
} from "lucide-react";

const STYLES = ["Cinema", "Anime", "Realistic", "YouTube", "Advertisement"];

const EXAMPLE_PROMPTS = [
  "Astronaut walking on Mars",
  "Luxury Car Commercial",
  "Cyberpunk City",
  "Drone Flyover",
];

const EASE = [0.16, 1, 0.3, 1];
const MAX_PROMPT_LENGTH = 1000;

// Staggered entrance: the left column's children reveal one after another
// instead of the whole block fading in as one flat unit.
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(STYLES[0]);
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const styleMenuRef = useRef(null);

  useEffect(() => {
    if (!isStyleOpen) return;

    const handleClickOutside = (e) => {
      if (styleMenuRef.current && !styleMenuRef.current.contains(e.target)) {
        setIsStyleOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsStyleOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isStyleOpen]);

  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:py-36 xl:py-40">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[var(--glow-violet)] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[var(--glow-cyan)] blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-16">
        {/* ============ LEFT COLUMN ============ */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.span
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] bg-[var(--accent-soft)] px-4 py-2 text-xs font-medium tracking-wide text-[var(--accent-2)]"
          >
            <Sparkles size={14} strokeWidth={2.25} />
            AI Video Generation, Reimagined
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-5xl xl:text-6xl"
          >
            Turn Ideas Into
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-cyan)] bg-clip-text text-transparent">
              Videos
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl md:mt-7"
          >
            Generate cinematic AI videos in seconds using AI.
          </motion.p>

          {/* Prompt textarea */}
          <motion.div
            variants={itemVariants}
            className="mt-10 rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_8px_30px_-12px_var(--shadow-color)] backdrop-blur-xl transition-colors duration-300 focus-within:border-[var(--border-hover)] focus-within:shadow-[0_0_0_4px_var(--accent-soft-strong)] md:mt-12 md:p-6"
          >
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value.slice(0, MAX_PROMPT_LENGTH))}
              placeholder="Describe the video you want..."
              rows={6}
              className="w-full resize-none bg-transparent text-base leading-relaxed text-[var(--text-primary)] placeholder:text-[var(--text-faint)] focus:outline-none [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--scrollbar-thumb)] [&::-webkit-scrollbar-track]:bg-transparent"
            />

            <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-[13px] font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)]"
                >
                  <ImagePlus size={15} strokeWidth={2} />
                  <span className="hidden sm:inline">Upload Image</span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-[13px] font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)]"
                >
                  <Mic size={15} strokeWidth={2} />
                  <span className="hidden sm:inline">Voice Input</span>
                </motion.button>

                {/* Style dropdown */}
                <div ref={styleMenuRef} className="relative">
                  <motion.button
                    type="button"
                    onClick={() => setIsStyleOpen((v) => !v)}
                    aria-haspopup="listbox"
                    aria-expanded={isStyleOpen}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-[13px] font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)]"
                  >
                    {selectedStyle}
                    <motion.span
                      animate={{ rotate: isStyleOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className="flex"
                    >
                      <ChevronDown size={14} strokeWidth={2} />
                    </motion.span>
                  </motion.button>

                  <motion.ul
                    role="listbox"
                    initial={false}
                    animate={
                      isStyleOpen
                        ? { opacity: 1, y: 0, pointerEvents: "auto" }
                        : { opacity: 0, y: 6, pointerEvents: "none" }
                    }
                    transition={{ duration: 0.2, ease: EASE }}
                    className="absolute bottom-[calc(100%+8px)] left-0 z-10 w-40 origin-bottom overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/95 p-1.5 shadow-[0_16px_40px_-12px_var(--shadow-color-strong)] backdrop-blur-xl"
                  >
                    {STYLES.map((style) => (
                      <li key={style}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={selectedStyle === style}
                          onClick={() => {
                            setSelectedStyle(style);
                            setIsStyleOpen(false);
                          }}
                          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-[var(--text-secondary)] transition-colors duration-150 hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                        >
                          {style}
                          {selectedStyle === style && (
                            <Check size={14} strokeWidth={2.5} className="text-[var(--accent-2)]" />
                          )}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </div>

              <span className="hidden text-xs text-[var(--text-faint)] sm:inline">
                {prompt.length}/{MAX_PROMPT_LENGTH}
              </span>
            </div>
          </motion.div>

          {/* Generate button */}
          <motion.button
            variants={itemVariants}
            type="button"
            whileHover={{ y: -3, boxShadow: "0 16px 40px var(--shadow-accent-strong)" }}
            whileTap={{ scale: 0.97, y: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] py-4 text-[15px] font-semibold text-white shadow-[0_8px_24px_var(--shadow-accent)] sm:w-auto sm:px-9"
          >
            <Wand2 size={18} strokeWidth={2.25} />
            Generate Video
          </motion.button>

          {/* Example prompt chips */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-2.5">
            {EXAMPLE_PROMPTS.map((example) => (
              <motion.button
                key={example}
                type="button"
                onClick={() => setPrompt(example)}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[13px] font-medium text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--border-accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)]"
              >
                {example}
                <ArrowUpRight
                  size={12}
                  strokeWidth={2.25}
                  className="text-[var(--text-faint)] transition-colors duration-200 group-hover:text-[var(--accent-2)]"
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* ============ RIGHT COLUMN ============ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="relative"
        >
          <PreviewCard />
        </motion.div>
      </div>
    </section>
  );
}

function PreviewCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="relative mx-auto max-w-lg lg:max-w-none"
    >
      {/* Gradient border wrapper. The inner card below is a fixed dark "device
          screen" mockup by design (like a product screenshot), so it keeps its
          own dark palette in both themes rather than following the page theme. */}
      <div className="rounded-[26px] bg-gradient-to-br from-[var(--accent)]/40 via-white/[0.06] to-[var(--accent-cyan)]/30 p-px shadow-[0_20px_60px_-20px_var(--shadow-accent)]">
        <div className="relative overflow-hidden rounded-[26px] border border-white/[0.06] bg-[#111827]/90 p-6 backdrop-blur-xl md:p-7">
          {/* Card header */}
          <div className="mb-5 flex items-center justify-between">
            <span className="text-[15px] font-medium text-slate-300">AI Video Preview</span>
            <span className="flex items-center gap-1.5 rounded-full border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 px-3 py-1.5 text-xs font-medium text-[#9D7CFF]">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[#9D7CFF]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
              Generating...
            </span>
          </div>

          {/* Fake video preview surface */}
          <div className="relative aspect-video overflow-hidden rounded-[20px] border border-white/[0.06] bg-gradient-to-br from-[#1a1030] via-[#161233] to-[#0B0F19]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,92,255,0.35),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(91,231,255,0.25),transparent_50%)]" />

            {/* abstract animated cinematic shapes, in place of a real render */}
            <motion.div
              className="absolute -left-6 bottom-2 h-32 w-32 rounded-full bg-[#7C5CFF]/25 blur-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-4 top-4 h-24 w-24 rounded-full bg-[#5BE7FF]/25 blur-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* subtle scanline grid, sells the "AI render" feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                type="button"
                aria-label="Play preview"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md ring-1 ring-white/20"
              >
                <Play size={24} strokeWidth={2} className="ml-0.5" />
              </motion.button>
            </div>
          </div>

          {/* Animated progress bar */}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
              <span>Generating your video...</span>
              <span className="text-slate-300">72%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#5BE7FF]"
                initial={{ width: "10%" }}
                animate={{ width: ["10%", "72%", "40%", "72%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Stats grid */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <StatChip icon={MonitorPlay} label="Resolution" value="1080p" />
            <StatChip icon={Clock} label="Duration" value="15 Seconds" />
            <StatChip icon={Film} label="Style" value="Cinematic" />
            <StatChip icon={Timer} label="ETA" value="12 Seconds" />
          </div>
        </div>
      </div>

      {/* Floating glass card — top right */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.06, transition: { type: "spring", stiffness: 300, damping: 15 } }}
        className="absolute -right-5 -top-7 hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-strong)] p-3.5 shadow-[0_16px_40px_-16px_var(--shadow-accent-strong)] backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)]">
            <Sparkles size={15} strokeWidth={2.25} className="text-white" />
          </span>
          <div className="pr-1">
            <p className="text-[13px] font-semibold text-[var(--text-primary)]">4K Export</p>
            <p className="text-[11px] text-[var(--text-muted)]">Ultra HD ready</p>
          </div>
        </div>
      </motion.div>

      {/* Floating glass card — bottom left */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        whileHover={{ scale: 1.06, transition: { type: "spring", stiffness: 300, damping: 15 } }}
        className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-strong)] p-3.5 shadow-[0_16px_40px_-16px_var(--shadow-accent)] backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-500">
            <Check size={17} strokeWidth={2.5} />
          </span>
          <div className="pr-1">
            <p className="text-[13px] font-semibold text-[var(--text-primary)]">Frame 128/240</p>
            <p className="text-[11px] text-[var(--text-muted)]">Rendering smoothly</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StatChip({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3.5 py-2.5">
      <Icon size={15} strokeWidth={2} className="shrink-0 text-[#9D7CFF]" />
      <div className="min-w-0 leading-tight">
        <p className="truncate text-[11px] text-slate-500">{label}</p>
        <p className="truncate text-[13px] font-medium text-white">{value}</p>
      </div>
    </div>
  );
}
