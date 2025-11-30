import { getEpisodes } from '@/services/episodes';
import { mapEpisodesToDTO } from '@/mappers/episodesMapper';

export async function fetchEpisodesSummary(ids: number[]) {
    if (!ids || ids.length === 0) {
        throw new Error('Se requiere un array de IDs');
    }

    const idsString = ids.join(',');
    const raw = await getEpisodes(idsString);

    if (!raw) {
        throw new Error('Error al obtener episodios');
    }

    const dto = mapEpisodesToDTO(raw);
    return dto;
}