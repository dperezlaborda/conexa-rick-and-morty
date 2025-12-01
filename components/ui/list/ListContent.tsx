import { ReactNode } from 'react';
import { cx } from 'class-variance-authority';
import CharacterCardSkeleton from '@/components/CharacterCardSkeleton';

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
      <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 ${className}`}>
        {Array.from({ length: 6 }).map((_, i) => (
          <CharacterCardSkeleton key={i} />
        ))}
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

  return <div className={cx(className, 'grid justify-items-center gap-6')}>{children}</div>;
}
