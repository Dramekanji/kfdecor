'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Produits', href: '/produits' },
    { label: 'À Propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
  ];

  const categories = [
    { label: 'Vases', href: '/produits?category=vases' },
    { label: 'Miroirs', href: '/produits?category=miroirs' },
    { label: 'Pots de Fleurs', href: '/produits?category=pots-de-fleurs' },
    { label: 'Rideaux', href: '/produits?category=rideaux' },
    { label: 'Tapis', href: '/produits?category=tapis' },
    { label: 'Plantes Artificielles', href: '/produits?category=plantes-artificielles' },
    { label: 'Tableaux', href: '/produits?category=tableaux' },
    { label: 'Luminaires', href: '/produits?category=luminaires' },
    { label: 'Tables', href: '/produits?category=tables' },
    { label: 'Coussins', href: '/produits?category=coussins' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <span className="text-2xl font-heading font-bold text-text block mb-4">K&F Décor</span>
            <p className="text-gray-600 mb-4">
              Votre destination pour des décorations d&apos;intérieur élégantes et de qualité à Conakry.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Catégories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-600">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Conakry, Guinée</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>+224 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>contact@kfdecor.gn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} K&F Décor. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
