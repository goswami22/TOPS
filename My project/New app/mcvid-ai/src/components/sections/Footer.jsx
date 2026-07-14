import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Code2, Briefcase, Camera } from "lucide-react";
import { AmbientGlow } from "../ui";
import { EASE, EASE_CLASS } from "../../lib/motion";

const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Features", "Templates", "Pricing", "API"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Community", "Help Center", "Changelog"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

const SOCIALS = [
  { label: "Twitter", icon: MessageCircle },
  { label: "GitHub", icon: Code2 },
  { label: "LinkedIn", icon: Briefcase },
  { label: "Instagram", icon: Camera },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-glass-1 backdrop-blur-xl">
      {/* subtle ambient glow, consistent with the rest of the page */}
      <AmbientGlow className="left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-[#7C5CFF]/10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12"
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
          {/* Brand */}
          <div className="lg:max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#5BE7FF] shadow-[0_4px_14px_rgba(124,92,255,0.45)]">
                <Sparkles size={17} strokeWidth={2.25} className="text-ink" />
              </span>
              <span className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-ink">
                MCvid <span className="text-[#9D7CFF]">AI</span>
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Turn ideas into cinematic AI videos in seconds. Built for creators, agencies, and
              teams who move fast.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map(({ label, icon: Icon }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-glass-1 text-muted transition-colors duration-200 hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-ink"
                >
                  <Icon size={17} strokeWidth={2} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:gap-x-12">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className={`text-sm text-muted transition-colors duration-200 ${EASE_CLASS} hover:text-ink`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-subtle">
            © {year} MCvid AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className={`text-xs text-subtle transition-colors duration-200 ${EASE_CLASS} hover:text-ink`}>
              Privacy
            </a>
            <a href="#" className={`text-xs text-subtle transition-colors duration-200 ${EASE_CLASS} hover:text-ink`}>
              Terms
            </a>
            <a href="#" className={`text-xs text-subtle transition-colors duration-200 ${EASE_CLASS} hover:text-ink`}>
              Sitemap
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
