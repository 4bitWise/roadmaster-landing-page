import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as ReactHotToastToaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Roadmaster - Préparez votre permis en Afrique de l'Ouest",
  description:
    "Application mobile pour préparer votre permis de conduire en Afrique de l'Ouest avec 920 questions, des examens blancs et un accompagnement moniteur.",
  keywords:
    "permis de conduire, Afrique de l'Ouest, code Rousseau, examen blanc, Roadmaster",
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
          {/* <Toaster /> */}
          <ReactHotToastToaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}