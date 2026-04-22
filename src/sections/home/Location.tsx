import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ScrollReveal } from '../../components/common/ScrollReveal';

export const Location: React.FC = () => {
  const contacts = [
    { icon: <MapPin size={20} />, content: <>Avenida da Liberdade, nº 123, 4º Esq.<br />1250-147 Lisboa, Portugal</> },
    { icon: <Phone size={20} />, content: "(+351) 912 345 678" },
    { icon: <Mail size={20} />, content: "geral@pedicureavancada.pt" },
    { icon: <Clock size={20} />, content: <>Segunda - Sexta: 09:00 - 19:00<br />Sábado: 09:00 - 13:00</> },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Contacto</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary">Onde nos encontrar</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <ScrollReveal direction="left">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-border-light shadow-sm h-full">
              <div className="space-y-7">
                {contacts.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <span className="w-10 h-10 rounded-xl bg-surface-pink text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </span>
                    <p className="text-secondary text-sm leading-relaxed pt-2">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-border-light shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1423472097!2d-9.1465220235!3d38.7225134717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331000000000%3A0x0!2zMzhCsDQzJzIxLjAiTiA5wrA4JzM4LjUiVw!5e0!3m2!1spt!2spt!4v1700000000000!5m2!1spt!2spt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};