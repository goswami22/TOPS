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
    <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-20 lg:py-28">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#7C5CFF]/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#5BE7FF]/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* ============ LEFT COLUMN ============ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 px-3.5 py-1.5 text-xs font-medium text-[#9D7CFF]">
            <Sparkles size={14} strokeWidth={2.25} />
            AI Video Generation, Reimagined
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn Ideas Into
            <br />
            <span className="bg-gradient-to-r from-[#7C5CFF] via-[#9D7CFF] to-[#5BE7FF] bg-clip-text text-transparent">
              Videos
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
            Generate cinematic AI videos in seconds using AI.
          </p>

          {/* Prompt textarea */}
          <div className="mt-8 rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-colors duration-300 focus-within:border-[#7C5CFF]/50 focus-within:shadow-[0_0_0_4px_rgba(124,92,255,0.12)]">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value.slice(0, MAX_PROMPT_LENGTH))}
              placeholder="Describe the video you want..."
              rows={5}
              className="w-full resize-none bg-transparent text-[15px] leading-relaxed text-white placeholder:text-slate-500 focus:outline-none [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent"
            />

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white"
                >
                  <ImagePlus size={15} strokeWidth={2} />
                  <span className="hidden sm:inline">Upload Image</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white"
                >
                  <Mic size={15} strokeWidth={2} />
                  <span className="hidden sm:inline">Voice Input</span>
                </button>

                {/* Style dropdown */}
                <div ref={styleMenuRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsStyleOpen((v) => !v)}
                    aria-haspopup="listbox"
                    aria-expanded={isStyleOpen}
                    className="flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-white"
                  >
                    {selectedStyle}
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isStyleOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  <ul
                    role="listbox"
                    className={`absolute bottom-[calc(100%+8px)] left-0 z-10 w-40 origin-bottom overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827]/95 p-1.5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isStyleOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-1 opacity-0"
                    }`}
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
                          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-slate-300 transition-colors duration-150 hover:bg-white/[0.06] hover:text-white"
                        >
                          {style}
                          {selectedStyle === style && (
                            <Check size={14} strokeWidth={2.5} className="text-[#9D7CFF]" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <span className="hidden text-[11px] text-slate-600 sm:inline">
                {prompt.length}/{MAX_PROMPT_LENGTH}
              </span>
            </div>
          </div>

          {/* Generate button */}
          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(124,92,255,0.4)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(124,92,255,0.55)] active:translate-y-0 sm:w-auto sm:px-8"
          >
            <Wand2 size={17} strokeWidth={2.25} />
            Generate Video
          </button>

          {/* Example prompt chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {EXAMPLE_PROMPTS.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => setPrompt(example)}
                className="group flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-400 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#7C5CFF]/30 hover:bg-[#7C5CFF]/10 hover:text-white"
              >
                {example}
                <ArrowUpRight
                  size={12}
                  strokeWidth={2.25}
                  className="text-slate-600 transition-colors duration-200 group-hover:text-[#9D7CFF]"
                />
              </button>
            ))}
          </div>
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
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Gradient border wrapper */}
      <div className="rounded-[24px] bg-gradient-to-br from-[#7C5CFF]/40 via-white/[0.06] to-[#5BE7FF]/30 p-px shadow-[0_20px_60px_-20px_rgba(124,92,255,0.35)]">
        <div className="relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#111827]/90 p-5 backdrop-blur-xl">
          {/* Card header */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-300">AI Video Preview</span>
            <span className="flex items-center gap-1.5 rounded-full border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 px-2.5 py-1 text-[11px] font-medium text-[#9D7CFF]">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[#9D7CFF]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
              Generating...
            </span>
          </div>

          {/* Fake video preview surface */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#1a1030] via-[#161233] to-[#0B0F19]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,92,255,0.35),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(91,231,255,0.25),transparent_50%)]" />

            {/* abstract animated cinematic shapes, in place of a real render */}
            <motion.div
              className="absolute -left-6 bottom-2 h-28 w-28 rounded-full bg-[#7C5CFF]/25 blur-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-4 top-4 h-20 w-20 rounded-full bg-[#5BE7FF]/25 blur-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* subtle scanline grid, sells the "AI render" feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                type="button"
                aria-label="Play preview"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md ring-1 ring-white/20"
              >
                <Play size={22} strokeWidth={2} className="ml-0.5" />
              </motion.button>
            </div>
          </div>

          {/* Animated progress bar */}
          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between text-[11px] text-slate-500">
              <span>Generating your video...</span>
              <span className="text-slate-300">72%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#5BE7FF]"
                initial={{ width: "10%" }}
                animate={{ width: ["10%", "72%", "40%", "72%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Stats grid */}
          <div className="mt-4 grid grid-cols-2 gap-2.5">
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
        className="absolute -right-4 -top-6 hidden rounded-2xl border border-white/[0.1] bg-white/[0.06] p-3 shadow-[0_16px_40px_-16px_rgba(124,92,255,0.5)] backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFF] to-[#5BE7FF]">
            <Sparkles size={14} strokeWidth={2.25} className="text-white" />
          </span>
          <div className="pr-1">
            <p className="text-xs font-semibold text-white">4K Export</p>
            <p className="text-[10px] text-slate-400">Ultra HD ready</p>
          </div>
        </div>
      </motion.div>

      {/* Floating glass card — bottom left */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/[0.1] bg-white/[0.06] p-3 shadow-[0_16px_40px_-16px_rgba(91,231,255,0.35)] backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-400">
            <Check size={16} strokeWidth={2.5} />
          </span>
          <div className="pr-1">
            <p className="text-xs font-semibold text-white">Frame 128/240</p>
            <p className="text-[10px] text-slate-400">Rendering smoothly</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatChip({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2">
      <Icon size={14} strokeWidth={2} className="shrink-0 text-[#9D7CFF]" />
      <div className="min-w-0 leading-tight">
        <p className="truncate text-[10px] text-slate-500">{label}</p>
        <p className="truncate text-xs font-medium text-white">{value}</p>
      </div>
    </div>
  );
}
