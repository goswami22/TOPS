import { motion } from "framer-motion";
import { Sparkles, Film, Megaphone, Plane, Wand2, Video, Play, ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const TEMPLATES = [
  {
    title: "Epic Cinematic",
    category: "Cinematic",
    icon: Film,
    gradient: "from-[#7C5CFF] to-[#5BE7FF]",
  },
  {
    title: "Anime Adventure",
    category: "Anime",
    icon: Sparkles,
    gradient: "from-[#F472B6] to-[#7C5CFF]",
  },
  {
    title: "Luxury Commercial",
    category: "Commercial",
    icon: Megaphone,
    gradient: "from-[#F59E0B] to-[#F472B6]",
  },
  {
    title: "Travel Diary",
    category: "Travel",
    icon: Plane,
    gradient: "from-[#34D399] to-[#5BE7FF]",
  },
  {
    title: "Fantasy World",
    category: "Fantasy",
    icon: Wand2,
    gradient: "from-[#9D7CFF] to-[#F472B6]",
  },
  {
    title: "YouTube Intro",
    category: "YouTube",
    icon: Video,
    gradient: "from-[#5BE7FF] to-[#34D399]",
  },
];

export default function Templates() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-24">
      {/* Ambient background glows, consistent with the rest of the page */}
      <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 translate-x-1/2 rounded-full bg-[var(--glow-violet)] blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-10 h-80 w-80 rounded-full bg-[var(--glow-cyan)] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] bg-[var(--accent-soft)] px-4 py-2 text-xs font-medium tracking-wide text-[var(--accent-2)]">
          <Sparkles size={14} strokeWidth={2.25} />
          Templates
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
          Start from a template
        </h2>
        <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
          Pick a style, drop in your idea, and let the AI take it from there.
        </p>
      </motion.div>

      <div className="relative mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:gap-7 lg:grid-cols-3">
        {TEMPLATES.map((template, index) => (
          <TemplateCard key={template.title} {...template} index={index} />
        ))}
      </div>
    </section>
  );
}

function TemplateCard({ title, category, icon: Icon, gradient, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-4 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] hover:shadow-[0_20px_50px_-20px_var(--shadow-accent)]"
    >
      {/* Thumbnail placeholder — kept as a fixed dark "video frame" so artwork
          reads consistently in both themes, like a real video thumbnail. */}
      <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl border border-white/[0.06]">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-25 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[#0B0F19]/40" />

        {/* category pill */}
        <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-[#0B0F19]/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
          <Icon size={12} strokeWidth={2.25} />
          {category}
        </span>

        {/* play affordance, centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100">
            <Play size={18} strokeWidth={2} className="ml-0.5" />
          </span>
        </div>
      </div>

      {/* Title + category */}
      <h3 className="text-base font-semibold text-[var(--text-primary)]">{title}</h3>
      <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-[var(--text-faint)]">{category}</p>

      {/* Use Template button */}
      <motion.button
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="group/btn mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)]"
      >
        Use Template
        <ArrowRight
          size={14}
          strokeWidth={2.25}
          className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
        />
      </motion.button>
    </motion.div>
  );
}
