import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { PIZZA_FLAVORS, WHATSAPP_NUMBER } from '../data/pizzaData';
import { CalculatorState } from '../types';
import { Sparkles, Users, Calendar, Clock, MapPin, MessageCircle, CheckCircle2, Calculator as CalcIcon, Flame, Gift, ArrowRight } from 'lucide-react';

interface CalculatorProps {
  selectedFlavors: string[];
  onToggleFlavor: (flavorId: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({
  selectedFlavors,
  onToggleFlavor,
}) => {
  const [adults, setAdults] = useState<number>(30);
  const [children, setChildren] = useState<number>(10);
  const [eventType, setEventType] = useState<string>('Aniversário');
  const [durationHours, setDurationHours] = useState<number>(3);
  const [eventDate, setEventDate] = useState<string>('');
  const [eventLocation, setEventLocation] = useState<string>('');
  const [includeBeverages, setIncludeBeverages] = useState<boolean>(false);
  const [includeDessertSpecial, setIncludeDessertSpecial] = useState<boolean>(true);
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');

  const totalGuests = adults + children;

  // Real-time calculations
  const estimation = useMemo(() => {
    // Average 5 pizza tacos per adult, 3 per child
    const estimatedPizzas = Math.ceil(adults * 5.5 + children * 3);
    
    // Staff estimation
    const pizzaiolos = totalGuests > 80 ? 2 : 1;
    const ajudantes = totalGuests > 50 ? 2 : 1;
    const fornos = totalGuests > 80 ? 2 : 1;

    // Approximate cost calculation per guest
    const baseRatePerGuest = 55; // R$ 55 per person average base
    const beverageRate = includeBeverages ? 18 : 0;
    const dessertRate = includeDessertSpecial ? 12 : 0;

    const estimatedTotal = (adults * (baseRatePerGuest + beverageRate + dessertRate)) +
                          (children * (baseRatePerGuest * 0.6 + beverageRate * 0.7 + dessertRate));

    return {
      estimatedPizzas,
      pizzaiolos,
      ajudantes,
      fornos,
      estimatedTotal: Math.round(estimatedTotal),
    };
  }, [adults, children, totalGuests, includeBeverages, includeDessertSpecial]);

  const handleSendWhatsappBudget = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger confetti explosion!
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }

    const selectedFlavorNames = PIZZA_FLAVORS
      .filter((f) => selectedFlavors.includes(f.id))
      .map((f) => f.name)
      .join(', ');

    const textMessage = `👋 *Olá, Pizza Taco Eventos!*
Gostaria de solicitar o orçamento para o meu evento:

👤 *Nome:* ${clientName || 'Não informado'}
📱 *Telefone:* ${clientPhone || 'Não informado'}
🎉 *Tipo de Evento:* ${eventType}
📅 *Data Prevista:* ${eventDate || 'A definir'}
📍 *Local/Cidade:* ${eventLocation || 'Não informado'}

👥 *Convidados:* ${adults} adultos e ${children} crianças (Total: ${totalGuests} pessoas)
⏱️ *Duração:* ${durationHours} horas de buffet livre
🍕 *Sabores Escolhidos (${selectedFlavors.length}):* ${selectedFlavorNames || 'Ainda vou escolher'}
🥤 *Incluir Bebidas:* ${includeBeverages ? 'Sim' : 'Não'}
🍫 *Sobremesas Doces Especial:* ${includeDessertSpecial ? 'Sim' : 'Não'}

📊 *Estimativa do Sistema:*
• Pizzas Tacos estimadas: ~${estimation.estimatedPizzas} un
• Equipe recomendada: ${estimation.pizzaiolos} Pizzaiolo(s) + ${estimation.ajudantes} Ajudante(s)
• Fornos: ${estimation.fornos} de Alta Velocidade

Pode me passar a disponibilidade e a cotação oficial?`;

    const encoded = encodeURIComponent(textMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-20 bg-[#FFFBF0] text-[#2D2D2D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#D42424] text-white text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 w-fit mx-auto shadow-sm">
            <CalcIcon className="w-4 h-4 text-[#FFB800]" />
            SIMULADOR INSTANTÂNEO DE EVENTO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D2D2D]">
            Monte o Orçamento do Seu <span className="text-[#D42424]">Evento</span>
          </h2>
          <p className="text-lg text-[#2D2D2D]/80 font-medium">
            Selecione o número de convidados, data e detalhes. Veja a estrutura estimada e receba a cotação oficial pelo WhatsApp em segundos!
          </p>
        </div>

        {/* Calculator Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Inputs (Left) */}
          <div className="lg:col-span-7 bg-white border-4 border-[#2D2D2D] rounded-3xl p-6 sm:p-8 shadow-xl space-y-8">
            
            {/* Step 1: Guest Sliders */}
            <div className="space-y-6">
              <h3 className="text-xl font-black text-[#D42424] flex items-center gap-2 border-b-2 border-[#2D2D2D]/10 pb-3 uppercase tracking-tight">
                <Users className="w-5 h-5 text-[#FFB800]" />
                1. Quantidade de Convidados
              </h3>

              {/* Adults Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-black">
                  <span className="text-[#2D2D2D]">Adultos:</span>
                  <span className="text-[#D42424] text-lg font-black">{adults} pessoas</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full accent-[#D42424] h-2 bg-stone-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Children Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-black">
                  <span className="text-[#2D2D2D]">Crianças (5 a 11 anos):</span>
                  <span className="text-[#D42424] text-lg font-black">{children} crianças</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-full accent-[#D42424] h-2 bg-stone-200 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Step 2: Event Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#D42424] flex items-center gap-2 border-b-2 border-[#2D2D2D]/10 pb-3 uppercase tracking-tight">
                <Calendar className="w-5 h-5 text-[#FFB800]" />
                2. Tipo & Detalhes do Evento
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Aniversário', 'Casamento', 'Corporativo', 'Chácara / Sítio', 'Confraternização', 'Outro'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    className={`py-2.5 px-3 rounded-full font-black text-xs transition-all cursor-pointer border-2 text-center uppercase tracking-wider ${
                      eventType === type
                        ? 'bg-[#FFB800] text-[#2D2D2D] border-[#2D2D2D] shadow-md'
                        : 'bg-[#FFFBF0] text-[#2D2D2D]/80 border-[#2D2D2D]/10 hover:border-[#D42424]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-black text-[#2D2D2D] uppercase mb-1">
                    Data Prevista do Evento
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full bg-[#FFFBF0] border-2 border-[#2D2D2D]/10 text-[#2D2D2D] text-sm font-medium focus:outline-none focus:border-[#D42424]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#2D2D2D] uppercase mb-1">
                    Bairro / Cidade do Evento
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Pinheiros, SP ou Alphaville"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full bg-[#FFFBF0] border-2 border-[#2D2D2D]/10 text-[#2D2D2D] text-sm font-medium focus:outline-none focus:border-[#D42424] placeholder-[#2D2D2D]/40"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Flavors selection count */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b-2 border-[#2D2D2D]/10 pb-3">
                <h3 className="text-xl font-black text-[#D42424] flex items-center gap-2 uppercase tracking-tight">
                  <Flame className="w-5 h-5 text-[#FFB800]" />
                  3. Sabores Escolhidos
                </h3>
                <a
                  href="#cardapio"
                  className="text-xs font-black text-[#D42424] hover:underline uppercase"
                >
                  Ver Cardápio Completo →
                </a>
              </div>

              <p className="text-xs font-bold text-[#2D2D2D]/80">
                Você selecionou <strong className="text-[#D42424]">{selectedFlavors.length} sabor(es)</strong>.
              </p>

              <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto p-2.5 bg-[#FFFBF0] rounded-2xl border-2 border-[#2D2D2D]/10">
                {PIZZA_FLAVORS.map((f) => {
                  const isChecked = selectedFlavors.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => onToggleFlavor(f.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-1.5 transition-all ${
                        isChecked
                          ? 'bg-[#D42424] text-white shadow-sm'
                          : 'bg-white text-[#2D2D2D] border border-[#2D2D2D]/20 hover:border-[#D42424]'
                      }`}
                    >
                      <span>{isChecked ? '✓' : '+'}</span>
                      <span>{f.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact Info */}
            <div className="space-y-3">
              <h3 className="text-xl font-black text-[#D42424] border-b-2 border-[#2D2D2D]/10 pb-3 uppercase tracking-tight">
                4. Seus Dados de Contato
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-[#2D2D2D] uppercase mb-1">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Silva"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full bg-[#FFFBF0] border-2 border-[#2D2D2D]/10 text-[#2D2D2D] text-sm font-medium focus:outline-none focus:border-[#D42424] placeholder-[#2D2D2D]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#2D2D2D] uppercase mb-1">
                    Seu WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (11) 99999-8888"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full bg-[#FFFBF0] border-2 border-[#2D2D2D]/10 text-[#2D2D2D] text-sm font-medium focus:outline-none focus:border-[#D42424] placeholder-[#2D2D2D]/40"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Realtime Live Estimation Summary Card (Right) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            <div className="rounded-3xl bg-[#FFB800] border-4 border-[#2D2D2D] p-6 sm:p-8 shadow-2xl relative overflow-hidden text-[#2D2D2D]">
              
              <div className="flex items-center justify-between border-b-2 border-[#2D2D2D]/20 pb-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-black text-[#D42424] tracking-wider">
                    RESUMO DO SEU EVENTO
                  </span>
                  <h3 className="text-2xl font-black text-[#2D2D2D] uppercase tracking-tight">
                    Simulação do Buffet
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D42424] flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Guest Counts Summary */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border-2 border-[#2D2D2D] flex items-center justify-between shadow-sm">
                  <span className="text-sm font-bold text-[#2D2D2D]">Total de Convidados:</span>
                  <span className="text-lg font-black text-[#D42424]">{totalGuests} Pessoas</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border-2 border-[#2D2D2D] space-y-2 shadow-sm">
                  <p className="text-xs font-black text-[#D42424] uppercase tracking-wider">Estrutura Inclusa Estimada:</p>
                  <ul className="space-y-1.5 text-xs text-[#2D2D2D] font-bold">
                    <li className="flex items-center justify-between">
                      <span>• Pizzas Tacos em Rodízio:</span>
                      <strong className="text-[#D42424]">~{estimation.estimatedPizzas} un</strong>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>• Equipe no Local:</span>
                      <strong className="text-[#2D2D2D]">{estimation.pizzaiolos} Pizzaiolo + {estimation.ajudantes} Ajudante</strong>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>• Fornos de Alta Performance:</span>
                      <strong className="text-[#2D2D2D]">{estimation.fornos} Forno(s)</strong>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>• Embalagens & Guardanapos:</span>
                      <strong className="text-[#D42424]">Inclusos sem custo</strong>
                    </li>
                  </ul>
                </div>

                {/* Estimated Budget Box */}
                <div className="p-5 rounded-2xl bg-[#FFFBF0] border-2 border-[#2D2D2D] text-center space-y-1 shadow-sm">
                  <span className="text-xs text-[#2D2D2D]/80 font-black uppercase tracking-wider">
                    Investimento Médio Estimado
                  </span>
                  <div className="text-3xl font-black text-[#D42424]">
                    R$ {estimation.estimatedTotal.toLocaleString('pt-BR')} <span className="text-xs font-bold text-[#2D2D2D]">aprox.</span>
                  </div>
                  <p className="text-[11px] text-[#2D2D2D]/70 font-bold">
                    *Sujeito a taxa de deslocamento conforme endereço exato
                  </p>
                </div>

              </div>

              {/* Submit CTA */}
              <form onSubmit={handleSendWhatsappBudget} className="mt-6">
                <button
                  type="submit"
                  id="submit-calculator-whatsapp"
                  className="w-full py-4 rounded-full bg-[#D42424] hover:bg-[#b81d1d] text-white font-black text-sm uppercase tracking-wider shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#D42424]" />
                  <span>Solicitar Cotação no WhatsApp</span>
                </button>
              </form>

              <p className="mt-3 text-[11px] text-center text-[#2D2D2D] font-black flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D42424]" />
                <span>Atendimento rápido via WhatsApp da Pizza Taco</span>
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
