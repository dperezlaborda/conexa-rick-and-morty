interface PaginationProps {
  currentPage: number;
  totalPages: number | null;
  hasPrev: boolean;
  hasNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
  isLoading?: boolean;
}

//TO-DO: COMPONETIZAR EL BOTON DE PAGINACION

export default function Pagination({
  currentPage,
  totalPages,
  hasPrev,
  hasNext,
  onPrevClick,
  onNextClick,
  isLoading = false,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 bg-gray-800 p-4">
      <button
        onClick={onPrevClick}
        disabled={!hasPrev || isLoading}
        className="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        ← Anterior
      </button>
      <span className="font-bold text-white">
        Página {currentPage} {totalPages && `de ${totalPages}`}
      </span>
      <button
        onClick={onNextClick}
        disabled={!hasNext || isLoading}
        className="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Siguiente →
      </button>
    </div>
  );
}
