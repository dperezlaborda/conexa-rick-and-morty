import { EpisodeDTO } from '@/mappers/episodesMapper';
import EpisodeCard from './EpisodeCard';
import List from './ui/list/List';
import { ListContent, ListPagination, ListTitle } from './ui/list';

export interface EpisodesListItemProps {
  characterName: string | undefined;
  data: EpisodeDTO[];
  loading: boolean;
  page: number;
  totalPages: number;
  totalEpisodes: number;
  hasPrev: boolean;
  hasNext: boolean;
  next: () => void;
  prev: () => void;
  emptyMessage?: string;
  isSharedEpisodes?: boolean;
}

export default function EpisodeListItem({
  characterName,
  data,
  loading,
  page,
  totalPages,
  totalEpisodes,
  hasPrev,
  hasNext,
  next,
  prev,
  emptyMessage = 'No episodes found',
  isSharedEpisodes = false,
}: EpisodesListItemProps) {
  const paginationData = {
    currentPage: page,
    totalPages,
    hasPrev,
    hasNext,
    onPrevClick: prev,
    onNextClick: next,
    isLoading: loading,
  };

  const title = isSharedEpisodes
    ? characterName || 'Episodios Compartidos'
    : characterName
      ? `Episodios de ${characterName}`
      : 'Personaje sin seleccionar';

  const subtitle =
    totalEpisodes > 0
      ? `Total: ${totalEpisodes} episodios | Página ${page} de ${totalPages}`
      : undefined;

  return (
    <List className="max-h-[703px] min-h-[703px]">
      <ListTitle title={title} subtitle={subtitle} />
      <div className="h-full">
        <ListContent loading={loading} emptyMessage={emptyMessage} variant="episodes">
          {data?.map((ep: EpisodeDTO) => (
            <EpisodeCard
              key={ep.id}
              episodeName={ep.name}
              episodeAirDate={ep.airDate}
              episodeId={ep.id}
            />
          ))}
        </ListContent>
      </div>
      <ListPagination {...paginationData} />
    </List>
  );
}
