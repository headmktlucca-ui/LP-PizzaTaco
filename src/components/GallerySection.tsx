import React from 'react';
import { GALLERY_ITEMS, INSTAGRAM_HANDLE, INSTAGRAM_URL, ASSETS } from '../data/pizzaData';
import { Instagram, Heart, ExternalLink, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  return (
    <section id="galeria" className="py-20 bg-[#FFFBF0] text-[#2D2D2D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#D42424] text-white text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 w-fit mx-auto shadow-sm">
            <Instagram className="w-4 h-4 text-[#FFB800]" />
            DIRETO DO INSTAGRAM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D2D2D]">
            Acompanhe o <span className="text-[#D42424]">Pizza Taco</span> nos Eventos
          </h2>
          <p className="text-lg text-[#2D2D2D]/80 font-medium">
            Fotos reais dos nossos eventos, fornos em ação, embalagens exclusivas e sorrisos dos convidados! Siga <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#D42424] font-black hover:underline">{INSTAGRAM_HANDLE}</a>
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden border-2 border-[#2D2D2D] bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-72 w-full overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FFB800] text-[#2D2D2D] text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {item.type}
                </span>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <p className="text-xs font-bold text-white line-clamp-2">
                    {item.title}
                  </p>

                  <div className="flex items-center justify-between text-xs text-stone-200 pt-2 border-t border-white/20">
                    <span className="flex items-center gap-1 text-[#FFB800] font-bold">
                      <Heart className="w-3.5 h-3.5 fill-[#D42424] text-[#D42424]" />
                      {item.likes} curtidas
                    </span>

                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FFB800] hover:text-white font-black flex items-center gap-1 uppercase text-[10px]"
                    >
                      <span>Ver Post</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Callout */}
        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D42424] hover:bg-[#b81d1d] text-white font-black text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            <span>Siga @pizzataco_eventos no Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
};
