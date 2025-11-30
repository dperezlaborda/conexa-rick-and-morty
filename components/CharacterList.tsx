'use client';

import { useCharacterStore } from '@/store/useCharacterStore';
import CharacterListItem from './CharacterListItem';
import { useCharactersFacade } from '@/hooks/useCharactersFacade';

//TO-DO: REPITE CODIGO REFACTORIZAR

export default function CharacterList({ initialData }: { initialData: any }) {
  const { setCharacter1, setCharacter2 } = useCharacterStore();

  const list1 = useCharactersFacade(initialData);
  const list2 = useCharactersFacade(initialData);

  const handleSelectCharacter1 = (character: any) => {
    setCharacter1({ 
      id: character.id, 
      name: character.name, 
      episode: character.episode 
    });
  };

  const handleSelectCharacter2 = (character: any) => {
    setCharacter2({ 
      id: character.id, 
      name: character.name, 
      episode: character.episode 
    });
  };



  return (
    <div className="flex justify-evenly">
      {/* lista 1 */}
      <CharacterListItem 
        title="Lista 1" 
        bgColor="bg-amber-200"
        onSelectCharacter={handleSelectCharacter1} 
        {...list1}
      />
      
      {/* lista 2 */}
      <CharacterListItem 
        title="Lista 2" 
        bgColor="bg-cyan-200"
        onSelectCharacter={handleSelectCharacter2} 
        {...list2}
      />
    </div>
  );
}
