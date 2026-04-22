import React from 'react';
import { ScrollReveal } from '../../components/common/ScrollReveal';

export const Metrics: React.FC = () => {
  const stats = [
    { label: "Tratamentos Realizados", value: "2.500+" },
    { label: "Anos de Experiência", value: "12" },
    { label: "Casos Complexos Resolvidos", value: "850+" },
    { label: "Taxa de Sucesso Clínico", value: "99.8%" }
  ];

  return (
    <section className="py-20 bg-linear-to-br from-accent via-accent-hover to-[#8B4445] text-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 120}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium leading-relaxed">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};