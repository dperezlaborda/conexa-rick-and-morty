import { CharactersDTO } from "@/mappers/charactersMapper";
import { Card, CardContent, CardImage, CardTitle } from "./ui/card";
import { cx } from "class-variance-authority";

export default function CharacterCard({ 
    character,
    onSelect,
    isSelected,
    className
}: { 
    character: CharactersDTO;
    onSelect: (character: CharactersDTO) => void;
    isSelected?: boolean 
    className?: string;
}) {

    return (
        <Card 
            onClick={() => onSelect(character)}
            className={cx(
                isSelected && 'border-2 border-[#590F4D] hover:border-[#590F4D]',
                className
            )}
        >
            <CardImage width={200} height={200} src={character.image} alt={character.name} />
            <CardTitle className="text-white">{character.name}</CardTitle>
            <CardContent className="p-4">Status: {character.status} - Species: {character.species}</CardContent>
        </Card>
    );
}