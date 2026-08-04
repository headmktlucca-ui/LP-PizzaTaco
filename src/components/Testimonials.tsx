import React from 'react';
import { TESTIMONIALS } from '../data/pizzaData';
import { Star, Quote, MapPin, Users2, HeartHandshake } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#FFFBF0] text-[#2D2D2D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#D42424] text-white text-xs font-black uppercase tracking-widest">
            AVALIAÇÕES DE QUEM JÁ EXPERIMENTOU
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D2D2D]">
            O Que Dizem Nossos <span className="text-[#D42424]">Anfitriões</span>
          </h2>
          <p className="text-lg text-[#2D2D2D]/80 font-medium">
            Confira como o buffet de Pizza Taco transformou aniversários, festas corporativas e momentos especiais em experiências inesquecíveis!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-3xl bg-white border-4 border-[#2D2D2D] p-7 flex flex-col justify-between shadow-sm relative hover:border-[#D42424] transition-all duration-300 group"
            >
              <Quote className="w-10 h-10 text-[#FFB800]/40 absolute top-6 right-6" />

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 text-[#FFB800] mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-[#2D2D2D] font-medium leading-relaxed italic mb-6">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t-2 border-[#2D2D2D]/10 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#2D2D2D]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-black text-sm text-[#2D2D2D] group-hover:text-[#D42424] transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#D42424] font-extrabold">
                    {testimonial.eventType} ({testimonial.guestsCount} convidados)
                  </p>
                  <p className="text-[11px] text-[#2D2D2D]/70 font-bold flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#FFB800]" />
                    <span>{testimonial.location}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
