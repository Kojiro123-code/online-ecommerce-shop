import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'AURA Store | Server-Side Rendered (SSR) Modern E-Commerce',
  description: 'Fast, modern, and beautiful Next.js SSR E-Commerce store featuring 10 sample products, real-time cart, checkout flow, and downloadable HTML invoices.',
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
