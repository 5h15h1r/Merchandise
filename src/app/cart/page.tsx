'use client';

import CartItem from '../../components/CartItem';
import CartSummary from '../../components/CartSummary';
import { useCart } from '../../contexts/CartContext';
import Navbar from '../../components/Navbar';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-xl text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeItem={removeFromCart}
                />
              ))}
            </div>
            <div className="lg:col-span-1 ">
              <CartSummary />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}