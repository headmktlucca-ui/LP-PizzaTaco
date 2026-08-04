import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/pizzaData';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenChat = () => {
    const text = encodeURIComponent('Olá! Encontrei o site da Pizza Taco e gostaria de orçar um buffet de pizza para meu evento!');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" id="whatsapp-floating-widget">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="relative max-w-xs bg-amber-950 border border-amber-500/50 text-white rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom duration-300">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-stone-400 hover:text-white p-1"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Atendimento Online
            </span>
          </div>

          <p className="text-xs text-amber-100 font-medium leading-snug">
            👋 Olá! Quer saber o valor do buffet de Pizza Taco para a sua festa?
          </p>

          <button
            onClick={handleOpenChat}
            className="mt-3 w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>
      )}

      {/* Floating Circle Button */}
      <button
        onClick={handleOpenChat}
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-950/60 transition-transform hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
        aria-label="Abrir WhatsApp Pizza Taco"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600 relative z-10" />
      </button>

    </div>
  );
};
