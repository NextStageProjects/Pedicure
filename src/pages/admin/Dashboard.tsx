import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Users, TrendingUp } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Simples */}
      <aside className="w-64 bg-white border-r border-border-light flex flex-col">
        <div className="p-6 border-b border-border-light">
          <h2 className="font-bold text-xl text-primary">Admin Panel</h2>
        </div>
        <nav className="p-4 flex flex-col gap-2">
          <Link to="/admin" className="p-3 bg-surface-pink text-accent rounded-xl font-medium">Dashboard</Link>
          <Link to="/admin/schedule" className="p-3 text-secondary hover:bg-gray-100 rounded-xl font-medium transition-colors">Gestão de Agenda</Link>
          <Link to="/" className="p-3 text-secondary hover:bg-gray-100 rounded-xl font-medium transition-colors mt-auto">Voltar ao Site</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Visão Geral</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-border-light shadow-sm">
            <div className="flex items-center gap-4 mb-4 text-accent"><CalendarDays size={24} /></div>
            <p className="text-secondary text-sm font-medium">Consultas Hoje</p>
            <p className="text-3xl font-bold text-primary">12</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-light shadow-sm">
            <div className="flex items-center gap-4 mb-4 text-accent"><Users size={24} /></div>
            <p className="text-secondary text-sm font-medium">Novos Clientes</p>
            <p className="text-3xl font-bold text-primary">4</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-light shadow-sm">
            <div className="flex items-center gap-4 mb-4 text-accent"><TrendingUp size={24} /></div>
            <p className="text-secondary text-sm font-medium">Faturação Prevista</p>
            <p className="text-3xl font-bold text-primary">485.00€</p>
          </div>
        </div>
      </main>
    </div>
  );
};