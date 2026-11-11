import React from 'react';
import { ExternalLink, Mail, MapPin, Linkedin } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080E20] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <img
              src="/logo-olivario-dark.svg"
              alt="Olivario Software"
              className="h-9 w-auto object-contain"
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Consultoria Salesforce, soluções em Inteligência Artificial e desenvolvimento de plataformas corporativas para empresas que buscam eficiência e escala comercial.
            </p>
            <p className="text-xs text-slate-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
              Patos de Minas, MG • Atendimento Brasil & Global
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-[#22C55E] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('solucoes')}
                  className="hover:text-[#22C55E] transition-colors"
                >
                  Soluções & Salesforce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('dna')}
                  className="hover:text-[#22C55E] transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('metodologia')}
                  className="hover:text-[#22C55E] transition-colors"
                >
                  Como Trabalhamos
                </button>
              </li>
              <li>
                <a
                  href="https://portfolio.olivario.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#22C55E] transition-colors"
                >
                  Portfólio do Fundador <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Atendimento Comercial</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Agende um diagnóstico gratuito para avaliar como podemos otimizar suas vendas e operação.
            </p>
            <div className="space-y-2.5 pt-1">
              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 hover:text-[#22C55E] transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-[#22C55E]" />
                contato@olivario.com.br
              </button>
              <a
                href="https://www.linkedin.com/in/mariofernandes340/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#22C55E] transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4 text-[#0284C7]" />
                LinkedIn Corporativo
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Olivario Software (olivario.com.br). Todos os direitos reservados.</p>
          <p>Consultoria Salesforce • Inteligência Artificial • Soluções Empresariais</p>
        </div>
      </div>
    </footer>
  );
}
