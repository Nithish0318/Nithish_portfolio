import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code, 
  Server, 
  Brain, 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function About() {
  const { personal } = portfolioData;

  const coreFocusAreas = [
    {
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      title: "Flutter Monorepo Architecture",
      desc: "Architecting Melos monorepos with reusable packages, custom typeahead search fields, thermal receipt rendering, and multi-tenant mobile/web apps."
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      title: "Go Microservices & Local Daemons",
      desc: "Building high-performance Go services (Gin), embedded bbolt storage, Bleve search engine with prefix/wildcard matching, and offline-first Windows services."
    },
    {
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      title: "Intelligent Document AI & OCR",
      desc: "Integrating Google Cloud Vision, Gemini API, OpenRouter, and Ollama into multi-provider pipelines for parsing receipts, orders, and bank statements."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Automated Messaging & ERP Sync",
      desc: "Engineering dynamic PDF report generation with wkhtmltopdf, Meta WhatsApp Cloud API automated delivery, and Tally Prime XML accounting bridges."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Systems From <span className="text-gradient">Core to Interface</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Bridging robust, low-latency Go backends with responsive, reactive Flutter frontends.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Detailed Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0e1628]/90 border border-white/5 backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>The Engineering Journey</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Radpro Infotech
                </span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personal.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Engineering Principles */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                  Engineering Principles & Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Clean Architecture & Domain Separation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Offline-First Resilience (bbolt + Bleve)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Type-Safe Schemas & Multi-Provider AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Automated Dispatch & Zero Manual Touch</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Core Focus Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {coreFocusAreas.map((area, idx) => (
              <div
                key={area.title}
                className="group p-5 rounded-2xl bg-[#0e1628]/70 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:bg-[#121c33]/90"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 group-hover:bg-cyan-950/60 transition-colors border border-white/5 group-hover:border-cyan-500/30">
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {area.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

