'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timeout);
    }
    setQuery('');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProducts = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }
    return products
      .filter((product) =>
        [product.name, product.description, product.category]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)
      )
      .slice(0, 8);
  }, [normalizedQuery]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start justify-center bg-black/40 px-4 py-10"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: -20, width: '220px', height: '70px' }}
            animate={{ opacity: 1, y: 0, width: '100%', height: 'auto' }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl overflow-hidden"
          >
            <div className="flex items-center border-b border-gray-100 px-6 py-4 gap-3">
              <Search className="text-gray-400" size={20} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Recherchez un produit K&F Décor..."
                className="flex-1 text-base focus:outline-none"
              />
              <button onClick={onClose} className="text-gray-400 hover:text-primary" aria-label="Fermer">
                <X size={20} />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto px-2 py-4">
              {!normalizedQuery ? (
                <p className="text-center text-gray-400 py-10 text-sm">
                  Commencez à taper pour découvrir les produits K&F Décor.
                </p>
              ) : filteredProducts.length === 0 ? (
                <p className="text-center text-gray-500 py-10">Aucun produit ne correspond à votre recherche.</p>
              ) : (
                <ul className="space-y-2">
                  {filteredProducts.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/produits/${product.id}`}
                        onClick={onClose}
                        className="flex items-center gap-4 rounded-2xl px-4 py-3 hover:bg-gray-50 transition"
                      >
                        <div className="relative w-14 h-14 rounded-xl bg-gray-100 overflow-hidden">
                          <Image src={product.images[0]} alt={product.name} fill className="object-contain p-2" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-text">{product.name}</p>
                          <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
                        </div>
                        <span className="text-sm font-semibold text-primary">
                          {product.price.toLocaleString('fr-FR')} {product.currency}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
