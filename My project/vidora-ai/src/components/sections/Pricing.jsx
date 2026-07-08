import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const PLANS = [
  { name: "Starter", price: "$9", credits: "20 credits / mo", features: ["1080p export", "Fast + Standard engines", "Personal use license"], highlight: false },
  { name: "Pro", price: "$29", credits: "80 credits / mo", features: ["4K export", "All engines", "Commercial license", "Priority render queue"], highlight: true },
  { name: "Studio", price: "$79", credits: "250 credits / mo", features: ["4K export", "Commercial license", "3 team seats", "Shared brand presets"], highlight: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-28 px-6 lg:px-12 vz-border-t vz-surface-soft">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-center">
          <p className="text-sm font-semibold text-[color:var(--secondary)] mb-3">PRICING</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">Pay for renders, not seats</h2>
          <p className="vz-muted mt-3">Simple credit-based pricing. Cancel anytime.</p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PLANS.map((p, i) => (
            <motion.div key={p.name} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              className={`rounded-3xl p-8 flex flex-col relative ${p.highlight ? "vz-card" : "vz-card vz-card-hover"}`}
              style={p.highlight ? { border: "2px solid var(--accent)", boxShadow: "0 24px 50px -20px rgba(139,92,246,0.35)" } : {}}>
              {p.highlight && (
                <span className="absolute -top-3 left-8 vz-grad-btn text-xs font-bold px-3 py-1 rounded-full text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display font-semibold text-lg">{p.name}</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold">{p.price}</span>
                <span className="vz-muted text-sm">/mo</span>
              </p>
              <p className="text-xs vz-muted mt-1">{p.credits}</p>
              <ul className="mt-6 space-y-3 text-sm vz-muted flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[color:var(--secondary)] mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-8 text-center font-semibold py-3 rounded-xl transition ${
                p.highlight ? "vz-grad-btn text-white" : "vz-border hover:border-[color:var(--accent)]"
              }`}>
                Start free trial
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
