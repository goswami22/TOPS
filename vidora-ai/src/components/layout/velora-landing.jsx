import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles, Wand2, Film, Zap, ShieldCheck, Clock,
  Menu, X, ArrowRight, Play, ChevronDown, Layers, Globe
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Scoped styles — exact brand tokens + glass / glow / gradient FX    */
/* ------------------------------------------------------------------ */
const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

    .velora{
      --bg:#0F172A; --surface:#1E293B; --primary:#3B82F6;
      --secondary:#06B6D4; --accent:#8B5CF6; --text:#F8FAFC;
      --muted:#94A3B8; --border:#334155;
      background:var(--bg); color:var(--text);
      font-family:'Inter',sans-serif;
    }
    .velora .font-display{ font-family:'Space Grotesk',sans-serif; }

    .v-grad-text{
      background:linear-gradient(90deg,var(--primary),var(--secondary),var(--accent));
      -webkit-background-clip:text; background-clip:text; color:transparent;
    }
    .v-grad-btn{
      background:linear-gradient(90deg,var(--primary),var(--accent));
      transition:transform .2s ease, box-shadow .3s ease;
      box-shadow:0 0 0 0 rgba(59,130,246,0.4);
    }
    .v-grad-btn:hover{ transform:translateY(-2px); box-shadow:0 10px 30px -8px rgba(139,92,246,0.55); }

    .v-glass{
      background:rgba(30,41,59,0.55);
      border:1px solid var(--border);
      backdrop-filter:blur(16px);
      -webkit-backdrop-filter:blur(16px);
    }
    .v-glass-hover{ transition:border-color .25s ease, transform .25s ease, background .25s ease; }
    .v-glass-hover:hover{
      border-color:rgba(139,92,246,0.5);
      transform:translateY(-4px);
      background:rgba(30,41,59,0.75);
    }

    .v-nav{
      background:rgba(15,23,42,0.7);
      border-bottom:1px solid var(--border);
      backdrop-filter:blur(12px);
      -webkit-backdrop-filter:blur(12px);
    }

    .v-blob{ position:absolute; border-radius:9999px; filter:blur(90px); opacity:0.35; pointer-events:none; }
    .v-blob-1{ background:var(--primary); }
    .v-blob-2{ background:var(--accent); }
    .v-blob-3{ background:var(--secondary); }

    @keyframes v-float{ 0%,100%{ transform:translateY(0px);} 50%{ transform:translateY(-18px);} }
    .v-float{ animation:v-float 7s ease-in-out infinite; }

    @keyframes v-pulse-ring{
      0%{ box-shadow:0 0 0 0 rgba(59,130,246,0.5); }
      70%{ box-shadow:0 0 0 12px rgba(59,130,246,0); }
      100%{ box-shadow:0 0 0 0 rgba(59,130,246,0); }
    }
    .v-pulse{ animation:v-pulse-ring 2.4s infinite; }

    .v-reveal{ opacity:0; transform:translateY(18px); transition:opacity .6s ease, transform .6s ease; }
    .v-reveal.in{ opacity:1; transform:translateY(0); }

    @media (prefers-reduced-motion: reduce){
      .v-float, .v-pulse{ animation:none; }
      .v-reveal{ transition:none; opacity:1; transform:none; }
    }

    .v-border-t{ border-top:1px solid var(--border); }
    .v-border-b{ border-bottom:1px solid var(--border); }
    .v-border{ border:1px solid var(--border); }
    .v-muted{ color:var(--muted); }
    .v-surface{ background:var(--surface); }
  `}</style>
);

/* ------------------------------------------------------------------ */
/*  Scroll reveal hook                                                 */
/* ------------------------------------------------------------------ */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("in"); io.unobserve(el); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`v-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const FEATURES = [
  { icon: Wand2, title: "Prompt-to-video", desc: "Describe a scene in plain language — camera movement, lighting, mood — and generate a ready clip." },
  { icon: Zap, title: "Fast rendering", desc: "Draft clips in seconds, final cuts in under a minute. Iterate without losing momentum." },
  { icon: Layers, title: "Multi-engine", desc: "Route each prompt to the right model — fast drafts or flagship cinematic quality." },
  { icon: Film, title: "4K export", desc: "Ship broadcast-ready footage at up to 4K, optimized for web, social, and ads." },
  { icon: ShieldCheck, title: "Commercial rights", desc: "Every clip generated on a paid plan is cleared for commercial use, out of the box." },
  { icon: Globe, title: "Built for teams", desc: "Shared libraries, brand presets, and team seats so your whole team renders on-brand." },
];

const STEPS = [
  { n: "01", title: "Describe your scene", desc: "Write a prompt the way you'd brief a director — subject, motion, light, style." },
  { n: "02", title: "Choose an engine", desc: "Pick fast drafts for iteration or the cinematic engine for your final render." },
  { n: "03", title: "Generate & refine", desc: "Get a clip in seconds. Adjust camera, pacing, or mood without starting over." },
  { n: "04", title: "Export & publish", desc: "Download at up to 4K or push straight to your content pipeline." },
];

const PLANS = [
  { name: "Starter", price: "$9", credits: "20 credits / mo", features: ["1080p export", "Fast + Standard engines", "Personal use license"], highlight: false },
  { name: "Pro", price: "$29", credits: "80 credits / mo", features: ["4K export", "All engines", "Commercial license", "Priority render queue"], highlight: true },
  { name: "Studio", price: "$79", credits: "250 credits / mo", features: ["4K export", "Commercial license", "3 team seats", "Shared brand presets"], highlight: false },
];

const FAQS = [
  { q: "Can I use the videos commercially?", a: "Yes, on Pro and Studio plans every render is cleared for commercial use. Starter is personal use only." },
  { q: "How long does a render take?", a: "Fast drafts return in seconds. Our flagship cinematic engine typically finishes in under a minute." },
  { q: "What happens to unused credits?", a: "Credits roll over for one billing cycle, so a slower month doesn't cost you renders." },
  { q: "Can I cancel anytime?", a: "Yes — no lock-in contracts. Cancel from your dashboard and keep access until your period ends." },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function VeloraLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="velora min-h-screen w-full relative overflow-x-hidden">
      <Styles />

      {/* NAV */}
      <header className="v-nav fixed top-0 inset-x-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-lg tracking-tight">
            Velora <span className="v-grad-text">AI</span>
          </span>

          <nav className="hidden md:flex items-center gap-8 text-sm v-muted font-medium">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm v-muted hover:text-white transition">Log in</a>
            <a href="#pricing" className="v-grad-btn text-sm font-semibold px-4 py-2 rounded-xl text-white">
              Start free
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden v-border-t px-6 py-4 flex flex-col gap-4 text-sm v-muted">
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#pricing" className="v-grad-btn text-center text-white font-semibold px-4 py-2 rounded-xl">Start free</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-28 px-6">
        <div className="v-blob v-blob-1 w-72 h-72 -top-10 left-10 v-float" />
        <div className="v-blob v-blob-2 w-80 h-80 top-40 right-0 v-float" style={{ animationDelay: "1.5s" }} />
        <div className="v-blob v-blob-3 w-64 h-64 top-96 left-1/3 v-float" style={{ animationDelay: "3s" }} />

        <div className="max-w-4xl mx-auto text-center relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 v-glass rounded-full px-4 py-1.5 text-xs font-medium v-muted mb-6">
              <Sparkles size={14} className="text-[color:var(--secondary)]" />
              Now generating on our fastest engine yet
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
              Turn your words into
              <br />
              <span className="v-grad-text">stunning video.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg v-muted max-w-xl mx-auto leading-relaxed">
              Velora AI generates broadcast-quality video from a single text prompt.
              No cameras, no crew, no editing timeline — just describe it.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#pricing" className="v-grad-btn font-semibold px-7 py-3.5 rounded-xl text-white flex items-center gap-2">
                Start generating free <ArrowRight size={18} />
              </a>
              <button className="v-glass v-glass-hover font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2">
                <Play size={16} /> Watch demo
              </button>
            </div>
            <p className="mt-5 text-xs v-muted">No credit card required · 3 free renders</p>
          </Reveal>

          {/* product preview */}
          <Reveal delay={320}>
            <div className="mt-16 v-glass rounded-3xl p-3 sm:p-4 max-w-3xl mx-auto">
              <div className="v-border rounded-2xl aspect-video v-surface flex items-center justify-center relative overflow-hidden">
                <div className="v-blob v-blob-2 w-40 h-40 opacity-20" style={{ top: "20%", left: "30%" }} />
                <button className="v-pulse relative z-10 w-16 h-16 rounded-full v-grad-btn flex items-center justify-center text-white">
                  <Play size={22} fill="white" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-28 px-6 v-border-t">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold text-[color:var(--secondary)] mb-3">FEATURES</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl max-w-lg">
              Everything you need to go from idea to footage
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="v-glass v-glass-hover rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl v-grad-btn flex items-center justify-center mb-5">
                    <f.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="v-muted text-sm leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-28 px-6 v-border-t v-surface">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold text-[color:var(--secondary)] mb-3">HOW IT WORKS</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl max-w-lg">
              Four steps from sentence to clip
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="v-glass rounded-2xl p-6 h-full relative">
                  <span className="font-display text-3xl font-bold v-grad-text">{s.n}</span>
                  <h3 className="font-display font-semibold text-lg mt-4 mb-2">{s.title}</h3>
                  <p className="v-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-28 px-6 v-border-t">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center">
            <p className="text-sm font-semibold text-[color:var(--secondary)] mb-3">PRICING</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Pay for renders, not seats</h2>
            <p className="v-muted mt-3">Simple credit-based pricing. Cancel anytime.</p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col relative ${
                    p.highlight ? "v-surface" : "v-glass v-glass-hover"
                  }`}
                  style={p.highlight ? { border: "2px solid var(--accent)" } : {}}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-8 v-grad-btn text-xs font-bold px-3 py-1 rounded-full text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display font-semibold text-lg">{p.name}</h3>
                  <p className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold">{p.price}</span>
                    <span className="v-muted text-sm">/mo</span>
                  </p>
                  <p className="text-xs v-muted mt-1">{p.credits}</p>
                  <ul className="mt-6 space-y-3 text-sm v-muted flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-[color:var(--secondary)] mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-8 text-center font-semibold py-3 rounded-xl transition ${
                      p.highlight ? "v-grad-btn text-white" : "v-border hover:border-[color:var(--accent)]"
                    }`}
                  >
                    Start free trial
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 px-6 v-border-t v-surface">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold text-[color:var(--secondary)] mb-3">FAQ</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">Questions, answered</h2>
          </Reveal>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div className="v-glass rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between text-left px-6 py-5 font-medium"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  >
                    {f.q}
                    <ChevronDown
                      size={18}
                      className="v-muted transition-transform"
                      style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="px-6 pb-5 text-sm v-muted leading-relaxed">{f.a}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 px-6 v-border-t text-center relative overflow-hidden">
        <div className="v-blob v-blob-2 w-96 h-96 top-0 left-1/2" style={{ transform: "translateX(-50%)" }} />
        <Reveal className="relative max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-4xl">Your next video starts with a sentence.</h2>
          <p className="v-muted mt-4">Three free renders. No credit card required.</p>
          <a href="#pricing" className="v-grad-btn inline-flex items-center gap-2 mt-8 font-semibold px-8 py-4 rounded-xl text-white">
            Start generating free <ArrowRight size={18} />
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="v-border-t py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs v-muted">
          <span>© 2026 Velora AI. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
