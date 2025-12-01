import { CharactersDTO } from '@/mappers/charactersMapper';

export interface APIInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface RawCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterAPIResponse {
  info: APIInfo;
  results: RawCharacter[];
}

export interface MappedCharacterResponse {
  info: APIInfo;
  results: CharactersDTO[];
}
