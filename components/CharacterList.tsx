'use client';

import CharacterListItem from './CharacterListItem';
import { useCharacterLists } from '@/hooks/useCharacterLists';

export default function CharacterList({ initialData }: { initialData: any }) {
  const lists = useCharacterLists(initialData);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {lists.map(({ title, data, onSelect }) => (
      <CharacterListItem 
        key={title}
        title={title}
        onSelectCharacter={onSelect} 
        {...data}
      />
      ))}
    </div>
  );
}
