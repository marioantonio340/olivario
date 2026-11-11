import React from 'react';
import { Cloud, Bot, Workflow, LayoutDashboard, ArrowUpRight, Check } from 'lucide-react';

const solutions = [
  {
    icon: Cloud,
    color: 'text-[#0284C7]',
    bg: 'bg-[#0284C7]/10 border-[#0284C7]/25',
    badge: 'Especialidade Principal',
    title: 'Consultoria Salesforce & CRM',
    description:
      'Transformamos o Salesforce no motor comercial da sua empresa. Da implementação inicial à customização avançada, organizamos seu processo de vendas para escalar com previsibilidade.',
    features: [
      'Implementação de Sales Cloud e Service Cloud',
      'Automação de fluxos comerciais e funil de vendas',
      'Dashboards gerenciais e previsão de receita em tempo real',
    ],
  },
  {
    icon: Bot,
    color: 'text-[#22C55E]',
    bg: 'bg-[#22C55E]/10 border-[#22C55E]/25',
    badge: 'Alta Produtividade',
    title: 'Soluções de Inteligência Artificial',
    description:
      'Aplicamos Inteligência Artificial prática no dia a dia do seu negócio para atender clientes instantaneamente, qualificar oportunidades e acelerar a operação da sua equipe.',
    features: [
      'Agentes de IA para atendimento e pré-vendas 24/7',
      'Assistentes corporativos treinados com os dados da empresa',
      'Análise inteligente e leitura automática de documentos',
    ],
  },
  {
    icon: Workflow,
    color: 'text-[#84CC16]',
    bg: 'bg-[#84CC16]/10 border-[#84CC16]/25',
    badge: 'Eficiência Operacional',
    title: 'Automação & Integrações',
    description:
      'Acabe com o retrabalho e as planilhas desconectadas. Conectamos seu CRM, ERP, WhatsApp e sistema financeiro para que as informações fluam automaticamente sem erros humanos.',
    features: [
      'Integração completa entre Salesforce, ERPs e WhatsApp',
      'Eliminação de tarefas manuais repetitivas entre setores',
      'Notificações automáticas e sincronização em tempo real',
    ],
  },
  {
    icon: LayoutDashboard,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/25',
    badge: 'Sob Medida',
    title: 'Plataformas & Portais Corporativos',
    description:
      'Quando ferramentas prontas não atendem à realidade da sua operação, criamos sistemas exclusivos, fáceis de usar e projetados exatamente para as regras do seu negócio.',
    features: [
      'Portais exclusivos para atendimento a clientes e parceiros',
      'Painéis de gestão sob medida para diretores e gestores',
      'Acompanhamento evolutivo e suporte especializado',
    ],
  },
];

export default function Solutions({ onOpenContact }) {
  return (
    <section id="solucoes" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#22C55E] mb-2">
              Nossas Soluções
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              O que fazemos para impulsionar a sua empresa.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base">
            Soluções pensadas para gerar retorno financeiro, economizar horas da sua equipe e estruturar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="tech-card rounded-2xl p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.bg}`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#22C55E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-800/80 pt-5 mb-5">
                    <ul className="space-y-2.5">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-sm text-slate-300 flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#22C55E] hover:text-[#84CC16] transition-colors"
                  >
                    Falar sobre esta solução <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
