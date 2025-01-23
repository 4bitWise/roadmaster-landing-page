import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Roadmaster - Préparez votre permis en Afrique de l\'Ouest',
  description: 'Application mobile pour préparer votre permis de conduire en Afrique de l\'Ouest avec 930 questions, des examens blancs et un support audio.',
  keywords: 'permis de conduire, Afrique de l\'Ouest, code Rousseau, examen blanc, apprentissage audio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="roadmaster-theme"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}