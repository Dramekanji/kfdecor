'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import CheckoutSteps from '@/components/CheckoutSteps';
import { useCart } from '@/lib/CartContext';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">Étape 1 sur 3</p>
            <h1 className="text-4xl font-heading font-bold text-text">Votre Panier</h1>
          </div>
          <CheckoutSteps currentStep="cart" />
        </div>

        {cart.items.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <p className="text-xl font-semibold text-gray-700 mb-4">Votre panier est vide.</p>
            <Link href="/produits">
              <Button>Parcourir les Produits</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {cart.items.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  className="bg-white rounded-2xl p-5 flex items-center gap-6 shadow-sm"
                >
                  <div className="relative w-32 h-32 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={item.product.images[0]} alt={item.product.name} fill className="object-contain p-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text">{item.product.name}</h3>
                    <p className="text-primary font-semibold mb-2">
                      {item.product.price.toLocaleString('fr-FR')} {item.product.currency}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="px-3 py-1 text-lg text-gray-600 hover:bg-gray-100"
                          aria-label="Diminuer la quantité"
                        >
                          -
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 py-1 text-lg text-gray-600 hover:bg-gray-100"
                          aria-label="Augmenter la quantité"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-sm text-gray-400 hover:text-primary"
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                </motion.div>
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
                <span>Calculée à l&rsquo;étape suivante</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-lg font-semibold text-text">
                <span>Total estimé</span>
                <span>{subtotal.toLocaleString('fr-FR')} GNF</span>
              </div>
              <Link href="/panier/review">
                <Button className="w-full">Passer à la Revue</Button>
              </Link>
              <p className="text-sm text-gray-400 text-center">
                Paiement sécurisé lors de la livraison.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
