import { describe, it, expect } from 'vitest';
import { mapCharactersToDTO } from '../charactersMapper';

describe('mapCharactersToDTO', () => {
  it('transform prop status to lowercase', () => {
    const rawData = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: 'https://example.com/rick.jpg',
    };

    const result = mapCharactersToDTO(rawData);
    expect(result[0].status).toBe('alive');
  });

  it('handle array of characters correctly', () => {
    const rawData = [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        image: 'https://example.com/rick.jpg',
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Dead',
        species: 'Human',
        image: 'https://example.com/morty.jpg',
      },
    ];

    const result = mapCharactersToDTO(rawData);
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Rick Sanchez');
    expect(result[1].name).toBe('Morty Smith');
  });
});
