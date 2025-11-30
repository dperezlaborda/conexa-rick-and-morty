import { extractEpisodeIds, getTotalPages, paginateArray } from "@/services/episodes";
import { useEffect, useState } from "react";

export function useEpisodesFacade(character: any){
    const [data, setData] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    //TO-DO: VER SI ES AL PEDO EL AS STRING de episodeUrlsForPage

    const totalPages = character?.episode 
        ? getTotalPages(character.episode.length, 10) 
        : 0;

    // Cuando cambia el personaje, reseteamos página y data
    // useEffect(() => {
    //     setPage(1);
    //     setData([]);
    // }, [character?.id]);

    useEffect(() => {

        if (!character || !character.episode || character.episode.length === 0) {
            setData([]);
            return;
        }

        async function fetchPage() {
            setLoading(true);
            const episodeUrlsForPage = paginateArray(character.episode, page, 10) as string[];
            const ids = extractEpisodeIds(episodeUrlsForPage);

            const response = await fetch('/api/episodes', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ ids })
            });
            const data = await response.json();
            setData(data);
            setLoading(false);
        }

        fetchPage();
    }, [character, page]);

    return{
        data,
        loading,
        page,
        totalPages,
        hasPrev: page > 1,
        hasNext: totalPages > 0 && page < totalPages,
        next: () => setPage(p => p + 1),
        prev: () => setPage(p => p - 1)
    }
}