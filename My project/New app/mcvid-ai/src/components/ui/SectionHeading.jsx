import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { EASE } from "../../lib/motion";

/**
 * The eyebrow badge + heading + subheading block repeated at the top of
 * every marketing section. Trusted uses a visually smaller ("compact")
 * treatment than Features/HowItWorks/Templates/Pricing, which are all
 * identical to each other — `compact` reproduces Trusted's exact sizing
 * so extracting this component doesn't change how anything renders.
 */
export default function SectionHeading({ badge, heading, subheading, compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={
        compact
          ? "mx-auto max-w-3xl px-6 text-center md:px-10"
          : "relative mx-auto max-w-3xl text-center"
      }
    >
      <span
        className={
          compact
            ? "mb-5 inline-flex items-center gap-2 rounded-full border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 px-3.5 py-1.5 text-xs font-medium text-[#9D7CFF]"
            : "mb-5 inline-flex items-center gap-2 rounded-full border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 px-4 py-2 text-xs font-medium tracking-wide text-[#9D7CFF]"
        }
      >
        <Sparkles size={14} strokeWidth={2.25} />
        {badge}
      </span>

      <h2
        className={
          compact
            ? "text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl"
            : "text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
        }
      >
        {heading}
      </h2>

      <p
        className={
          compact
            ? "mt-3 text-sm text-muted sm:text-base"
            : "mt-4 text-base text-muted sm:text-lg"
        }
      >
        {subheading}
      </p>
    </motion.div>
  );
}
