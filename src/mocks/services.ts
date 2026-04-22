import type { NailService } from '../types/service';

export const mockServices: NailService[] = [
  {
    id: 'srv_1',
    title: 'Pedicure Avançada Completa',
    durationMinutes: 90,
    price: 45.00,
    description: 'Tratamento profundo de calosidades, fissuras, corte técnico e hidratação intensiva para pés que necessitam de cuidado clínico especializado.',
    imageUrl: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'srv_2',
    title: 'Tratamento de Unha Encravada',
    durationMinutes: 60,
    price: 35.00,
    description: 'Remoção de espícula (unha encravada) com técnica indolor e curativo oclusivo, garantindo alívio imediato.',
    imageUrl: 'https://images.unsplash.com/photo-1542840410-3092f99611a3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'srv_3',
    title: 'Reconstrução Ungueal',
    durationMinutes: 60,
    price: 30.00,
    description: 'Reconstrução de unhas danificadas ou fúngicas com resina médica antifúngica de alta tecnologia.',
    imageUrl: 'https://images.unsplash.com/photo-1629984551107-160bf2ce2d74?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'srv_4',
    title: 'Tratamento de Onicomicose',
    durationMinutes: 45,
    price: 25.00,
    description: 'Limpeza técnica e aplicação de laser/tópicos para eliminação progressiva de fungos nas unhas.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'srv_5',
    title: 'Pé Diabético (Prevenção)',
    durationMinutes: 75,
    price: 50.00,
    description: 'Cuidado especializado para pacientes diabéticos, com foco em prevenção de úlceras e sensibilidade reduzida.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'srv_6',
    title: 'Órtese Ungueal',
    durationMinutes: 40,
    price: 20.00,
    description: 'Aplicação de dispositivo para correção da curvatura da unha, evitando que volte a encravar.',
    imageUrl: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=600'
  }
];