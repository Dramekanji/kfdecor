'use client';

import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import CheckoutSteps from '@/components/CheckoutSteps';
import Button from '@/components/Button';
import Image from 'next/image';

export default function ReviewPage() {
  const { cart } = useCart();
  const subtotal = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">Étape 2 sur 3</p>
            <h1 className="text-4xl font-heading font-bold text-text">Revue de la Commande</h1>
          </div>
          <CheckoutSteps currentStep="review" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div key={item.product.id} className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                <div className="relative w-24 h-24 bg-gray-50 rounded-xl overflow-hidden">
                  <Image src={item.product.images[0]} alt={item.product.name} fill className="object-contain p-3" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-text">{item.product.name}</p>
                  <p className="text-sm text-gray-400">Quantité : {item.quantity}</p>
                </div>
                <span className="text-primary font-semibold">
                  {(item.product.price * item.quantity).toLocaleString('fr-FR')} {item.product.currency}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-heading font-semibold">Résumé</h2>
            <div className="flex justify-between text-gray-600">
              <span>Sous-total</span>
              <span>{subtotal.toLocaleString('fr-FR')} GNF</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Livraison</span>
              <span>À calculer</span>
            </div>
            <div className="border-t pt-4 flex justify-between text-lg font-semibold text-text">
              <span>Total</span>
              <span>{subtotal.toLocaleString('fr-FR')} GNF</span>
            </div>
            <Link href="/panier/checkout">
              <Button className="w-full">Procéder au Checkout</Button>
            </Link>
            <Link href="/panier" className="block text-center text-sm text-gray-400 hover:text-primary">
              Retourner au panier
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
