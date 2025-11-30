import Pagination from '@/components/ui/pagination/Pagination';

interface ListPaginationProps {
  currentPage: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
  isLoading?: boolean;
  className?: string;
}

export default function ListPagination({...paginationProps }: ListPaginationProps) {
  return (
    <div className="flex items-center justify-center mt-6 pt-4 border-t border-white/10">
      <Pagination {...paginationProps} />
    </div>
  );
}