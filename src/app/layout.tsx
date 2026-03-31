import type { Metadata } from 'next';
import { Cormorant_Garamond, Aboreto, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-cormorant' 
});
const aboreto = Aboreto({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-aboreto'
});

export const metadata: Metadata = {
  title: 'Vishu & Kavya | Wedding Invitation',
  description: 'Join us in celebrating the wedding of Vishu & Kavya',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${aboreto.variable} font-sans antialiased text-gray-900 bg-[#faf8ec]`}>
        {children}
      </body>
    </html>
  );
}
