'use client';

import { useEffect, useState } from 'react';
import { useCharacterStore } from '@/store/useCharacterStore';
import { extractEpisodeIds, findSharedEpisodeUrls } from '@/services/episodes';

export default function ShareEpisodesList() {
  const { selectedCharacters } = useCharacterStore();
  const { character1, character2 } = selectedCharacters;
  const [sharedEpisodes, setSharedEpisodes] = useState<any[]>([]);

  useEffect(() => {
    if (!character1 || !character2) {
      setSharedEpisodes([]);
      return;
    }
    const fetchSharedEpisodes = async () => {
      try {
        const sharedUrls = findSharedEpisodeUrls(character1.episode, character2.episode);

        if (sharedUrls.length === 0) {
          setSharedEpisodes([]);
          return;
        }
        const ids = extractEpisodeIds(sharedUrls);

        const response = await fetch('/api/episodes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids }),
        });
        const data = await response.json();
        setSharedEpisodes(data);
      } catch (error) {
        console.error('Error fetching shared episodes:', error);
      }
    };

    fetchSharedEpisodes();
  }, [character1, character2]);

  return (
    <div>
      <h1>Shared Episodes</h1>
      <ul>
        {sharedEpisodes?.map((ep: any, index: number) => (
          <li key={index}>
            <p>name capitulo: {ep.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
