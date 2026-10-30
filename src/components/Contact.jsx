import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Terminal, 
  Sparkles, 
  Github, 
  Linkedin,
  Clock
} from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>07 // CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Resilient
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Have a project, full-stack opening, or microservices challenge? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0e1628]/90 border border-white/5 backdrop-blur-md shadow-xl space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Direct Communication
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  NithishKumar S
                </h3>
                <p className="text-sm text-slate-300 mt-2">
                  Full-Stack Software Engineer with 1.9+ years specializing in Flutter client applications & Go distributed backends.
                </p>
              </div>

              {/* Status Badge */}
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <p className="text-xs font-semibold text-white">Current Status</p>
                  <p className="text-xs text-emerald-400 font-mono">{personal.status}</p>
                </div>
              </div>

              {/* Contact Items */}
              <div className="space-y-4">
                
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-[11px] text-slate-400 font-mono">Email Address</p>
                      <a href={`mailto:${personal.email}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[11px] text-slate-400 font-mono">Location</p>
                    <p className="text-sm font-semibold text-white">{personal.location}</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-[11px] text-slate-400 font-mono">Work Experience</p>
                    <p className="text-sm font-semibold text-white">{personal.experience} at {personal.company}</p>
                  </div>
                </div>

              </div>

              {/* Socials */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 text-xs font-mono transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-cyan-300 hover:bg-slate-700 text-xs font-mono transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Inquiry / Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0e1628]/90 border border-white/5 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Fill out the details below to launch a direct email draft.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Full-Stack Role"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, role requirements, or collaboration idea..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-600 hover:opacity-90 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

