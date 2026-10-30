import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#060a12] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1.5px]">
              <div className="w-full h-full bg-[#090d16] rounded-[7px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-xs">
                  NK
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-white">{personal.name}</p>
              <p className="text-xs text-slate-400 font-mono">
                {personal.companyRole} @ {personal.company} (1.9+ Years)
              </p>
            </div>
          </div>

          {/* Socials & Top Button */}
          <div className="flex items-center gap-4">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-cyan-500/30 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <p>
            © {new Date().getFullYear()} {personal.name}.
          </p>
          {/* <p className="text-slate-400">
            Showcasing real codebases from <span className="text-cyan-400">ezapps</span> & <span className="text-emerald-400">ez_pos_local_service</span>
          </p> */}
        </div>

      </div>
    </footer>
  );
}

