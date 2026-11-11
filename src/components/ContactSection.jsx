import React from 'react';
import { MapPin, Mail, Briefcase, ArrowRight, Globe } from 'lucide-react';

export default function ContactSection({ onOpenContact }) {
  return (
    <section id="contato" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#0B132B] border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/25 text-xs font-semibold text-[#22C55E]">
                Atendimento Corporativo
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Pronto para elevar a eficiência da sua empresa?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                A equipe da <strong className="text-white">Olivario Software</strong> atua lado a lado com o seu negócio, unindo visão estratégica, Inteligência Artificial e desenvolvimento de software sob medida para entregar soluções seguras, no prazo e com foco em resultados reais.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-7 py-4 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#0B132B] font-bold text-sm sm:text-base transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#22C55E]/20 group"
                >
                  <Mail className="w-4 h-4" />
                  Solicitar Proposta ou Reunião
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Institutional Corporate Card */}
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
                    <h3 className="text-xl font-bold text-white">Olivario Software</h3>
                    <p className="text-sm font-medium text-[#22C55E]">
                      Soluções Digitais & Inteligência Artificial
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      olivario.com.br
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-4 border-t border-slate-800/80 text-sm text-slate-300">
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
                    <span>Patos de Minas, MG • Brasil</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Atendimento Remoto Nacional e Internacional</span>
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
