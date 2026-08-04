import React from 'react';
import { HOW_IT_WORKS_STEPS, ASSETS } from '../data/pizzaData';
import { UtensilsCrossed, Truck, Flame, Smile, CheckCircle, Sparkles } from 'lucide-react';
import saindoDoFornoVideo from '../assets/images/Saidoforno.mp4';

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#D42424]" />,
  Truck: <Truck className="w-6 h-6 text-[#D42424]" />,
  Flame: <Flame className="w-6 h-6 text-[#FFB800]" />,
  Smile: <Smile className="w-6 h-6 text-[#D42424]" />,
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-[#FFFBF0] text-[#2D2D2D] relative overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2D2D2D_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D42424] text-white text-xs font-black uppercase tracking-widest border border-[#2D2D2D]/10 shadow-sm mb-3">
            SIMPLES & SEM COMPLICAÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D2D2D] mt-4">
            Como Funciona o Buffet da <span className="text-[#527756]">Pizza</span> <span className="text-[#D42424]">Taco</span>?
          </h2>
          <p className="text-lg text-[#2D2D2D]/80 font-medium">
            Da escolha dos sabores até a limpeza final: cuidamos de absolutamente tudo para que você seja o convidado principal da sua própria festa!
          </p>
        </div>

        {/* Layout with Steps on Left and Video on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 4 Steps Grid (Left Side) */}
          <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HOW_IT_WORKS_STEPS.map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-3xl bg-white border-2 border-[#2D2D2D]/10 p-6 flex flex-col justify-between hover:border-[#D42424] transition-all duration-300 shadow-md group overflow-hidden min-h-[280px]"
              >
                {/* 50% Transparent Background Image */}
                {item.bgImage && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                )}

                {/* Light translucent overlay ensuring text readability */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] pointer-events-none" />

                {/* Top Row: Step Number & Icon */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#FFB800] group-hover:text-[#D42424] transition-colors drop-shadow-sm">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FFFBF0]/90 border border-[#2D2D2D]/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      {iconMap[item.iconName]}
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-[#2D2D2D] mb-2 group-hover:text-[#D42424] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2D2D2D] leading-relaxed font-bold">
                    {item.description}
                  </p>
                </div>

                {/* Step indicator footer */}
                <div className="relative z-10 pt-4 mt-4 border-t border-[#2D2D2D]/20 flex items-center justify-between text-xs text-[#D42424] font-black uppercase tracking-wider">
                  <span>Passo {index + 1} de 4</span>
                  <CheckCircle className="w-4 h-4 text-[#FFB800]" />
                </div>
              </div>
            ))}
          </div>

          {/* Video Container (Right Side) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col">
            <div className="relative h-full min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden border-4 border-[#2D2D2D] shadow-2xl bg-[#2D2D2D] group flex flex-col justify-end">
              <video
                src={saindoDoFornoVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay gradient for text legibility at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Badge top right */}
              <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-[#D42424] text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>Saindo do Forno</span>
              </div>

              {/* Caption Bottom Left */}
              <div className="relative z-10 p-6 text-white space-y-1">
                <p className="text-xs font-black uppercase text-[#FFB800] tracking-widest">
                  Experiência no Local
                </p>
                <h4 className="text-xl font-black leading-tight drop-shadow-md">
                  Pizzas crocantes assadas na hora para seus convidados!
                </h4>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

