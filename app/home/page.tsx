import { CharacterList, Selected } from '@/components';
import { EpisodesListWrapper } from '@/components/EpisodesListWrapper';
import { getCharacters } from '@/services/characters';

//TO-DO: FILTRAR DATA PORQUE POR EJEMPLO EN EL COMPONENTE EpisodeListItem LLEGA
//TODA LA DATA DEL PERSONAJE

export default async function Home() {
  const initialData = await getCharacters('1');

  return (
    <div className="h-full w-full bg-red-300">
      <CharacterList initialData={initialData} />
      <Selected />
      <EpisodesListWrapper />
    </div>
  );
}
