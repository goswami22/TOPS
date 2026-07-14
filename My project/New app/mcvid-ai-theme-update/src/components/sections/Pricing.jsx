import { motion } from "framer-motion";
import { Sparkles, Check, Star } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const PLANS = [
  {
    name: "Free",
    tagline: "Perfect for trying things out.",
    price: "$0",
    period: "/month",
    cta: "Get Started",
    highlighted: false,
    features: [
      "5 videos per month",
      "720p export",
      "Watermark included",
      "Basic styles",
      "Community support",
    ],
  },
  {
    name: "Pro",
    tagline: "For creators who want more.",
    price: "$29",
    period: "/month",
    cta: "Start Free Trial",
    highlighted: true,
    features: [
      "100 videos per month",
      "4K export",
      "No watermark",
      "All styles & templates",
      "Priority rendering",
      "Priority support",
    ],
  },
  {
    name: "Business",
    tagline: "For teams and agencies.",
    price: "$99",
    period: "/month",
    cta: "Contact Sales",
    highlighted: false,
    features: [
      "Unlimited videos",
      "4K & 8K export",
      "No watermark",
      "Custom branding",
      "API access",
      "5 team seats included",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-24">
      {/* Ambient background glows, consistent with the rest of the page */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--glow-violet)] blur-[120px]" />
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
          Pricing
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
          Start free. Upgrade when you're ready to create more.
        </p>
      </motion.div>

      <div className="relative mx-auto mt-14 grid max-w-6xl grid-cols-1 items-stretch gap-6 md:mt-20 md:grid-cols-3 md:gap-7">
        {PLANS.map((plan, index) => (
          <PricingCard key={plan.name} {...plan} index={index} />
        ))}
      </div>
    </section>
  );
}

function PricingCard({ name, tagline, price, period, cta, highlighted, features, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.1 }}
      {...(!highlighted && { whileHover: { y: -8 }, whileTap: { scale: 0.98 } })}
      className={`group relative flex flex-col overflow-hidden rounded-[20px] border p-6 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 md:p-7 ${
        highlighted
          ? "border-[var(--border-accent)] bg-[var(--surface-strong)] shadow-[0_20px_60px_-20px_var(--shadow-accent-strong)] hover:shadow-[0_28px_80px_-16px_var(--shadow-accent-strong)] md:-my-4 md:scale-[1.03]"
          : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] hover:shadow-[0_20px_50px_-20px_var(--shadow-accent)]"
      }`}
    >
      {highlighted && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent-cyan)]/10" />
          <span className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-3 py-1 text-[11px] font-semibold text-white shadow-[0_4px_16px_var(--shadow-accent-strong)]">
            <Star size={11} strokeWidth={2.5} fill="currentColor" />
            Most Popular
          </span>
        </>
      )}

      <div className="relative">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">{name}</h3>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{tagline}</p>

        <div className="mt-6 flex items-end gap-1">
          <span className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            {price}
          </span>
          <span className="pb-1 text-sm text-[var(--text-faint)]">{period}</span>
        </div>

        <motion.button
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-colors duration-200 ${
            highlighted
              ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white shadow-[0_8px_24px_var(--shadow-accent)] hover:shadow-[0_12px_32px_var(--shadow-accent-strong)]"
              : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)]"
          }`}
        >
          {cta}
        </motion.button>

        <ul className="mt-7 flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
              <span
                className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                  highlighted ? "bg-[var(--accent)]/25 text-[var(--accent-2)]" : "bg-[var(--surface-strong)] text-[var(--text-muted)]"
                }`}
              >
                <Check size={11} strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
