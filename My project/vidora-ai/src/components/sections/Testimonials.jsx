import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const TESTIMONIALS = [
  { name: "Maya Chen", role: "Creative Director, Fluxbyte", quote: "We cut our video turnaround from three days to twenty minutes. Velora is now part of every campaign brief we write." },
  { name: "Daniel Okafor", role: "Growth Lead, Ridgeline", quote: "The engine quality difference is real — drafts for iteration, cinematic for the final cut. That flexibility sold us instantly." },
  { name: "Sofia Marín", role: "Founder, Hazelcore Studio", quote: "Our clients can't tell these clips weren't shot on location. The commercial license on Pro made it a no-brainer." },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-28 px-6 lg:px-12 vz-border-t">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="text-sm font-semibold text-[color:var(--secondary)] mb-3">TESTIMONIALS</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl max-w-lg">Loved by creators and marketing teams</h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              className="vz-glass rounded-3xl p-6 flex flex-col">
              <div className="flex gap-1 mb-4 text-[color:var(--secondary)]">
                {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm vz-muted leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 pt-4 vz-border-t">
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs vz-muted mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
