import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { MortyIcon, RickIcon } from '@/components/icons';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Rick and Morty App',
  description: 'Compare characters and find shared episodes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <header className="sticky top-0 z-50 border-b border-white/20 bg-black/40 shadow-xl backdrop-blur-lg">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <MortyIcon width={40} height={40} className="hidden md:block" />
              <h1 className="text-base font-bold text-white drop-shadow-lg md:text-xl">
                Rick y Morty: Portal Interdimensional
              </h1>
            </div>
            <nav className="flex w-[200px] items-center gap-6 text-xs md:text-xl lg:w-[250px]">
              <RickIcon width={40} height={40} className="hidden md:block" />
              <a
                href="/"
                className="font-medium text-white transition-colors duration-200 hover:text-green-400"
              >
                Home
              </a>
              <a
                href="https://rickandmortyapi.com/documentation"
                target="_blank"
                className="font-medium text-white transition-colors duration-200 hover:text-green-400"
              >
                API Docs
              </a>
            </nav>
          </div>
        </header>

        <main className="bg-background min-h-screen p-6">{children}</main>

        <footer className="border-t border-white/20 text-white">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-400">
                © 2024 Rick and Morty Explorer. Built with Next.js 15
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/dperezlaborda/conexa-rick-and-morty"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                  title="View source on GitHub"
                >
                  GitHub
                </a>
                <a
                  href="https://rickandmortyapi.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                  title="Rick and Morty API"
                >
                  API
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
