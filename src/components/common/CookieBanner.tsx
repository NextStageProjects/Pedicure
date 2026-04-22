import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-sm bg-white border border-border-light p-6 rounded-2xl shadow-2xl z-[100] animate-in slide-in-from-bottom-4 duration-500">
      <h4 className="font-bold text-primary mb-2">Privacidade</h4>
      <p className="text-secondary text-xs mb-4 leading-relaxed">
        Utilizamos cookies para melhorar a sua experiência e analisar o tráfego do site de pedicure avançada.
      </p>
      <div className="flex gap-3">
        <Button onClick={accept} className="w-full text-xs py-2">Aceitar</Button>
        <button onClick={() => setShow(false)} className="text-xs text-secondary underline">Recusar</button>
      </div>
    </div>
  );
};