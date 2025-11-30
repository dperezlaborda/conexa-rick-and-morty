import { ReactNode } from "react";
import { VariantProps } from "class-variance-authority";
import { cardVariants } from "./style";

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}
export default function Card({ 
  children,
  onClick,
  className,
  variant,
  size,
  clickable
}: CardProps) {
  return (
    <div
      className={cardVariants({
        variant,
        size,
        clickable,
        className,
      })}
      onClick={onClick}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}