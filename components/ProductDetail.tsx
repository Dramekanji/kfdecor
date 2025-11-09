'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import Button from './Button';
import { useCart } from '@/lib/CartContext';
import { useRouter } from 'next/navigation';

interface ProductDetailProps {
  product: Product;
}

const fallbackPalette = ['#e5e5e5', '#c1d9a5', '#d4b48c', '#1a1a1a'];

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const priceLabel = useMemo(() => {
    if (product.currency === 'GNF') {
      return `${product.price.toLocaleString('fr-FR')} GNF`;
    }
    return `$${product.price.toFixed(2)}`;
  }, [product.price, product.currency]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i += 1) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8 text-sm text-gray-500">
          <span className="text-gray-400">Home</span> / <span>Produits</span> / <span className="text-text font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <motion.div
              layout
              className="relative h-[420px] rounded-2xl bg-white shadow-md flex items-center justify-center p-6"
            >
              <Image
                src={activeImage}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(image)}
                  className={`relative h-24 rounded-xl border-2 transition-all ${
                    activeImage === image ? 'border-primary shadow-md' : 'border-transparent'
                  } bg-white`}
                  aria-label="Choisir une image"
                >
                  <Image src={image} alt={product.name} fill className="object-contain p-3" sizes="100px" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Produit</p>
              <h1 className="text-4xl font-heading font-bold text-text mb-4">{product.name}</h1>
              <p className="text-3xl font-semibold text-primary">{priceLabel}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-semibold text-text">Description</p>
                <span className="text-sm text-gray-400">{product.inStock ? 'En stock' : 'Rupture'}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">Palette</p>
              <div className="flex items-center space-x-3">
                {(product.images.length > 1 ? product.images.slice(0, 4) : fallbackPalette).map((value, index) => {
                  const color = value.startsWith('http') ? fallbackPalette[index] ?? fallbackPalette[0] : value;
                  return (
                    <span
                      key={value}
                      className="w-10 h-10 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Quantité</p>
                <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100"
                    aria-label="Diminuer la quantité"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100"
                    aria-label="Augmenter la quantité"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex-1 flex gap-4">
                <Button onClick={handleAddToCart} className="flex-1">
                  Ajouter au Panier
                </Button>
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => {
                    handleAddToCart();
                    router.push('/panier/checkout');
                  }}
                >
                  Acheter Maintenant
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Réduction', value: product.featured ? 'Offre spéciale' : 'Standard' },
                { label: 'Livraison', value: '3 à 5 jours ouvrés' },
                { label: 'Retours', value: 'Sous 14 jours' },
                { label: 'Contact', value: 'support@kfdecor.gn' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-4 shadow-sm">
                  <p className="text-sm uppercase tracking-wide text-gray-400 mb-1">{item.label}</p>
                  <p className="text-text font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
