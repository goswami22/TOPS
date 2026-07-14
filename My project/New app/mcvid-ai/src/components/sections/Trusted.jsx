import { motion } from "framer-motion";
import { SectionHeading } from "../ui";
import { EASE_CLASS } from "../../lib/motion";

// NOTE: These are rendered as plain typographic wordmarks (no logo marks,
// no brand colors) rather than reproductions of each company's actual
// trademarked logo — this keeps the section legally safe while still
// reading as a premium "trusted by" logo wall.
const COMPANIES = [
  "Google",
  "Microsoft",
  "OpenAI",
  "Adobe",
  "NVIDIA",
  "Meta",
  "Netflix",
  "Amazon",
  "Stripe",
  "Notion",
];

// Duplicated once so the track can loop seamlessly: translating the whole
// track by exactly -50% lands the second copy precisely where the first
// one started, with no visible seam.
const MARQUEE_ITEMS = [...COMPANIES, ...COMPANIES];

export default function Trusted() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <SectionHeading
        compact
        badge="Trusted By"
        heading="Trusted by creators worldwide"
        subheading="Over 50,000 creators and companies use MCvid AI."
      />

      {/* Marquee */}
      <div className="relative mt-14 overflow-hidden border-y border-line bg-glass-1 py-8 backdrop-blur-xl md:mt-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[trusted-marquee_34s_linear_infinite] items-center gap-14 hover:[animation-play-state:paused] sm:gap-20">
          {MARQUEE_ITEMS.map((name, index) => (
            <motion.span
              key={`${name}-${index}`}
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
              className={`group shrink-0 select-none text-xl font-semibold tracking-tight text-subtle grayscale transition-all duration-300 ${EASE_CLASS} hover:grayscale-0 hover:drop-shadow-[0_0_16px_rgba(124,92,255,0.45)] sm:text-2xl`}
            >
              <span className="transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-[#7C5CFF] group-hover:via-[#9D7CFF] group-hover:to-[#5BE7FF] group-hover:bg-clip-text group-hover:text-transparent">
                {name}
              </span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
