"use client"; 
import ProductCard from '../components/ProductCard';
import products from '../data/product.json';
import { Product } from '../types';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8 bg-white">
        <h1 className="text-3xl text-black font-bold mb-8">Available Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}