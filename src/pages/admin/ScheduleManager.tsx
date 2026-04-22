import React from 'react';
import { Link } from 'react-router-dom';

export const ScheduleManager: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-border-light flex flex-col">
        <div className="p-6 border-b border-border-light">
          <h2 className="font-bold text-xl text-primary">Admin Panel</h2>
        </div>
        <nav className="p-4 flex flex-col gap-2">
          <Link to="/admin" className="p-3 text-secondary hover:bg-gray-100 rounded-xl font-medium transition-colors">Dashboard</Link>
          <Link to="/admin/schedule" className="p-3 bg-surface-pink text-accent rounded-xl font-medium">Gestão de Agenda</Link>
          <Link to="/" className="p-3 text-secondary hover:bg-gray-100 rounded-xl font-medium transition-colors mt-auto">Voltar ao Site</Link>
        </nav>
      </aside>

      <main className="flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Agenda Diária</h1>
          <input type="date" className="p-2 border border-border-light rounded-lg bg-white" defaultValue={new Date().toISOString().split('T')[0]} />
        </div>

        <div className="bg-white border border-border-light rounded-2xl overflow-hidden">
          <div className="grid grid-cols-4 bg-gray-50 border-b border-border-light p-4 font-semibold text-primary">
            <div>Horário</div>
            <div>Especialista 1</div>
            <div>Especialista 2</div>
            <div>Especialista 3</div>
          </div>
          
          {/* Mock Grid */}
          {['09:00', '10:00', '11:00', '12:00'].map((time) => (
            <div key={time} className="grid grid-cols-4 border-b border-border-light p-4 items-center">
              <div className="font-medium text-secondary">{time}</div>
              <div className="p-2 bg-surface-pink/50 text-accent rounded-lg text-sm border border-accent/20">Pedicure Completa<br/><span className="text-xs text-primary">Ana S.</span></div>
              <div className="p-2 text-secondary text-sm">Livre</div>
              <div className="p-2 bg-gray-100 rounded-lg text-sm text-secondary">Bloqueado</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};