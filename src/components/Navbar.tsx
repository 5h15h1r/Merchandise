import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const { cart } = useCart();
    const [animate, setAnimate] = useState(false);
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        if (itemCount > 0) {
          setAnimate(true);
          const timer = setTimeout(() => setAnimate(false), 300);
          return () => clearTimeout(timer);
        }
      }, [itemCount]);
    

    return (
        <nav className=" bg-white text-black p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
                Merchandise
            </Link>
            <Link href="/cart" className=" hover:text-stone-600">
            <div className="flex items-center">
                <div className={`relative ${animate ? 'animate-bounce' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {itemCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                    </span>
                )}
                </div>
                
            </div>
            </Link>
        </div>
        </nav>
    );
}