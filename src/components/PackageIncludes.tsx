import React, { useState } from 'react';
import { SALGADAS_FLAVORS, DOCES_FLAVORS } from '../data/pizzaData';
import capaImg from '../assets/images/capa.png';

export const PackageIncludes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'salgadas' | 'doces'>('salgadas');

  const flavors = activeTab === 'salgadas' ? SALGADAS_FLAVORS : DOCES_FLAVORS;

  return (
    <section id="o-que-inclui" className="py-20 bg-[#FFFBF0] text-[#2D2D2D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D42424] text-white text-xs font-black uppercase tracking-widest shadow-sm mb-3">
            CARDÁPIO COMPLETO DE SABORES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D2D2D] mt-4">
            Cardápio de Sabores <span className="text-[#527756]">Pizza</span> <span className="text-[#D42424]">Taco</span>
          </h2>
          <p className="text-lg text-[#2D2D2D]/80 font-medium">
            Oferecemos 40 opções de pizzas salgadas e 18 doces irresistíveis. Confira abaixo a lista completa de sabores disponíveis para o seu evento!
          </p>
        </div>

        {/* Selected Element: Flavors Cardapio with Tabs */}
        <div>
          {/* Category Tabs */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-10">
            <button
              type="button"
              onClick={() => setActiveTab('salgadas')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg transition-all duration-300 cursor-pointer ${
                activeTab === 'salgadas'
                  ? 'bg-[#D42424] text-white shadow-lg shadow-[#D42424]/20 scale-105'
                  : 'bg-white text-[#2D2D2D] border border-[#2D2D2D]/10 hover:bg-white/80'
              }`}
            >
              <span>Salgadas</span>
              <span
                className={`px-2.5 py-0.5 rounded-full font-black text-xs sm:text-sm ${
                  activeTab === 'salgadas'
                    ? 'bg-white/25 text-white'
                    : 'bg-[#FFB800]/20 text-[#D97706]'
                }`}
              >
                {SALGADAS_FLAVORS.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('doces')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg transition-all duration-300 cursor-pointer ${
                activeTab === 'doces'
                  ? 'bg-[#D42424] text-white shadow-lg shadow-[#D42424]/20 scale-105'
                  : 'bg-white text-[#2D2D2D] border border-[#2D2D2D]/10 hover:bg-white/80'
              }`}
            >
              <span>Doces</span>
              <span
                className={`px-2.5 py-0.5 rounded-full font-black text-xs sm:text-sm ${
                  activeTab === 'doces'
                    ? 'bg-white/25 text-white'
                    : 'bg-[#FFB800]/20 text-[#D97706]'
                }`}
              >
                {DOCES_FLAVORS.length}
              </span>
            </button>
          </div>

          {/* Flavors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {flavors.map((flavor, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="bg-white rounded-2xl p-4 shadow-sm border border-[#2D2D2D]/5 flex items-center gap-3 transition-all duration-200 hover:shadow-md hover:border-[#D42424]/20 hover:-translate-y-0.5"
              >
                <span className="text-[#FFB800] font-black italic text-sm sm:text-base shrink-0 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[#2D2D2D] font-bold text-sm sm:text-base leading-snug">
                  {flavor}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Callout */}
        <div className="mt-16 rounded-3xl bg-white border-4 border-[#2D2D2D] p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#2D2D2D]">
                Por que a <span className="text-[#527756]">Pizza</span> <span className="text-[#D42424]">Taco</span> é Muito Melhor que o Buffet Tradicional?
              </h3>
              <ul className="space-y-3 text-sm text-[#2D2D2D] font-medium">
                <li className="flex items-start gap-3">
                  <span className="p-1 bg-[#FFB800] text-[#2D2D2D] font-black rounded-lg shrink-0 mt-0.5 text-xs">✓</span>
                  <span><strong className="font-black text-[#2D2D2D]">Zero Louça:</strong> Embalagens em formato taco descartáveis e ecológicas. Ninguém lava prato!</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="p-1 bg-[#FFB800] text-[#2D2D2D] font-black rounded-lg shrink-0 mt-0.5 text-xs">✓</span>
                  <span><strong className="font-black text-[#2D2D2D]">Fácil de Comer em Pé:</strong> Perfeito para festas animadas, sem precisar de mesa posta ou talher.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="p-1 bg-[#FFB800] text-[#2D2D2D] font-black rounded-lg shrink-0 mt-0.5 text-xs">✓</span>
                  <span><strong className="font-black text-[#2D2D2D]">Qualidade Padronizada:</strong> Recheios generosos nas medidas exatas, massa sempre crocante.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="p-1 bg-[#FFB800] text-[#2D2D2D] font-black rounded-lg shrink-0 mt-0.5 text-xs">✓</span>
                  <span><strong className="font-black text-[#2D2D2D]">Rapidez Impressionante:</strong> O forno assa a pizza taco em 3 minutos. Convidados felizes sem fila!</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden border-2 border-[#2D2D2D] shadow-md">
              <img
                src={capaImg}
                alt="Pizzaiolo e Equipe Pizza Taco"
                className="w-full h-72 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
