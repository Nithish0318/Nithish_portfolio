import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Terminal, 
  Smartphone, 
  Server, 
  Brain, 
  Zap, 
  Database,
  Check,
  Search
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Proficiencies', icon: <Terminal className="w-4 h-4" /> },
    { id: 'frontend', name: 'Flutter & Frontend', icon: <Smartphone className="w-4 h-4" />, items: skills.frontend },
    { id: 'backend', name: 'Go & Backend', icon: <Server className="w-4 h-4" />, items: skills.backend },
    { id: 'aiAndOcr', name: 'AI & Document OCR', icon: <Brain className="w-4 h-4" />, items: skills.aiAndOcr },
    { id: 'integrations', name: 'Integrations & ERP', icon: <Zap className="w-4 h-4" />, items: skills.integrations },
    { id: 'databases', name: 'Databases & Storage', icon: <Database className="w-4 h-4" />, items: skills.databases }
  ];

  const getDisplayedCategories = () => {
    if (activeTab === 'all') {
      return [
        { id: 'frontend', title: 'Flutter & Frontend Ecosystem', items: skills.frontend, color: 'text-cyan-400' },
        { id: 'backend', title: 'Go Microservices & Local Daemons', items: skills.backend, color: 'text-emerald-400' },
        { id: 'aiAndOcr', title: 'Document AI & OCR Pipelines', items: skills.aiAndOcr, color: 'text-purple-400' },
        { id: 'integrations', title: 'Enterprise Integrations & ERP', items: skills.integrations, color: 'text-amber-400' },
        { id: 'databases', title: 'Databases & Embedded Storage', items: skills.databases, color: 'text-sky-400' }
      ];
    }
    const cat = categories.find(c => c.id === activeTab);
    return [{ id: cat.id, title: cat.name, items: cat.items, color: 'text-cyan-400' }];
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Production Tooling
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Battle-tested technologies utilized in real commercial applications at Radpro Infotech.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === cat.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-[#0e1628] text-slate-300 hover:bg-slate-800 hover:text-white border border-white/5'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-12">
          {getDisplayedCategories().map((cat) => (
            <div key={cat.id} className="space-y-4">
              <h3 className={`text-lg font-bold ${cat.color} flex items-center gap-2`}>
                <span className="w-2 h-2 rounded-full bg-current"></span>
                <span>{cat.title}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-4 rounded-xl bg-[#0e1628]/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:bg-[#121c33]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

