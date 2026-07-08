import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06 } }),
};

const FAQS = [
  { q: "Can I use the videos commercially?", a: "Yes, on Pro and Studio plans every render is cleared for commercial use. Starter is personal use only." },
  { q: "How long does a render take?", a: "Fast drafts return in seconds. Our flagship cinematic engine typically finishes in under a minute." },
  { q: "What happens to unused credits?", a: "Credits roll over for one billing cycle, so a slower month doesn't cost you renders." },
  { q: "Can I cancel anytime?", a: "Yes — no lock-in contracts. Cancel from your dashboard and keep access until your period ends." },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="py-24 lg:py-28 px-6 lg:px-12 vz-border-t vz-surface-soft">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="text-sm font-semibold text-[color:var(--secondary)] mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">Questions, answered</h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <motion.div key={f.q} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              className="vz-card rounded-2xl overflow-hidden">
              <button className="w-full flex items-center justify-between text-left px-6 py-5 font-medium"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                {f.q}
                <ChevronDown size={18} className="vz-muted transition-transform"
                  style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {openFaq === i && <p className="px-6 pb-5 text-sm vz-muted leading-relaxed">{f.a}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
