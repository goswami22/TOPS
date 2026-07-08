import React from "react";

/* ------------------------------------------------------------------ */
/*  Global design tokens — soft light, blue→purple, premium spacing    */
/*  Import ONCE at the top of pages/LandingPage.jsx                    */
/* ------------------------------------------------------------------ */
export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

      .vz{
        --bg:#FAFBFF; --surface:#FFFFFF; --surface-soft:#F5F7FC;
        --primary:#3B82F6; --accent:#8B5CF6; --secondary:#06B6D4;
        --text:#0F172A; --muted:#64748B; --border:#E8EAF4;
        background:var(--bg); color:var(--text);
        font-family:'Inter',sans-serif;
        -webkit-font-smoothing:antialiased;
      }
      .vz .font-display{ font-family:'Space Grotesk',sans-serif; letter-spacing:-0.02em; }

      .vz-grad-text{
        background:linear-gradient(90deg,var(--primary),var(--accent));
        -webkit-background-clip:text; background-clip:text; color:transparent;
      }
      .vz-grad-btn{
        background:linear-gradient(90deg,var(--primary),var(--accent));
        box-shadow:0 1px 2px rgba(15,23,42,0.05), 0 10px 24px -10px rgba(59,130,246,0.4);
        transition:transform .2s ease, box-shadow .3s ease;
      }
      .vz-grad-btn:hover{ transform:translateY(-2px); box-shadow:0 14px 30px -10px rgba(139,92,246,0.5); }

      .vz-card{
        background:var(--surface);
        border:1px solid var(--border);
        box-shadow:0 1px 2px rgba(15,23,42,0.03), 0 1px 1px rgba(15,23,42,0.02);
        transition:box-shadow .3s ease, transform .3s ease, border-color .3s ease;
      }
      .vz-card-hover:hover{
        box-shadow:0 24px 48px -20px rgba(15,23,42,0.14);
        transform:translateY(-4px);
        border-color:#D8DCF0;
      }

      .vz-glass{
        background:rgba(255,255,255,0.65);
        border:1px solid var(--border);
        backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
      }

      .vz-glow{ position:absolute; border-radius:9999px; filter:blur(110px); opacity:0.18; pointer-events:none; }

      @keyframes vz-float{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-14px);} }
      .vz-float{ animation:vz-float 8s ease-in-out infinite; }

      @keyframes vz-pulse{
        0%{ box-shadow:0 0 0 0 rgba(59,130,246,0.35); }
        70%{ box-shadow:0 0 0 14px rgba(59,130,246,0); }
        100%{ box-shadow:0 0 0 0 rgba(59,130,246,0); }
      }
      .vz-pulse{ animation:vz-pulse 2.4s infinite; }

      .vz-muted{ color:var(--muted); }
      .vz-border-t{ border-top:1px solid var(--border); }
      .vz-border-b{ border-bottom:1px solid var(--border); }
      .vz-border{ border:1px solid var(--border); }
      .vz-surface-soft{ background:var(--surface-soft); }

      @media (prefers-reduced-motion: reduce){
        .vz-float, .vz-pulse{ animation:none; }
      }
    `}</style>
  );
}
