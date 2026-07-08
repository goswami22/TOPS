import React, { useState } from "react";
import { Menu } from "lucide-react";

import GlobalStyles from "@/components/ui/GlobalStyles";
import Sidebar from "@/components/layout/Sidebar";

import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Templates from "@/components/sections/Templates";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="vz min-h-screen w-full relative">
      <GlobalStyles />

      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-30 vz-glass h-16 flex items-center justify-between px-6">
        <span className="font-display font-bold text-lg tracking-tight">
          Velora <span className="vz-grad-text">AI</span>
        </span>
        <button onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>

      {/* Content — offset for fixed sidebar on desktop */}
      <main className="lg:pl-[250px]">
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Templates />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
