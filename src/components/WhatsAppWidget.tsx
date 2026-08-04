import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/pizzaData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenChat = () => {
    const text = encodeURIComponent('Olá! Encontrei o site da Pizza Taco e gostaria de orçar um buffet de pizza para meu evento!');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" id="whatsapp-floating-widget">
      {/* Popover Card */}
      <div className="relative max-w-xs bg-amber-950 border border-amber-500/50 text-white rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-stone-400 hover:text-white p-1 cursor-pointer"
          title="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 bg-[#25D366] rounded-full animate-ping" />
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Atendimento Online
          </span>
        </div>

        <p className="text-xs text-amber-100 font-medium leading-snug">
          👋 Olá! Quer saber o valor do buffet de Pizza Taco para a sua festa?
        </p>

        <button
          onClick={handleOpenChat}
          className="mt-3 w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          <span>Falar no WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
