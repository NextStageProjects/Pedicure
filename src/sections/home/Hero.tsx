import React from 'react';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import brushMaskUrl from '../../assets/brush-mask.svg';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-blush/40 pt-28 md:pt-36 pb-16 md:pb-24">
      {/* Decorative brush strokes */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${brushMaskUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] opacity-10 pointer-events-none rotate-45"
        style={{
          backgroundImage: `url(${brushMaskUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Block */}
          <div className="text-center md:text-left">
            <h1 className="anim-slide-left font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-primary">
              Elegância Técnica<br />para os seus Pés
            </h1>
            <p className="anim-fade-in-up anim-delay-2 text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
              Pedicure Avançada: saúde, conforto e estética clínica profunda.
              Tratamentos especializados para resultados reais e duradouros.
            </p>
            
            <div className="anim-fade-in-up anim-delay-4 flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
              <Button variant="secondary" onClick={() => navigate('/booking')}>
                Agendar Avaliação
              </Button>
              <button className="flex items-center gap-3 font-semibold text-sm text-secondary hover:text-accent transition-colors group">
                <span className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-primary shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Play size={14} fill="currentColor" />
                </span>
                Ver Protocolo
              </button>
            </div>
          </div>

          {/* Image Block */}
          <div className="anim-scale-in anim-delay-3 relative w-full h-[380px] md:h-[520px] flex items-center justify-center mt-6 md:mt-0">
            {/* Brush mask background */}
            <div 
              className="absolute inset-0 z-0 opacity-60"
              style={{
                backgroundColor: 'var(--color-surface-pink)',
                WebkitMaskImage: `url(${brushMaskUrl})`,
                maskImage: `url(${brushMaskUrl})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />

            <img 
              src="https://t4.ftcdn.net/jpg/01/27/69/49/360_F_127694912_UAgWUz7gDm3I4ev0E29DbHbdSnWknAf8.jpg?auto=format&fit=crop&q=80&w=800" 
              alt="Pedicure clínica avançada profissional" 
              className="relative z-10 w-[82%] h-[82%] object-cover rounded-[2rem] shadow-2xl border-4 border-white/60 hover:scale-[1.02] transition-transform duration-500"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'; }}
            />

            {/* Floating decorative dot */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-accent/15 anim-float z-0" />
            <div className="absolute bottom-12 left-4 w-10 h-10 rounded-full bg-accent-light/30 anim-float" style={{ animationDelay: '1.5s' }} />
          </div>

        </div>
      </div>
    </section>
  );
};