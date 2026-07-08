import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CTA() {
  return (
    <section className="py-24 lg:py-28 px-6 lg:px-12 vz-border-t text-center relative overflow-hidden">
      <div className="vz-glow w-96 h-96 top-0 left-1/2" style={{ background: "var(--accent)", transform: "translateX(-50%)" }} />
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="relative max-w-2xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl">Your next video starts with a sentence.</h2>
        <p className="vz-muted mt-4">Three free renders. No credit card required.</p>
        <a href="#hero" className="vz-grad-btn inline-flex items-center gap-2 mt-8 font-semibold px-8 py-4 rounded-xl text-white">
          Start generating free <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}
