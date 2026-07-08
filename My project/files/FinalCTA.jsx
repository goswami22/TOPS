import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Relies on global tokens/classes from your design system
   (.v-blob, .v-blob-2, .v-grad-btn, .v-muted, .v-border-t) */

export default function FinalCTA() {
  return (
    <section className="py-28 px-6 v-border-t text-center relative overflow-hidden">
      <div className="v-blob v-blob-2 w-96 h-96 top-0 left-1/2" style={{ transform: "translateX(-50%)" }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto"
      >
        <h2 className="font-display font-bold text-4xl">Your next video starts with a sentence.</h2>
        <p className="v-muted mt-4">Three free renders. No credit card required.</p>
        <a
          href="#pricing"
          className="v-grad-btn inline-flex items-center gap-2 mt-8 font-semibold px-8 py-4 rounded-xl text-white"
        >
          Start generating free <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}
