import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Sabrina Caixeta',
  description: 'Site da Sabrina Caixeta',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#FAEFE6] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
