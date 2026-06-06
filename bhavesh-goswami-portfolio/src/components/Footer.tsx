import { Terminal, ArrowUp, Linkedin, Github, Mail, Globe } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black py-16 relative overflow-hidden" id="main-footer">
      <div className="absolute top-0 right-[20%] w-[200px] h-[200px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Column Left (5 cols): Logo and copyrights */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={scrollToTop}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center">
                <Terminal className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-widest uppercase">
                BHAVESH<span className="text-purple-500">.</span>DEV
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed">
              Design and built with precision. Bringing high-fidelity assets, Python performance schemas, and immersive experiences together.
            </p>
            <div className="text-left font-mono text-[11px] text-gray-600">
              © {currentYear} Bhavesh Goswami. All rights reserved. Code licensed MIT.
            </div>
          </div>

          {/* Column Middle (4 cols): Quick navigation anchors and Social Links */}
          <div className="md:col-span-4 flex flex-col items-start md:items-center space-y-6">
            <div className="flex flex-wrap items-center justify-start md:justify-center gap-x-6 gap-y-2.5">
              {[
                { label: "Home", anchor: "home" },
                { label: "Objective", anchor: "objective" },
                { label: "Skills", anchor: "skills" },
                { label: "Timeline", anchor: "experience" },
                { label: "Projects", anchor: "projects" },
                { label: "Services", anchor: "services" },
                { label: "Contact", anchor: "contact" },
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const el = document.getElementById(link.anchor);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-display text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Micro social rows */}
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/in/bhavesh-goswami-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-gray-500 hover:text-white transition-colors hover:scale-105"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://github.com/goswami22"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-gray-500 hover:text-white transition-colors hover:scale-105"
                title="GitHub Repo"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="mailto:goswamibhavesh22@gmail.com"
                className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-gray-500 hover:text-white transition-colors hover:scale-105"
                title="Send Email"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column Right (4 cols): Beautiful physical QR Code linkage panel */}
          <div className="md:col-span-4 flex flex-col md:items-end items-start space-y-4">
            <div className="glass-panel p-3.5 rounded-2xl border border-white/5 bg-[#030303] flex items-center space-x-4 max-w-xs text-left">
              
              {/* QR Code Img with referrer policy */}
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-1 flex-shrink-0 relative overflow-hidden group">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https%3A%2F%2Flinkedin.com%2Fin%2Fbhavesh-goswami-dev&color=030303&bgcolor=ffffff&qzone=1"
                  alt="LinkedIn QR Code"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[9px] text-purple-400 font-bold uppercase tracking-wider block">
                  Interactive Access
                </span>
                <span className="font-display font-extrabold text-xs text-white leading-tight block">
                  Scan to View LinkedIn
                </span>
                <p className="font-mono text-[9px] text-gray-500 leading-tight">
                  bhavesh-goswami-dev
                </p>
              </div>

            </div>

            {/* Back to top anchor */}
            <button
              onClick={scrollToTop}
              className="group p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-purple-400 hover:bg-white/10 hover:border-purple-500/35 transition-all duration-300 flex items-center space-x-1.5 font-sans justify-center text-xs"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider group-hover:text-white">Back to Top</span>
              <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
