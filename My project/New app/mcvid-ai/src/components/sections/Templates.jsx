import { motion } from "framer-motion";
import { Sparkles, Film, Megaphone, Plane, Wand2, Video, Play, ArrowRight } from "lucide-react";
import { SectionHeading, AmbientGlow } from "../ui";
import { EASE } from "../../lib/motion";

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
    <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:px-12">
      {/* Ambient background glows, consistent with the rest of the page */}
      <AmbientGlow className="right-1/4 top-0 h-96 w-96 translate-x-1/2 bg-[#7C5CFF]/10" />
      <AmbientGlow className="left-0 bottom-10 h-80 w-80 bg-[#5BE7FF]/10" />

      <SectionHeading
        badge="Templates"
        heading="Start from a template"
        subheading="Pick a style, drop in your idea, and let the AI take it from there."
      />

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
      className="group relative overflow-hidden rounded-[20px] border border-line bg-glass-1 p-4 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 hover:border-line-strong hover:bg-glass-2 hover:shadow-[0_20px_50px_-20px_rgba(124,92,255,0.35)]"
    >
      {/* Thumbnail placeholder */}
      <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl border border-line">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-25 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-bg/40" />

        {/* category pill */}
        <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-line-strong bg-bg/60 px-2.5 py-1 text-[11px] font-medium text-ink backdrop-blur-md">
          <Icon size={12} strokeWidth={2.25} />
          {category}
        </span>

        {/* play affordance, centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-glass-3 text-ink opacity-0 backdrop-blur-md ring-1 ring-line-strong transition-all duration-300 group-hover:scale-105 group-hover:opacity-100">
            <Play size={18} strokeWidth={2} className="ml-0.5" />
          </span>
        </div>
      </div>

      {/* Title + category */}
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-subtle">{category}</p>

      {/* Use Template button */}
      <motion.button
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="group/btn mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-line bg-glass-1 py-2.5 text-sm font-medium text-ink-soft transition-colors duration-200 hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-ink"
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
