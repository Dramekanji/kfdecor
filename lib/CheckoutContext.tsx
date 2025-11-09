'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export type FulfillmentMode = 'delivery' | 'pickup';

export interface CheckoutData {
  mode: FulfillmentMode;
  fullName: string;
  phone: string;
  email?: string;
  neighborhood: string;
  comments?: string;
}

interface CheckoutContextValue {
  data: CheckoutData;
  updateCheckoutData: (partial: Partial<CheckoutData>) => void;
  resetCheckoutData: () => void;
}

const defaultData: CheckoutData = {
  mode: 'delivery',
  fullName: '',
  phone: '+224 ',
  email: '',
  neighborhood: '',
  comments: '',
};

const CheckoutContext = createContext<CheckoutContextValue | undefined>(undefined);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CheckoutData>(defaultData);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = sessionStorage.getItem('kf-checkout-data');
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch (error) {
        console.error('Impossible de lire les données de checkout', error);
      }
    }
  }, []);

  const updateCheckoutData = (partial: Partial<CheckoutData>) => {
    setData((prev) => {
      const updated = { ...prev, ...partial };
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('kf-checkout-data', JSON.stringify(updated));
      }
      return updated;
    });
  };

  const resetCheckoutData = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('kf-checkout-data');
    }
    setData(defaultData);
  };

  return (
    <CheckoutContext.Provider value={{ data, updateCheckoutData, resetCheckoutData }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckout must be used within CheckoutProvider');
  }
  return context;
}
