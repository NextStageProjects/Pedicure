import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from '../../components/common/ScrollReveal';

const reviews = [
  { id: 1, name: "Maria Silva", role: "Paciente Regular", text: "Sofria com uma unha encravada há meses. O tratamento foi totalmente indolor e resolveu o problema logo na primeira sessão. Recomendo vivamente!", rating: 5, initials: "MS" },
  { id: 2, name: "João Pereira", role: "Atleta", text: "Excelente profissional. O rigor com a higiene e a explicação técnica de cada passo do tratamento deram-me muita confiança.", rating: 5, initials: "JP" },
  { id: 3, name: "Ana Santos", role: "Paciente de Reconstrução", text: "A reconstrução ungueal ficou perfeita. Finalmente posso usar calçado aberto sem qualquer vergonha. Um trabalho de mestre.", rating: 5, initials: "AS" }
];

export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Testemunhos</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary">O que dizem os nossos pacientes</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto">
            {/* Quote icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-surface-pink flex items-center justify-center">
                <Quote size={28} className="text-accent" fill="currentColor" />
              </div>
            </div>

            {/* Testimonial carousel */}
            <div className="relative h-56 md:h-44 overflow-hidden">
              {reviews.map((review, idx) => (
                <div 
                  key={review.id}
                  className={`absolute inset-0 flex flex-col items-center text-center px-4 transition-all duration-700 ease-out
                    ${idx === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
                >
                  <p className="text-secondary text-lg md:text-xl italic leading-relaxed mb-8 max-w-2xl">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    {/* Avatar circle with initials */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-white font-bold text-sm">
                      {review.initials}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-primary text-sm">{review.name}</p>
                      <p className="text-xs text-secondary">{review.role}</p>
                    </div>
                    <div className="flex gap-0.5 ml-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-accent" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2.5 mt-10">
              {reviews.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActive(idx)}
                  className={`h-2.5 rounded-full transition-all duration-400 ${
                    idx === active ? 'bg-accent w-8' : 'bg-surface-pink w-2.5 hover:bg-accent-light'
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};