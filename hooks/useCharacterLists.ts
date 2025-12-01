import { useCharacterStore } from '@/store/useCharacterStore';
import { useCharactersFacade } from './useCharactersFacade';
import { CharactersDTO } from '@/mappers/charactersMapper';
import { MappedCharacterResponse } from '@/types/api';

export function useCharacterLists(initialData: MappedCharacterResponse) {
  const { setCharacter1, setCharacter2 } = useCharacterStore();

  const list1 = useCharactersFacade(initialData);
  const list2 = useCharactersFacade(initialData);

  const handleSelect = (character: CharactersDTO, setter: typeof setCharacter1) => {
    setter({
      id: character.id,
      name: character.name,
      episode: character.episode,
      image: character.image,
    });
  };

  return [
    {
      title: 'Personaje 1',
      data: list1,
      onSelect: (char: CharactersDTO) => handleSelect(char, setCharacter1),
    },
    {
      title: 'Personaje 2',
      data: list2,
      onSelect: (char: CharactersDTO) => handleSelect(char, setCharacter2),
    },
  ];
}
