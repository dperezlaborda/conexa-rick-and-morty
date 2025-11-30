import { create } from 'zustand';

//TO-DO: AGREGAR getSharedEpisodes: () => any[];
//mi store mi estado global de personajes seleccionados

interface Character {
  id: number;
  name: string;
  episode?: any[]; //to-do: cambiar a plural
  image: string;
}

interface SelectedCharacters {
  character1: Character | null;
  character2: Character | null;
}

interface CharacterStore {
  selectedCharacters: SelectedCharacters;
  setCharacter1: (character: Character) => void;
  setCharacter2: (character: Character) => void;
  reset: () => void;
  //   getSharedEpisodes: () => any[];
}

export const useCharacterStore = create<CharacterStore>(set => ({
  selectedCharacters: {
    character1: null,
    character2: null,
  },
  setCharacter1: character =>
    set(state => ({ selectedCharacters: { ...state.selectedCharacters, character1: character } })),
  setCharacter2: character =>
    set(state => ({ selectedCharacters: { ...state.selectedCharacters, character2: character } })),
  reset: () => set({ selectedCharacters: { character1: null, character2: null } }),
}));
