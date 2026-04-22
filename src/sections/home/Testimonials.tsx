import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { id: 1, name: "Maria Silva", text: "Sofria com uma unha encravada há meses. O tratamento foi totalmente indolor e resolveu o problema logo na primeira sessão. Recomendo vivamente!", rating: 5 },
  { id: 2, name: "João Pereira", text: "Excelente profissional. O rigor com a higiene e a explicação técnica de cada passo do tratamento deram-me muita confiança.", rating: 5 },
  { id: 3, name: "Ana Santos", text: "A reconstrução ungueal ficou perfeita. Finalmente posso usar calçado aberto sem qualquer vergonha. Um trabalho de mestre.", rating: 5 }
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
    <section className="py-20 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">O que dizem os nossos pacientes</h2>
        </div>

        <div className="relative max-w-3xl mx-auto h-64 overflow-hidden">
          {reviews.map((review, idx) => (
            <div 
              key={review.id}
              className={`absolute inset-0 transition-all duration-700 flex flex-col items-center text-center px-6
                ${idx === active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            >
              <div className="mb-4 text-accent/20"><Quote size={48} fill="currentColor" /></div>
              <p className="text-secondary text-lg italic mb-6">"{review.text}"</p>
              <div className="flex gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent" fill="currentColor" />
                ))}
              </div>
              <span className="font-bold text-primary">{review.name}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setActive(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === active ? 'bg-accent w-6' : 'bg-surface-pink'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};