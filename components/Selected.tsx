'use client';

import { useCharacterStore } from '@/store/useCharacterStore';

export default function Selected() {
  const { selectedCharacters } = useCharacterStore();

  const { character1, character2 } = selectedCharacters;

  return (
    <div>
      <p>personaje 1 seleccionado: {character1?.name}</p>
      <p>personaje 2 seleccionado: {character2?.name}</p>
    </div>
  );
}
