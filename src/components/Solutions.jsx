import React from 'react';
import { Layers, Bot, Server, Code2, ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    icon: Layers,
    color: 'text-[#22C55E]',
    bg: 'bg-[#22C55E]/10 border-[#22C55E]/25',
    title: 'Plataformas Web & SaaS',
    tag: 'Full-Stack Engineering',
    description:
      'Construção de aplicações web modernas, painéis corporativos e produtos SaaS sob medida com foco em usabilidade, performance e escala.',
    features: ['React, TypeScript & Node.js', 'Arquitetura Multi-Tenant', 'Interfaces Responsivas WCAG AA'],
  },
  {
    icon: Bot,
    color: 'text-[#84CC16]',
    bg: 'bg-[#84CC16]/10 border-[#84CC16]/25',
    title: 'Agentes de IA & Automação',
    tag: 'Autonomous Pipelines',
    description:
      'Desenvolvimento de sistemas autônomos para produção de mídia, orquestração de APIs, fluxos inteligentes e redução de trabalho operacional.',
    features: ['Pipelines Autônomos 24/7', 'Integração LLMs & APIs Google/YouTube', 'Processamento Assíncrono'],
  },
  {
    icon: Server,
    color: 'text-[#0284C7]',
    bg: 'bg-[#0284C7]/10 border-[#0284C7]/25',
    title: 'Cloud, APIs & Microsserviços',
    tag: 'Distributed Infrastructure',
    description:
      'Projeto e implantação de APIs REST/GraphQL de alta disponibilidade, integrações críticas entre sistemas e governança na nuvem.',
    features: ['AWS, Cloudflare & GitHub Actions', 'Segurança OAuth2 & Zero Trust', 'Alta Disponibilidade'],
  },
  {
    icon: Code2,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/25',
    title: 'Modernização & Consultoria',
    tag: 'Technical Leadership',
    description:
      'Auditoria de código, refatoração de sistemas legados, otimização de banco de dados e consultoria estratégica para equipes de tecnologia.',
    features: ['Clean Code & Domain-Driven Design', 'Otimização de Performance', 'Mentoria Arquitetural'],
  },
];

export default function Solutions({ onOpenContact }) {
  return (
    <section id="solucoes" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-mono uppercase tracking-wider text-[#22C55E] mb-2">
              02 // Soluções & Capacidades
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Engenharia orientada a resultados concretos.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base">
            Evitamos jargões vazios. Entregamos sistemas estruturados para sustentar o crescimento do seu negócio.
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
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#22C55E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-800/80 pt-5 mb-4">
                    <ul className="space-y-2">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs sm:text-sm font-mono text-slate-400 flex items-center gap-2">
                          <span className="text-[#22C55E]">›</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22C55E] hover:text-[#84CC16] transition-colors"
                  >
                    Solicitar escopo <ArrowUpRight className="w-4 h-4" />
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
