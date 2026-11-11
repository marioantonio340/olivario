import React from 'react';
import { Lock, GitBranch, Cpu, Activity, Database, Globe } from 'lucide-react';

const pillars = [
  {
    icon: Lock,
    title: 'Segurança por Padrão',
    desc: 'SSL estrito, fluxos OAuth2 compatíveis, proteção Cloudflare e governança rigorosa de dados.'
  },
  {
    icon: GitBranch,
    title: 'CI/CD Automatizado',
    desc: 'Pipelines contínuos de testes e deploy garantindo entregas rápidas sem comprometer a estabilidade.'
  },
  {
    icon: Cpu,
    title: 'Inteligência Pragmática',
    desc: 'Uso estratégico de modelos de IA e automações focadas em eficiência operacional real.'
  },
  {
    icon: Activity,
    title: 'Observabilidade',
    desc: 'Logs estruturados, telemetria e monitoramento contínuo de latência e saúde dos serviços.'
  },
  {
    icon: Database,
    title: 'Persistência Sólida',
    desc: 'Modelagem relacional e distribuída projetada para consistência e consultas de alta velocidade.'
  },
  {
    icon: Globe,
    title: 'Edge & Performance',
    desc: 'Distribuição global de ativos estáticos e cache inteligente para carregamento instantâneo.'
  }
];

export default function Architecture() {
  return (
    <section id="arquitetura" className="py-24 bg-[#0F172A]/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-mono uppercase tracking-wider text-[#22C55E] mb-2">
            03 // Padrões de Engenharia
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Fundamentos arquiteturais que sustentam o código.
          </h2>
          <p className="mt-4 text-slate-400">
            Cada projeto segue diretrizes estritas de legibilidade, escalabilidade e conformidade técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-[#0B132B] border border-slate-800/90 rounded-2xl p-6 hover:border-[#22C55E]/40 transition-colors">
                <Icon className="w-6 h-6 text-[#22C55E] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

