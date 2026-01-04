'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

// Inline icons
const HeartIcon = ({ filled }: { filled?: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const StarIcon = ({ filled }: { filled?: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  category: string[];
  sale?: boolean;
  badge?: string | null;
  quantity?: number;
}

const ProductCard = ({ id, img, name, price, sale, badge }: IProduct) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  // Generate a consistent rating based on product id
  const rating = (id % 2) + 4; // Will be 4 or 5
  const reviewCount = 10 + ((id * 7) % 50);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id,
      img,
      name,
      price,
    });
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/details/${id}`)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone-100 mb-4">
        <Image
          src={img}
          alt={`Pout and Polish ${name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {sale && (
            <span className="px-3 py-1 bg-rose-500 text-white text-xs font-medium rounded-full">
              Sale
            </span>
          )}
          {badge && (
            <span className="px-3 py-1 bg-stone-900 text-white text-xs font-medium rounded-full">
              {badge}
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isLiked
              ? 'bg-rose-500 text-white'
              : 'bg-white/80 backdrop-blur-sm text-stone-600 hover:bg-rose-500 hover:text-white'
          }`}
          onClick={handleLike}
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <HeartIcon filled={isLiked} />
        </button>

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            className="w-full py-3 bg-white text-stone-900 rounded-full font-medium text-sm hover:bg-rose-500 hover:text-white transition-colors duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2 px-1">
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < rating} />
          ))}
          <span className="text-xs text-stone-400 ml-1">({reviewCount})</span>
        </div>
        <h3 className="font-medium text-stone-900 group-hover:text-rose-500 transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-stone-900">
            ₦{price.toLocaleString()}
          </span>
          {sale && (
            <span className="text-sm text-stone-400 line-through">
              ₦{Math.round(price * 1.3).toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
