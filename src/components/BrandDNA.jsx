import React from 'react';
import { Sprout, UserCheck, Target, Compass, ShieldCheck } from 'lucide-react';

export default function BrandDNA() {
  return (
    <section id="dna" className="py-20 bg-[#0F172A]/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#22C55E] mb-2">
            Sobre a Olivario Software
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Parceria estratégica com foco no crescimento real do seu negócio.
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Mais do que entregar tecnologia, assumimos o compromisso de construir soluções duradouras, fáceis de operar e que geram impacto direto no faturamento e na produtividade da sua empresa.
          </p>
        </div>

        {/* Two Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="tech-card rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center mb-6">
              <Sprout className="w-6 h-6 text-[#22C55E]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Soluções Feitas para Durar</h3>
            <p className="text-slate-300 leading-relaxed">
              Inspirada na oliveira, nossa filosofia prioriza bases sólidas e confiáveis. Evitamos soluções improvisadas: estruturamos seus processos, suas automações e seus sistemas para sustentar a expansão da sua empresa por anos.
            </p>
          </div>

          <div className="tech-card rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-[#0284C7]/15 border border-[#0284C7]/30 flex items-center justify-center mb-6">
              <UserCheck className="w-6 h-6 text-[#0284C7]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Atendimento Direto e Transparente</h3>
            <p className="text-slate-300 leading-relaxed">
              Aqui você não fala com atendentes genéricos nem enfrenta burocracia de grandes agências. Cada projeto conta com acompanhamento consultivo próximo e equipe especializada, falando a língua do seu negócio com total clareza.
            </p>
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0B132B] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-5 h-5 text-[#22C55E]" />
              <h4 className="font-bold text-white text-lg">Nossa Missão</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transformar processos complexos em rotinas simples, seguras e altamente eficientes através de automação, IA e sistemas sob medida.
            </p>
          </div>

          <div className="bg-[#0B132B] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Compass className="w-5 h-5 text-[#84CC16]" />
              <h4 className="font-bold text-white text-lg">Nossa Visão</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ser a parceira de confiança de empresas que buscam modernizar vendas e operações com pragmatismo e resultados comprovados.
            </p>
          </div>

          <div className="bg-[#0B132B] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-[#0284C7]" />
              <h4 className="font-bold text-white text-lg">Nossos Pilares</h4>
            </div>
            <ul className="text-slate-400 text-sm space-y-1.5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> Clareza e transparência total
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> Inovação com foco em retorno
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> Solidez e confiabilidade
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> Comprometimento de longo prazo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
