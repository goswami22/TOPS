import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Code2, Briefcase, Camera } from "lucide-react";

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
const EASE_ARR = [0.16, 1, 0.3, 1];

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
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface-faint)] backdrop-blur-xl">
      {/* subtle ambient glow, consistent with the rest of the page */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--glow-violet)] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE_ARR }}
        className="relative mx-auto max-w-7xl px-5 py-16 md:px-10"
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
          {/* Brand */}
          <div className="lg:max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)] shadow-[0_4px_14px_var(--shadow-accent)]">
                <Sparkles size={17} strokeWidth={2.25} className="text-white" />
              </span>
              <span className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-[var(--text-primary)]">
                MCvid <span className="text-[var(--accent-2)]">AI</span>
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)]"
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
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className={`text-sm text-[var(--text-muted)] transition-colors duration-200 ${EASE} hover:text-[var(--text-primary)]`}
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
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--text-faint)]">
            © {year} MCvid AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className={`text-xs text-[var(--text-faint)] transition-colors duration-200 ${EASE} hover:text-[var(--text-primary)]`}>
              Privacy
            </a>
            <a href="#" className={`text-xs text-[var(--text-faint)] transition-colors duration-200 ${EASE} hover:text-[var(--text-primary)]`}>
              Terms
            </a>
            <a href="#" className={`text-xs text-[var(--text-faint)] transition-colors duration-200 ${EASE} hover:text-[var(--text-primary)]`}>
              Sitemap
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
