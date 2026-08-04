import React, { useState, useMemo } from 'react';
import { PIZZA_FLAVORS } from '../data/pizzaData';
import { PizzaFlavor } from '../types';
import { Search, Flame, Check, Sparkles, Plus, Info, X } from 'lucide-react';

interface MenuSectionProps {
  selectedFlavors: string[];
  onToggleFlavor: (flavorId: string) => void;
  onGoToCalculator: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedFlavors,
  onToggleFlavor,
  onGoToCalculator,
}) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'tradicional' | 'gourmet' | 'vegetariano' | 'doce'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFlavorModal, setSelectedFlavorModal] = useState<PizzaFlavor | null>(null);

  const filteredFlavors = useMemo(() => {
    return PIZZA_FLAVORS.filter((flavor) => {
      const matchesCategory = activeTab === 'todos' || flavor.category === activeTab;
      const matchesSearch =
        flavor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        flavor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        flavor.ingredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const categories = [
    { id: 'todos', label: 'Todos os Sabores', count: PIZZA_FLAVORS.length },
    { id: 'tradicional', label: 'Tradicionais', count: PIZZA_FLAVORS.filter(f => f.category === 'tradicional').length },
    { id: 'gourmet', label: 'Especiais & Gourmet', count: PIZZA_FLAVORS.filter(f => f.category === 'gourmet').length },
    { id: 'vegetariano', label: 'Vegetarianos', count: PIZZA_FLAVORS.filter(f => f.category === 'vegetariano').length },
    { id: 'doce', label: 'Pizzas Doces', count: PIZZA_FLAVORS.filter(f => f.category === 'doce').length },
  ];

  return (
    <section id="cardapio" className="py-20 bg-[#FFFBF0] text-[#2D2D2D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-[#D42424] text-white text-xs font-black uppercase tracking-widest shadow-sm">
            EXPLORE NOSSAS DELÍCIAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D2D2D]">
            Cardápio Irresistível de <span className="text-[#D42424]">Pizza Taco</span>
          </h2>
          <p className="text-lg text-[#2D2D2D]/80 font-medium">
            Massa leve e crocante dobrada no estilo taco, com recheios generosos e queijos derretidos. Escolha os seus favoritos para o evento!
          </p>
        </div>

        {/* Selected Flavors Counter Bar */}
        {selectedFlavors.length > 0 && (
          <div className="mb-8 p-4 rounded-3xl bg-[#FFB800] border-2 border-[#2D2D2D] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg animate-in fade-in">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-[#D42424] text-white font-black rounded-2xl text-sm shadow-sm">
                {selectedFlavors.length}
              </span>
              <div>
                <p className="text-sm font-black text-[#2D2D2D] uppercase tracking-wide">
                  {selectedFlavors.length} sabor(es) selecionado(s) para o seu orçamento
                </p>
                <p className="text-xs text-[#2D2D2D]/80 font-bold">
                  Recomendamos escolher de 4 a 8 sabores para o rodízio do seu evento.
                </p>
              </div>
            </div>

            <button
              onClick={onGoToCalculator}
              className="px-6 py-2.5 rounded-full bg-[#D42424] hover:bg-[#b81d1d] text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Ir para Simulador</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-12">
          
          {/* Search Box */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#2D2D2D]/50" />
            <input
              type="text"
              placeholder="Buscar sabor (ex: Abobrinha, Nutella, Queijo)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border-2 border-[#2D2D2D]/10 text-[#2D2D2D] placeholder-[#2D2D2D]/50 focus:outline-none focus:border-[#D42424] transition-colors text-sm font-medium shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2D2D2D]/50 hover:text-[#D42424] text-xs font-bold"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border-2 ${
                  activeTab === cat.id
                    ? 'bg-[#FFB800] text-[#2D2D2D] border-[#2D2D2D] shadow-md'
                    : 'bg-white text-[#2D2D2D]/80 border-[#2D2D2D]/10 hover:border-[#D42424] hover:text-[#D42424]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                  activeTab === cat.id ? 'bg-[#D42424] text-white' : 'bg-stone-200 text-[#2D2D2D]'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Flavors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFlavors.map((flavor) => {
            const isSelected = selectedFlavors.includes(flavor.id);

            return (
              <div
                key={flavor.id}
                className={`rounded-3xl bg-white border-2 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm group hover:-translate-y-1 ${
                  isSelected
                    ? 'border-[#D42424] ring-4 ring-[#D42424]/20'
                    : 'border-[#2D2D2D]/10 hover:border-[#D42424]'
                }`}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-white">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/60 via-transparent to-transparent" />

                  {/* Badge */}
                  {flavor.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#D42424] text-white font-black text-[10px] uppercase tracking-wider shadow-md">
                      {flavor.badge}
                    </span>
                  )}

                  {/* Category Pill */}
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FFB800] text-[#2D2D2D] text-[10px] uppercase font-black tracking-wider shadow-md">
                    {flavor.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-black text-[#2D2D2D] group-hover:text-[#D42424] transition-colors">
                        {flavor.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#2D2D2D]/80 leading-relaxed font-medium line-clamp-2">
                      {flavor.description}
                    </p>

                    {/* Ingredient tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {flavor.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="px-2.5 py-1 rounded-full bg-[#FFFBF0] text-[#2D2D2D] text-[10px] font-bold border border-[#2D2D2D]/10"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#2D2D2D]/10 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedFlavorModal(flavor)}
                      className="p-2.5 rounded-full bg-[#FFFBF0] hover:bg-stone-200 text-[#2D2D2D] text-xs font-bold flex items-center gap-1 transition-colors border border-[#2D2D2D]/10"
                      title="Ver Detalhes do Recheio"
                    >
                      <Info className="w-4 h-4 text-[#D42424]" />
                    </button>

                    <button
                      onClick={() => onToggleFlavor(flavor.id)}
                      className={`flex-1 py-2.5 px-4 rounded-full font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#D42424] text-white shadow-md'
                          : 'bg-[#FFB800] hover:bg-[#efa800] text-[#2D2D2D] shadow-md border border-[#2D2D2D]/10'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Selecionado</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Adicionar ao Evento</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal for flavor details */}
        {selectedFlavorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="relative w-full max-w-lg bg-[#FFFBF0] border-4 border-[#2D2D2D] rounded-3xl overflow-hidden shadow-2xl text-[#2D2D2D]">
              <button
                onClick={() => setSelectedFlavorModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white text-[#2D2D2D] hover:text-[#D42424] z-10 border border-[#2D2D2D]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-56 relative">
                <img
                  src={selectedFlavorModal.image}
                  alt={selectedFlavorModal.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF0] via-transparent to-black/20" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FFB800] text-[#2D2D2D] text-xs font-black uppercase">
                    {selectedFlavorModal.category}
                  </span>
                  {selectedFlavorModal.badge && (
                    <span className="px-3 py-1 rounded-full bg-[#D42424] text-white text-xs font-black uppercase">
                      {selectedFlavorModal.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black text-[#D42424]">
                  {selectedFlavorModal.name}
                </h3>

                <p className="text-[#2D2D2D]/80 text-sm leading-relaxed font-medium">
                  {selectedFlavorModal.description}
                </p>

                <div>
                  <h4 className="text-xs font-black text-[#2D2D2D] uppercase tracking-wider mb-2">
                    Ingredientes Selecionados:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-[#2D2D2D] font-bold">
                    {selectedFlavorModal.ingredients.map((ing) => (
                      <li key={ing} className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#D42424]" />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#2D2D2D]/10 flex gap-3">
                  <button
                    onClick={() => {
                      onToggleFlavor(selectedFlavorModal.id);
                      setSelectedFlavorModal(null);
                    }}
                    className={`w-full py-3 rounded-full font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 ${
                      selectedFlavors.includes(selectedFlavorModal.id)
                        ? 'bg-[#D42424] text-white'
                        : 'bg-[#FFB800] text-[#2D2D2D]'
                    }`}
                  >
                    {selectedFlavors.includes(selectedFlavorModal.id) ? 'Remover do Evento' : 'Adicionar ao Meu Evento'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
