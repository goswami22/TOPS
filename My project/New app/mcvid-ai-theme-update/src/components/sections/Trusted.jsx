import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-3xl px-4 text-center md:px-8"
      >
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] bg-[var(--accent-soft)] px-3.5 py-1.5 text-xs font-medium text-[var(--accent-2)]">
          <Sparkles size={14} strokeWidth={2.25} />
          Trusted By
        </span>

        <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl">
          Trusted by creators worldwide
        </h2>
        <p className="mt-3 text-sm text-[var(--text-muted)] sm:text-base">
          Over 50,000 creators and companies use MCvid AI.
        </p>
      </motion.div>

      {/* Marquee */}
      <div
        className="relative mt-12 overflow-hidden border-y border-[var(--border)] bg-[var(--surface-faint)] py-8 backdrop-blur-xl md:mt-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max animate-[trusted-marquee_34s_linear_infinite] items-center gap-14 hover:[animation-play-state:paused] sm:gap-20">
          {MARQUEE_ITEMS.map((name, index) => (
            <motion.span
              key={`${name}-${index}`}
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
              className="group shrink-0 select-none text-xl font-semibold tracking-tight text-[var(--text-faint)] grayscale transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:grayscale-0 hover:drop-shadow-[0_0_16px_var(--shadow-accent)] sm:text-2xl"
            >
              <span className="transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-[var(--accent)] group-hover:via-[var(--accent-2)] group-hover:to-[var(--accent-cyan)] group-hover:bg-clip-text group-hover:text-transparent">
                {name}
              </span>
            </motion.span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes trusted-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
