import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, AppWindow, Network, FileCheck } from 'lucide-react';

export default function Stats() {
  const { personal } = portfolioData;

  const icons = [
    <Briefcase className="w-5 h-5 text-cyan-400" />,
    <AppWindow className="w-5 h-5 text-emerald-400" />,
    <Network className="w-5 h-5 text-purple-400" />,
    <FileCheck className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {personal.stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="group relative p-5 rounded-2xl bg-[#0e1628]/80 border border-white/5 hover:border-cyan-500/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2.5 rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                {icons[idx]}
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Metric
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-1">
              {stat.label}
            </div>
            <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

