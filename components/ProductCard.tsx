'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formatPrice = (price: number, currency: string) => {
    if (currency === 'GNF') {
      return `${price.toLocaleString('fr-FR')} GNF`;
    }
    return `$${price}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image Container */}
      <Link href={`/produits/${product.id}`}>
        <div className="relative h-64 overflow-hidden bg-white">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 20rem, (min-width: 768px) 16rem, 100vw"
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            priority={product.featured}
          />
          {product.featured && (
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              Vedette
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Épuisé</span>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link href={`/produits/${product.id}`}>
          <h3 className="text-lg font-heading font-semibold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {formatPrice(product.price, product.currency)}
          </span>

          {product.inStock && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => onAddToCart?.(product)}
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#025a65] transition-colors"
              >
                Ajouter
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
