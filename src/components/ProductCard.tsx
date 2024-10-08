import Image from "next/image";
import { Product } from "../types";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import Toast from "./Toast";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const [showToast, setShowToast] = useState(false);

    const triggerToast = () => {
        setShowToast(true);
    };
    return (
        <div>
            {showToast && (
        <Toast
          message="Item added to cart!"
          duration={3000}
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-stone-200 lg:transition-transform lg:duration-300 lg:hover:scale-105">
            <div className="relative h-64">
                <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl text-center font-semibold mb-2 text-gray-800">
                    {product.name}
                </h2>
                <p className="text-gray-600 mb-2 h-12 text-center overflow-hidden">
                    {product.description}
                </p>
                <div className="flex flex-col justify-between items-center">
                    <span className="text-lg font-bold text-stone-600">
                        ₹{product.price.toFixed(2)}
                    </span>
                    <button
                        onClick={() => {
                            addToCart(product);
                            triggerToast();
                        }}
                        className="bg-white text-black border-2 border-stone-300 px-16 py-2  hover:bg-stone-200 transition-colors "
                    >
                        Add to Cart
                    </button>
                    
                </div>
            </div>
        </div>
        </div>
    );
}
