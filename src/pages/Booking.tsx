import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ServiceSelector } from '../components/booking/ServiceSelector';
import { CalendarPicker } from '../components/booking/CalendarPicker';
import { TimeSlotGrid } from '../components/booking/TimeSlotGrid';
import { Button } from '../components/common/Button';
import { mockServices } from '../mocks/services';
import { useAvailability } from '../hooks/useAvailability';

export const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Derivação de dados
  const { slots, isLoading: isSlotsLoading } = useAvailability(selectedDate, selectedServiceId);
  const selectedService = mockServices.find(s => s.id === selectedServiceId);

  // Validadores de transição de estado
  const canProceedToDate = selectedServiceId !== null;
  const canProceedToTime = selectedDate !== null;
  const canConfirm = selectedTime !== null;

  const handleConfirm = () => {
    // Aqui entrará o Modal de recolha de dados do utilizador
    alert(`Reserva simulada:\nServiço: ${selectedService?.title}\nData: ${selectedDate?.toLocaleDateString()}\nHora: ${selectedTime}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      
      <main className="flex-grow w-full max-w-[800px] mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="font-serif text-4xl text-primary mb-3">A sua Marcação</h1>
          <p className="text-secondary">Siga os passos abaixo para garantir o seu horário.</p>
        </div>

        {/* Indicador de Progresso */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-border-light -z-10 transform -translate-y-1/2"></div>
          <div className={`h-0.5 bg-accent absolute left-0 top-1/2 -z-10 transform -translate-y-1/2 transition-all duration-500`} style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
          
          {[1, 2, 3].map((s) => (
            <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 transition-colors duration-300
              ${step >= s ? 'bg-accent border-cream text-white' : 'bg-white border-border-light text-secondary'}
            `}>
              {s}
            </div>
          ))}
        </div>

        {/* Renderização Condicional dos Passos */}
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-border-light">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-semibold text-2xl text-primary mb-6">1. Selecione o Serviço</h2>
              <ServiceSelector 
                services={mockServices}
                selectedServiceId={selectedServiceId}
                onSelect={(id) => {
                  setSelectedServiceId(id);
                  setStep(2); // Avança automaticamente para reduzir atrito
                }}
              />
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col gap-8">
              <h2 className="font-semibold text-2xl text-primary mb-2">2. Data e Hora</h2>
              
              <CalendarPicker 
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />

              {canProceedToTime && (
                <div className="pt-8 border-t border-border-light">
                  <TimeSlotGrid 
                    slots={slots}
                    selectedTime={selectedTime}
                    onSelectTime={setSelectedTime}
                    isLoading={isSlotsLoading}
                  />
                </div>
              )}

              <div className="flex justify-between mt-8 pt-6 border-t border-border-light">
                <Button variant="secondary" onClick={() => setStep(1)}>Voltar</Button>
                <Button 
                  disabled={!canConfirm}
                  onClick={() => setStep(3)}
                >
                  Continuar
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-8">
              <h2 className="font-semibold text-2xl text-primary mb-4">3. Resumo da Reserva</h2>
              <div className="bg-surface-pink/30 p-6 rounded-2xl max-w-sm mx-auto mb-8 text-left space-y-3">
                <p><span className="font-semibold text-primary">Serviço:</span> {selectedService?.title}</p>
                <p><span className="font-semibold text-primary">Preço:</span> {selectedService?.price.toFixed(2)}€</p>
                <p><span className="font-semibold text-primary">Data:</span> {selectedDate?.toLocaleDateString('pt-PT')}</p>
                <p><span className="font-semibold text-primary">Hora:</span> {selectedTime}</p>
              </div>
              
              <div className="flex justify-between max-w-sm mx-auto">
                <Button variant="secondary" onClick={() => setStep(2)}>Modificar</Button>
                <Button onClick={handleConfirm}>Confirmar Reserva</Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};