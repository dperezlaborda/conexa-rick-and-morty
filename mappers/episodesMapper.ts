export interface EpisodeDTO {
  id: number;
  name: string;
  airDate: string;
}

export function mapEpisodesToDTO(rawData: unknown): EpisodeDTO[] {
  try {
    const episodes = Array.isArray(rawData) ? rawData : [rawData];

    return episodes.map((ep) => ({
      id: ep.id,
      name: ep.name,
      airDate: ep.air_date,
    }));
  } catch (error) {
    console.error('Error mapping episodes:', error);
    return [];
  }
}
