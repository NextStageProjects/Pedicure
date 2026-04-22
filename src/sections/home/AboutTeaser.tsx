import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';

export const AboutTeaser: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative h-[500px] rounded-3xl overflow-hidden order-2 lg:order-1">
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply z-10"></div>
            {/* Substituir por imagem real da especialista ou da clínica */}
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
              alt="Especialista em Pedicure Avançada" 
              className="w-full h-full object-cover relative z-0"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">Ciência e Cuidado em Cada Detalhe</h2>
            <p className="text-secondary mb-6 leading-relaxed">
              Com formação técnica avançada em patologias ungueais, a nossa missão é devolver a qualidade de vida a quem sofre com dores nos pés. Não mascaramos problemas com verniz; tratamos a raiz da patologia.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-surface-pink text-accent flex items-center justify-center font-bold text-sm shrink-0">✓</span>
                <span className="text-primary font-medium">Diagnóstico preciso na primeira consulta</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-surface-pink text-accent flex items-center justify-center font-bold text-sm shrink-0">✓</span>
                <span className="text-primary font-medium">Equipamento de fresagem de última geração</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-surface-pink text-accent flex items-center justify-center font-bold text-sm shrink-0">✓</span>
                <span className="text-primary font-medium">Acompanhamento e aconselhamento profilático</span>
              </li>
            </ul>
            
            <Link to="/about">
              <Button variant="primary">Conhecer a Clínica</Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};