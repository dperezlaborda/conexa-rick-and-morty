import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-12">
      <div className="grid gap-4">
        <h1 className="text-lg">Not Found</h1>
        <div>
          <h2 className="text-green text-5xl font-semibold">Wubba Lubba Dub Dub!</h2>
          <p className="mb-8 text-lg text-gray-400">This page doesn't exist in any dimension</p>
        </div>
        <Link href="/">Portal Back Home</Link>
      </div>
      <Image
        src="/portal.png"
        alt="Rick and Morty Portal"
        width={400}
        height={300}
        loading="lazy"
      />
    </div>
  );
}
