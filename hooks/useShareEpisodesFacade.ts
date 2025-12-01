import { useEffect, useState } from 'react';
import {
  extractEpisodeIds,
  findSharedEpisodeUrls,
  getTotalPages,
  paginateArray,
} from '@/services/episodes';
import { PAGE_SIZE } from '@/constants/api';
import { Character } from '@/store/useCharacterStore';
import { EpisodeDTO } from '@/mappers/episodesMapper';

export function useShareEpisodesFacade(character1: Character, character2: Character) {
  const [data, setData] = useState<EpisodeDTO[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sharedUrls, setSharedUrls] = useState<string[]>([]);
  const [noData, setNoData] = useState<string>('');

  const totalPages = sharedUrls.length > 0 ? getTotalPages(sharedUrls.length, PAGE_SIZE) : 0;

  useEffect(() => {
    if (!character1 || !character2) {
      setSharedUrls([]);
      setData([]);
      setPage(1);
      setNoData('');
      return;
    }

    const urls = findSharedEpisodeUrls(character1.episode ?? [], character2.episode ?? []);
    setSharedUrls(urls);
    setPage(1);

    if (urls.length === 0) {
      setNoData(`${character1.name} y ${character2.name} no comparten episodios`);
    } else {
      setNoData('');
    }
  }, [character1, character2]);

  useEffect(() => {
    if (sharedUrls.length === 0) {
      setData([]);
      setLoading(false);
      return;
    }

    async function fetchSharedEpisodes() {
      setLoading(true);
      try {
        const urlsForPage = paginateArray(sharedUrls, page, PAGE_SIZE);
        const ids = extractEpisodeIds(urlsForPage);

        const response = await fetch('/api/episodes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids }),
        });

        const episodes = await response.json();
        setData(episodes);
      } catch (error) {
        console.error('Error fetching shared episodes:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchSharedEpisodes();
  }, [sharedUrls, page]);

  return {
    data,
    loading,
    page,
    totalPages,
    totalSharedEpisodes: sharedUrls.length,
    hasPrev: page > 1,
    hasNext: totalPages > 0 && page < totalPages,
    next: () => setPage((p) => p + 1),
    prev: () => setPage((p) => p - 1),
    noData,
  };
}
