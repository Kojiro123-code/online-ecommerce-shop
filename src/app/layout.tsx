import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Online E-Commerce Shop | Fast SSR Storefront',
  description: 'Modern, high-performance Online E-Commerce Shop powered by Next.js Server-Side Rendering (SSR). Browse premium electronics, audio gear, and accessories with instant downloadable HTML invoices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white">
        <CartProvider>
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

