import React, { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  className = '', 
  disabled,
  ...props 
}) => {
  const base = "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer";
  
  const variants: Record<string, string> = {
    primary: "bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25",
    secondary: "bg-white text-primary border-2 border-border-light hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-lg",
    outline: "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-white hover:-translate-y-0.5",
  };

  const disabledClasses = (disabled || isLoading) ? "opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-none" : "";

  return (
    <button 
      className={`${base} ${variants[variant]} ${disabledClasses} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'A processar...' : children}
    </button>
  );
};