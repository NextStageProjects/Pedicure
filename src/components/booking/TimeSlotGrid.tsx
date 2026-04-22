import React from 'react';
import type { TimeSlot } from '../../types/booking';
import { Clock } from 'lucide-react';

interface Props {
  slots: TimeSlot[];
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
  isLoading?: boolean;
}

export const TimeSlotGrid: React.FC<Props> = ({ slots, selectedTime, onSelectTime, isLoading }) => {
  if (isLoading) {
    return <div className="animate-pulse w-full h-32 bg-surface-pink/30 rounded-2xl"></div>;
  }

  if (slots.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-surface-pink/20 rounded-2xl border border-border-light text-center">
        <Clock size={32} className="text-secondary mb-3 opacity-50" />
        <p className="text-primary font-medium">Sem horários disponíveis</p>
        <p className="text-sm text-secondary mt-1">Por favor, selecione outra data.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h3 className="font-semibold text-lg text-primary mb-4">Escolha a Hora</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {slots.map((slot) => {
          const isSelected = selectedTime === slot.time;
          
          return (
            <button
              key={slot.time}
              disabled={!slot.available}
              onClick={() => onSelectTime(slot.time)}
              className={`py-3 px-2 rounded-xl text-sm font-semibold transition-all duration-200 border-2
                ${!slot.available 
                  ? 'bg-border-light/30 border-transparent text-secondary/40 cursor-not-allowed line-through' 
                  : isSelected
                    ? 'bg-accent border-accent text-white shadow-md transform -translate-y-0.5'
                    : 'bg-white border-border-light text-primary hover:border-accent hover:text-accent'
                }
              `}
            >
              {slot.time}
            </button>
          );
        })}
      </div>
    </div>
  );
};