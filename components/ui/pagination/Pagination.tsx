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

  if(!totalPages || totalPages === 0) {
    return null;
  }

  return (
    <nav aria-label="Pagination" className="py-3 flex justify-between items-center gap-6">
      <div>
        <p>
          Página {currentPage} {totalPages && `de ${totalPages}`}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <button
          onClick={onPrevClick}
          disabled={!hasPrev || isLoading} 
          className="px-3 py-2 cursor-pointer border rounded-md border-[#8ED959]/20 bg-[#2E2E2E] disabled:cursor-not-allowed disabled:opacity-50 hover:border-[#8ED959]/60 transition-all duration-300">
          <p className="font-bold text-sm">Anterior</p>
        </button>
        <button
          onClick={onNextClick}
          disabled={!hasNext || isLoading}
          className="px-3 py-2 cursor-pointer border rounded-md border-[#8ED959]/20 bg-[#2E2E2E] disabled:cursor-not-allowed disabled:opacity-50 hover:border-[#8ED959]/60 transition-all duration-300">
          <p className="font-bold text-sm">Siguiente</p>
        </button>
      </div>
    </nav>
  );
}
