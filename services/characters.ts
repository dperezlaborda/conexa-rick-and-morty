import { RICK_AND_MORTY_BASE_URL } from '@/constants/api';

export async function getCharacters(page: string = '1') {
  const response = await fetch(`${RICK_AND_MORTY_BASE_URL}/character?page=${page}`);

  if (!response) {
    throw new Error('Error al obtener personajes');
  }

  return response.json();
}
