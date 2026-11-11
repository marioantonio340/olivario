import React from 'react';
import { ExternalLink, MapPin, Mail, Linkedin, Briefcase } from 'lucide-react';

export default function Leadership({ onOpenContact }) {
  return (
    <section id="lideranca" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#0B132B] border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/25 text-xs font-semibold text-[#22C55E]">
                Liderança & Atendimento Executivo
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Você negocia e evolui diretamente com quem lidera a solução.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                A <strong className="text-white">Olivario Software</strong> é liderada por <strong className="text-white">Mário Fernandes</strong>. Combinamos visão estratégica de negócios com domínio prático em automação, Inteligência Artificial e desenvolvimento de soluções corporativas para garantir entregas no prazo e resultados reais.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#0B132B] font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#22C55E]/20"
                >
                  <Mail className="w-4 h-4" />
                  Solicitar Proposta ou Reunião
                </button>

                <a
                  href="https://portfolio.olivario.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors inline-flex items-center gap-2"
                >
                  Conhecer Trajetória & Portfólio
                  <ExternalLink className="w-4 h-4 text-[#22C55E]" />
                </a>
              </div>
            </div>

            {/* Executive Contact Card */}
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
                      Fundador & Especialista em Soluções
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Olivario Software • olivario.com.br
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800/80 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>Sistemas Sob Medida • Soluções em IA • Automação</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <a href="mailto:contato@olivario.com.br" className="hover:text-white transition-colors">
                      contato@olivario.com.br
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>Patos de Minas, MG • Atendimento Brasil & Global</span>
                  </div>
                  <div className="flex items-center gap-4 pt-3">
                    <a
                      href="https://www.linkedin.com/in/mariofernandes340/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#22C55E] transition-colors flex items-center gap-1.5 text-xs font-medium"
                    >
                      <Linkedin className="w-4 h-4 text-[#0284C7]" /> Conectar no LinkedIn
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
