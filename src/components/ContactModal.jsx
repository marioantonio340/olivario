import React, { useState } from 'react';
import { X, Mail, Copy, Check } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const email = 'contato@olivario.com.br';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#22C55E]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Agendar Diagnóstico</h3>
            <p className="text-xs text-slate-400">Olivario Software • Atendimento Corporativo</p>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          Quer desenvolver um sistema sob medida, implementar agentes de Inteligência Artificial ou automatizar processos internos? Entre em contato com nossa equipe.
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B132B] border border-slate-800">
            <div>
              <p className="text-xs text-slate-400">E-mail Comercial</p>
              <p className="text-sm font-semibold text-white">{email}</p>
            </div>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#22C55E]" /> Copiado
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copiar
                </>
              )}
            </button>
          </div>

          <a
            href={`mailto:${email}?subject=Diagnostico%20Empresarial%20-%20Olivario%20Software`}
            className="w-full py-3.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#0B132B] font-bold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Enviar E-mail Agora
          </a>
        </div>
      </div>
    </div>
  );
}
