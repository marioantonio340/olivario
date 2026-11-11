import React from 'react';
import { ExternalLink, Shield, FileText } from 'lucide-react';

export default function Footer({ onNavigate }) {
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
              Desenvolvimento de soluções digitais robustas, elegantes e escaláveis. Engenharia de software de ponta, inteligência autônoma e arquiteturas sustentáveis.
            </p>
            <p className="text-xs font-mono text-slate-500">
              Patos de Minas, MG • Brasil • CNPJ & Registro Oficial
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#22C55E] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#22C55E] transition-colors"
                >
                  Soluções & Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('dna')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#22C55E] transition-colors"
                >
                  DNA & Filosofia
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

          {/* Legal / Compliance (Essencial para Google Cloud & YouTube API) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">Governança & Políticas</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Em conformidade com a LGPD e políticas oficiais para serviços e integrações de APIs Google e YouTube.
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={() => {
                  onNavigate('privacy');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 hover:text-[#22C55E] transition-colors text-sm"
              >
                <Shield className="w-4 h-4 text-[#22C55E]" />
                Política de Privacidade
              </button>
              <button
                onClick={() => {
                  onNavigate('terms');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 hover:text-[#22C55E] transition-colors text-sm"
              >
                <FileText className="w-4 h-4 text-[#84CC16]" />
                Termos de Serviço & Uso de APIs
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Olivario Software (olivario.com.br). Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>DNS & Edge via Cloudflare</span>
            <span>•</span>
            <span>Deploy via GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
