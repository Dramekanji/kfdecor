"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import { getFeaturedProducts } from "@/data/products";
import { categoryNames } from "@/lib/types";
import { useCart } from "@/lib/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const { addToCart } = useCart();

  const categories = [
    {
      name: categoryNames.vases,
      slug: "vases",
      image:
        "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&q=80",
    },
    {
      name: categoryNames.miroirs,
      slug: "miroirs",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80",
    },
    {
      name: categoryNames["pots-de-fleurs"],
      slug: "pots-de-fleurs",
      image:
        "https://images.unsplash.com/photo-1621512366232-0b7b78983782?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
    },
    {
      name: categoryNames.rideaux,
      slug: "rideaux",
      image:
        "https://images.unsplash.com/photo-1706817969183-908d5b67d465?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335",
    },
    {
      name: categoryNames.tapis,
      slug: "tapis",
      image:
        "https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&q=80",
    },
    {
      name: categoryNames["plantes-artificielles"],
      slug: "plantes-artificielles",
      image:
        "https://images.unsplash.com/photo-1583676149519-6e8091884ce9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340",
    },
    {
      name: categoryNames.tableaux,
      slug: "tableaux",
      image:
        "https://images.unsplash.com/photo-1509744645300-a2098b11871a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335",
    },
    {
      name: categoryNames.luminaires,
      slug: "luminaires",
      image:
        "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
    },
    {
      name: categoryNames.tables,
      slug: "tables",
      image:
        "https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1760",
    },
    {
      name: categoryNames.coussins,
      slug: "coussins",
      image:
        "https://images.unsplash.com/photo-1638741280080-02e3f4267020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Élevez Votre Espace de Vie Aujourd'hui"
        subtitle="Découvrez des décorations faites main qui allient confort, style et qualité durable — conçues pour que chaque espace ressemble à la maison."
        ctaText="Explorer la Collection"
        ctaLink="#featured"
        backgroundImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
      />

      {/* Featured Products Section */}
      <section id="featured" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
              Nos Produits Vedettes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une sélection de nos articles les plus populaires pour embellir
              votre intérieur
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} onAddToCart={addToCart} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/produits">
              <Button size="lg">Voir Tous les Produits</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
                L&apos;Essentiel Uniquement,
                <br />
                Toujours l&apos;Exceptionnel
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez K&F Décor, nous croyons que chaque espace mérite
                d&apos;être extraordinaire. Nous proposons des pièces de
                décoration soigneusement sélectionnées qui allient style,
                qualité et durabilité.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                De nos vases élégants à nos miroirs sophistiqués, chaque produit
                est choisi pour transformer votre maison en un sanctuaire de
                confort et de beauté.
              </p>
              <Link href="/a-propos">
                <Button variant="outline">En Savoir Plus</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1616593871468-2a9452218369?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1760"
                alt="K&F Décor Interior"
                fill
                unoptimized
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
              Explorez Nos Catégories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trouvez exactement ce dont vous avez besoin pour votre espace
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/produits?category=${category.slug}`}>
                  <div className="group relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      unoptimized
                      className="object-contain p-4 bg-white group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-white text-xl font-heading font-semibold p-6 w-full text-center">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/Contact Preview Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Restons en Contact
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Vous avez des questions ou souhaitez passer une commande ? Notre
              équipe est là pour vous aider.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contactez-Nous
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
