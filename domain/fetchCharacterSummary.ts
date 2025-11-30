import { getCharacters } from "@/services/characters";
import { mapCharactersToDTO } from "@/mappers/charactersMapper";
import { CHARACTERS_PER_PAGE } from "@/constants/api";

export async function fetchCharacterSummary(page: string = '1') {

    const raw = await getCharacters(page);

    if (!raw || !raw.results) {
        throw new Error('Error al obtener personajes');
    }

    const dto = mapCharactersToDTO(raw.results);
    const limitedResults = dto.slice(0, CHARACTERS_PER_PAGE);

    return {
        info: {
            ...raw.info,
            count: limitedResults.length,
        },
        results: limitedResults,
    };

}