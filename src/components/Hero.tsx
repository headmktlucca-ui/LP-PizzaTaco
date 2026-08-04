import React, { useState, useEffect } from 'react';
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '../data/pizzaData';
import { Sparkles, MessageCircle, Flame, CheckCircle2, Users, PackageCheck, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import heroImg from '../assets/images/capa.png';
import img01 from '../assets/images/01.jpeg';
import img02 from '../assets/images/005.png';
import img03 from '../assets/images/03.jpeg';
import img04 from '../assets/images/04.jpeg';
import img005 from '../assets/images/005.png';
import img006 from '../assets/images/006.png';
import img007 from '../assets/images/007.png';
import img008 from '../assets/images/008.png';

interface HeroProps {
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: heroImg,
      alt: 'Pizza Taco Gourmet para Eventos',
      title: 'Massa Crocante & Queijo Derretido',
      subtitle: 'Pizzas assadas em 3 minutos diante dos seus convidados',
    },
    {
      url: img01,
      alt: 'Estrutura e Apresentação nos Eventos',
      title: 'Estrutura Completa de Eventos',
      subtitle: 'Live cooking independente e profissional no seu espaço',
    },
    {
      url: img02,
      alt: 'Pizza Taco Quentinha e Crocante',
      title: 'Assadas na Hora',
      subtitle: 'Sabor inigualável servido direto do forno para seus convidados',
    },
    {
      url: img03,
      alt: 'Variedades do Cardápio',
      title: 'Variedade Incrível de Sabores',
      subtitle: 'Opções salgadas e doces preparadas com ingredientes selecionados',
    },
    {
      url: img04,
      alt: 'Embalagem Prática e Exclusiva',
      title: 'Embalagens Exclusivas',
      subtitle: 'Praticidade e higiene com nossas caixinhas Pizza Taco',
    },
    {
      url: img005,
      alt: 'Pizza Taco Especial',
      title: 'Ingredientes Selecionados',
      subtitle: 'Qualidade artesanal e textura perfeita',
    },
    {
      url: img006,
      alt: 'Sabor Abobrinha com Queijo',
      title: 'Sabores Especiais',
      subtitle: 'Receitas exclusivas de sucesso absoluto',
    },
    {
      url: img007,
      alt: 'Variedade de Pizza Taco',
      title: 'Variedade de Sabores',
      subtitle: 'Opções recheadas e crocantes para seu evento',
    },
    {
      url: img008,
      alt: 'Pizza Taco Recheada',
      title: 'Assada e Crocante',
      subtitle: 'Prontinha para servir aos convidados',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const handleWhatsappClick = () => {
    const text = encodeURIComponent('Olá! Gostaria de cotar o buffet da Pizza Taco para a minha festa!');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FFFBF0] text-[#2D2D2D] overflow-hidden" id="hero-section">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#2D2D2D_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FFB800]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#D42424]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-script tracking-wide leading-[1.2] text-[#2D2D2D]">
              O sabor que transforma momentos em <span className="text-[#D42424]">lembranças inesquecíveis.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#2D2D2D]/80 leading-relaxed max-w-2xl font-medium">
              Casamentos, aniversários, encontros corporativos e muito mais. Oferecemos uma infraestrutura completa e independente de <strong className="text-[#2D2D2D] font-bold">live cooking</strong> com <strong className="text-[#2D2D2D] font-bold">equipe qualificada</strong> e <strong className="text-[#2D2D2D] font-bold">forno profissional</strong>.
            </p>

          </div>

          {/* Right Hero Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#D42424] to-[#FFB800] opacity-30 blur-xl animate-pulse" />
              
              {/* Main Image Container / Automatic Carousel */}
              <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border-4 border-[#2D2D2D] shadow-2xl bg-[#2D2D2D] group">
                {heroImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-black/30" />
                  </div>
                ))}

                {/* Carousel Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  aria-label="Imagem Anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#2D2D2D] border border-[#2D2D2D]/20 shadow-lg opacity-80 hover:opacity-100 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Próxima Imagem"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#2D2D2D] border border-[#2D2D2D]/20 shadow-lg opacity-80 hover:opacity-100 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Subtle Carousel Indicators */}
                <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2">
                  {heroImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentSlide(dotIdx)}
                      aria-label={`Ir para foto ${dotIdx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 shadow-md ${
                        dotIdx === currentSlide
                          ? 'w-7 bg-[#D42424]'
                          : 'w-2.5 bg-white/70 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
