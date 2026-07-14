import React from "react";
import { motion } from "framer-motion";

export function IconButton({ onClick, ariaLabel, className = "", children, ...props }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-glass-1 text-ink-soft transition-colors duration-200 hover:bg-glass-2 hover:text-ink ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
