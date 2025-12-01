import { Card, CardContent, CardTitle } from './ui/card';

export default function EpisodeCard({
  episodeName,
  episodeAirDate,
  episodeId,
}: {
  episodeName: string;
  episodeAirDate: string;
  episodeId: number;
}) {
  return (
    <Card variant="horizontal" size="sm" clickable={false}>
      <CardTitle className="mt-2 text-base text-[#1E591C]">{episodeName}</CardTitle>
      <CardContent className="mb-2 px-4">
        <div className="flex gap-5">
          <p>{episodeId}#</p>
          <p>Air date: {episodeAirDate}</p>
        </div>
      </CardContent>
    </Card>
  );
}
