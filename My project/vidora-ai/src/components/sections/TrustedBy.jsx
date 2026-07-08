import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06 } }),
};

// Placeholder wordmarks — swap for real logged partner logos before shipping.
const COMPANIES = ["Google", "Microsoft", "Notion", "Dropbox", "HubSpot", "Slack"];

export default function TrustedBy() {
  return (
    <section className="py-14 px-6 lg:px-12 vz-border-t">
      <div className="max-w-6xl mx-auto">
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
          className="text-center text-xs font-semibold tracking-wide vz-muted mb-8">
          TRUSTED BY TEAMS AT
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {COMPANIES.map((name, i) => (
            <motion.span key={name} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
              className="font-display font-semibold text-lg vz-muted opacity-60 hover:opacity-100 transition">
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
