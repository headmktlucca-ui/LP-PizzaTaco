import React from 'react';
import { Sparkles } from 'lucide-react';
import saindoDoFornoVideo from '../assets/images/Saidoforno.mp4';

const STEPS = [
  {
    step: '01',
    title: 'Solicite seu orçamento',
    description: 'Conte sobre seu evento por WhatsApp ou pelo formulário.',
  },
  {
    step: '02',
    title: 'Personalize o cardápio',
    description: 'Escolha os sabores favoritos e ajustamos a proposta para sua festa.',
  },
  {
    step: '03',
    title: 'Recebemos a estrutura',
    description: 'Chegamos cedo, montamos tudo e nossa equipe assume o restante.',
  },
  {
    step: '04',
    title: 'Sua festa, nossa pizza',
    description: 'Você curte o evento. A gente cuida de cada fatia.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-[#FAF7F0] text-[#1E1E1E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight font-bouncer">
            <span className="text-[#D42424]">Simples</span> como deve ser.
          </h2>
        </div>

        {/* Content Grid: Video Aligned Left, Steps Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Aligned Video */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-none h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border-4 border-[#1A1A1A] shadow-2xl bg-[#1A1A1A] group">
              <video
                src={saindoDoFornoVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#D42424] text-white text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>Saindo do Forno</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-1">
                <p className="text-xs font-black uppercase text-[#FFD700] tracking-widest">
                  Experiência no Local
                </p>
                <h3 className="text-lg font-bold leading-snug drop-shadow-md">
                  Pizzas crocantes e quentinhas assadas ao vivo no seu evento!
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Steps Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {STEPS.map((item) => (
                <div key={item.step} className="flex flex-col items-start text-left group bg-white/60 p-6 rounded-2xl border border-[#1A1A1A]/10 hover:border-[#FFD700] transition-colors shadow-xs">
                  {/* Number Circle Badge */}
                  <div className="w-12 h-12 rounded-full border-2 border-[#FFD700] bg-[#FAF7F0] flex items-center justify-center text-[#D42424] font-black text-base shadow-xs transition-transform duration-200 group-hover:scale-110">
                    {item.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mt-4 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#555555] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};



