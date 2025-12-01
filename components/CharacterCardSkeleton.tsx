export default function CharacterCardSkeleton() {
  return (
    <div className="h-[400px] animate-pulse rounded-xl border border-white/10 bg-white/3 p-4">
      <div className="mb-3 h-48 w-full rounded-md bg-white/5" />
      <div className="mb-2 h-7 w-3/4 rounded bg-white/6" />
      <div className="h-20 w-full rounded bg-white/6" />
    </div>
  );
}
