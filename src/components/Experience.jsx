import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Terminal, Layers } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Track Record
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Direct real-world contributions across enterprise repos, client apps, and Go services.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div
              key={exp.company}
              className="relative pl-8 sm:pl-10 pb-12 border-l-2 border-cyan-500/30 last:border-0 last:pb-0"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#090d16] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1628]/90 border border-white/10 hover:border-cyan-500/30 transition-all backdrop-blur-md shadow-xl">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-cyan-400 font-semibold text-base flex items-center gap-2 mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 font-mono">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono gap-1">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Core Technical Deliverables & Production Impact:
                  </h4>
                  {exp.keyAchievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
