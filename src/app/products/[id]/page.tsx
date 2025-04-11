'use client'; 

import { useParams } from 'next/navigation';
import products from '../../../../lib/Products';

interface Product {
  id: number;
  name: string;
  collection: string;
  price: string;
  img: string;
  color?: string;
  rating: number;
}

const ProductPage = () => {
  const params = useParams();
  const id = params.id;

  if (!id) {
    return <p className="mt-10">Loading product...</p>;
  }


  const product = 
    products.men.find(p => p.id === Number(id)) || 
    products.women.find(p => p.id === Number(id));

  if (!product) {
    return <p className="mt-10">Product not found.</p>;
  }

  return (
    <div>{product.name}</div>
  );
};

export default ProductPage; 