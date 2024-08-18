import { useCart } from '../contexts/CartContext';

export default function CartSummary() {
  const { cart, discount, applyDiscount, removeDiscount } = useCart();

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const discountAmount = discount
    ? subtotal * (discount.value / 100)
    : 0;

  const total = subtotal - discountAmount;

  const handleApplyDiscount = () => {
    applyDiscount({ type: 'percentage', value: 10 });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cart Summary</h2>
      <div className="flex justify-between mb-2 text-gray-600">
        <span>Subtotal:</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>
      {discount && (
        <div className="flex justify-between mb-2 text-green-600">
          <span>Discount (10%):</span>
          <span>-₹{discountAmount.toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-between font-bold text-lg text-gray-800 mt-4">
        <span>Total:</span>
        <span>₹{total.toFixed(2)}</span>
      </div>
      <div className="mt-4 space-y-2">
        {!discount ? (
          <button
            onClick={handleApplyDiscount}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Apply 10% off
          </button>
        ) : (
          <button
            onClick={removeDiscount}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Remove Discount
          </button>
        )}
      </div>
      <button className="w-full bg-gray-500 text-white py-3 rounded-md hover:bg-black transition-colors mt-6 font-semibold">
        Proceed to Checkout
      </button>
    </div>
  );
}