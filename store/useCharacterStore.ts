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

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  selectedCharacters: {
    character1: null,
    character2: null,
  },
  setCharacter1: (character) => {
    const { character1, character2 } = get().selectedCharacters;
    
    if (character1?.id === character?.id) {
      set((state) => ({ 
        selectedCharacters: { ...state.selectedCharacters, character1: null }
      }));
      return;
    }

    if (character2?.id === character?.id) {
      set({
        selectedCharacters: {
          character1: character,
          character2: character1,
        }
      });
      return;
    }
    
    set((state) => ({ 
      selectedCharacters: { ...state.selectedCharacters, character1: character } 
    }));
  },
  setCharacter2: (character) => {
    const { character1, character2 } = get().selectedCharacters;

    if (character2?.id === character?.id) {
      set((state) => ({ 
        selectedCharacters: { ...state.selectedCharacters, character2: null } 
      }));
      return;
    }

    if (character1?.id === character?.id) {
      set({
        selectedCharacters: {
          character1: character2,
          character2: character,
        }
      });
      return;
    }

    set((state) => ({ 
      selectedCharacters: { ...state.selectedCharacters, character2: character } 
    }));
  },
  reset: () => set({ selectedCharacters: { character1: null, character2: null } }),
}));