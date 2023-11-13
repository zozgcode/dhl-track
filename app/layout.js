import './globals.css';
import {Inter} from 'next/font/google';
import NextUiProvider from './Providers';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const inter = Inter ({subsets: ['latin']});

export const metadata = {
  title: 'DHL Home - Global Logistics and International Shipping',
  description: 'DHL is the global leader in the logistics industry. Specializing in international shipping, courier services and transportation.',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUiProvider>
          <Header />
          {children}
          <Footer />
        </NextUiProvider>
      </body>
    </html>
  );
}
