import React from 'react';
import { ArrowLeft, FileText, CheckCircle, ExternalLink } from 'lucide-react';

export default function TermsOfService({ onNavigate }) {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#22C55E] hover:text-[#84CC16] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar à Página Inicial
        </button>

        <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          
          <div className="border-b border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84CC16]/10 border border-[#84CC16]/25 text-xs font-mono text-[#84CC16] mb-3">
              <FileText className="w-3.5 h-3.5" /> Termos & Condições de Uso
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Termos de Serviço
            </h1>
            <p className="text-slate-400 text-sm mt-2 font-mono">
              Vigência: 2026/2027 • Olivario Software (olivario.com.br)
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#22C55E]">1.</span> Aceitação dos Termos
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Ao acessar o site <strong>olivario.com.br</strong> ou utilizar quaisquer ferramentas de software, APIs, scripts de automação ou serviços desenvolvidos pela <strong>Olivario Software</strong>, você concorda expressamente com os presentes Termos de Serviço.
            </p>
          </section>

          {/* Section 2 - YouTube Terms */}
          <section className="space-y-3 p-6 rounded-2xl bg-[#0B132B] border border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#22C55E]">2.</span> Integrações e Serviços de API do YouTube
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Os aplicativos da Olivario Software que interagem com o YouTube operam sob os <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] underline inline-flex items-center gap-1">Termos de Serviço do YouTube <ExternalLink className="w-3 h-3" /></a> e as <a href="https://developers.google.com/youtube/terms/api-services-terms-of-service" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] underline inline-flex items-center gap-1">Diretrizes de Desenvolvedores do YouTube API <ExternalLink className="w-3 h-3" /></a>. O uso dessas integrações pressupõe a adesão irrestrita aos referidos termos.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#22C55E]">3.</span> Propriedade Intelectual
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              A marca <strong>Olivario Software</strong>, o logotipo oficial, manuais de identidade, códigos-fonte proprietários, arquiteturas e conteúdos institucionais são de titularidade exclusiva de Mário Fernandes e da Olivario Software, protegidos pelas leis brasileiras e internacionais de propriedade intelectual e direitos autorais.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#22C55E]">4.</span> Limitação de Responsabilidade
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Os softwares e automações são desenvolvidos com padrões rigorosos de engenharia e resiliência. A Olivario Software não se responsabiliza por indisponibilidades decorrentes de falhas em provedores terceiros (como Google Cloud, GitHub Pages, Cloudflare ou instabilidades de rede do usuário).
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#22C55E]">5.</span> Legislação Aplicável e Foro
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer controvérsias oriundas deste documento, fica eleito o Foro da Comarca de Patos de Minas, Estado de Minas Gerais.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
