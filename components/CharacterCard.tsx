import { CharactersDTO } from '@/mappers/charactersMapper';
import { Card, CardContent, CardImage, CardTitle, CardBadge } from './ui/card';
import { cx } from 'class-variance-authority';

export default function CharacterCard({
  character,
  onSelect,
  isSelected,
  className,
}: {
  character: CharactersDTO;
  onSelect: (character: CharactersDTO) => void;
  isSelected?: boolean;
  className?: string;
}) {
  return (
    <Card
      onClick={() => onSelect(character)}
      className={cx(isSelected && 'border-2 border-[#590F4D] hover:border-[#590F4D]', className)}
    >
      <CardImage width={200} height={200} src={character.image} alt={character.name} />
      <CardTitle className="text-base text-white">{character.name}</CardTitle>
      <CardContent className="px-4 pb-2">
        <CardBadge variant={character.status}>{character.status}</CardBadge>
        <p>Specie: {character.species}</p>
      </CardContent>
    </Card>
  );
}
