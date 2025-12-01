interface PaginationProps {
  currentPage: number;
  totalPages: number | null;
  hasPrev: boolean;
  hasNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
  isLoading?: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  hasPrev,
  hasNext,
  onPrevClick,
  onNextClick,
  isLoading = false,
}: PaginationProps) {
  if (!totalPages || totalPages === 0) {
    return null;
  }

  return (
    <nav aria-label="Pagination" className="flex items-center justify-between gap-6 py-3">
      <div>
        <p className="text-xs md:text-base">
          Página {currentPage} {totalPages && `de ${totalPages}`}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <button
          onClick={onPrevClick}
          disabled={!hasPrev || isLoading}
          className="cursor-pointer rounded-md border border-[#8ED959]/20 bg-[#2E2E2E] px-3 py-2 transition-all duration-300 hover:border-[#8ED959]/60 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <p className="text-sm font-bold">Anterior</p>
        </button>
        <button
          onClick={onNextClick}
          disabled={!hasNext || isLoading}
          className="cursor-pointer rounded-md border border-[#8ED959]/20 bg-[#2E2E2E] px-3 py-2 transition-all duration-300 hover:border-[#8ED959]/60 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <p className="text-sm font-bold">Siguiente</p>
        </button>
      </div>
    </nav>
  );
}
