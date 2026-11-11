import React from 'react';
import { ArrowRight, Code, ShieldCheck, Cpu, Terminal, Sparkles } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#22C55E]/10 via-[#0284C7]/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A] border border-[#22C55E]/30 text-xs sm:text-sm font-mono text-emerald-400 shadow-inner">
              <Sparkles className="w-4 h-4 text-[#84CC16]" />
              <span>Engenharia de Software de Ponta & Resiliência</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Soluções digitais robustas, elegantes e{' '}
              <span className="gradient-tech">feitas para durar.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Transformamos processos de alta complexidade em experiências simples, seguras e eficientes. Aliamos arquiteturas sustentáveis a longo prazo com código limpo e inovação pragmática.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#0B132B] font-bold text-base transition-all duration-200 shadow-xl shadow-[#22C55E]/20 flex items-center justify-center gap-2.5 group"
              >
                Falar com a Engenharia
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#solucoes"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-slate-200 font-semibold text-base transition-all duration-200 border border-slate-700/80 flex items-center justify-center gap-2"
              >
                Explorar Soluções
              </a>
            </div>

            {/* Quick Metrics / Guarantees */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold font-mono text-white">99.9%</p>
                <p className="text-xs text-slate-400 mt-0.5">Disponibilidade</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-[#22C55E]">Clean</p>
                <p className="text-xs text-slate-400 mt-0.5">Architecture</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-[#84CC16]">2026/27</p>
                <p className="text-xs text-slate-400 mt-0.5">Ready Stack</p>
              </div>
            </div>
          </div>

          {/* Interactive Visual / Terminal (Snippet Oficial do Manual) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0F172A] border border-slate-800 shadow-2xl overflow-hidden shadow-emerald-950/20">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0B132B] border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>core-engine.ts</span>
                </div>
                <div className="w-12"></div>
              </div>

              {/* Code Snippet as specified in the Brand Manual */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed space-y-3 bg-[#0F172A]/90 text-slate-300 overflow-x-auto">
                <p className="text-slate-500">// Olivario Software Core Client</p>
                <p>
                  <span className="text-[#84CC16]">const</span>{' '}
                  <span className="text-blue-400">olivario</span> ={' '}
                  <span className="text-[#84CC16]">new</span>{' '}
                  <span className="text-amber-400">OlivarioClient</span>({'{'}
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">domain:</span>{' '}
                  <span className="text-[#22C55E]">"olivario.com.br"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">architecture:</span>{' '}
                  <span className="text-[#22C55E]">"Distributed & Resilient"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">monitoring:</span>{' '}
                  <span className="text-[#22C55E]">"Continuous"</span>
                </p>
                <p>{'}'});</p>
                <div className="pt-1">
                  <p>
                    <span className="text-[#84CC16]">await</span>{' '}
                    <span className="text-blue-400">olivario</span>.
                    <span className="text-amber-400">initialize</span>({'{'}
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">env:</span>{' '}
                    <span className="text-[#22C55E]">"production"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">version:</span>{' '}
                    <span className="text-[#22C55E]">"1.0.0"</span>
                  </p>
                  <p>{'}'});</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-xs flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                    Cluster Status: Healthy
                  </span>
                  <span className="font-mono">Latência: 12ms</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

