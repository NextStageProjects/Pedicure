import React from 'react';
import { ArrowRight, Activity, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../components/common/ScrollReveal';

export const TreatmentGrid: React.FC = () => {
  const features = [
    {
      icon: <Activity size={28} />,
      title: "Intervenção Patológica",
      desc: "Tratamento seguro e indolor de unhas encravadas, onicomicose e remoção de calosidades profundas."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Higiene Hospitalar",
      desc: "Todos os instrumentos são esterilizados em autoclave. Protocolos rigorosos de biossegurança clínica."
    },
    {
      icon: <Sparkles size={28} />,
      title: "Reconstrução Estética",
      desc: "Devolvemos a integridade visual da unha com resinas médicas, unindo saúde e estética."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div className="max-w-2xl">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Os nossos tratamentos</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">Especialistas na Saúde do seu Pé</h2>
              <p className="text-secondary text-base leading-relaxed">
                A pedicure avançada ultrapassa a estética. Focamo-nos na prevenção, tratamento e reabilitação das patologias do pé, garantindo conforto imediato e resultados duradouros.
              </p>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 font-semibold text-sm text-accent hover:text-accent-hover transition-colors group whitespace-nowrap">
              Ver todos os tratamentos
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="group p-8 rounded-3xl bg-cream border border-border-light hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-400 cursor-default">
                <div className="w-14 h-14 bg-surface-pink rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feat.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};