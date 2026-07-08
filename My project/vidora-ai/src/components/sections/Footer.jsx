import React from "react";

const COLUMNS = [
  { title: "Product", links: ["Features", "Templates", "Pricing", "Changelog"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  { title: "Resources", links: ["Docs", "API Reference", "Community", "Support"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
];

export default function Footer() {
  return (
    <footer className="vz-border-t pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <span className="font-display font-bold text-lg">Velora <span className="vz-grad-text">AI</span></span>
            <p className="text-sm vz-muted mt-3 max-w-xs leading-relaxed">
              Text-to-video generation for creators and marketing teams.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-display font-semibold text-sm mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="text-sm vz-muted hover:text-[color:var(--text)] transition">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="vz-border-t mt-12 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs vz-muted">
          <span>© 2026 Velora AI. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[color:var(--text)] transition">Privacy</a>
            <a href="#" className="hover:text-[color:var(--text)] transition">Terms</a>
            <a href="#" className="hover:text-[color:var(--text)] transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
