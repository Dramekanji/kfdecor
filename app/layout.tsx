import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'K&F Décor - Décoration d\'Intérieur à Conakry',
  description: 'Découvrez des décorations faites main qui allient confort, style et qualité durable. Vases, miroirs, rideaux, tapis et plus encore.',
  keywords: 'décoration intérieur, vases, miroirs, rideaux, tapis, Conakry, Guinée, K&F Décor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
