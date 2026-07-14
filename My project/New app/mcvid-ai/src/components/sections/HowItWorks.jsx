import { motion } from "framer-motion";
import { PenLine, Sparkles, Download, ArrowRight } from "lucide-react";
import { SectionHeading, AmbientGlow } from "../ui";
import { EASE } from "../../lib/motion";

const STEPS = [
  {
    number: "01",
    icon: PenLine,
    title: "Write Prompt",
    description: "Describe your vision in plain text — our AI understands exactly what you want to create.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Generates Video",
    description: "Advanced AI models render your prompt into a cinematic, high-quality video in seconds.",
  },
  {
    number: "03",
    icon: Download,
    title: "Download & Share",
    description: "Export in stunning 4K and share your creation anywhere — no watermarks, no limits.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:px-12">
      {/* Ambient background glows, consistent with the rest of the page */}
      <AmbientGlow className="left-0 top-10 h-80 w-80 bg-[#5BE7FF]/10" />
      <AmbientGlow className="right-1/4 bottom-0 h-96 w-96 translate-x-1/2 bg-[#7C5CFF]/10" />

      <SectionHeading
        badge="How It Works"
        heading="From idea to video in minutes"
        subheading="Create professional videos in three simple steps."
      />

      <div className="relative mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-8 md:mt-16 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center md:gap-4">
        <StepCard {...STEPS[0]} index={0} />
        <Connector index={0} />
        <StepCard {...STEPS[1]} index={1} />
        <Connector index={1} />
        <StepCard {...STEPS[2]} index={2} />
      </div>
    </section>
  );
}

function Connector({ index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.15 + 0.3 }}
      className="hidden shrink-0 items-center justify-center md:flex"
    >
      <motion.span
        whileHover={{ scale: 1.15, rotate: 90 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-glass-1 text-[#9D7CFF] backdrop-blur-xl"
      >
        <ArrowRight size={16} strokeWidth={2.25} />
      </motion.span>
    </motion.div>
  );
}

function StepCard({ number, icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-[20px] border border-line bg-glass-1 p-6 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 hover:border-[#7C5CFF]/30 hover:bg-glass-2 hover:shadow-[0_20px_50px_-20px_rgba(124,92,255,0.35)] md:p-7"
    >
      {/* soft ambient glow, fades in on hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#7C5CFF]/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* oversized step number, sits behind the icon/content for depth */}
      <span className="pointer-events-none absolute -right-1 -top-3 text-7xl font-extrabold text-glass-1 transition-colors duration-300 group-hover:text-[#7C5CFF]/[0.12]">
        {number}
      </span>

      <div className="relative">
        <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7C5CFF]/15 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
          <Icon size={22} strokeWidth={2} className="text-[#9D7CFF]" />
        </span>

        <p className="mb-1 text-xs font-semibold tracking-wide text-[#7C5CFF]">Step {number}</p>
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </motion.div>
  );
}
