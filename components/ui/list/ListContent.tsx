import { ReactNode } from 'react';
import { cx } from 'class-variance-authority';

export default function ListContent({
  children,
  emptyMessage,
  className,
  loading,
}: {
  children: ReactNode;
  emptyMessage?: string;
  className?: string;
  loading?: boolean;
}) {
  const hasContent = Array.isArray(children) ? children.length > 0 : children;

  if (loading) {
    return (
      <div
        className={cx('flex h-[486px] w-full items-center justify-center text-gray-400', className)}
      >
        Cargando...
      </div>
    );
  }

  if (!hasContent) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center py-12">
        <p className="max-w-xs text-center text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return <div className={cx(className, 'grid w-full justify-items-center gap-6')}>{children}</div>;
}
