import { describe, it, expect } from 'vitest';
import { extractEpisodeIds, findSharedEpisodeUrls } from '../episodes';

describe('Episodes service', () => {
  describe('extractEpisodeIds', () => {
    it('should extract episode IDs from URLs', () => {
      const episodeUrls = [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/10',
      ];

      const result = extractEpisodeIds(episodeUrls);
      expect(result).toEqual([1, 2, 10]);
    });

    it('should return an empty array when given an empty array', () => {
      const episodeUrls: string[] = [];
      const result = extractEpisodeIds(episodeUrls);
      expect(result).toEqual([]);
    });
  });
});

describe('findSharedEpisodeUrls', () => {
  it('should find shared episode URLs between two characters', () => {
    const char1Episodes = ['url1', 'url2', 'url3'];
    const char2Episodes = ['url2', 'url3', 'url4'];

    const result = findSharedEpisodeUrls(char1Episodes, char2Episodes);
    expect(result).toEqual(['url2', 'url3']);
  });

  it('should return an empty array when there are no shared episodes', () => {
    const char1Episodes = ['url1', 'url2'];
    const char2Episodes = ['url3', 'url4'];

    const result = findSharedEpisodeUrls(char1Episodes, char2Episodes);
    expect(result).toEqual([]);
  });

  it('should retunr an empty array when no episodes are provided', () => {
    const char1Episodes: string[] = [];
    const char2Episodes: string[] = [];

    const result = findSharedEpisodeUrls(char1Episodes, char2Episodes);
    expect(result).toEqual([]);
  });
});
