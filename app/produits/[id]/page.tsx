import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { getProductById, products } from '@/data/products';
import type { Metadata } from 'next';

interface ProductPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductById(params.id);
  if (!product) {
    return {
      title: 'Produit introuvable - K&F Décor',
    };
  }
  return {
    title: `${product.name} - K&F Décor`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
