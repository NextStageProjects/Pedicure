import { useState, useEffect } from 'react';
import type { TimeSlot } from '../types/booking';
import { mockServices } from '../mocks/services';
import { BOOKING_CONFIG } from '../config/constants';

export const useAvailability = (date: Date | null, serviceId: string | null) => {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!date || !serviceId) {
      setSlots([]);
      return;
    }

    setIsLoading(true);

    // Simulação de latência de rede para testes de UX
    const timer = setTimeout(() => {
      const service = mockServices.find(s => s.id === serviceId);
      if (!service) {
        setIsLoading(false);
        return;
      }

      // Motor de Geração de Grelha Diária (Mock)
      const generatedSlots: TimeSlot[] = [];
      let currentHour = BOOKING_CONFIG.OPENING_HOUR;
      let currentMinute = 0;

      while (currentHour < BOOKING_CONFIG.CLOSING_HOUR) {
        const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
        
        // Simulação de regras de negócio:
        // Bloqueia horários perto do fecho onde o serviço excederia a hora de saída
        const totalServiceTime = service.durationMinutes + BOOKING_CONFIG.BUFFER_MINUTES;
        const minutesUntilClose = (BOOKING_CONFIG.CLOSING_HOUR - currentHour) * 60 - currentMinute;
        
        // Mock de colisão de agenda (simula que a probabilidade de estar livre é 60%)
        // Numa app real, isto seria substituído por uma query ao Supabase.
        const isDbAvailable = Math.random() > 0.4;
        const hasTimeUntilClose = minutesUntilClose >= totalServiceTime;

        generatedSlots.push({
          time: timeString,
          available: isDbAvailable && hasTimeUntilClose,
        });

        // Incremento baseado no intervalo base da agenda
        currentMinute += BOOKING_CONFIG.SLOT_INTERVAL;
        if (currentMinute >= 60) {
          currentHour++;
          currentMinute -= 60;
        }
      }

      setSlots(generatedSlots);
      setIsLoading(false);
    }, 600); // 600ms de latência simulada

    return () => clearTimeout(timer);
  }, [date, serviceId]);

  return { slots, isLoading };
};