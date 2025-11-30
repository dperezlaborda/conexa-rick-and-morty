import { CharactersDTO } from "@/mappers/charactersMapper";
import { Card, CardContent, CardImage, CardTitle } from "./ui/card";

export default function CharacterCard({ character, onSelect }: { character: CharactersDTO; onSelect: (character: CharactersDTO) => void }) {

    return (
        <Card onClick={() => onSelect(character)}>
            <CardImage width={200} height={200} src={character.image} alt={character.name} />
            <CardTitle className="text-white">{character.name}</CardTitle>
            <CardContent className="p-4">Status: {character.status} - Species: {character.species}</CardContent>
        </Card>
    );
}