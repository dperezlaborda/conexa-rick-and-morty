'use client';

import CharacterCard from "./CharacterCard";
import { CharactersDTO } from "@/mappers/charactersMapper";
import { List, ListContent, ListPagination, ListTitle } from "./ui/list";

interface CharacterListItemProps {
    onSelectCharacter: (character: CharactersDTO) => void;
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


  return (
    <List>
      <ListTitle title={title}/>
      <ListContent  className="grid-cols-2 xl:grid-cols-3">
        {results?.map((character: any) => (
          <CharacterCard
            key={character.id}
            character={character}
            onSelect={onSelectCharacter}
          />
        ))}
      </ListContent>
      <ListPagination {...paginationData} />
    </List>
  )
}