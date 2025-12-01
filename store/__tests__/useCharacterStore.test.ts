import { describe, it, expect, beforeEach } from 'vitest';
import { useCharacterStore } from '../useCharacterStore';

describe('useCharacterStore', () => {
  beforeEach(() => {
    useCharacterStore.getState().reset();
  });

  it('should set character1 correctly', () => {
    const character = { id: 1, name: 'Rick', image: 'url', episode: [] };

    useCharacterStore.getState().setCharacter1(character);
    expect(useCharacterStore.getState().selectedCharacters.character1).toEqual(character);
  });

  it('should set character2 correctly', () => {
    const character = { id: 2, name: 'Morty', image: 'url', episode: [] };

    useCharacterStore.getState().setCharacter2(character);
    expect(useCharacterStore.getState().selectedCharacters.character2).toEqual(character);
  });

  it('should unset character if the same character is clicked  again', () => {
    const character = { id: 1, name: 'Rick', image: 'url', episode: [] };

    useCharacterStore.getState().setCharacter1(character);
    useCharacterStore.getState().setCharacter1(character);
    expect(useCharacterStore.getState().selectedCharacters.character1).toBeNull();
  });

  it('should reset the store correctly', () => {
    const character1 = { id: 1, name: 'Rick', image: 'url', episode: [] };
    const character2 = { id: 2, name: 'Morty', image: 'url', episode: [] };

    useCharacterStore.getState().setCharacter1(character1);
    useCharacterStore.getState().setCharacter2(character2);
    useCharacterStore.getState().reset();
    expect(useCharacterStore.getState().selectedCharacters.character1).toBeNull();
    expect(useCharacterStore.getState().selectedCharacters.character2).toBeNull();
  });
});
