'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

// Inline icons
const MinusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

interface CartProductProps {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

const CartProduct = ({ id, img, name, price, quantity }: CartProductProps) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleUpdateQuantity = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="flex gap-4">
      <div className="w-24 h-24 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 relative">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium text-stone-900">{name}</h3>
          <button
            onClick={() => removeFromCart(id)}
            className="text-stone-400 hover:text-rose-500 transition-colors"
            aria-label="Remove item"
          >
            <TrashIcon />
          </button>
        </div>
        <p className="text-rose-500 font-medium mt-1">
          ₦{price.toLocaleString()}
        </p>
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => handleUpdateQuantity(-1)}
            className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:border-rose-300 transition-colors"
            aria-label="Decrease quantity"
          >
            <MinusIcon />
          </button>
          <span className="text-stone-900 font-medium w-8 text-center">
            {quantity}
          </span>
          <button
            onClick={() => handleUpdateQuantity(1)}
            className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:border-rose-300 transition-colors"
            aria-label="Increase quantity"
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
