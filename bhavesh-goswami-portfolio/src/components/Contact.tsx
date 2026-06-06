import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, Send, CheckCircle, Copy, Check, MessageCircle, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("goswamibhavesh22@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactInfos = [
    {
      title: "Direct Email Address",
      value: "goswamibhavesh22@gmail.com",
      action: handleCopyEmail,
      actionIcon: copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-gray-400" />,
      actionText: copiedEmail ? "Copied!" : "Copy",
      icon: <Mail className="w-5 h-5 text-purple-400" />,
    },
    {
      title: "Location Parameters",
      value: "Ahmedabad, Gujarat, India",
      icon: <MapPin className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1 font-mono text-xs uppercase text-purple-400 font-bold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connection Hub</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Info Details Left Grid (5 columns) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-2xl text-white">
                Let's Collaboratively Build Something High Stakes
              </h3>
              <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed">
                Whether you are looking to hire a dedicated full-time developer, partner on freelance tasks, or simply ask a technical question, don't hesitate to reach out!
              </p>
            </div>

            {/* Micro Details Cards list */}
            <div className="space-y-4">
              {contactInfos.map((info, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-panel border border-white/5 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      {info.icon}
                    </div>
                    <div className="text-left">
                      <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest font-bold block">
                        {info.title}
                      </span>
                      <span className="font-sans text-sm sm:text-base text-gray-200 font-medium">
                        {info.value}
                      </span>
                    </div>
                  </div>
                  {info.action && (
                    <button
                      onClick={info.action}
                      className="p-2 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 flex items-center space-x-1.5 font-mono text-xs text-gray-300 hover:text-white"
                    >
                      {info.actionIcon}
                      <span>{info.actionText}</span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Quick WhatsApp Trigger button */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-wider pl-1 block">
                Instant Chat Channels
              </span>
              <a
                href="https://wa.me/?text=Hello%20Bhavesh,%20I%20saw%20your%20awesome%20portfolio%20and%20would%20love%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 hover:border-emerald-500/40 hover:scale-[1.01] flex items-center justify-between text-emerald-400 shadow-xl transition-all duration-300 group hover:glow-purple"
              >
                <div className="flex items-center space-x-4 text-left">
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <MessageCircle className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-base text-white block group-hover:text-emerald-300 transition-colors">
                      Direct WhatsApp Connect
                    </span>
                    <span className="font-mono text-xs text-gray-400">
                      Response Rate: &lt; 1 Hour
                    </span>
                  </div>
                </div>
                <div className="font-mono text-xs font-bold uppercase tracking-wide bg-emerald-500/20 px-3 py-1.5 rounded-xl border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  Open Chat
                </div>
              </a>
            </div>

            {/* Social channels stamp */}
            <div className="flex items-center space-x-4 pt-4 justify-start pl-1">
              <a
                href="https://linkedin.com/in/bhavesh-goswami-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all hover:scale-105"
                title="LinkedIn Link"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/goswami22"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all hover:scale-105"
                title="GitHub Link"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Form Side Right (7 columns) */}
          <div className="lg:col-span-7">
            <div className="glass-panel-heavy p-6 sm:p-10 rounded-2xl relative shadow-2xl overflow-hidden border border-white/5 bg-gradient-to-b from-[#0e0e0e] to-black">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div className="space-y-1">
                      <h4 className="font-display font-extrabold text-xl text-white">
                        Send Message
                      </h4>
                      <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                        Standard SSL Encrypted form dispatch
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name Entry */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/5 focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/25 text-white placeholder-gray-600 focus:outline-none transition-all font-sans text-sm"
                        />
                      </div>

                      {/* Email Entry */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="johndoe@agency.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/5 focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/25 text-white placeholder-gray-600 focus:outline-none transition-all font-sans text-sm"
                        />
                      </div>
                    </div>

                    {/* Message Entry */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                        Detailed Query Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Bhavesh, I'd love to partner on a Python/Django or React project!"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/5 focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/25 text-white placeholder-gray-600 focus:outline-none transition-all font-sans text-sm resize-none"
                      />
                    </div>

                    {/* Submit Dispatch CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-purple-600 to-blue-600 hover:glow-purple text-white hover:opacity-95 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:transform-none transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Simulating Secure Dispatch...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span>Dispatch Message Entry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-display font-extrabold text-2xl text-white">
                        Transmission Successful!
                      </h4>
                      <p className="font-sans text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out! Bhavesh will inspect your detailed inquiry and respond within 12 hours max.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl font-mono text-xs bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-gray-300 hover:text-white transition-all"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
