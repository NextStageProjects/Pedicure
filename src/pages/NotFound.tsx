import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-6 text-center">
      <h1 className="font-serif text-9xl text-accent opacity-20">404</h1>
      <h2 className="text-3xl font-bold text-primary -mt-10 mb-4">Página não encontrada</h2>
      <p className="text-secondary mb-8 max-w-md">
        O caminho que procura não existe ou foi movido. Volte para a segurança da nossa página inicial.
      </p>
      <Link to="/">
        <Button>Voltar ao Início</Button>
      </Link>
    </div>
  );
};