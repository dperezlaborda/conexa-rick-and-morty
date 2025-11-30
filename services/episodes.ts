import { RICK_AND_MORTY_BASE_URL } from '@/constants/api';

//esto es solo el metodo de fetch no esta de ningun lado...
export async function getEpisodes(ids: any) {
  const response = await fetch(`${RICK_AND_MORTY_BASE_URL}/episode/${ids}`);

  if (!response) {
    throw new Error('Error al obtener episodios');
  }

  return response.json();
}

export function extractEpisodeIds(episodeUrls: string[]): number[] {
  return episodeUrls.map(url => parseInt(url.split('/').pop() || '0', 10));
}

export function findSharedEpisodeUrls(character1Episodes: any, character2Episodes: any): any {
  if (!character1Episodes || !character2Episodes) {
    return [];
  }

  const episodes1Set = new Set(character1Episodes);
  const sharedUrls = character2Episodes.filter((episode: any) => episodes1Set.has(episode));
  return sharedUrls;
}

export function paginateArray<T>(array: T[], page: number, pageSize: number = 10): T[] {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return array.slice(startIndex, endIndex);
}

export function getTotalPages(totalItems: number, pageSize: number = 10): number {
  return Math.ceil(totalItems / pageSize);
}
