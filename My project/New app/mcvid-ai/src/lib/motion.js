/**
 * The premium easing curve used everywhere something animates in this app
 * (Sidebar, Navbar, Hero, and every section). It was previously copy-pasted
 * independently into ~10 files in two different forms depending on how it
 * was consumed — this is now the single source of truth for both.
 */

// For Framer Motion's `transition={{ ease: ... }}` (array form)
export const EASE = [0.16, 1, 0.3, 1];

// For Tailwind arbitrary-value classes, e.g. `transition-colors ${EASE_CLASS}`
export const EASE_CLASS = "ease-[cubic-bezier(0.16,1,0.3,1)]";
