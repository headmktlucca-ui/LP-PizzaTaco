import React, { useState, useEffect } from 'react';
import { Pizza, Phone, MessageCircle, Instagram, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, ASSETS } from '../data/pizzaData';
import { InstagramIcon } from './InstagramIcon';
import { WhatsAppIcon } from './WhatsAppIcon';
import logoImg from '../assets/images/Logo222.png';

interface HeaderProps {
  onOpenCalculator?: () => void;
  currentPage?: 'home' | 'blog';
  onNavigate?: (page: 'home' | 'blog') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCalculator, currentPage = 'home', onNavigate }) => {
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
    { name: 'Como Funciona', href: '#como-funciona', isBlog: false },
    { name: 'O Que Inclui', href: '#o-que-inclui', isBlog: false },
    { name: 'Quem Somos', href: '#quem-somos', isBlog: false },
    { name: 'Dúvidas', href: '#faq', isBlog: false },
    { name: 'Além dos Sabores', href: '#blog', isBlog: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isBlog) {
      e.preventDefault();
      onNavigate?.('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentPage === 'blog') {
        e.preventDefault();
        onNavigate?.('home');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate?.('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsappClick = () => {
    const text = encodeURIComponent('Olá! Gostaria de um orçamento para levar o buffet da Pizza Taco para o meu evento!');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFEBB4]/95 backdrop-blur-md shadow-sm border-b border-[#2D2D2D]/5 py-0.5'
          : 'bg-[#FFEBB4] py-1 border-b border-[#2D2D2D]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-2 sm:gap-3 group text-decoration-none cursor-pointer"
            id="brand-logo"
          >
            <img 
              src={logoImg} 
              alt="Pizza Taco Logo" 
              className="h-[62px] sm:h-[74px] md:h-[88px] w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <span className="font-bouncer text-sm sm:text-base md:text-lg lg:text-xl tracking-wider text-[#D42424] uppercase leading-tight max-w-[120px] sm:max-w-none">
              BUFFET PARA EVENTOS
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
            {navLinks.map((link) => {
              const isActiveBlog = link.isBlog && currentPage === 'blog';
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-xs font-black uppercase tracking-widest transition-all py-1 flex items-center gap-1.5 cursor-pointer ${
                    isActiveBlog
                      ? 'text-[#D42424] bg-white px-3 py-1 rounded-full shadow-sm border border-[#D42424]/20'
                      : link.isBlog
                      ? 'text-[#D42424] hover:text-[#236034]'
                      : 'text-[#236034] hover:text-[#D42424]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.isBlog && (
                    <span className="text-[9px] font-extrabold uppercase bg-[#D42424] text-white px-1.5 py-0.5 rounded-full tracking-wider">
                      BLOG
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white hover:shadow-md transition-all border border-[#2D2D2D]/10 hover:scale-105 active:scale-95 flex items-center justify-center"
              title="Siga @pizzataco_eventos no Instagram"
              id="instagram-nav-btn"
            >
              <InstagramIcon className="w-7 h-7" />
            </a>

            <button
              onClick={handleWhatsappClick}
              id="header-whatsapp-btn"
              className="w-10 h-10 rounded-xl bg-white hover:shadow-md transition-all border border-[#2D2D2D]/10 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
              title="Falar no WhatsApp"
            >
              <WhatsAppIcon className="w-8 h-8" />
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
        <div className="lg:hidden bg-[#FFEBB4] border-b border-[#2D2D2D]/5 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link);
                }}
                className={`text-sm font-black uppercase tracking-wider py-2 border-b border-[#236034]/10 flex items-center justify-between cursor-pointer ${
                  link.isBlog ? 'text-[#D42424]' : 'text-[#236034] hover:text-[#D42424]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{link.name}</span>
                  {link.isBlog && (
                    <span className="text-[9px] font-extrabold uppercase bg-[#D42424] text-white px-2 py-0.5 rounded-full tracking-wider">
                      BLOG
                    </span>
                  )}
                </div>
                <span className="text-[#D42424] text-xs">→</span>
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsappClick();
                }}
                className="w-full py-3 rounded-full bg-[#236034] hover:bg-[#1b4c29] text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                Pedir no WhatsApp {WHATSAPP_DISPLAY}
              </button>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-white text-[#2D2D2D] font-bold text-xs flex items-center justify-center gap-2 border-2 border-[#2D2D2D]/10"
              >
                <InstagramIcon className="w-5 h-5 shrink-0" />
                Siga @pizzataco_eventos no Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
