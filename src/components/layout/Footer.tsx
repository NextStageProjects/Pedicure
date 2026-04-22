import React from 'react';
import { Link } from 'react-router-dom';
// import { Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border-light pt-16 pb-8 mt-auto">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl font-semibold text-primary block mb-4 hover:text-accent transition-colors">
              Pedicure Avançada
            </Link>
            <p className="text-secondary max-w-xs leading-relaxed text-sm">
              Elevando a saúde e estética dos seus pés com precisão, higiene e padrões clínicos rigorosos.
            </p>
            {/* <div className="flex gap-3 mt-6">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-pink text-secondary hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-pink text-secondary hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-pink text-secondary hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
            </div> */}
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-5 text-sm uppercase tracking-wider">Empresa</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/about" className="text-secondary hover:text-accent transition-colors">Sobre Nós</Link>
              <Link to="/gallery" className="text-secondary hover:text-accent transition-colors">Galeria</Link>
              <Link to="/pricing" className="text-secondary hover:text-accent transition-colors">Serviços e Preços</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-5 text-sm uppercase tracking-wider">Legal</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/terms" className="text-secondary hover:text-accent transition-colors">Termos e Condições</Link>
              <Link to="/privacy-policy" className="text-secondary hover:text-accent transition-colors">Política de Privacidade</Link>
            </div>
          </div>

        </div>
        
        <div className="text-center pt-8 border-t border-border-light text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} Pedicure Avançada. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};