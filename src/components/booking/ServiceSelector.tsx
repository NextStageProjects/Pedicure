import React from 'react';
import type { NailService } from '../../types/service';
import { Check } from 'lucide-react';

interface Props {
  services: NailService[];
  selectedServiceId: string | null;
  onSelect: (id: string) => void;
}

export const ServiceSelector: React.FC<Props> = ({ services, selectedServiceId, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {services.map((service) => {
        const isSelected = selectedServiceId === service.id;
        return (
          <button
            key={service.id}
            onClick={() => onSelect(service.id)}
            className={`relative flex flex-col items-start p-6 rounded-2xl text-left transition-all duration-300 border-2 
              ${isSelected 
                ? 'border-accent bg-surface-pink/30 shadow-md transform -translate-y-1' 
                : 'border-border-light bg-white hover:border-accent hover:shadow-sm'
              }`}
          >
            {isSelected && (
              <div className="absolute top-4 right-4 bg-accent text-white p-1 rounded-full">
                <Check size={16} />
              </div>
            )}
            <div className="w-full h-40 mb-4 rounded-xl overflow-hidden bg-cream">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-primary mb-2">{service.title}</h3>
            <p className="text-secondary text-sm mb-4 line-clamp-2">{service.description}</p>
            <div className="mt-auto flex justify-between items-center w-full pt-4 border-t border-border-light">
              <span className="font-bold text-accent">{service.price.toFixed(2)}€</span>
              <span className="text-xs font-medium text-secondary bg-border-light/50 px-2 py-1 rounded">
                {service.durationMinutes} min
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};