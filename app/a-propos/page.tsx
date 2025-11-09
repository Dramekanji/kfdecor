'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Award, Users, Truck } from 'lucide-react';

export default function AProposPage() {
  const values = [
    {
      icon: Heart,
      title: 'Qualité Exceptionnelle',
      description: 'Nous sélectionnons uniquement des produits de la plus haute qualité pour garantir votre satisfaction.',
    },
    {
      icon: Award,
      title: 'Artisanat Local',
      description: 'Nous soutenons les artisans locaux et valorisons le savoir-faire traditionnel.',
    },
    {
      icon: Users,
      title: 'Service Client',
      description: 'Notre équipe dévouée est toujours prête à vous conseiller et vous accompagner.',
    },
    {
      icon: Truck,
      title: 'Livraison Rapide',
      description: 'Livraison soignée et rapide dans toute la région de Conakry.',
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] mb-20">
        <Image
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80"
          alt="À Propos K&F Décor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">À Propos de Nous</h1>
            <p className="text-xl md:text-2xl font-light">Votre partenaire décoration à Conakry</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-text mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                K&F Décor est né d&apos;une passion pour la beauté et l&apos;élégance dans nos espaces de vie.
                Fondée à Conakry, notre entreprise s&apos;est donnée pour mission de rendre accessible
                des décorations d&apos;intérieur de qualité exceptionnelle.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Nous croyons fermement que chaque maison mérite d&apos;être un havre de paix et de beauté.
                C&apos;est pourquoi nous sélectionnons avec soin chaque pièce de notre collection,
                en privilégiant la qualité, le style et la durabilité.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aujourd&apos;hui, K&F Décor est devenu la référence en matière de décoration d&apos;intérieur
                à Conakry, avec une clientèle fidèle qui apprécie notre engagement envers l&apos;excellence.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80"
                alt="K&F Décor Store"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-text mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ce qui nous guide au quotidien dans notre relation avec nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-lg p-8 md:p-12"
        >
          <h2 className="text-4xl font-heading font-bold text-text mb-8 text-center">
            Pourquoi Choisir K&F Décor ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                Sélection Rigoureuse
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque produit de notre collection est soigneusement sélectionné pour sa qualité,
                son design et sa durabilité. Nous ne proposons que le meilleur à nos clients.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                Expertise Locale
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Basés à Conakry, nous comprenons parfaitement les besoins et les préférences
                de nos clients. Notre équipe est toujours disponible pour vous conseiller.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                Prix Compétitifs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nous croyons que la qualité doit être accessible. C&apos;est pourquoi nous proposons
                des prix justes et compétitifs sans compromis sur la qualité.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                Satisfaction Garantie
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Votre satisfaction est notre priorité absolue. Nous nous engageons à offrir
                un service client exceptionnel et des produits qui dépassent vos attentes.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
