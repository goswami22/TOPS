import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const TEMPLATES = [
  { title: "Product Launch Teaser", tag: "Marketing", gradient: "linear-gradient(135deg,#DBEAFE,#EDE9FE)" },
  { title: "Nature Documentary Shot", tag: "Cinematic", gradient: "linear-gradient(135deg,#E0F2FE,#DBEAFE)" },
  { title: "Social Ad — 9:16", tag: "Social", gradient: "linear-gradient(135deg,#EDE9FE,#FCE7F3)" },
  { title: "Explainer B-Roll", tag: "Corporate", gradient: "linear-gradient(135deg,#F0FDFA,#E0F2FE)" },
];

export default function Templates() {
  return (
    <section id="templates" className="py-24 lg:py-28 px-6 lg:px-12 vz-border-t">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="text-sm font-semibold text-[color:var(--secondary)] mb-3">TEMPLATES</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl max-w-lg">
            Start from a template, not a blank prompt
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {TEMPLATES.map((t, i) => (
            <motion.div key={t.title} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              className="vz-card vz-card-hover rounded-3xl overflow-hidden">
              <div className="aspect-video relative flex items-center justify-center" style={{ background: t.gradient }}>
                <div className="w-14 h-14 rounded-full vz-grad-btn flex items-center justify-center text-white">
                  <Play size={20} fill="white" />
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-display font-semibold text-base">{t.title}</h3>
                <span className="text-xs font-medium px-3 py-1 rounded-full vz-surface-soft vz-border">{t.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
