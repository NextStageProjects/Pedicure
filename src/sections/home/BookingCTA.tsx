import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { CalendarCheck, ArrowRight } from 'lucide-react';

export const BookingCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blush via-surface-blush to-blush-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-accent/5 blur-2xl" />
      
      <div className="w-full max-w-[800px] mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 shadow-sm">
            <CalendarCheck size={30} className="text-accent" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-5 leading-tight">
            Pronta para cuidar dos seus pés?
          </h2>
          <p className="text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Marque a sua avaliação inicial e descubra como podemos transformar a saúde e a estética dos seus pés. Primeira consulta com diagnóstico completo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" onClick={() => navigate('/booking')} className="text-base px-10 py-4">
              Marcar Avaliação Gratuita
              <ArrowRight size={18} />
            </Button>
            <p className="text-xs text-secondary/70 mt-2 sm:mt-0 sm:ml-2">Resposta em menos de 24h</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
