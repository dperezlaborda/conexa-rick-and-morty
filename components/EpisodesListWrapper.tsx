'use client';

import { useCharacterStore } from '@/store/useCharacterStore';
import EpisodesList from './EpisodesList';
import ShareEpisodesList from './ShareEpisodesList';

export function EpisodesListWrapper() {
  const { selectedCharacters } = useCharacterStore();
  const { character1, character2 } = selectedCharacters;

  return (
    <div className="flex gap-2 p-4">
      <EpisodesList character={character1} />
      <EpisodesList character={character2} />
      <ShareEpisodesList character1={character1} character2={character2} />
    </div>
  );
}
