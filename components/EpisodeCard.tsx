import { Card, CardContent, CardTitle } from "./ui/card";

export default function EpisodeCard({ episodeName, episodeAirDate, episodeId }: { episodeName: string; episodeAirDate: string; episodeId: string; }) {

    return (
        <Card 
            variant='horizontal'
            size='sm'
            clickable={false}
        >
            <CardTitle className="text-[#1E591C] mt-2">{episodeName}</CardTitle>
            <CardContent className="px-4 mb-2">
                <div className="flex gap-5">
                    <p>{episodeId}#</p>
                    <p>Air date: {episodeAirDate}</p>
                </div>
            </CardContent>
        </Card>
    );
}