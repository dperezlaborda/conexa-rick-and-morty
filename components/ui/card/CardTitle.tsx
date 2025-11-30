import { cx } from "class-variance-authority";
import { ReactNode } from "react";

export default function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cx("text-lg font-semibold mb-2 px-4", className)}>{children}</h3>
  );
}