import { cx } from "class-variance-authority";
import { ReactNode } from "react";

export default function ListContent({ 
  children,
  emptyMessage,
  className
}: { children: ReactNode, emptyMessage?: string, className?: string }) {

  const hasContent = Array.isArray(children) ? children.length > 0 : children;
  
  if (!hasContent) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-12">
        <p className="text-center text-gray-400 max-w-xs">
          {emptyMessage}
        </p>
        
        <div className="mt-6 flex gap-2">
          <div className="h-1 w-8 rounded-full bg-white/10 animate-pulse"></div>
          <div className="h-1 w-8 rounded-full bg-white/10 animate-pulse delay-75"></div>
          <div className="h-1 w-8 rounded-full bg-white/10 animate-pulse delay-150"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={cx(className, "grid justify-items-center gap-6")}>
      {children}
    </div>
  );
}