import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { mockServices } from '../mocks/services';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';

export const ServicesGallery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">Tratamentos de Pedicure Avançada</h1>
          <p className="text-secondary max-w-2xl mx-auto">
            Soluções clínicas e estéticas especializadas para a saúde integral dos seus pés. 
            Resultados rigorosos e duradouros com protocolos de higiene hospitalar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockServices.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl overflow-hidden border border-border-light shadow-sm flex flex-col">
              <div className="h-56 bg-surface-pink/30">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-semibold text-xl text-primary mb-3">{service.title}</h3>
                <p className="text-secondary text-sm mb-6 flex-grow">{service.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-border-light">
                  <div className="flex flex-col">
                    <span className="text-xs text-secondary uppercase tracking-wider font-semibold">Investimento</span>
                    <span className="font-bold text-accent text-lg">{service.price.toFixed(2)}€</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-xs text-secondary uppercase tracking-wider font-semibold">Duração</span>
                    <span className="font-bold text-primary">{service.durationMinutes} min</span>
                  </div>
                </div>
                <Button 
                  className="mt-6 w-full" 
                  onClick={() => navigate('/booking')}
                >
                  Agendar Sessão
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};