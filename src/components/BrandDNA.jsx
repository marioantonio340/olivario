import React from 'react';
import { Sprout, UserCheck, Target, Compass, Shield } from 'lucide-react';

export default function BrandDNA() {
  return (
    <section id="dna" className="py-20 bg-[#0F172A]/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-mono uppercase tracking-wider text-[#22C55E] mb-2">
            01 // Essência & DNA da Marca
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Precisão computacional aliada à longevidade e integridade.
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            O nome <strong className="text-white">OLIVARIO</strong> representa uma síntese orgânica de dois pilares que regem cada projeto e sistema construído em nossa casa.
          </p>
        </div>

        {/* Two Pillars of the Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="tech-card rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center mb-6">
              <Sprout className="w-6 h-6 text-[#22C55E]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">A Oliva (Oliveira)</h3>
            <p className="text-slate-300 leading-relaxed">
              Símbolo milenar de longevidade, raízes profundas, resiliência e vitalidade constante. No ecossistema de software, traduz-se em arquiteturas estáveis, sistemas sustentáveis a longo prazo e código limpo.
            </p>
          </div>

          <div className="tech-card rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-[#0284C7]/15 border border-[#0284C7]/30 flex items-center justify-center mb-6">
              <UserCheck className="w-6 h-6 text-[#0284C7]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">A Assinatura Humana (Mário)</h3>
            <p className="text-slate-300 leading-relaxed">
              Representa o comprometimento direto, a liderança técnica e o rigor profissional do fundador Mário Fernandes. Humaniza a tecnologia e garante responsabilidade transparente em cada projeto entregue.
            </p>
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0B132B] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-5 h-5 text-[#22C55E]" />
              <h4 className="font-bold text-white text-lg">Missão</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Construir softwares que transformem processos complexos em experiências simples, seguras e altamente eficientes.
            </p>
          </div>

          <div className="bg-[#0B132B] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Compass className="w-5 h-5 text-[#84CC16]" />
              <h4 className="font-bold text-white text-lg">Visão</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ser referência em desenvolvimento confiável e inovação pragmática no ecossistema tecnológico brasileiro e global.
            </p>
          </div>

          <div className="bg-[#0B132B] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-[#0284C7]" />
              <h4 className="font-bold text-white text-lg">Valores</h4>
            </div>
            <ul className="text-slate-400 text-sm space-y-1.5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> Solidez de engenharia
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> Clareza e transparência
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> Inovação pragmática
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> Foco na longevidade
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
