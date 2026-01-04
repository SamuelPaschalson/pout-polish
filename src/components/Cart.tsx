'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import CartProduct from './CartProduct';

// Inline icons
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CartIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

interface CartProps {
  setShowCart: (show: boolean) => void;
}

const Cart = ({ setShowCart }: CartProps) => {
  const { cart: products, clearCart } = useCart();

  const getTotal = () => {
    return products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    const items = products
      .map(
        (item) =>
          `${item.name} (x${item.quantity}) - ₦${(
            item.price * item.quantity
          ).toLocaleString()}`
      )
      .join('\n');
    const total = getTotal();
    const message = `Hi! I'd like to place an order:\n\n${items}\n\nTotal: ₦${total.toLocaleString()}`;
    window.open(
      `https://wa.me/2348178694956?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    clearCart();
    setShowCart(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={() => setShowCart(false)}
      />

      {/* Cart Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-100">
            <h2 className="font-serif text-2xl text-stone-900">Your Cart</h2>
            <button
              onClick={() => setShowCart(false)}
              className="w-10 h-10 rounded-full hover:bg-stone-100 flex items-center justify-center transition-colors"
              aria-label="Close cart"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {products.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-rose-50 flex items-center justify-center text-rose-300">
                  <CartIcon />
                </div>
                <p className="text-stone-500 mb-4">Your cart is empty</p>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-rose-500 font-medium hover:text-rose-600 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {products.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {products.length > 0 && (
            <div className="border-t border-stone-100 p-6 space-y-4">
              <div className="flex justify-between text-lg">
                <span className="text-stone-600">Subtotal</span>
                <span className="font-semibold text-stone-900">
                  ₦{getTotal().toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-stone-500">
                Shipping calculated at checkout
              </p>
              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2 py-4 bg-green-600 text-white rounded-full font-medium hover:bg-green-500 transition-colors"
              >
                <WhatsAppIcon />
                Checkout via WhatsApp
              </button>
              <button
                onClick={() => setShowCart(false)}
                className="w-full py-4 border-2 border-stone-200 text-stone-700 rounded-full font-medium hover:border-stone-300 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
