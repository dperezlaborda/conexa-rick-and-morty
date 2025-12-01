import { ReactNode } from 'react';
import { cardBadgeVariants } from './style';

interface CardBadgeProps {
  children: ReactNode;
  variant?: 'alive' | 'dead' | 'unknown';
  className?: string;
}

export function CardBadge({ children, variant = 'alive', className = '' }: CardBadgeProps) {
  return <span className={cardBadgeVariants({ variant, className })}>{children}</span>;
}
