'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import CheckoutSteps from '@/components/CheckoutSteps';
import { useCheckout, FulfillmentMode } from '@/lib/CheckoutContext';
import { useCart } from '@/lib/CartContext';
import Image from 'next/image';

export default function CheckoutPage() {
  const router = useRouter();
  const { data, updateCheckoutData } = useCheckout();
  const { cart } = useCart();
  const [error, setError] = useState('');

  const subtotal = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!data.fullName.trim() || !data.phone.trim() || !data.neighborhood.trim()) {
      setError('Merci de remplir tous les champs requis.');
      return;
    }
    setError('');
    router.push('/panier/confirmation');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">Étape 3 sur 3</p>
            <h1 className="text-4xl font-heading font-bold text-text">Checkout</h1>
          </div>
          <CheckoutSteps currentStep="checkout" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6 bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Mode de livraison">
              {[{ value: 'delivery', label: 'Livraison' }, { value: 'pickup', label: 'Pickup' }].map((option) => (
                <button
                  type="button"
                  key={option.value}
                  onClick={() => updateCheckoutData({ mode: option.value as FulfillmentMode })}
                  className={`flex-1 min-w-[140px] px-5 py-3 rounded-2xl border transition-all ${
                    data.mode === option.value
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-200 text-gray-500 hover:border-primary/50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col space-y-2 text-sm font-medium text-gray-600">
                <span>Nom complet *</span>
                <input
                  type="text"
                  value={data.fullName}
                  onChange={(e) => updateCheckoutData({ fullName: e.target.value })}
                  className="rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Votre nom"
                  required
                />
              </label>

              <label className="flex flex-col space-y-2 text-sm font-medium text-gray-600">
                <span>Email</span>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateCheckoutData({ email: e.target.value })}
                  className="rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="exemple@kfdecor.gn"
                />
              </label>
            </div>

            <label className="flex flex-col space-y-2 text-sm font-medium text-gray-600">
              <span>Téléphone *</span>
              <div className="flex items-center rounded-xl border border-gray-200 px-4">
                <span className="mr-2 text-lg">🇬🇳</span>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => updateCheckoutData({ phone: e.target.value.startsWith('+224') ? e.target.value : `+224 ${e.target.value}` })}
                  className="flex-1 py-3 focus:outline-none"
                  placeholder="+224 6XX XX XX XX"
                  required
                  pattern="\+224\s?\d{6,9}"
                />
              </div>
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col space-y-2 text-sm font-medium text-gray-600">
                <span>Pays</span>
                <input value="Guinée" disabled className="rounded-xl border border-gray-200 px-4 py-3 bg-gray-50" />
              </label>
              <label className="flex flex-col space-y-2 text-sm font-medium text-gray-600">
                <span>Ville</span>
                <input value="Conakry" disabled className="rounded-xl border border-gray-200 px-4 py-3 bg-gray-50" />
              </label>
            </div>

            <label className="flex flex-col space-y-2 text-sm font-medium text-gray-600">
              <span>Quartier *</span>
              <input
                type="text"
                value={data.neighborhood}
                onChange={(e) => updateCheckoutData({ neighborhood: e.target.value })}
                className="rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Ex. Kipé, Taouyah, etc."
                required
              />
            </label>

            <label className="flex flex-col space-y-2 text-sm font-medium text-gray-600">
              <span>Commentaires</span>
              <textarea
                value={data.comments}
                onChange={(e) => updateCheckoutData({ comments: e.target.value })}
                rows={4}
                className="rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Ajoutez des instructions spéciales ou des détails importants pour la livraison"
              />
            </label>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" className="w-full">Confirmer la Commande</Button>
          </form>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-heading font-semibold">Résumé du Panier</h2>
              <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2">
                {cart.items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-gray-50 rounded-xl overflow-hidden">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-contain p-2" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text">{item.product.name}</p>
                      <p className="text-xs text-gray-400">x{item.quantity}</p>
                    </div>
                    <span className="text-sm text-primary font-semibold">
                      {(item.product.price * item.quantity).toLocaleString('fr-FR')} {item.product.currency}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2 text-gray-600 text-sm">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{subtotal.toLocaleString('fr-FR')} GNF</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>{data.mode === 'delivery' ? '15 000 GNF' : 'Gratuit (pickup)'}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-text">
                  <span>Total</span>
                  <span>
                    {(subtotal + (data.mode === 'delivery' ? 15000 : 0)).toLocaleString('fr-FR')} GNF
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-400">Paiement à la livraison ou lors du retrait en boutique.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
