// Types et interfaces pour K&F Décor

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: 'GNF' | 'USD';
  category: Category;
  images: string[];
  inStock: boolean;
  featured?: boolean;
}

export type Category =
  | 'vases'
  | 'miroirs'
  | 'pots-de-fleurs'
  | 'rideaux'
  | 'tapis'
  | 'plantes-artificielles'
  | 'tableaux'
  | 'luminaires'
  | 'tables'
  | 'coussins';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export const categoryNames: Record<Category, string> = {
  'vases': 'Vases',
  'miroirs': 'Miroirs',
  'pots-de-fleurs': 'Pots de Fleurs',
  'rideaux': 'Rideaux',
  'tapis': 'Tapis',
  'plantes-artificielles': 'Plantes Artificielles',
  'tableaux': 'Tableaux',
  'luminaires': 'Luminaires',
  'tables': 'Tables',
  'coussins': 'Coussins',
};
