export interface CharactersDTO {
  id: number;
  name: string;
  status: 'alive' | 'dead' | 'unknown';
  species: string;
  image: string;
  episode?: string[];
}

export function mapCharactersToDTO(rawData: any): CharactersDTO[] {
  const characters = Array.isArray(rawData) ? rawData : [rawData];

  return characters.map((char) => ({
    id: char.id,
    name: char.name,
    status: char.status.toLowerCase(),
    species: char.species,
    image: char.image,
    episode: char.episode,
  }));
}
