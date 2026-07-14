import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { SectionHeading, AmbientGlow } from "../ui";
import { EASE } from "../../lib/motion";

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
    <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:px-12">
      {/* Ambient background glows, consistent with the rest of the page */}
      <AmbientGlow className="left-1/2 top-0 h-96 w-96 -translate-x-1/2 bg-[#7C5CFF]/10" />
      <AmbientGlow className="right-0 bottom-0 h-80 w-80 bg-[#5BE7FF]/10" />

      <SectionHeading
        badge="Pricing"
        heading="Simple, transparent pricing"
        subheading="Start free. Upgrade when you're ready to create more."
      />

      <div className="relative mx-auto mt-14 grid max-w-7xl grid-cols-1 items-stretch gap-6 md:mt-16 md:grid-cols-3 md:gap-7">
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
          ? "border-[#7C5CFF]/40 bg-glass-2 shadow-[0_20px_60px_-20px_rgba(124,92,255,0.45)] hover:shadow-[0_28px_80px_-16px_rgba(124,92,255,0.65)] md:-my-4 md:scale-[1.03]"
          : "border-line bg-glass-1 hover:border-line-strong hover:bg-glass-2 hover:shadow-[0_20px_50px_-20px_rgba(124,92,255,0.35)]"
      }`}
    >
      {highlighted && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7C5CFF]/10 via-transparent to-[#5BE7FF]/10" />
          <span className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] px-3 py-1 text-[11px] font-semibold text-ink shadow-[0_4px_16px_rgba(124,92,255,0.5)]">
            <Star size={11} strokeWidth={2.5} fill="currentColor" />
            Most Popular
          </span>
        </>
      )}

      <div className="relative">
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        <p className="mt-1 text-sm text-muted">{tagline}</p>

        <div className="mt-6 flex items-end gap-1">
          <span className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {price}
          </span>
          <span className="pb-1 text-sm text-subtle">{period}</span>
        </div>

        <motion.button
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-colors duration-200 ${
            highlighted
              ? "bg-gradient-to-r from-[#7C5CFF] to-[#9D7CFF] text-ink shadow-[0_8px_24px_rgba(124,92,255,0.4)] hover:shadow-[0_12px_32px_rgba(124,92,255,0.55)]"
              : "border border-line bg-glass-1 text-ink hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10"
          }`}
        >
          {cta}
        </motion.button>

        <ul className="mt-7 flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <span
                className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                  highlighted ? "bg-[#7C5CFF]/25 text-[#9D7CFF]" : "bg-glass-2 text-muted"
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
