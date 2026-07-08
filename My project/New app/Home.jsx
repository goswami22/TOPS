import Hero from "../components/sections/Hero";

// The sections below (Trusted, Features, HowItWorks, Templates, Pricing,
// Footer) don't exist yet, so importing them would break the build.
// Each is stubbed as an inline placeholder here, named to match the
// component that will replace it — swap each block for a real
// `import X from "../components/sections/X"` as soon as it's built.

function Placeholder({ label }) {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <p className="text-sm font-medium tracking-wide text-slate-600">
          {label} — Coming Soon...
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Placeholder label="Trusted" />
      <Placeholder label="Features" />
      <Placeholder label="How It Works" />
      <Placeholder label="Templates" />
      <Placeholder label="Pricing" />
      <Placeholder label="Footer" />
    </>
  );
}
