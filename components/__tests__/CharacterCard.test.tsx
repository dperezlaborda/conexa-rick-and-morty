import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import CharacterCard from '../CharacterCard';

describe('CharacterCard Component', () => {
  const mockCharacter = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'alive' as const,
    species: 'Human',
    image: 'https://example.com/rick.jpg',
    episodes: [],
  };

  const mockOnSelect = vi.fn();

  it('renders character details correctly', () => {
    const { container } = render(
      <CharacterCard character={mockCharacter} onSelect={mockOnSelect} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with isSelected true', () => {
    const { container } = render(
      <CharacterCard character={mockCharacter} onSelect={mockOnSelect} isSelected={true} />
    );
    expect(container).toMatchSnapshot();
  });
});
