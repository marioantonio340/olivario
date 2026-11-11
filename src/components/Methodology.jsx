import React from 'react';
import { Search, Map, Rocket, HeartHandshake, TrendingUp, Shield } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Diagnóstico de Negócio',
    desc: 'Mapeamos seus gargalos comerciais e operacionais para identificar exatamente onde sistemas, IA ou automações trarão maior impacto.'
  },
  {
    icon: Map,
    step: '02',
    title: 'Plano Claro & Objetivo',
    desc: 'Apresentamos um escopo transparente com prazos definidos, investimentos claros e metas mensuráveis antes de qualquer linha de configuração.'
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Implementação Ágil',
    desc: 'Entregas semanais progressivas. Sua empresa não espera meses para ver valor — os ganhos operacionais já aparecem nas primeiras semanas.'
  },
  {
    icon: Shield,
    step: '04',
    title: 'Segurança & Governança',
    desc: 'Todos os fluxos, integrações e dados da sua empresa operam com proteção de nível corporativo e controle estrito de acessos.'
  },
  {
    icon: HeartHandshake,
    step: '05',
    title: 'Treinamento da Equipe',
    desc: 'Capacitamos seus vendedores e operadores para extrair o máximo das novas ferramentas sem resistência nem perda de tempo.'
  },
  {
    icon: TrendingUp,
    step: '06',
    title: 'Evolução Contínua (ROI)',
    desc: 'Acompanhamos os resultados pós-implantação para ajustar processos e acompanhar a escala do seu faturamento.'
  }
];

export default function Methodology({ onOpenContact }) {
  return (
    <section id="metodologia" className="py-24 bg-[#0F172A]/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#22C55E] mb-2">
            Como Trabalhamos
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Do diagnóstico inicial ao resultado em operação.
          </h2>
          <p className="mt-4 text-slate-400">
            Um processo estruturado para que sua empresa contrate com segurança, acompanhe cada etapa e veja retorno real rapidamente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0B132B] border border-slate-800/90 rounded-2xl p-6 hover:border-[#22C55E]/40 transition-colors relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/25 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#22C55E]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-[#22C55E] transition-colors">
                    ETAPA {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA banner inside Methodology */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#0B132B] via-[#0F172A] to-[#0B132B] border border-[#22C55E]/25 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Quer entender como aplicar automação, sistemas ou IA na realidade da sua empresa?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Agende uma conversa de 30 minutos sem compromisso para mapearmos suas oportunidades de melhoria.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#0B132B] font-bold text-sm transition-all shadow-lg shadow-[#22C55E]/20"
          >
            Agendar Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
}

