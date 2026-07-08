import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22, x: -10 },
  show: (i = 0) => ({ opacity: 1, y: 0, x: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const STEPS = [
  { n: "01", title: "Describe your scene", desc: "Write a prompt the way you'd brief a director — subject, motion, light, style." },
  { n: "02", title: "Choose an engine", desc: "Pick fast drafts for iteration or the cinematic engine for your final render." },
  { n: "03", title: "Generate & refine", desc: "Get a clip in seconds. Adjust camera, pacing, or mood without starting over." },
  { n: "04", title: "Export & publish", desc: "Download at up to 4K or push straight to your content pipeline." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 lg:py-28 px-6 lg:px-12 vz-border-t vz-surface-soft">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="text-sm font-semibold text-[color:var(--secondary)] mb-3">HOW IT WORKS</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl max-w-lg">Four steps from sentence to clip</h2>
        </motion.div>

        <div className="mt-16 relative pl-10">
          <div className="absolute left-[15px] top-2 bottom-2 w-px" style={{ background: "linear-gradient(var(--primary),var(--accent))" }} />
          <div className="space-y-10">
            {STEPS.map((s, i) => (
              <motion.div key={s.n} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
                className="relative">
                <span className="absolute -left-10 top-0 w-8 h-8 rounded-full vz-grad-btn text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="vz-card rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-lg mb-1.5">{s.title}</h3>
                  <p className="vz-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
