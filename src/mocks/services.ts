import type { NailService } from '../types/service';

export const mockServices: NailService[] = [
  {
    id: 'srv_1',
    title: 'Pedicure Avançada Completa',
    durationMinutes: 90,
    price: 45.00,
    description: 'Tratamento profundo de calosidades, fissuras, corte técnico e hidratação intensiva.',
    imageUrl: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'srv_2',
    title: 'Tratamento de Unha Encravada',
    durationMinutes: 60,
    price: 35.00,
    description: 'Remoção de espícula (unha encravada) com técnica indolor e curativo oclusivo.',
    imageUrl: 'https://images.unsplash.com/photo-1542840410-3092f99611a3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'srv_3',
    title: 'Reconstrução Ungueal',
    durationMinutes: 60,
    price: 30.00,
    description: 'Reconstrução de unhas danificadas ou fúngicas com resina médica antifúngica.',
    imageUrl: 'https://images.unsplash.com/photo-1629984551107-160bf2ce2d74?auto=format&fit=crop&q=80&w=400'
  }
];