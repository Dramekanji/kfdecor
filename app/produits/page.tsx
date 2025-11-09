'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Product, Category, categoryNames } from '@/lib/types';
import { useCart } from '@/lib/CartContext';
import { Filter, X } from 'lucide-react';

export default function ProduitsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const { addToCart } = useCart();

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Sort products
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [selectedCategory, sortBy]);

  const categories: Array<{ value: Category | 'all'; label: string }> = [
    { value: 'all', label: 'Tous les Produits' },
    { value: 'vases', label: categoryNames.vases },
    { value: 'miroirs', label: categoryNames.miroirs },
    { value: 'pots-de-fleurs', label: categoryNames['pots-de-fleurs'] },
    { value: 'rideaux', label: categoryNames.rideaux },
    { value: 'tapis', label: categoryNames.tapis },
    { value: 'plantes-artificielles', label: categoryNames['plantes-artificielles'] },
    { value: 'tableaux', label: categoryNames.tableaux },
    { value: 'luminaires', label: categoryNames.luminaires },
    { value: 'tables', label: categoryNames.tables },
    { value: 'coussins', label: categoryNames.coussins },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Nos Produits
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre collection complète de décorations pour embellir votre intérieur
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
              <h3 className="text-xl font-heading font-semibold mb-4">Filtres</h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Catégories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category.value
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Trier par</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="default">Par défaut</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                </select>
              </div>
            </div>
          </motion.aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden fixed bottom-6 right-6 z-40">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileFilterOpen(true)}
              className="bg-primary text-white p-4 rounded-full shadow-lg flex items-center space-x-2"
            >
              <Filter size={20} />
              <span className="font-medium">Filtres</span>
            </motion.button>
          </div>

          {/* Mobile Filter Overlay */}
          {isMobileFilterOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsMobileFilterOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween' }}
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-heading font-semibold">Filtres</h3>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Catégories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.value}
                        onClick={() => {
                          setSelectedCategory(category.value);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category.value
                            ? 'bg-primary text-white'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Trier par</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value as typeof sortBy);
                      setIsMobileFilterOpen(false);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="default">Par défaut</option>
                    <option value="price-asc">Prix croissant</option>
                    <option value="price-desc">Prix décroissant</option>
                  </select>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <p className="text-gray-600">
                {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''} trouvé{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </motion.div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} onAddToCart={addToCart} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-xl text-gray-600">Aucun produit trouvé dans cette catégorie.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
