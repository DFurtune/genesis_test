import { Kaisei_Tokumin, Poppins } from 'next/font/google';

export const kaiseiTokumin = Kaisei_Tokumin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kaisei',
  weight: ['400', '500', '700', '800'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});