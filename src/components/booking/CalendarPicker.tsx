import React from 'react';
import { format, addDays, startOfToday, isSameDay } from 'date-fns';
import { pt } from 'date-fns/locale';

interface Props {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export const CalendarPicker: React.FC<Props> = ({ selectedDate, onSelectDate }) => {
  const today = startOfToday();
  // Gera os próximos 14 dias disponíveis para reserva
  const availableDays = Array.from({ length: 14 }).map((_, i) => addDays(today, i));

  return (
    <div className="w-full">
      <h3 className="font-semibold text-lg text-primary mb-4">Escolha a Data</h3>
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide">
        {availableDays.map((date) => {
          const isSelected = selectedDate ? isSameDay(selectedDate, date) : false;
          
          if (date.getDay() === 0) return null; // Salão fechado ao domingo

          return (
            <button
              key={date.toISOString()}
              onClick={() => onSelectDate(date)}
              className={`flex-shrink-0 snap-start flex flex-col items-center justify-center w-20 h-24 rounded-2xl transition-all duration-200 border-2
                ${isSelected 
                  ? 'border-accent bg-accent text-white shadow-md' 
                  : 'border-border-light bg-white text-primary hover:border-accent hover:bg-surface-pink/10'
                }`}
            >
              <span className={`text-xs font-medium uppercase ${isSelected ? 'text-white/80' : 'text-secondary'}`}>
                {format(date, 'E', { locale: pt })}
              </span>
              <span className="text-2xl font-bold mt-1">
                {format(date, 'd')}
              </span>
              <span className={`text-xs ${isSelected ? 'text-white/80' : 'text-secondary'}`}>
                {format(date, 'MMM', { locale: pt })}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};