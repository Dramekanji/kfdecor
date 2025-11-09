import { Product } from "@/lib/types";

// Données des produits K&F Décor avec images de haute qualité d'Unsplash
export const products: Product[] = [
  // Vases
  {
    id: "vase-ceramique-blanc",
    name: "Vase en Céramique Blanc",
    description:
      "Élégant vase en céramique blanche, parfait pour des arrangements floraux modernes. Finition mate luxueuse.",
    price: 45000,
    currency: "GNF",
    category: "vases",
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "vase-verre-transparent",
    name: "Vase en Verre Transparent",
    description:
      "Vase contemporain en verre transparent soufflé à la bouche. Design minimaliste et élégant.",
    price: 38000,
    currency: "GNF",
    category: "vases",
    images: [
      "https://images.unsplash.com/photo-1571934387142-19331569b80b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
    ],
    inStock: true,
    featured: false,
  },
  {
    id: "vase-terre-cuite",
    name: "Vase en Terre Cuite Artisanal",
    description:
      "Vase artisanal en terre cuite avec finition naturelle. Pièce unique faite à la main.",
    price: 52000,
    currency: "GNF",
    category: "vases",
    images: [
      "https://plus.unsplash.com/premium_photo-1668620539045-4be5a54d71e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
    ],
    inStock: true,
    featured: true,
  },

  // Miroirs
  {
    id: "miroir-rond-laiton",
    name: "Miroir Rond Cadre Laiton",
    description:
      "Miroir mural rond avec cadre en laiton doré. Ajoute une touche de luxe à n'importe quel espace.",
    price: 125000,
    currency: "GNF",
    category: "miroirs",
    images: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "miroir-rectangulaire-bois",
    name: "Miroir Rectangulaire Bois Naturel",
    description:
      "Grand miroir rectangulaire avec cadre en bois naturel. Design scandinave épuré.",
    price: 98000,
    currency: "GNF",
    category: "miroirs",
    images: [
      "https://plus.unsplash.com/premium_photo-1664391904728-944a7c9ef7e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1360",
    ],
    inStock: true,
    featured: false,
  },
  {
    id: "miroir-vintage-dore",
    name: "Miroir Vintage Doré",
    description:
      "Miroir de style vintage avec ornements dorés. Pièce décorative exceptionnelle.",
    price: 145000,
    currency: "GNF",
    category: "miroirs",
    images: [
      "https://plus.unsplash.com/premium_photo-1733514692259-57cdff0a750f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364",
    ],
    inStock: true,
    featured: false,
  },

  // Pots de Fleurs
  {
    id: "pot-ceramique-terracotta",
    name: "Pot en Céramique Terracotta",
    description:
      "Pot de fleurs en céramique couleur terracotta. Idéal pour plantes d'intérieur.",
    price: 28000,
    currency: "GNF",
    category: "pots-de-fleurs",
    images: [
      "https://images.unsplash.com/photo-1621512366232-0b7b78983782?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "pot-moderne-gris",
    name: "Pot Moderne Gris Mat",
    description:
      "Pot de fleurs moderne avec finition gris mat. Design contemporain et élégant.",
    price: 32000,
    currency: "GNF",
    category: "pots-de-fleurs",
    images: [
      "https://images.unsplash.com/photo-1670169603920-e2d4080e22d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340",
    ],
    inStock: true,
    featured: false,
  },

  // Rideaux
  {
    id: "rideau-lin-beige",
    name: "Rideaux en Lin Beige",
    description:
      "Élégants rideaux en lin naturel couleur beige. Filtrent délicatement la lumière.",
    price: 85000,
    currency: "GNF",
    category: "rideaux",
    images: [
      "https://images.unsplash.com/photo-1706817969183-908d5b67d465?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335",
    ],
    inStock: true,
    featured: false,
  },
  {
    id: "rideau-velours-bleu",
    name: "Rideaux en Velours Bleu Nuit",
    description:
      "Luxueux rideaux occultants en velours bleu nuit. Apportent élégance et intimité.",
    price: 115000,
    currency: "GNF",
    category: "rideaux",
    images: [
      "https://images.unsplash.com/photo-1607505911980-ca095aa36606?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1288",
    ],
    inStock: true,
    featured: true,
  },

  // Tapis
  {
    id: "tapis-berbere-creme",
    name: "Tapis Berbère Crème",
    description:
      "Tapis berbère artisanal en laine crème. Motifs géométriques traditionnels.",
    price: 185000,
    currency: "GNF",
    category: "tapis",
    images: [
      "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "tapis-jute-naturel",
    name: "Tapis en Jute Naturel",
    description:
      "Tapis rond en jute naturelle tressée. Style bohème et écologique.",
    price: 95000,
    currency: "GNF",
    category: "tapis",
    images: [
      "https://plus.unsplash.com/premium_photo-1661872799062-4db4b04b1431?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2758",
    ],
    inStock: true,
    featured: false,
  },

  // Plantes Artificielles
  {
    id: "bouquet-eucalyptus",
    name: "Bouquet d'Eucalyptus Artificiel",
    description:
      "Magnifique bouquet d'eucalyptus artificiel. Aspect ultra-réaliste.",
    price: 35000,
    currency: "GNF",
    category: "plantes-artificielles",
    images: [
      "https://images.unsplash.com/photo-1583676149519-6e8091884ce9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340",
    ],
    inStock: true,
    featured: false,
  },
  {
    id: "roses-blanches-artificielles",
    name: "Roses Blanches Artificielles",
    description:
      "Ensemble de roses blanches artificielles de qualité premium. Ne se fanent jamais.",
    price: 42000,
    currency: "GNF",
    category: "plantes-artificielles",
    images: [
      "https://images.unsplash.com/photo-1606246551522-61f9ed248bd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "herbe-pampa",
    name: "Herbe de la Pampa Séchée",
    description: "Herbe de la pampa séchée naturelle. Tendance bohème chic.",
    price: 38000,
    currency: "GNF",
    category: "plantes-artificielles",
    images: [
      "https://plus.unsplash.com/premium_photo-1667509430600-0ff796006e0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335",
    ],
    inStock: true,
    featured: false,
  },

  // Tableaux
  {
    id: "tableau-abstrait-or",
    name: "Tableau Abstrait Tons Dorés",
    description:
      "Toile abstraite aux nuances dorées et crème. Apporte profondeur et élégance aux murs.",
    price: 120000,
    currency: "GNF",
    category: "tableaux",
    images: [
      "https://images.unsplash.com/photo-1509744645300-a2098b11871a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "diptyque-minimaliste",
    name: "Diptyque Minimaliste Noir & Blanc",
    description:
      "Ensemble de deux tableaux minimalistes contrastés. Idéal pour les salons modernes.",
    price: 135000,
    currency: "GNF",
    category: "tableaux",
    images: [
      "https://images.unsplash.com/photo-1505841468529-d99f8d82ef8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335",
    ],
    inStock: true,
    featured: false,
  },

  // Luminaires
  {
    id: "lampe-sur-pied-laiton",
    name: "Lampe sur Pied en Laiton",
    description:
      "Lampe sur pied au design contemporain avec abat-jour textile. Diffuse une lumière chaleureuse.",
    price: 165000,
    currency: "GNF",
    category: "luminaires",
    images: [
      "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "lampe-table-courbe",
    name: "Lampe de Table Courbée",
    description:
      "Lampe de table sculpturale avec base arrondie et finition mate. Parfaite pour une ambiance cosy.",
    price: 98000,
    currency: "GNF",
    category: "luminaires",
    images: [
      "https://plus.unsplash.com/premium_photo-1672166939372-5b16118eee45?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=927",
    ],
    inStock: true,
    featured: false,
  },

  // Tables
  {
    id: "table-basse-chene",
    name: "Table Basse en Chêne Massif",
    description:
      "Table basse rectangulaire en chêne clair avec pieds fuselés. Style nordique chaleureux.",
    price: 210000,
    currency: "GNF",
    category: "tables",
    images: [
      "https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1760",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "table-dappoint-marbre",
    name: "Table d'Appoint Plateau Marbre",
    description:
      "Petite table d'appoint avec plateau marbre blanc veiné et structure noire.",
    price: 125000,
    currency: "GNF",
    category: "tables",
    images: [
      "https://images.unsplash.com/photo-1649011327045-624a1bd2c3e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1453",
    ],
    inStock: true,
    featured: false,
  },

  // Coussins
  {
    id: "coussins-velours-terracotta",
    name: "Coussins en Velours Terracotta (Lot de 2)",
    description:
      "Duo de coussins en velours doux couleur terracotta avec passepoil raffiné.",
    price: 68000,
    currency: "GNF",
    category: "coussins",
    images: [
      "https://images.unsplash.com/photo-1638741280080-02e3f4267020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "coussin-graphique-creme",
    name: "Coussin Graphique Crème",
    description:
      "Coussin décoratif crème avec motifs géométriques tissés. Idéal pour sofas et lits.",
    price: 42000,
    currency: "GNF",
    category: "coussins",
    images: [
      "https://plus.unsplash.com/premium_photo-1673958554470-1425588b608b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
    ],
    inStock: true,
    featured: false,
  },
];

// Fonction pour obtenir les produits en vedette
export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

// Fonction pour obtenir les produits par catégorie
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

// Fonction pour obtenir un produit par ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
