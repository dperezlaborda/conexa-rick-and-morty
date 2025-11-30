'use client';

import { useShareEpisodesFacade } from '@/hooks/useShareEpisodesFacade';
import Pagination from './Pagination';

export default function ShareEpisodesList({ character1, character2 }: any) {


  //TO-DO: HACER ALGO CON totalSharedEpisodes
  //TO-DO CREAR OTRO COMPONENTE DONDE LE PASEN TODOS LOS DATOS

  const facade = useShareEpisodesFacade(character1, character2);
  const { 
    data: sharedEpisodes, 
    loading,
    page,
    totalPages,
    totalSharedEpisodes,
    hasPrev,
    hasNext,
    next,
    prev
  } = facade;

  const paginationData = {
    currentPage: page,
    totalPages,
    hasPrev,
    hasNext,
    onPrevClick: prev,
    onNextClick: next,
    isLoading: loading,
  }

  console.log('data de totalSharedEpisodes', totalSharedEpisodes);

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
      <Pagination {...paginationData} />
    </div>
  );
}
