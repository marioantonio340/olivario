import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Terminal } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B132B]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official Brand Logo (Minimum width >= 140px, 1.5X protection zone) */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none py-2"
            aria-label="Olivario Software Home"
          >
            <img
              src="/logo-olivario-dark.svg"
              alt="Olivario Software"
              className="h-9 sm:h-10 w-auto min-w-[140px] object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('dna')}
              className="hover:text-[#22C55E] transition-colors"
            >
              Essência
            </button>
            <button
              onClick={() => handleNavClick('solucoes')}
              className="hover:text-[#22C55E] transition-colors"
            >
              Soluções
            </button>
            <button
              onClick={() => handleNavClick('arquitetura')}
              className="hover:text-[#22C55E] transition-colors"
            >
              Engenharia
            </button>
            <button
              onClick={() => handleNavClick('lideranca')}
              className="hover:text-[#22C55E] transition-colors"
            >
              Liderança
            </button>
            <a
              href="https://portfolio.olivario.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#22C55E] transition-colors"
            >
              Portfólio <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A] border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
              Systems Online
            </div>
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-[#0B132B] font-semibold text-sm transition-all shadow-lg shadow-[#22C55E]/20 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              Iniciar Projeto
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-2xl">
          <button
            onClick={() => handleNavClick('dna')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-[#22C55E] font-medium"
          >
            Essência
          </button>
          <button
            onClick={() => handleNavClick('solucoes')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-[#22C55E] font-medium"
          >
            Soluções
          </button>
          <button
            onClick={() => handleNavClick('arquitetura')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-[#22C55E] font-medium"
          >
            Engenharia
          </button>
          <button
            onClick={() => handleNavClick('lideranca')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-[#22C55E] font-medium"
          >
            Liderança
          </button>
          <a
            href="https://portfolio.olivario.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-[#22C55E] font-medium"
          >
            Portfólio do Fundador
            <ExternalLink className="w-4 h-4" />
          </a>
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenContact();
              }}
              className="w-full px-4 py-3 rounded-lg bg-[#22C55E] text-[#0B132B] font-bold text-center flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              Iniciar Projeto
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

