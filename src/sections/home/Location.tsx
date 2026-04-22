import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-border-light shadow-sm">
            <h2 className="font-serif text-3xl text-primary mb-8">Onde nos encontrar</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-secondary">
                <MapPin className="text-accent shrink-0" size={24} />
                <p>Avenida da Liberdade, nº 123, 4º Esq.<br />1250-147 Lisboa, Portugal</p>
              </div>
              <div className="flex items-center gap-4 text-secondary">
                <Phone className="text-accent shrink-0" size={24} />
                <p>(+351) 912 345 678</p>
              </div>
              <div className="flex items-center gap-4 text-secondary">
                <Mail className="text-accent shrink-0" size={24} />
                <p>geral@nailss.pt</p>
              </div>
              <div className="flex items-start gap-4 text-secondary">
                <Clock className="text-accent shrink-0" size={24} />
                <div>
                  <p>Segunda - Sexta: 09:00 - 19:00</p>
                  <p>Sábado: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-border-light shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1423472097!2d-9.1465220235!3d38.7225134717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331000000000%3A0x0!2zMzhCsDQzJzIxLjAiTiA5wrA4JzM4LjUiVw!5e0!3m2!1spt!2spt!4v1700000000000!5m2!1spt!2spt" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};