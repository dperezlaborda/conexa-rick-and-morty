import { CharacterList, EpisodesListWrapper } from '@/components';
import { fetchCharacterSummary } from '@/domain/fetchCharacterSummary';

export default async function Home() {
  const initialData = await fetchCharacterSummary('1');

  //to-do: COMPONETIZAR HERO
  //TO-DO: NO QUIERO NINGUN DIV FUERA DE COMPONENTES

  return (
    <div>
      <section className="mb-8 rounded-lg border-2 border-[#590F4D]/50 bg-gradient-to-r from-[#590F4D]/30 to-[#1D0F26]/30 p-8 shadow-[0_8px_32px_0_rgba(89,15,77,0.37)] backdrop-blur-sm">
        <h1 className="mb-3 text-3xl font-bold text-white drop-shadow-lg">
          Explorador del Universo de Rick y Morty
        </h1>
        <p className="text-lg text-gray-200">
          Selecciona 2 personajes para comparar y descubrir en qué episodios aparecen juntos en el
          universo de Rick y Morty.
        </p>
      </section>
      <div className="h-full w-full">
        <CharacterList initialData={initialData} />
      </div>
      <div className="my-12">
        <EpisodesListWrapper />
      </div>
    </div>
  );
}
