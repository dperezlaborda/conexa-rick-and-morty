'use client';
import { useEpisodesFacade } from '@/hooks/useEpisodesFacade';
import EpisodeListItem from './EpisodeListItem';

export default function EpisodesList({ character }: any) {

  const facade = useEpisodesFacade(character);

  return (
    <EpisodeListItem characterName={character?.name} {...facade} />
  );
}
