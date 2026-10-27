import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Online Luxury Atelier | Haute SSR Storefront',
  description: 'Curated haute technology, acoustic masterpieces, and wearable innovations. Experience premier Server-Side Rendered luxury e-commerce with encrypted instant invoices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased flex flex-col min-h-screen bg-[#08080a] text-zinc-100 selection:bg-amber-400 selection:text-black">
        {/* Subtle Ambient Background Lighting Glows */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[160px]" />
        </div>

        <CartProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
