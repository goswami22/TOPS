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
import { AmbientGlow } from "../ui";
import { EASE } from "../../lib/motion";

const STYLES = ["Cinema", "Anime", "Realistic", "YouTube", "Advertisement"];

const EXAMPLE_PROMPTS = [
  "Astronaut walking on Mars",
  "Luxury Car Commercial",
  "Cyberpunk City",
  "Drone Flyover",
];

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
    <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-12 lg:py-36 xl:py-40">
      {/* Ambient background glows */}
      <AmbientGlow className="-left-32 top-0 h-[28rem] w-[28rem] bg-[#7C5CFF]/15" />
      <AmbientGlow className="right-0 top-1/3 h-96 w-96 bg-[#5BE7FF]/10" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* ============ LEFT COLUMN ============ */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.span
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 px-4 py-2 text-xs font-medium tracking-wide text-[#9D7CFF]"
          >
            <Sparkles size={14} strokeWidth={2.25} />
            AI Video Generation, Reimagined
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-5xl xl:text-6xl"
          >
            Turn Ideas Into
            <br />
            <span className="bg-gradient-to-r from-[#7C5CFF] via-[#9D7CFF] to-[#5BE7FF] bg-clip-text text-transparent">
              Videos
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl md:mt-7"
          >
            Generate cinematic AI videos in seconds using AI.
          </motion.p>

          {/* Prompt textarea */}
          <motion.div
            variants={itemVariants}
            className="mt-10 rounded-[20px] border border-line bg-glass-1 p-5 shadow-card backdrop-blur-xl transition-colors duration-300 focus-within:border-[#7C5CFF]/50 focus-within:shadow-[0_0_0_4px_rgba(124,92,255,0.12)] md:mt-12 md:p-6"
          >
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value.slice(0, MAX_PROMPT_LENGTH))}
              placeholder="Describe the video you want..."
              rows={6}
              className="w-full resize-none bg-transparent text-base leading-relaxed text-ink placeholder:text-subtle focus:outline-none [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-glass-3 [&::-webkit-scrollbar-track]:bg-transparent"
            />

            <div className="flex items-center justify-between border-t border-line pt-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-1.5 rounded-xl border border-line bg-glass-1 px-3.5 py-2.5 text-[13px] font-medium text-ink-soft transition-colors duration-200 hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-ink"
                >
                  <ImagePlus size={15} strokeWidth={2} />
                  <span className="hidden sm:inline">Upload Image</span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-1.5 rounded-xl border border-line bg-glass-1 px-3.5 py-2.5 text-[13px] font-medium text-ink-soft transition-colors duration-200 hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-ink"
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
                    className="flex items-center gap-1.5 rounded-xl border border-line bg-glass-1 px-3.5 py-2.5 text-[13px] font-medium text-ink-soft transition-colors duration-200 hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-ink"
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
                    className="absolute bottom-[calc(100%+8px)] left-0 z-10 w-40 origin-bottom overflow-hidden rounded-2xl border border-line bg-surface-card p-1.5 shadow-card-lg backdrop-blur-xl"
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
                          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-ink-soft transition-colors duration-150 hover:bg-glass-2 hover:text-ink"
                        >
                          {style}
                          {selectedStyle === style && (
                            <Check size={14} strokeWidth={2.5} className="text-[#9D7CFF]" />
                          )}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </div>

              <span className="hidden text-xs text-subtle sm:inline">
                {prompt.length}/{MAX_PROMPT_LENGTH}
              </span>
            </div>
          </motion.div>

          {/* Generate button */}
          <motion.button
            variants={itemVariants}
            type="button"
            whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(124,92,255,0.6)" }}
            whileTap={{ scale: 0.97, y: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] py-4 text-[15px] font-semibold text-ink shadow-[0_8px_24px_rgba(124,92,255,0.4)] sm:w-auto sm:px-9"
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
                className="group flex items-center gap-1.5 rounded-full border border-line bg-glass-1 px-4 py-2.5 text-[13px] font-medium text-muted transition-colors duration-200 hover:border-[#7C5CFF]/30 hover:bg-[#7C5CFF]/10 hover:text-ink"
              >
                {example}
                <ArrowUpRight
                  size={12}
                  strokeWidth={2.25}
                  className="text-subtle transition-colors duration-200 group-hover:text-[#9D7CFF]"
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
      {/* Gradient border wrapper */}
      <div className="rounded-[26px] bg-gradient-to-br from-[#7C5CFF]/40 via-glass-2 to-[#5BE7FF]/30 p-px shadow-[0_20px_60px_-20px_rgba(124,92,255,0.35)]">
        <div className="relative overflow-hidden rounded-[26px] border border-line bg-surface-card p-6 backdrop-blur-xl md:p-7">
          {/* Card header */}
          <div className="mb-5 flex items-center justify-between">
            <span className="text-[15px] font-medium text-ink-soft">AI Video Preview</span>
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
          <div className="relative aspect-video overflow-hidden rounded-[20px] border border-line bg-gradient-to-br from-[#1a1030] via-[#161233] to-[#0B0F19]">
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
                className="flex h-16 w-16 items-center justify-center rounded-full bg-glass-3 text-ink backdrop-blur-md ring-1 ring-line-strong"
              >
                <Play size={24} strokeWidth={2} className="ml-0.5" />
              </motion.button>
            </div>
          </div>

          {/* Animated progress bar */}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs text-subtle">
              <span>Generating your video...</span>
              <span className="text-ink-soft">72%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-glass-2">
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
        className="absolute -right-5 -top-7 hidden rounded-2xl border border-line-strong bg-glass-2 p-3.5 shadow-[0_16px_40px_-16px_rgba(124,92,255,0.5)] backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFF] to-[#5BE7FF]">
            <Sparkles size={15} strokeWidth={2.25} className="text-ink" />
          </span>
          <div className="pr-1">
            <p className="text-[13px] font-semibold text-ink">4K Export</p>
            <p className="text-[11px] text-muted">Ultra HD ready</p>
          </div>
        </div>
      </motion.div>

      {/* Floating glass card — bottom left */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        whileHover={{ scale: 1.06, transition: { type: "spring", stiffness: 300, damping: 15 } }}
        className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-line-strong bg-glass-2 p-3.5 shadow-[0_16px_40px_-16px_rgba(91,231,255,0.35)] backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-400">
            <Check size={17} strokeWidth={2.5} />
          </span>
          <div className="pr-1">
            <p className="text-[13px] font-semibold text-ink">Frame 128/240</p>
            <p className="text-[11px] text-muted">Rendering smoothly</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StatChip({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-line bg-glass-1 px-3.5 py-2.5">
      <Icon size={15} strokeWidth={2} className="shrink-0 text-[#9D7CFF]" />
      <div className="min-w-0 leading-tight">
        <p className="truncate text-[11px] text-subtle">{label}</p>
        <p className="truncate text-[13px] font-medium text-ink">{value}</p>
      </div>
    </div>
  );
}
