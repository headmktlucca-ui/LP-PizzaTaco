import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/pizzaData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/pizzaData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('espaco');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleWhatsappQuestion = () => {
    const text = encodeURIComponent('Olá! Tenho uma dúvida sobre a estrutura do buffet da Pizza Taco para meu evento.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-[#FFFBF0] text-[#2D2D2D] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#D42424] text-white text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 w-fit mx-auto shadow-sm">
            <HelpCircle className="w-4 h-4 text-[#FFB800]" />
            TIRA DÚVIDAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] font-bouncer">
            Perguntas Frequentes
          </h2>
          <p className="text-[#2D2D2D]/80 font-medium text-base">
            Principais dúvidas sobre nosso buffet.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 border-2 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FFB800] border-[#2D2D2D] shadow-md'
                    : 'bg-white border-[#2D2D2D]/10 hover:border-[#D42424]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className={`font-black text-base sm:text-lg ${
                    isOpen ? 'text-[#2D2D2D]' : 'text-[#2D2D2D]'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform ${
                    isOpen ? 'rotate-180 bg-[#D42424] text-white' : 'bg-[#FFFBF0] text-[#2D2D2D] border border-[#2D2D2D]/10'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#2D2D2D] leading-relaxed font-bold border-t-2 border-[#2D2D2D]/20 animate-in fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question CTA */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-white border-4 border-[#2D2D2D] space-y-3 shadow-sm">
          <h3 className="text-xl font-black text-[#D42424]">
            Ainda tem alguma dúvida específica sobre a sua festa?
          </h3>
          <p className="text-sm text-[#2D2D2D] font-bold">
            Nossa equipe responde rapidamente pelo WhatsApp e ajuda você a planejar a estrutura ideal!
          </p>
          <button
            onClick={handleWhatsappQuestion}
            className="mt-2 px-6 py-3.5 rounded-full bg-[#D42424] hover:bg-[#b81d1d] text-white font-black text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#D42424]" />
            <span>Falar com Atendente no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
