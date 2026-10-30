import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Copy, Check, Code2, FileCode, Sparkles } from 'lucide-react';

export default function CodeShowcase() {
  const { codeHighlights } = portfolioData;
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeSnippet = codeHighlights[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="py-24 relative bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // CODE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Code Patterns
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Clean, idiomatic Go services and reusable Flutter widgets extracted from actual production repositories.
          </p>
        </div>

        {/* Code Showcase Window */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0c1220] border border-cyan-500/30 shadow-2xl overflow-hidden">
          
          {/* Window Header */}
          <div className="bg-[#090d16] px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            {/* Tabs */}
            <div className="flex items-center gap-2">
              {codeHighlights.map((snippet, idx) => (
                <button
                  key={snippet.title}
                  onClick={() => setActiveTab(idx)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>{snippet.filename}</span>
                </button>
              ))}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Subtitle / Context Bar */}
          <div className="bg-[#0d1527] px-6 py-2.5 border-b border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="text-cyan-400 font-semibold">{activeSnippet.title}</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              Language: {activeSnippet.language}
            </span>
          </div>

          {/* Code Block */}
          <div className="p-6 overflow-x-auto font-mono text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#070b14]">
            <pre>
              <code>{activeSnippet.code}</code>
            </pre>
          </div>

          {/* Footer Bar */}
          <div className="bg-[#090d16] px-6 py-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Verified against Go 1.24+ & Flutter 3.x specifications</span>
            <span className="text-emerald-400">● Radpro Infotech Production</span>
          </div>

        </div>

      </div>
    </section>
  );
}

