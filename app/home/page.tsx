import { CharacterList, Selected } from '@/components';
import { EpisodesListWrapper } from '@/components/EpisodesListWrapper';
import { fetchCharacterSummary } from '@/domain/fetchCharacterSummary';

export default async function Home() {
  const initialData = await fetchCharacterSummary('1');

  return (
    <div className="h-full w-full bg-red-300">
      <CharacterList initialData={initialData} />
      <Selected />
      <EpisodesListWrapper />
    </div>
  );
}
