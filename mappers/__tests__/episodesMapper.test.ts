import { describe, it, expect } from 'vitest';
import { mapEpisodesToDTO } from '../episodesMapper';

describe('mapEpisodesToDTO', () => {
  it('transform prop air_date to airDate', () => {
    const rawData = {
      id: 1,
      name: 'Pilot',
      air_date: 'December 2, 2013',
    };

    const result = mapEpisodesToDTO(rawData);
    expect(result[0]).toHaveProperty('airDate', 'December 2, 2013');
    expect(result[0]).not.toHaveProperty('air_date');
  });

  it('handle array of episodes correctly', () => {
    const rawData = [
      {
        id: 1,
        name: 'Pilot',
        air_date: 'December 2, 2013',
      },
      {
        id: 2,
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
      },
    ];

    const result = mapEpisodesToDTO(rawData);
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Pilot');
    expect(result[1].name).toBe('Lawnmower Dog');
  });
});
