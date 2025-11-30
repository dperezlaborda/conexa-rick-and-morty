import { cx } from "class-variance-authority";

export default function List({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div 
      className={cx(
        "flex flex-col backdrop-blur-sm bg-white/5 border border-white/20 rounded-lg p-6 shadow-xl", 
        className
      )}
    >
      {children}
    </div>
  );
}