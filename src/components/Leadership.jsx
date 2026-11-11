import React from 'react';
import { ExternalLink, MapPin, Mail, Linkedin, Github } from 'lucide-react';

export default function Leadership({ onOpenContact }) {
  return (
    <section id="lideranca" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#0B132B] border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/25 text-xs font-mono text-[#22C55E]">
                04 // Liderança Técnica
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Comprometimento direto do fundador em cada entrega.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                A <strong className="text-white">Olivario Software</strong> é liderada por <strong className="text-white">Mário Fernandes</strong>. Falamos com a clareza de engenheiros que dominam a técnica e a empatia de consultores focados no sucesso real do negócio do cliente.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://portfolio.olivario.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors inline-flex items-center gap-2"
                >
                  Acessar Portfólio Pessoal
                  <ExternalLink className="w-4 h-4 text-[#22C55E]" />
                </a>

                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#0B132B] font-bold text-sm transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Entrar em Contato
                </button>
              </div>
            </div>

            {/* Digital Business Card (from Page 8 of Brand Manual) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#0B132B] border border-slate-800 p-6 sm:p-8 shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0F172A] border border-slate-700 flex items-center justify-center p-2.5 shrink-0">
                    <img
                      src="/symbol-olivario-icon.svg"
                      alt="Olivario Symbol"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Mário Fernandes</h3>
                    <p className="text-sm font-medium text-[#22C55E]">
                      Fundador & Engenheiro Chefe
                    </p>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      Olivario Software • olivario.com.br
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800/80 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <a href="mailto:contato@olivario.com.br" className="hover:text-white transition-colors">
                      contato@olivario.com.br
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>Patos de Minas, MG • Brasil</span>
                  </div>
                  <div className="flex items-center gap-4 pt-3">
                    <a
                      href="https://www.linkedin.com/in/mariofernandes340/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#22C55E] transition-colors flex items-center gap-1.5 text-xs font-mono"
                    >
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a
                      href="https://github.com/marioantonio340"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#22C55E] transition-colors flex items-center gap-1.5 text-xs font-mono"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
