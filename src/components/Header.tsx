import React, { useState, useEffect } from 'react';
import { Pizza, Phone, MessageCircle, Instagram, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, ASSETS } from '../data/pizzaData';

interface HeaderProps {
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'O Que Inclui', href: '#o-que-inclui' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  const handleWhatsappClick = () => {
    const text = encodeURIComponent('Olá! Gostaria de um orçamento para levar o buffet da Pizza Taco para o meu evento!');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#E3AE2A]/95 backdrop-blur-md shadow-sm border-b border-[#2D2D2D]/5 py-3'
          : 'bg-[#E3AE2A] py-4 border-b border-[#2D2D2D]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group text-decoration-none"
            id="brand-logo"
          >
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tighter leading-none uppercase">
                <span className="text-[#527756]">PIZZA</span>{" "}
                <span className="text-[#D42424]">TACO</span>
              </span>
              <span className="text-[10px] font-black tracking-widest text-[#D42424] uppercase">
                Buffet para Eventos
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-widest text-white hover:text-[#2D2D2D] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white text-[#2D2D2D] hover:text-[#D42424] hover:shadow-md transition-all border-2 border-[#2D2D2D]/10"
              title="Siga @pizzataco_eventos no Instagram"
              id="instagram-nav-btn"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={handleWhatsappClick}
              id="header-whatsapp-btn"
              className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#2D2D2D] hover:bg-stone-200 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#E3AE2A] border-b border-[#2D2D2D]/5 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-black uppercase tracking-wider text-[#2D2D2D] hover:text-[#D42424] py-2 border-b border-stone-200 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#D42424] text-xs">→</span>
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full py-3 rounded-full bg-[#FFB800] text-[#2D2D2D] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                Simular Orçamento Instantâneo
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsappClick();
                }}
                className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Pedir no WhatsApp {WHATSAPP_DISPLAY}
              </button>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-white text-[#2D2D2D] font-bold text-xs flex items-center justify-center gap-2 border-2 border-[#2D2D2D]/10"
              >
                <Instagram className="w-4 h-4 text-[#D42424]" />
                Siga @pizzataco_eventos no Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
