'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  cartItemCount?: number;
  onOpenSearch?: () => void;
}

export default function Header({ cartItemCount = 0, onOpenSearch }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const forceLightHeader =
    pathname.startsWith('/produits') || pathname.startsWith('/contact') || pathname.startsWith('/panier');

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (forceLightHeader) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceLightHeader]);

  const isLightHeader = forceLightHeader || isScrolled;

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Produits', href: '/produits' },
    { label: 'À Propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
  ];

  const hamburgerVariants = [
    {
      closed: { y: -6, rotate: 0, opacity: 1 },
      open: { y: 0, rotate: 45, opacity: 1 },
    },
    {
      closed: { y: 0, rotate: 0, opacity: 1 },
      open: { y: 0, rotate: 0, opacity: 0 },
    },
    {
      closed: { y: 6, rotate: 0, opacity: 1 },
      open: { y: 0, rotate: -45, opacity: 1 },
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightHeader ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span
              className={`text-2xl font-heading font-bold ${isLightHeader ? 'text-text' : 'text-white'}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              K&F Décor
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isLightHeader ? 'text-text' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 ${isLightHeader ? 'text-text' : 'text-white'}`}
              onClick={onOpenSearch}
              aria-label="Rechercher"
            >
              <Search size={20} />
            </motion.button>

            <Link href="/panier" aria-label="Voir le panier">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 relative ${isLightHeader ? 'text-text' : 'text-white'}`}
              >
                <ShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </motion.button>
            </Link>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {hamburgerVariants.map((variant, index) => (
                <motion.span
                  key={index}
                  className={`absolute block h-0.5 w-6 rounded-full ${isLightHeader ? 'bg-text' : 'bg-white'}`}
                  initial={false}
                  animate={isMobileMenuOpen ? variant.open : variant.closed}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 flex justify-end"
          >
            <button
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative h-full w-72 bg-white shadow-2xl flex flex-col p-8 pt-16 space-y-6"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fermer le menu"
                className="absolute top-4 right-4 text-text hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-heading text-text hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto text-sm text-gray-500">
                <p>Conakry, Guinée</p>
                <p className="mt-1">contact@kfdecor.gn</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
