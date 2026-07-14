import { motion } from "framer-motion";
import { Sparkles, Type, ImagePlus, Palette, Mic, MonitorPlay } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const FEATURES = [
  {
    icon: Sparkles,
    color: "#7C5CFF",
    title: "AI Video Generation",
    description: "Transform text into stunning videos using advanced AI models.",
  },
  {
    icon: Type,
    color: "#5BE7FF",
    title: "Text to Video",
    description: "Convert your ideas and scripts into engaging videos instantly.",
  },
  {
    icon: ImagePlus,
    color: "#34D399",
    title: "Image to Video",
    description: "Bring your images to life with smooth, cinematic animations.",
  },
  {
    icon: Palette,
    color: "#F59E0B",
    title: "Multiple Styles",
    description: "Choose from a variety of styles and templates for every need.",
  },
  {
    icon: Mic,
    color: "#F472B6",
    title: "Voice Narration",
    description: "Add natural voiceovers in multiple languages with AI.",
  },
  {
    icon: MonitorPlay,
    color: "#9D7CFF",
    title: "4K Export",
    description: "Export videos in stunning 4K quality, ready for any platform.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-24">
      {/* Ambient background glows, consistent with the rest of the page */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--glow-violet)] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[var(--glow-cyan)] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] bg-[var(--accent-soft)] px-4 py-2 text-xs font-medium tracking-wide text-[var(--accent-2)]">
          <Sparkles size={14} strokeWidth={2.25} />
          Features
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
          Powerful features for creators
        </h2>
        <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
          Everything you need to create stunning videos with AI.
        </p>
      </motion.div>

      <div className="relative mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:gap-7 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, color, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] hover:shadow-[0_20px_50px_-20px_var(--shadow-accent)] md:p-7"
    >
      {/* soft tinted glow that fades in on hover, sits behind the content */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ backgroundColor: color }}
      />

      <div className="relative">
        <span
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          style={{ backgroundColor: `${color}1F` }}
        >
          <Icon size={22} strokeWidth={2} style={{ color }} />
        </span>

        <h3 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
      </div>
    </motion.div>
  );
}
