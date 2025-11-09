'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { useCheckout } from '@/lib/CheckoutContext';
import { useCart } from '@/lib/CartContext';

export default function ConfirmationPage() {
  const { data, resetCheckoutData } = useCheckout();
  const { cart, clearCart } = useCart();
  const [snapshot] = useState(() => data);

  useEffect(() => {
    if (cart.items.length) {
      clearCart();
    }
  }, [cart.items.length, clearCart]);

  useEffect(() => {
    resetCheckoutData();
  }, [resetCheckoutData]);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center space-y-6">
        <div className="bg-white rounded-3xl shadow-sm p-10">
          <h1 className="text-4xl font-heading font-bold text-text mb-4">Merci {snapshot.fullName?.trim() || 'cher client'} !</h1>
          <p className="text-gray-600 mb-8">
            Votre commande a bien été prise en compte. Notre équipe vous contactera rapidement pour confirmer les
            détails de {snapshot.mode === 'delivery' ? 'livraison' : 'pickup'}.
          </p>
          <div className="text-left space-y-6">
            <div>
              <h2 className="font-semibold text-text">Informations de contact</h2>
              <p className="text-gray-600">{snapshot.fullName?.trim() || 'Non renseigné'}</p>
              <p className="text-gray-600">{snapshot.phone?.trim() || '+224'}</p>
              <p className="text-gray-600">{snapshot.email?.trim() || 'Email non fourni'}</p>
            </div>
            <div>
              <h2 className="font-semibold text-text">Adresse</h2>
              <p className="text-gray-600">{snapshot.neighborhood?.trim() || 'Quartier non précisé'}</p>
              <p className="text-gray-600">Conakry, Guinée</p>
              <p className="text-gray-500 text-sm mt-1">Mode choisi : {snapshot.mode === 'delivery' ? 'Livraison' : 'Pickup'}</p>
            </div>
            <div>
              <h2 className="font-semibold text-text">Commentaires</h2>
              <p className="text-gray-600 whitespace-pre-line">
                {snapshot.comments?.trim() || 'Aucune instruction supplémentaire.'}
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/produits">
              <Button>Continuer vos achats</Button>
            </Link>
            <Link href="/">
              <Button variant="outline">Retour à l&rsquo;accueil</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
