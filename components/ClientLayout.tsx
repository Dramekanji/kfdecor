'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { CartProvider, useCart } from '@/lib/CartContext';
import { CheckoutProvider } from '@/lib/CheckoutContext';

function LayoutContent({ children }: { children: ReactNode }) {
  const { itemCount } = useCart();

  return (
    <>
      <Header cartItemCount={itemCount} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <CheckoutProvider>
        <LayoutContent>{children}</LayoutContent>
      </CheckoutProvider>
    </CartProvider>
  );
}
