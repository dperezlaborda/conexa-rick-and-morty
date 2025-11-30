export interface CharactersDTO {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    episode?: string[];
}


export function mapCharactersToDTO(rawData: any): CharactersDTO[] {
    const characters = Array.isArray(rawData) ? rawData : [rawData];

    return characters.map((char) => ({
        id: char.id,
        name: char.name,
        status: char.status,
        species: char.species,
        image: char.image,
        episode: char.episode,
    }));
}