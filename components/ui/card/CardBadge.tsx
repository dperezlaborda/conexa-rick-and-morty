import { ReactNode } from "react";

interface CardBadgeProps {
  children: ReactNode;
  variant?: 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

export function CardBadge({ children, variant = 'info', className = '' }: CardBadgeProps) {
  const variants = {
    success: 'bg-green-500/20 text-green-300 border-green-500/50',
    warning: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
    danger: 'bg-red-500/20 text-red-300 border-red-500/50',
    info: 'bg-blue-500/20 text-blue-300 border-blue-500/50',
  };

//TO-DO: AGREGAR CVA 

  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}