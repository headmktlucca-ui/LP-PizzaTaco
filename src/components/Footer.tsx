import React from 'react';
import { Pizza, MessageCircle, MapPin, Clock, Phone, Heart } from 'lucide-react';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, ASSETS } from '../data/pizzaData';
import { InstagramIcon } from './InstagramIcon';
import { WhatsAppIcon } from './WhatsAppIcon';
import logoImg from '../assets/images/Logo222.png';

interface FooterProps {
  currentPage?: 'home' | 'blog';
  onNavigate?: (page: 'home' | 'blog') => void;
}

export const Footer: React.FC<FooterProps> = ({ currentPage = 'home', onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isBlog = false) => {
    if (isBlog) {
      e.preventDefault();
      onNavigate?.('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentPage === 'blog') {
      e.preventDefault();
      onNavigate?.('home');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };
  return (
    <footer className="bg-[#2D2D2D] text-[#FFFBF0] border-t-4 border-[#D42424] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FFFBF0]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <img 
                src={logoImg} 
                alt="Pizza Taco Logo" 
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#FFFBF0]/80 font-medium leading-relaxed max-w-md">
              O buffet de pizza artesanal no estilo taco mais prático e saboroso para seu evento. Levamos pizzaiolo, ajudante, forno de alta performance e embalagens exclusivas onde você estiver!
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white border border-stone-200 shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                title="Instagram @pizzataco_eventos"
              >
                <InstagramIcon className="w-8 h-8" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white border border-stone-200 shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                title="WhatsApp Pizza Taco"
              >
                <WhatsAppIcon className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#FFB800] font-black text-base uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs font-bold text-[#FFFBF0]/80">
              <li><a href="#como-funciona" onClick={(e) => handleLinkClick(e, '#como-funciona')} className="hover:text-[#D42424] transition-colors">Como Funciona</a></li>
              <li><a href="#o-que-inclui" onClick={(e) => handleLinkClick(e, '#o-que-inclui')} className="hover:text-[#D42424] transition-colors">O Que Inclui</a></li>
              <li><a href="#quem-somos" onClick={(e) => handleLinkClick(e, '#quem-somos')} className="hover:text-[#D42424] transition-colors">Quem Somos</a></li>
              <li><a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')} className="hover:text-[#D42424] transition-colors">Dúvidas</a></li>
              <li><a href="#blog" onClick={(e) => handleLinkClick(e, '#blog', true)} className="text-[#FFB800] hover:text-white transition-colors flex items-center gap-1.5 font-black"><span>Além dos Sabores (Blog)</span></a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[#FFB800] font-black text-base uppercase tracking-wider">
              Atendimento & Região
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFFBF0]/80 font-bold">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D42424] shrink-0" />
                <span>Atendemos Grande SP, ABCD, Alphaville & Região</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFB800] shrink-0" />
                <span>WhatsApp: <strong className="text-white">{WHATSAPP_DISPLAY}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-5 h-5 shrink-0" />
                <span>Instagram: <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline font-black text-[#FFB800]">{INSTAGRAM_HANDLE}</a></span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FFB800] shrink-0" />
                <span>Horário de Atendimento: Todos os dias das 08h às 22h</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFFBF0]/60 font-bold gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Pizza Taco Eventos. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com carinho para o seu evento</span>
            <Heart className="w-3.5 h-3.5 text-[#D42424] fill-[#D42424]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
