import React from "react";
import { motion } from "framer-motion";

/* Relies on global tokens/classes from your design system
   (.v-grad-text, .v-muted, .v-border-t) */

const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "API Reference", "Community", "Support"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="v-border-t pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <span className="font-display font-bold text-lg">
              Velora <span className="v-grad-text">AI</span>
            </span>
            <p className="text-sm v-muted mt-3 max-w-xs leading-relaxed">
              Text-to-video generation for creators and marketing teams.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-display font-semibold text-sm mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm v-muted hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="v-border-t mt-12 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs v-muted">
          <span>© 2026 Velora AI. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
