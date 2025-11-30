import { useEffect, useRef, useState } from "react";

export function useCharactersFacade(initialData: any){
    const [data, setData] = useState<any>(() => initialData);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (page === 1 && isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        async function fetchPage() {
            setLoading(true);
            const res = await fetch(`/api/characters?page=${page}`);
            const json = await res.json();
            setData(json);
            setLoading(false);
        }

        fetchPage();
    }, [page]);

    return {
        data, 
        loading,
        page,
        totalPages: data?.info?.pages || 1,
        hasPrev: Boolean(data?.info?.prev),
        hasNext: Boolean(data?.info?.next),
        next: () => setPage(p => p + 1),
        prev: () => setPage(p => p - 1)
    }
}