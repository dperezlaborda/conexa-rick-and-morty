'use client';

import { useCharacterStore } from '@/store/useCharacterStore';
import { useEpisodesFacade } from '@/hooks/useEpisodesFacade';
import EpisodeListItem from './EpisodeListItem';
import { useShareEpisodesFacade } from '@/hooks/useShareEpisodesFacade';

export default function EpisodesListWrapper() {
  const { selectedCharacters } = useCharacterStore();
  const { character1, character2 } = selectedCharacters;

  const character1EpisodesData = useEpisodesFacade(character1);
  const character2EpisodesData = useEpisodesFacade(character2);
  const { noData, ...sharedEpisodesData } = useShareEpisodesFacade(character1, character2);

  return (
    <div className="grid min-h-[365px] grid-cols-1 gap-4 xl:grid-cols-3">
      <EpisodeListItem
        emptyMessage="Selecciona un personaje para ver sus episodios"
        characterName={character1?.name}
        {...character1EpisodesData}
      />
      <EpisodeListItem
        isSharedEpisodes={true}
        emptyMessage={noData || 'Selecciona 2 personajes para ver sus episodios compartidos'}
        characterName={
          character1 && character2 ? `${character1.name} & ${character2.name}` : undefined
        }
        totalEpisodes={sharedEpisodesData?.totalSharedEpisodes}
        {...sharedEpisodesData}
      />
      <EpisodeListItem
        emptyMessage="Selecciona un personaje para ver sus episodios"
        characterName={character2?.name}
        {...character2EpisodesData}
      />
    </div>
  );
}
