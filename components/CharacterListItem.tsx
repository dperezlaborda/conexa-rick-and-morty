'use client';

import Pagination from "./Pagination";
//TO-DO: COMPONETIZAR EL MAP

interface CharacterListItemProps {
    onSelectCharacter: (character: any) => void;
    title: string;
    bgColor?: string;
    data: any;
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
    bgColor = 'bg-white',
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
    <div className="flex flex-col gap-4">
      <Pagination {...paginationData} />
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="grid gap-4">
        {loading ? (
          <div className="text-white">Cargando...</div>
        ) : (
          results?.map((character: any, index: number) => (
            <div
              key={character.id}
              className={`h-[150px] w-[300px] cursor-pointer p-3 text-black transition ${bgColor}`}
              onClick={() => onSelectCharacter(character)}
            >
              <p className="font-bold">Name: {character.name}</p>
              <p>Numero: {index + 1}</p>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
            </div>
          ))
        )}
      </div>
    </div>
    )
}