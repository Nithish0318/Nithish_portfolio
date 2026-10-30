import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ArchitectureExplorer from './components/ArchitectureExplorer';
import Skills from './components/Skills';
import CodeShowcase from './components/CodeShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <ArchitectureExplorer />
        <Skills />
        <CodeShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

