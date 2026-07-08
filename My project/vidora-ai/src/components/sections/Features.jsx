import React from "react";
import { motion } from "framer-motion";
import { Wand2, Zap, Layers, Film, ShieldCheck, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

const FEATURES = [
  { icon: Wand2, title: "Prompt-to-video", desc: "Describe a scene in plain language — camera movement, lighting, mood — and generate a ready clip.", span: "lg:col-span-2 lg:row-span-2" },
  { icon: Zap, title: "Fast rendering", desc: "Draft clips in seconds, final cuts in under a minute.", span: "" },
  { icon: Layers, title: "Multi-engine", desc: "Route each prompt to the right model for the job.", span: "" },
  { icon: Film, title: "4K export", desc: "Broadcast-ready footage optimized for web, social, and ads.", span: "lg:col-span-2" },
  { icon: ShieldCheck, title: "Commercial rights", desc: "Every paid render is cleared for commercial use.", span: "" },
  { icon: Globe, title: "Built for teams", desc: "Shared libraries and brand presets for your whole team.", span: "" },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-28 px-6 lg:px-12 vz-border-t">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="text-sm font-semibold text-[color:var(--secondary)] mb-3">FEATURES</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl max-w-lg">
            Everything you need to go from idea to footage
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-[180px] gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              className={`vz-card vz-card-hover rounded-3xl p-6 flex flex-col justify-between ${f.span}`}
            >
              <div className="w-11 h-11 rounded-xl vz-grad-btn flex items-center justify-center">
                <f.icon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1.5">{f.title}</h3>
                <p className="vz-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
