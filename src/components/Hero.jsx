import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Laptop, Bot, Layers, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[480px] bg-gradient-to-tr from-[#22C55E]/10 via-[#0284C7]/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Business Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A] border border-[#22C55E]/30 text-xs sm:text-sm font-medium text-emerald-400 shadow-inner">
              <Sparkles className="w-4 h-4 text-[#84CC16]" />
              <span>Soluções Digitais Corporativas & Inteligência Artificial</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Aceleramos os resultados da sua empresa com{' '}
              <span className="gradient-tech">Tecnologia e IA.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Criamos sistemas sob medida, implementamos soluções de Inteligência Artificial que eliminam o trabalho manual e conectamos os processos da sua operação para sua equipe vender e atender muito melhor.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#0B132B] font-bold text-base transition-all duration-200 shadow-xl shadow-[#22C55E]/20 flex items-center justify-center gap-2.5 group"
              >
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#solucoes"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-slate-200 font-semibold text-base transition-all duration-200 border border-slate-700/80 flex items-center justify-center gap-2"
              >
                Conhecer Soluções
              </a>
            </div>

            {/* B2B Trust Indicators */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-lg sm:text-xl font-bold text-white">Sob Medida</p>
                <p className="text-xs text-slate-400 mt-0.5">Sistemas & Web</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-[#22C55E]">IA Aplicada</p>
                <p className="text-xs text-slate-400 mt-0.5">Automação Real</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-[#84CC16]">Integração</p>
                <p className="text-xs text-slate-400 mt-0.5">Foco em ROI</p>
              </div>
            </div>
          </div>

          {/* Executive Impact Visual (Business Value Card) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0F172A]/90 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
                    Impacto nos Negócios
                  </p>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    Como impulsionamos sua empresa
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#22C55E]" />
                </div>
              </div>

              <div className="space-y-4">
                {/* Card 1: Custom Software */}
                <div className="p-4 rounded-2xl bg-[#0B132B] border border-slate-800/90 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0284C7]/15 border border-[#0284C7]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Laptop className="w-5 h-5 text-[#0284C7]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      Plataformas & Sistemas Sob Medida
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      Ferramentas exclusivas, painéis de controle e aplicações web desenhadas para organizar sua operação e escalar vendas.
                    </p>
                  </div>
                </div>

                {/* Card 2: AI Solutions */}
                <div className="p-4 rounded-2xl bg-[#0B132B] border border-slate-800/90 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-5 h-5 text-[#22C55E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      Agentes de Inteligência Artificial
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      Atendimento inteligente 24/7, triagem de clientes, análise automática de documentos e assistentes internos para sua equipe.
                    </p>
                  </div>
                </div>

                {/* Card 3: Automations & Integrations */}
                <div className="p-4 rounded-2xl bg-[#0B132B] border border-slate-800/90 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#84CC16]/15 border border-[#84CC16]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-5 h-5 text-[#84CC16]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      Automação & Integração de Processos
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      Conecte suas ferramentas comerciais, WhatsApp, atendimento e financeiro em tempo real, eliminando retrabalho manual.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  Atendimento Consultivo Direto
                </span>
                <span className="text-[#22C55E] font-semibold">Brasil & Global</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
