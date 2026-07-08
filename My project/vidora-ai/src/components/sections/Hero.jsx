import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play, Download, Star, BadgeCheck, ShieldCheck, Clock } from "lucide-react";

const ENGINES = ["Fast", "Studio", "Cinematic"];
const TRUST_BADGES = [
  { icon: Star, label: "4.9/5 average rating" },
  { icon: BadgeCheck, label: "50,000+ videos generated" },
  { icon: ShieldCheck, label: "SOC 2 compliant" },
  { icon: Clock, label: "99.9% uptime" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const [engine, setEngine] = useState("Studio");

  return (
    <section id="hero" className="relative pt-16 lg:pt-24 pb-24 px-6 lg:px-12">
      <div className="vz-glow w-96 h-96 -top-10 left-10" style={{ background: "var(--primary)" }} />
      <div className="vz-glow w-96 h-96 top-40 right-0" style={{ background: "var(--accent)" }} />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative">
        {/* Left: copy + prompt input */}
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 vz-card rounded-full px-4 py-1.5 text-xs font-medium vz-muted mb-7">
            <Sparkles size={14} className="text-[color:var(--secondary)]" />
            Now generating on our fastest engine yet
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl leading-[1.08] tracking-tight">
            Turn Ideas Into <span className="vz-grad-text">Stunning Videos</span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-6 text-lg vz-muted max-w-lg leading-relaxed">
            Velora AI generates broadcast-quality video from a single text prompt.
            No cameras, no crew, no editing timeline — just describe it.
          </motion.p>

          {/* Prompt input */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="mt-9 vz-card rounded-2xl p-3">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A drone rises over a foggy pine forest at dawn, golden light breaking through the trees..."
              rows={2}
              className="w-full resize-none border-0 outline-none text-sm px-3 py-2 placeholder:text-slate-400 bg-transparent"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-1">
              <div className="flex gap-1.5">
                {ENGINES.map((e) => (
                  <button
                    key={e}
                    onClick={() => setEngine(e)}
                    className={`text-xs font-medium px-3 py-1.5 rounded-lg transition ${
                      engine === e ? "vz-grad-btn text-white" : "vz-muted hover:bg-slate-100"
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
              <button className="vz-grad-btn text-sm font-semibold px-5 py-2 rounded-xl text-white flex items-center gap-2">
                <Sparkles size={15} /> Generate
              </button>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-4 text-xs vz-muted">
            No credit card required · 3 free renders
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {TRUST_BADGES.map((b) => (
              <span key={b.label} className="flex items-center gap-2 text-xs font-medium vz-muted">
                <b.icon size={14} className="text-[color:var(--secondary)]" /> {b.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: premium AI generation preview card */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="relative">
          <div className="vz-card rounded-3xl p-5 relative overflow-hidden">
            <div className="vz-glow w-56 h-56 opacity-25" style={{ background: "var(--accent)", top: "-10%", right: "-10%" }} />

            {/* status row */}
            <div className="flex items-center justify-between relative">
              <span className="flex items-center gap-2 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[color:var(--primary)] vz-pulse" />
                Generating…
              </span>
              <span className="text-xs vz-muted font-mono">ETA 00:07</span>
            </div>

            {/* preview canvas */}
            <div className="mt-4 rounded-2xl aspect-video relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #EEF2FF, #F3E8FF)" }}>
              <div className="vz-glow w-40 h-40 opacity-30" style={{ background: "var(--primary)", top: "25%", left: "30%" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full vz-grad-btn flex items-center justify-center text-white">
                  <Play size={20} fill="white" />
                </div>
              </div>
            </div>

            {/* progress bar */}
            <div className="mt-4">
              <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  initial={{ width: "10%" }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 2.4, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg,var(--primary),var(--accent))" }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[11px] vz-muted font-mono">
                <span>72% complete</span>
                <span>Frame 512 / 720</span>
              </div>
            </div>

            {/* meta grid */}
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <div className="vz-surface-soft rounded-xl py-2.5">
                <p className="text-[10px] vz-muted">Duration</p>
                <p className="text-xs font-semibold mt-0.5">0:22</p>
              </div>
              <div className="vz-surface-soft rounded-xl py-2.5">
                <p className="text-[10px] vz-muted">Resolution</p>
                <p className="text-xs font-semibold mt-0.5">1080p</p>
              </div>
              <div className="vz-surface-soft rounded-xl py-2.5">
                <p className="text-[10px] vz-muted">Style</p>
                <p className="text-xs font-semibold mt-0.5">Cinematic</p>
              </div>
            </div>

            <button className="mt-5 w-full vz-border rounded-xl py-2.5 text-sm font-semibold flex items-center justify-center gap-2 hover:border-[color:var(--accent)] transition">
              <Download size={15} /> Download when ready
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
