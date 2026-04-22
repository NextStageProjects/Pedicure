import React, { useState, useEffect } from 'react';
import { User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-cream/80 backdrop-blur-xl shadow-sm border-b border-border-light/40' 
          : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center py-5 w-full max-w-[1200px] mx-auto px-6">
        <Link to="/" className="font-serif text-2xl md:text-3xl font-semibold text-primary tracking-tight hover:text-accent transition-colors">
          Pedicure Avançada
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          <Link to="/about" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Sobre</Link>
          <Link to="/gallery" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Galeria</Link>
          <Link to="/pricing" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Preços</Link>
        </div>

        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors">
            <User size={18} />
            <span className="hidden md:inline">Entrar</span>
          </button>
          <button className="block md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-cream/95 backdrop-blur-xl border-b border-border-light overflow-hidden transition-all duration-300 md:hidden ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-6 flex flex-col gap-5">
          <Link to="/about" className="text-lg font-semibold text-primary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Sobre</Link>
          <Link to="/gallery" className="text-lg font-semibold text-primary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Galeria</Link>
          <Link to="/pricing" className="text-lg font-semibold text-primary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Preços</Link>
        </div>
      </div>
    </header>
  );
};