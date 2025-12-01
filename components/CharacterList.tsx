'use client';

import { useCharacterStore } from '@/store/useCharacterStore';
import CharacterListItem from './CharacterListItem';
import { useCharacterLists } from '@/hooks/useCharacterLists';
import { MappedCharacterResponse } from '@/types/api';

export default function CharacterList({ initialData }: { initialData: MappedCharacterResponse }) {
  const lists = useCharacterLists(initialData);
  const { selectedCharacters } = useCharacterStore();

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {lists.map(({ title, data, onSelect }, index) => (
        <CharacterListItem
          key={title}
          title={title}
          onSelectCharacter={onSelect}
          selectedCharacterId={
            index === 0 ? selectedCharacters.character1?.id : selectedCharacters.character2?.id
          }
          otherSelectedCharacterId={
            index === 0 ? selectedCharacters.character2?.id : selectedCharacters.character1?.id
          }
          {...data}
        />
      ))}
    </div>
  );
}
