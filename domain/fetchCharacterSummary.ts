import { getCharacters } from "@/services/characters";
import { mapCharactersToDTO } from "@/mappers/charactersMapper";

export async function fetchCharacterSummary(page: string = '1') {

    const raw = await getCharacters(page);

    if (!raw || !raw.results) {
        throw new Error('Error al obtener personajes');
    }

    // ✅ Mapea raw.results, no raw
    const dto = mapCharactersToDTO(raw.results);

    return {
        info: raw.info,
        results: dto,
    };

}