import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { mockServices } from '../mocks/services';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Clock, Euro, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesGallery: React.FC = () => {
  const navigate = useNavigate();

  const clinicPhotos = [
    { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800', title: 'Gabinete Clínico', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600', title: 'Esterilização', size: 'small' },
    { url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600', title: 'Conforto', size: 'small' },
    { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800', title: 'Equipamento Moderno', size: 'medium' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            <ScrollReveal>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">Excelência em Podologia</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6">Tratamentos Especializados</h1>
              <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                Combinamos tecnologia clínica de ponta com o cuidado humano necessário para devolver a saúde e o bem-estar aos seus pés.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="pb-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockServices.map((service, idx) => {
                const isFeatured = idx === 0;
                return (
                  <ScrollReveal key={service.id} delay={idx * 100} className={isFeatured ? 'md:col-span-2' : ''}>
                    <div className={`group h-full bg-white rounded-[2.5rem] overflow-hidden border border-border-light shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 flex flex-col ${isFeatured ? 'md:flex-row' : ''}`}>
                      <div className={`${isFeatured ? 'md:w-1/2 h-64 md:h-full' : 'h-52'} relative overflow-hidden shrink-0`}>
                        <img 
                          src={service.imageUrl} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                      </div>
                      
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 rounded-full bg-surface-pink text-accent text-[10px] font-bold uppercase tracking-wider">
                            {isFeatured ? 'Serviço Premium' : 'Tratamento Clínico'}
                          </span>
                        </div>
                        
                        <h3 className={`font-serif text-primary mb-3 leading-tight ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                          {service.title}
                        </h3>
                        
                        <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8 py-4 border-y border-border-light/50">
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-accent" />
                            <span className="text-sm font-medium text-primary">{service.durationMinutes} min</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Euro size={16} className="text-accent" />
                            <span className="text-sm font-bold text-primary">{service.price.toFixed(2)}€</span>
                          </div>
                        </div>

                        <Button 
                          variant={isFeatured ? 'primary' : 'outline'}
                          className="w-full group/btn" 
                          onClick={() => navigate('/booking')}
                        >
                          Agendar Sessão
                          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Space Gallery - Bento Grid */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">O Nosso Espaço</h2>
                <p className="text-secondary">Ambiente clínico rigorosamente esterilizado para o seu total conforto e segurança.</p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
              {clinicPhotos.map((photo, i) => (
                <ScrollReveal 
                  key={i} 
                  delay={i * 100}
                  className={`relative rounded-3xl overflow-hidden group ${
                    photo.size === 'large' ? 'col-span-2 row-span-2' : 
                    photo.size === 'medium' ? 'col-span-2' : ''
                  }`}
                >
                  <img 
                    src={photo.url} 
                    alt={photo.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.title}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-cream px-6">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-border-light text-center">
              <ScrollReveal>
                <h3 className="font-serif text-2xl md:text-3xl text-primary mb-8">Porquê escolher a nossa clínica?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  {[
                    'Instrumentos esterilizados em Autoclave',
                    'Profissionais com formação avançada',
                    'Ambiente relaxante e privativo',
                    'Protocolos de biossegurança clínica',
                    'Resultados visíveis na primeira sessão',
                    'Acompanhamento pós-tratamento'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-accent shrink-0" />
                      <span className="text-secondary font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};