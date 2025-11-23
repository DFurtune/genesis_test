import type { Metadata } from 'next';
import { kaiseiTokumin, poppins } from '@/lib/fonts'; // шлях до твого файлу
import './globals.css';

export const metadata: Metadata = {
  title: '6037 Venture Partnership – Book a Session',
  description: 'Book a personal styling session',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${kaiseiTokumin.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}