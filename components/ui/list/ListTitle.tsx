export default function ListTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-base font-light text-white">{title}</h2>
      {subtitle && (
        <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
      )}
    </div>
  );
}