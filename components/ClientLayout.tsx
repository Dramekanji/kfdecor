'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { CartProvider, useCart } from '@/lib/CartContext';
import { CheckoutProvider } from '@/lib/CheckoutContext';
import SearchOverlay from './SearchOverlay';

function LayoutContent({ children, onOpenSearch }: { children: ReactNode; onOpenSearch: () => void }) {
  const { itemCount } = useCart();

  return (
    <>
      <Header cartItemCount={itemCount} onOpenSearch={onOpenSearch} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSearchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  return (
    <CartProvider>
      <CheckoutProvider>
        <LayoutContent onOpenSearch={() => setIsSearchOpen(true)}>{children}</LayoutContent>
        <SearchOverlay open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </CheckoutProvider>
    </CartProvider>
  );
}
