'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product, Cart } from './types';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

  // Calculer le total du panier
  useEffect(() => {
    const total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    setCart(prev => ({ ...prev, total }));
  }, [cart.items]);

  // Charger le panier depuis localStorage au montage
  useEffect(() => {
    const savedCart = localStorage.getItem('kf-decor-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Sauvegarder le panier dans localStorage à chaque modification
  useEffect(() => {
    if (cart.items.length > 0) {
      localStorage.setItem('kf-decor-cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('kf-decor-cart');
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingItem = prev.items.find(item => item.product.id === product.id);

      if (existingItem) {
        // Augmenter la quantité si le produit existe déjà
        return {
          ...prev,
          items: prev.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Ajouter un nouveau produit
        return {
          ...prev,
          items: [...prev.items, { product, quantity: 1 }],
        };
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      items: prev.items.filter(item => item.product.id !== productId),
    }));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    }));
  };

  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
