import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

export const AboutTeaser: React.FC = () => {
  const highlights = [
    "Diagnóstico preciso na primeira consulta",
    "Equipamento de fresagem de última geração",
    "Acompanhamento e aconselhamento profilático"
  ];

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative h-[460px] md:h-[540px] rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800" 
                  alt="Especialista em Pedicure Avançada" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-border-light hidden md:block">
                <p className="text-3xl font-bold text-accent">12+</p>
                <p className="text-xs text-secondary font-medium uppercase tracking-wider">Anos de<br/>Experiência</p>
              </div>
              {/* Decorative dot */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-surface-pink/60 -z-10" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Sobre nós</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight">
              Ciência e Cuidado em Cada Detalhe
            </h2>
            <p className="text-secondary mb-8 leading-relaxed text-base">
              Com formação técnica avançada em patologias ungueais, a nossa missão é devolver a qualidade de vida a quem sofre com dores nos pés. Não mascaramos problemas com verniz; tratamos a raiz da patologia.
            </p>
            <ul className="space-y-4 mb-10">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group">
                  <span className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={16} />
                  </span>
                  <span className="text-primary font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/booking">
              <Button variant="primary">Agendar Consulta</Button>
            </Link>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};