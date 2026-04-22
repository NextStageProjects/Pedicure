import type { NailService } from '../types/service';

export interface TimeSlot {
  time: string;
  available: boolean;
}

export const mockServices: NailService[] = [
  {
    id: 'srv_1',
    title: 'Extensão em Gel',
    durationMinutes: 120,
    price: 45.00,
    description: 'Alongamento completo com tip ou molde para um visual longo e duradouro.',
    imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'srv_2',
    title: 'Manutenção de Gel',
    durationMinutes: 90,
    price: 30.00,
    description: 'Preenchimento do crescimento e renovação do brilho em extensões existentes.',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'srv_3',
    title: 'Verniz Gel',
    durationMinutes: 60,
    price: 20.00,
    description: 'Aplicação de cor de longa duração sobre a unha natural.',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400'
  }
];