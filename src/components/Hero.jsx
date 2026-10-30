import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  ArrowRight,
  Terminal,
  Copy,
  Check,
  Layers,
  Cpu,
  Sparkles,
  ExternalLink,
  Code2,
  FileText
} from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Glows & Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#090d16] to-[#090d16] pointer-events-none" />

      {/* Subtle Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                {personal.experience} at <strong className="text-emerald-400 font-semibold">{personal.company}</strong>
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="font-mono text-sm uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {personal.name}
              </h1>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gradient">
                {personal.title}
              </h2>
            </div>

            {/* Subtitle / Value Prop */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Specializing in <span className="text-cyan-400 font-semibold">Flutter Monorepo</span> frontend ecosystems and <span className="text-emerald-400 font-semibold">Go (Golang)</span> microservices. Proven track record building offline-first POS systems, Bleve full-text search, automated WhatsApp dynamic reporting, and Gemini-powered Document AI.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['Flutter', 'Dart', 'Go (Golang)', 'Gin', 'Melos', 'MongoDB', 'Bleve Search', 'Gemini AI', 'WhatsApp Cloud API'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-emerald-600 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                <span>View Real-World Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-cyan-500/40 transition-all hover:scale-[1.02]"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>System Architecture</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-900/60 hover:bg-slate-800/60 border border-slate-700/50 hover:text-white transition-all"
                title="Copy Email to Clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{personal.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Status Footer */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                {personal.location}
              </span>
              <span>•</span>
              <span className="text-slate-300">{personal.status}</span>
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Production Specs Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Outer decorative gradient border */}
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-b from-cyan-500/40 via-emerald-500/20 to-slate-800/40 shadow-2xl shadow-cyan-950/50">

                {/* Terminal Window */}
                <div className="bg-[#0d1424] rounded-2xl overflow-hidden border border-white/5">

                  {/* Terminal Header */}
                  <div className="bg-[#0a0f1d] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                      <span className="text-xs font-mono text-slate-400 ml-2">
                        engineer@radpro: ~ (production)
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
                      LIVE SPEC
                    </span>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-5 font-mono text-xs space-y-4 text-slate-300">

                    <div>
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>stack.status --verify</span>
                      </div>
                      <div className="mt-2 pl-3 border-l-2 border-cyan-500/40 space-y-1.5 text-slate-300">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Mobile/Web:</span>
                          <span className="text-cyan-300">Flutter 3.x, Melos Monorepo</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Microservices:</span>
                          <span className="text-emerald-300">Go 1.24/1.25, Gin, bbolt</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Search Engine:</span>
                          <span className="text-amber-300">Bleve (Typeahead & Facets)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Document AI:</span>
                          <span className="text-purple-300">Gemini API, Google Vision, OCR</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Notifications:</span>
                          <span className="text-emerald-400">Meta WhatsApp Cloud, AWS SES</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>active_deployments.log</span>
                      </div>
                      <div className="mt-2 space-y-1.5 text-[11px] text-slate-400">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400">✔</span>
                          <span>apps/ezbroker: trading & receipt screens live</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400">✔</span>
                          <span>ez_pos_service: Windows daemon operational</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400">✔</span>
                          <span>reporting_service: dynamic PDF engine active</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400">✔</span>
                          <span>tally_sync: voucher export pipeline verified</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Code pill */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Current Company:</span>
                      <span className="font-semibold text-slate-200">Radpro Infotech</span>
                    </div>

                  </div>

                </div>

              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900/95 border border-cyan-500/30 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Full-Stack Production Engineer</p>
                  <p className="text-[11px] text-slate-400 font-mono">1.9+ Years Hands-on Impact</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

