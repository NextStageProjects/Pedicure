import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Award, Heart, Microscope, ArrowRight } from 'lucide-react';
import brushMaskUrl from '../assets/brush-mask.svg';

export const About: React.FC = () => {
  const navigate = useNavigate();

  const team = [
    {
      name: "Dra. Ana Silva",
      role: "Especialista em Podologia",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=600",
      bio: "12 anos de experiência em tratamentos patológicos."
    },
    {
      name: "Dra. Carla Santos",
      role: "Pedicure Clínica",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
      bio: "Especialista em reconstrução ungueal e órteses."
    },
    {
      name: "Dr. João Pereira",
      role: "Especialista em Pé Diabético",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
      bio: "Focado na prevenção e cuidado de pés sensíveis."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header/Hero Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          {/* Decorative ink splashes - Different pattern from Home */}
          <div
            className="absolute top-[-100px] left-[-50px] w-[500px] h-[500px] opacity-15 pointer-events-none rotate-[-15deg]"
            style={{
              backgroundImage: `url(${brushMaskUrl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <div
            className="absolute bottom-[-150px] right-[10%] w-[600px] h-[600px] opacity-10 pointer-events-none rotate-[160deg] scale-x-[-1]"
            style={{
              backgroundImage: `url(${brushMaskUrl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />

          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <ScrollReveal direction="left">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">A Nossa História</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight">
                Ciência e <span className="bg-brush active">Cuidado</span> em cada passo.
              </h1>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                Nascemos da necessidade de elevar os padrões da pedicure em Portugal. Acreditamos que a saúde dos seus pés é a base para uma vida ativa e sem dor.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => navigate('/booking')}>Marcar Consulta</Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Clínica de Pedicure Avançada" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Meet Us Section */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Meet Us</h2>
                <p className="text-secondary">Os profissionais que cuidam da sua saúde.</p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <ScrollReveal key={i} delay={i * 150}>
                  <div className="group relative rounded-[2.5rem] overflow-hidden aspect-[3/4] bg-primary cursor-pointer shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                    />
                    
                    {/* Hover Content (Desktop) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 hidden md:flex">
                      <h4 className="text-white text-2xl font-serif mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{member.name}</h4>
                      <p className="text-accent font-semibold text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{member.role}</p>
                      <p className="text-white/80 text-sm mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{member.bio}</p>
                      <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        <Heart size={20} className="text-white/60 hover:text-white transition-colors" />
                        <ShieldCheck size={20} className="text-white/60 hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Mobile Content (Always visible at bottom) */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-5 md:hidden">
                      <h4 className="text-primary font-serif text-lg">{member.name}</h4>
                      <p className="text-accent text-xs font-bold uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why the Difference Section */}
        <section className="py-24 bg-cream px-6">
          <div className="max-w-[1000px] mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-12">O que nos torna diferentes?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {/* Advanced Card */}
                <div className="bg-white p-10 rounded-[3rem] border border-border-light shadow-sm transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-[1.02] hover:shadow-xl hover:border-accent/30 group">
                  <h3 className="font-bold text-xl text-primary mb-4 flex items-center gap-2 group-hover:text-accent transition-colors">
                    <Award size={24} className="text-accent" />
                    Pedicure Avançada
                  </h3>
                  <ul className="space-y-3 text-secondary text-sm">
                    <li className="flex items-center gap-2"><ArrowRight size={14} className="text-accent" /> Esterilização em Autoclave Classe B</li>
                    <li className="flex items-center gap-2"><ArrowRight size={14} className="text-accent" /> Foco na saúde e patologia</li>
                    <li className="flex items-center gap-2"><ArrowRight size={14} className="text-accent" /> Profissionais de saúde qualificados</li>
                    <li className="flex items-center gap-2"><ArrowRight size={14} className="text-accent" /> Tratamentos indolores</li>
                  </ul>
                </div>

                {/* Traditional Card */}
                <div className="bg-white p-10 rounded-[3rem] border border-border-light shadow-sm transition-all duration-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-[1.02] hover:shadow-xl hover:border-accent/30 group">
                  <h3 className="font-bold text-xl text-secondary mb-4 flex items-center gap-2 group-hover:text-accent transition-colors">
                    <Heart size={24} className="text-accent" />
                    Pedicure Tradicional
                  </h3>
                  <ul className="space-y-3 text-secondary/70 text-sm">
                    <li className="flex items-center gap-2"><X size={14} className="text-accent" /> Foco apenas na estética visual</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-accent" /> Desinfeção química básica</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-accent" /> Riscos de infeções cruzadas</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-accent" /> Resultados temporários</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto bg-primary rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[100px] rounded-full" />
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Pronto para caminhar sem dor?</h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
                Junte-se a centenas de clientes que recuperaram a confiança e a saúde dos seus pés connosco.
              </p>
              <Button 
                variant="primary" 
                onClick={() => navigate('/booking')}
                className="bg-accent hover:bg-accent-hover text-white px-10 py-4 text-lg border-none"
              >
                Agendar Minha Avaliação
                <ArrowRight className="ml-2" />
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const X = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
