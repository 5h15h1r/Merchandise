import Image from 'next/image';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeItem: (productId: number) => void;
}

export default function CartItem({ item, updateQuantity, removeItem }: CartItemProps) {
  return (
    <div className="flex items-center border-b py-4">
      <Image src={item.image} alt={item.name} width={80} height={80} className="mr-4" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
          className="bg-gray-200 px-2 py-1 rounded-l"
        >
          -
        </button>
        <span className="px-4">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="bg-gray-200 px-2 py-1 rounded-r"
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="ml-4 text-red-500 hover:text-red-700 group transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 "
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash " viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
      </button>
    </div>
  );
}