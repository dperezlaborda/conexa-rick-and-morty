export interface EpisodeDTO {
    id: number;
    name: string;
    airDate: string;
}

export function mapEpisodesToDTO(rawData: any): EpisodeDTO[] {
    const episodes = Array.isArray(rawData) ? rawData : [rawData];

    return episodes.map((ep) => ({
        id: ep.id,
        name: ep.name,
        airDate: ep.air_date,
    }));
}