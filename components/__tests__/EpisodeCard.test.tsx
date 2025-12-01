import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import EpisodeCard from '../EpisodeCard';

describe('EpisodeCard Component', () => {
  const mockEpisode = {
    episodeName: 'Pilot',
    episodeAirDate: 'December 2, 2013',
    episodeId: 1,
  };

  it('renders episode details correctly', () => {
    const { container } = render(
      <EpisodeCard
        episodeName={mockEpisode.episodeName}
        episodeAirDate={mockEpisode.episodeAirDate}
        episodeId={mockEpisode.episodeId}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
