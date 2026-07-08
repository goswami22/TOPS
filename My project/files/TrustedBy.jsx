import React from "react";
import { motion } from "framer-motion";

/* Relies on global tokens/classes from your design system (.v-muted, .v-border-t) */

const COMPANIES = ["Northwind", "Fluxbyte", "Hazelcore", "Lumen Labs", "Ridgeline", "Vertex Media"];

export default function TrustedBy() {
  return (
    <section className="py-16 px-6 v-border-t">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold tracking-wide v-muted mb-8"
        >
          TRUSTED BY TEAMS AT
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {COMPANIES.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="font-display font-semibold text-lg v-muted opacity-70 hover:opacity-100 transition"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
