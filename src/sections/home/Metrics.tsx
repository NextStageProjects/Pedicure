import React from 'react';

export const Metrics: React.FC = () => {
  const stats = [
    { label: "Tratamentos Realizados", value: "2.500+" },
    { label: "Anos de Experiência", value: "12" },
    { label: "Casos Complexos Resolvidos", value: "850+" },
    { label: "Taxa de Sucesso Clínico", value: "99.8%" }
  ];

  return (
    <section className="py-16 bg-accent text-white">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center border-r last:border-0 border-white/20">
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-widest text-white/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};