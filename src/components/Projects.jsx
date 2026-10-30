import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  Filter, 
  ChevronRight,
  Sparkles,
  Smartphone,
  Server,
  Brain
} from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'frontend', label: 'Flutter & Mobile', icon: <Smartphone className="w-3.5 h-3.5" />, count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Go Microservices', icon: <Server className="w-3.5 h-3.5" />, count: projects.filter(p => p.category === 'backend').length },
    { id: 'ai', label: 'Document AI & OCR', icon: <Brain className="w-3.5 h-3.5" />, count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Software & Architecture
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Real enterprise codebases engineered for scalability, offline reliability, and automated workflows.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-[1.02]'
                  : 'bg-[#0e1628] text-slate-300 hover:bg-slate-800 hover:text-white border border-white/5'
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                activeFilter === filter.id ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#0e1628]/90 border border-white/5 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/30 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-400 font-mono mt-1">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 space-y-2">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Repository Reference Footer */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-900/60 p-2 rounded-lg border border-white/5">
                    <span className="truncate max-w-[200px]" title={project.repoContext}>
                      📂 {project.repoContext}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 hover:underline ml-2 flex-shrink-0"
                    >
                      <span>Deep Dive</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Modal for Deep Dive */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative max-w-2xl w-full bg-[#0d1424] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    {selectedProject.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-emerald-400 font-mono">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <p className="leading-relaxed">{selectedProject.description}</p>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Production Repository Context</h4>
                  <p className="font-mono text-cyan-300 text-xs">{selectedProject.repoContext}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">All Architecture Highlights & Deliverables:</h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Full Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono transition-colors"
                >
                  Close Specification
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
