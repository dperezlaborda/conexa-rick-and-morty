'use client';

import CharacterCard from './CharacterCard';
import { CharactersDTO } from '@/mappers/charactersMapper';
import { List, ListContent, ListPagination, ListTitle } from './ui/list';
import { useCallback } from 'react';

interface CharacterListItemProps {
  onSelectCharacter: (character: CharactersDTO) => void;
  selectedCharacterId?: number;
  otherSelectedCharacterId?: number;
  title: string;
  data: { info: any; results: CharactersDTO[] };
  loading: boolean;
  page: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
  next: () => void;
  prev: () => void;
}

export default function CharacterListItem({
  title,
  onSelectCharacter,
  selectedCharacterId,
  otherSelectedCharacterId,
  data,
  loading,
  page,
  totalPages,
  hasPrev,
  hasNext,
  next,
  prev,
}: CharacterListItemProps) {
  const { results } = data || {};

  const paginationData = {
    currentPage: page,
    totalPages,
    hasPrev,
    hasNext,
    onPrevClick: prev,
    onNextClick: next,
    isLoading: loading,
  };

  const handleSelect = useCallback(
    (character: CharactersDTO) => {
      onSelectCharacter(character);
    },
    [onSelectCharacter]
  );

  return (
    <List>
      <ListTitle title={title} />
      <ListContent loading={loading} className="grid-cols-2 xl:grid-cols-3">
        {results?.map((character: any) => (
          <CharacterCard
            key={character.id}
            character={character}
            onSelect={handleSelect}
            isSelected={character.id === selectedCharacterId}
            className={
              character.id === otherSelectedCharacterId ? 'pointer-events-none opacity-50' : ''
            }
          />
        ))}
      </ListContent>
      <ListPagination {...paginationData} />
    </List>
  );
}
