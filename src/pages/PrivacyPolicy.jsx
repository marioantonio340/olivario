import React from 'react';
import { ArrowLeft, Shield, Lock, CheckCircle, ExternalLink } from 'lucide-react';

export default function PrivacyPolicy({ onNavigate }) {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/25 text-xs font-mono text-[#22C55E] mb-3">
              <Shield className="w-3.5 h-3.5" /> Governança & Conformidade Legal
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Política de Privacidade
            </h1>
            <p className="text-slate-400 text-sm mt-2 font-mono">
              Última atualização: {new Date().toLocaleDateString('pt-BR')} • Olivario Software (olivario.com.br)
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#22C55E]">1.</span> Visão Geral e Compromisso
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              A <strong>Olivario Software</strong>, de titularidade de Mário Fernandes, com sede em Patos de Minas, MG, Brasil, preza pela transparência, privacidade e segurança estrita dos dados de seus usuários, parceiros e clientes. Esta política estabelece como tratamos informações em nosso site institucional (<a href="https://olivario.com.br" className="text-[#22C55E] underline">olivario.com.br</a>) e em nossos aplicativos e integrações de software, agentes autônomos e ferramentas de orquestração.
            </p>
          </section>

          {/* Section 2 - Google API & YouTube Data Policy (CRÍTICO PARA GOOGLE CLOUD OAUTH) */}
          <section className="space-y-4 p-6 rounded-2xl bg-[#0B132B] border border-emerald-900/40">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#22C55E]" />
              <span className="text-[#22C55E]">2.</span> Uso de Dados de Serviços e APIs do Google (YouTube API Services)
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Nossas aplicações e scripts de automação interagem com os <strong>Serviços de API do YouTube (YouTube API Services)</strong> e APIs do Google Cloud para fins de gerenciamento e agendamento de conteúdo audiovisual em canais autorizados.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                <span><strong>Princípio do Privilégio Mínimo:</strong> Solicitamos apenas os escopos estritamente necessários para upload e publicação de vídeos (ex: <code>youtube.upload</code> e <code>youtube.readonly</code>).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                <span><strong>Não Compartilhamento:</strong> Não vendemos, alugamos nem transferimos credenciais ou dados obtidos via Google APIs para terceiros, ferramentas de publicidade externa ou corretores de dados.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                <span><strong>Google API Services User Data Policy:</strong> O uso e a transferência de informações recebidas de APIs do Google para qualquer outro aplicativo obedecerão estritamente à <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] underline inline-flex items-center gap-1">Google API Services User Data Policy <ExternalLink className="w-3 h-3" /></a>, incluindo os requisitos de <em>Uso Limitado (Limited Use)</em>.</span>
              </div>
            </div>
          </section>

          {/* Section 3 - Armazenamento de Tokens e Revogação */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#22C55E]">3.</span> Armazenamento Seguro e Revogação de Acesso
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Tokens de autenticação OAuth2 (Access Tokens e Refresh Tokens) são criptografados e armazenados em ambiente controlado estritamente pelo operador da automação. Os usuários têm o direito de revogar o acesso a qualquer momento através das configurações de segurança do Google na página oficial: <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] underline inline-flex items-center gap-1">Permissões de Conta Google <ExternalLink className="w-3 h-3" /></a>.
            </p>
          </section>

          {/* Section 4 - LGPD */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#22C55E]">4.</span> Conformidade com a LGPD (Lei nº 13.709/2018)
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Em cumprimento à Lei Geral de Proteção de Dados Pessoais (LGPD), garantimos aos titulares o direito de confirmação de existência de tratamento, acesso aos dados, correção de informações incompletas ou eliminação de dados pessoais tratados com consentimento.
            </p>
          </section>

          {/* Section 5 - Contato */}
          <section className="space-y-3 pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#22C55E]">5.</span> Encarregado de Dados (DPO) & Contato
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Para esclarecimentos sobre esta política ou solicitação de exclusão de dados:
            </p>
            <p className="text-sm font-mono text-slate-200">
              Mário Fernandes • <a href="mailto:contato@olivario.com.br" className="text-[#22C55E] underline">contato@olivario.com.br</a><br />
              Olivario Software • Patos de Minas, MG, Brasil
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
