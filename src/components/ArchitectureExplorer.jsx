import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Layers,
  Smartphone,
  Server,
  Brain,
  Cloud,
  ArrowDown,
  Terminal,
  CheckCircle,
  Database,
  Radio,
  FileSpreadsheet
} from 'lucide-react';

export default function ArchitectureExplorer() {
  const { architectureShowcase } = portfolioData;
  const [activeLayer, setActiveLayer] = useState(0);

  const layerIcons = [
    <Smartphone className="w-5 h-5 text-cyan-400" />,
    <Server className="w-5 h-5 text-emerald-400" />,
    <Brain className="w-5 h-5 text-purple-400" />,
    <Cloud className="w-5 h-5 text-amber-400" />
  ];

  const layerDetails = [
    {
      title: "Client Layer (Cross-Platform Flutter Frontend)",
      techList: ["Flutter 3.x", "Dart", "Melos Monorepo", "Provider / Riverpod", "ESC/POS Printing"],
      details: "Multi-tenant mobile & web applications (EzBroker, EzKart, Store POS) communicating via REST and WebSockets. Features instant typeahead suggestion fields, offline-cached product catalogs, thermal receipt formatting, and batch OCR verification interfaces."
    },
    {
      title: "Local Edge Service (Offline-First Daemon)",
      techList: ["Go (Golang)", "bbolt KV Store", "Bleve Search Engine", "Windows Service (kardianos)", "Gin"],
      details: "Runs locally on Windows store machines with zero external network requirement for checkout operations. Employs embedded bbolt database for ACID transactions and Bleve search index for microsecond prefix autocomplete."
    },
    {
      title: "Document AI & OCR Microservice",
      techList: ["Python FastAPI", "Google Vision", "Gemini API", "Ollama", "Surya OCR", "PDF Plumber"],
      details: "Persistent OCR extraction pipeline parsing scanned bills, hand-annotated broker slips, and bank statements directly into schema-enforced JSON structures for automated ledger ingestion."
    },
    {
      title: "Cloud Microservices & Automated Messaging",
      techList: ["Go Backend", "MongoDB Cluster", "Meta WhatsApp Cloud API", "AWS SES", "Tally Prime ERP Bridge"],
      details: "Cloud-hosted backend orchestrating data sync, MongoDB connection pools, dynamic PDF report compilation with wkhtmltopdf, and automated dispatch via Meta WhatsApp Business API."
    }
  ];

  return (
    <section id="architecture" className="py-24 relative bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {architectureShowcase.title}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {architectureShowcase.description}
          </p>
        </div>

        {/* Interactive Architecture Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Architecture Stack Diagram */}
          <div className="lg:col-span-6 space-y-3">
            {architectureShowcase.layers.map((layer, index) => {
              const isActive = activeLayer === index;
              return (
                <div key={layer.name}>
                  <div
                    onClick={() => setActiveLayer(index)}
                    className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 border ${isActive
                        ? 'bg-[#101b33] border-cyan-500/50 shadow-xl shadow-cyan-950/40 translate-x-2'
                        : 'bg-[#0d1424]/80 border-white/5 hover:border-white/10 hover:bg-[#10192e]'
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'
                        }`}>
                        {layerIcons[index]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-base font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                            {layer.name}
                          </h4>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isActive ? 'bg-cyan-950 text-cyan-400 border border-cyan-800' : 'bg-slate-800 text-slate-500'
                            }`}>
                            LAYER 0{index + 1}
                          </span>
                        </div>
                        <p className="text-xs font-mono text-cyan-400/90 mt-1">
                          {layer.tech}
                        </p>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                          {layer.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {index < architectureShowcase.layers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-4 h-4 text-slate-600 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Selected Layer Deep Dive Panel */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-[#0e1628]/95 border border-cyan-500/30 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                  {layerIcons[activeLayer]}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                    Selected Architectural Subsystem
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {layerDetails[activeLayer].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {layerDetails[activeLayer].details}
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Technologies & Frameworks:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {layerDetails[activeLayer].techList.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Architecture Verified in Production</span>
                <span className="text-emerald-400">● Radpro Infotech</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
