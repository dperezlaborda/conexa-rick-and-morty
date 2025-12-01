import { ReactNode } from 'react';
import { cx } from 'class-variance-authority';
import Skeleton from '@/components/ui/skeleton/Skeleton';

export default function ListContent({
  children,
  emptyMessage,
  className,
  loading,
  variant,
}: {
  children: ReactNode;
  emptyMessage?: string;
  className?: string;
  loading?: boolean;
  variant?: 'characters' | 'episodes';
}) {
  const hasContent = Array.isArray(children) ? children.length > 0 : children;

  if (loading) {
    if (variant === 'characters') {
      return (
        <div className={cx('grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3', className)}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      );
    }
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

  return (
    <div className={cx(className, 'esteHayRemplazar grid w-full justify-items-center gap-6')}>
      {children}
    </div>
  );
}
