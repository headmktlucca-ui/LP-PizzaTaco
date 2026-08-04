import React from 'react';
import { ASSETS } from '../data/pizzaData';
import { CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 bg-[#FFFBF0] text-[#1A1A1A] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#236034_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight font-bouncer">
            Onde existe pizza, nascem <span className="text-[#D42424]">histórias para contar.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-medium leading-relaxed pt-2">
            A <strong className="text-[#236034]">Pizza Taco</strong> nasceu para reinventar a forma como a pizza artesanal é servida em festas e eventos corporativos.
          </p>
        </div>

        {/* Main Content Grid: Story & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-4 border-[#1A1A1A] shadow-xl group">
              <img 
                src={ASSETS.maos} 
                alt="Pizza Taco nas Mãos" 
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Sub images row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border-2 border-[#1A1A1A]/10 shadow-sm h-32">
                <img 
                  src={ASSETS.piz01} 
                  alt="Pizza Taco 01" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-[#1A1A1A]/10 shadow-sm h-32">
                <img 
                  src={ASSETS.piz02} 
                  alt="Pizza Taco 02" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Text Column: Brand Story */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] leading-snug">
              Transformamos a clássica pizza artesanal em uma experiência prática, elegante e super saborosa.
            </h3>

            <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-normal">
              Combinamos o melhor dos dois mundos: a <strong>massa leve, crocante e recheio generoso</strong> da pizza artesanal com a <strong>praticidade ergonômica do formato taco</strong>. 
            </p>

            <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-normal">
              Eliminamos a necessidade de talheres, pratos descartáveis e filas cansativas. Levamos para o seu local um <strong>forno profissional de alta performance</strong>, pizzaiolo qualificado e toda a infraestrutura necessária. O resultado? Pizzas quentinhas assadas na hora e servidas direto aos seus convidados com sorriso no rosto e total higiene.
            </p>

            {/* Highlights List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#236034] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-[#1A1A1A]">
                  <strong>100% Autônomo:</strong> Levamos nossa própria estrutura de forno, bancada e utensílios.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#236034] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-[#1A1A1A]">
                  <strong>Zero Sujeira:</strong> Servidas em caixinhas exclusivas e dobráveis — limpo e sem complicações.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#236034] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-[#1A1A1A]">
                  <strong>Sabor Incomparável:</strong> Ingredientes frescos e assamento em alta temperatura no local.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
