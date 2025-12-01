import { PAGE_SIZE } from '@/constants/api';
import { EpisodeDTO } from '@/mappers/episodesMapper';
import { extractEpisodeIds, getTotalPages, paginateArray } from '@/services/episodes';
import { Character } from '@/store/useCharacterStore';
import { useEffect, useState } from 'react';

export function useEpisodesFacade(character: Character | null) {
  const [data, setData] = useState<EpisodeDTO[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalPages = character?.episode ? getTotalPages(character.episode.length, PAGE_SIZE) : 0;

  const totalEpisodes = character?.episode?.length || 0;

  useEffect(() => {
    setPage(1);
    setData([]);
  }, [character?.id]);

  useEffect(() => {
    if (!character || !character.episode || character.episode.length === 0) {
      setData([]);
      setLoading(false);
      return;
    }

    async function fetchPage() {
      setLoading(true);
      const episodeUrlsForPage = paginateArray(character?.episode ?? [], page, PAGE_SIZE);
      const ids = extractEpisodeIds(episodeUrlsForPage);

      const response = await fetch('/api/episodes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids }),
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
    }

    fetchPage();
  }, [character, page]);

  return {
    data,
    loading,
    page,
    totalPages,
    totalEpisodes,
    hasPrev: page > 1,
    hasNext: totalPages > 0 && page < totalPages,
    next: () => setPage((p) => p + 1),
    prev: () => setPage((p) => p - 1),
  };
}
