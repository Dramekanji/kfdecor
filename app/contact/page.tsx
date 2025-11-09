'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de soumission du formulaire
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nom: '', email: '', telephone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Conakry, République de Guinée',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+224 XXX XXX XXX',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@kfdecor.gn',
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Sam: 9h00 - 18h00\nDimanche: Fermé',
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: 'Facebook',
      link: 'https://facebook.com',
      color: 'hover:text-blue-600',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://instagram.com',
      color: 'hover:text-pink-600',
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      link: 'https://wa.me/224XXXXXXXXX',
      color: 'hover:text-green-600',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Contactez-Nous
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous aider dans vos projets de décoration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-heading font-bold text-text mb-6">Envoyez-nous un message</h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Message envoyé !</h3>
                <p className="text-green-700">
                  Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+224 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-text mb-1">{info.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-heading font-semibold text-text mb-4">Suivez-nous</h3>
              <p className="text-gray-600 mb-4">
                Restez connectés avec nous sur les réseaux sociaux pour découvrir nos nouveautés et inspirations déco
              </p>
              <div className="flex space-x-4">
                {socialMedia.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-gray-600 ${social.color} transition-colors`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-primary/10 rounded-lg p-6 mt-6"
            >
              <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                Besoin d&apos;aide pour choisir ?
              </h3>
              <p className="text-gray-700">
                Notre équipe d&apos;experts en décoration est disponible pour vous conseiller gratuitement
                sur vos projets d&apos;aménagement intérieur.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96 flex items-center justify-center"
        >
          <div className="text-center text-gray-500">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="text-lg">
              Carte interactive
              <br />
              <span className="text-sm">(Intégration Google Maps à venir)</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
