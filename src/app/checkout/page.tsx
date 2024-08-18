// pages/checkout.tsx
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Checkout Page</h1>
      <p className="mb-4">Your order will be delivered in the specified time.</p>
      <Link href="/">
        <span className="text-blue-500 underline">Go back to Home</span>
      </Link>
    </div>
  );
}
