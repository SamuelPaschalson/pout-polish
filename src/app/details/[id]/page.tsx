'use client';

import React, { useEffect, useState } from 'react';
import Data from '@/utils/productData';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

// Inline icons
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

const CartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
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

interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  category: string[];
  sale?: boolean;
  badge?: string | null;
}

const DetailPage = () => {
  const [productData, setProductData] = useState<IProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const params = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const id = params.id;
    const getProductData = Data.find((item) => item.id.toString() === id);
    if (getProductData) {
      setProductData(getProductData);
    }
  }, [params.id]);

  const addProductToCart = () => {
    if (productData) {
      addToCart({
        id: productData.id,
        img: productData.img,
        name: productData.name,
        price: productData.price,
        quantity,
      });
    }
  };

  const handleBuyNow = () => {
    if (productData) {
      const message = `Hi! I'd like to order ${quantity}x ${
        productData.name
      } (₦${(productData.price * quantity).toLocaleString()})`;
      window.open(
        `https://wa.me/2348178694956?text=${encodeURIComponent(message)}`,
        '_blank'
      );
    }
  };

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-stone-500">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-rose-50 to-amber-50 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex gap-3 items-center text-sm">
            <Link
              href="/"
              className="text-stone-500 hover:text-rose-500 transition-colors"
            >
              Home
            </Link>
            <span className="text-stone-300">/</span>
            <span className="text-stone-500 capitalize">
              {productData.category[0]}
            </span>
            <span className="text-stone-300">/</span>
            <span className="text-stone-900 font-medium">
              {productData.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-stone-100 relative">
              <Image
                src={productData.img}
                alt={productData.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {productData.sale && (
                <span className="absolute top-6 left-6 px-4 py-2 bg-rose-500 text-white text-sm font-medium rounded-full">
                  Sale
                </span>
              )}
              {productData.badge && (
                <span className="absolute top-6 right-6 px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-full">
                  {productData.badge}
                </span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < 4} />
                ))}
              </div>
              <span className="text-stone-500 text-sm">(24 reviews)</span>
            </div>

            {/* Title & Price */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl md:text-5xl text-stone-900">
                {productData.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-semibold text-stone-900">
                  ₦{productData.price.toLocaleString()}
                </span>
                {productData.sale && (
                  <span className="text-xl text-stone-400 line-through">
                    ₦{Math.round(productData.price * 1.3).toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-stone-600 leading-relaxed">
              Indulge your lips with our luxurious{' '}
              {productData.name.toLowerCase()}. Crafted with naturally derived
              ingredients, this product provides deep nourishment while leaving
              your lips soft, smooth, and beautifully enhanced. Perfect for
              daily use and suitable for all skin types.
            </p>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-stone-600 text-sm">
                In Stock (20 available)
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center border border-stone-200 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-stone-600 hover:text-rose-500 transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center font-medium text-stone-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-stone-600 hover:text-rose-500 transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={addProductToCart}
                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors"
              >
                <CartIcon />
                Add to Cart
              </button>

              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all ${
                  isLiked
                    ? 'bg-rose-500 border-rose-500 text-white'
                    : 'border-stone-200 text-stone-600 hover:border-rose-300 hover:text-rose-500'
                }`}
              >
                <HeartIcon filled={isLiked} />
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full font-medium hover:bg-green-500 transition-colors"
            >
              <WhatsAppIcon />
              Buy Now via WhatsApp
            </button>

            {/* Divider */}
            <div className="border-t border-stone-200 pt-6 space-y-4">
              {/* Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-stone-500">Category:</span>
                  <span className="text-stone-900 ml-2 capitalize">
                    {productData.category[0]}
                  </span>
                </div>
                <div>
                  <span className="text-stone-500">SKU:</span>
                  <span className="text-stone-900 ml-2">
                    PP-{productData.id.toString().padStart(4, '0')}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {productData.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full capitalize"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
