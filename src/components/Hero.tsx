'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { openWhatsApp } from '@/lib/config';

// Inline icons
const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const StarIconFilled = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '100%', label: 'Natural Ingredients' },
    { value: '4.9', label: 'Average Rating' },
  ];

  const handleShopNow = () => {
    openWhatsApp("Hi! I'd like to browse your lip care collection.");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-100/50 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div
          className={`space-y-8 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-rose-100/60 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
            <span className="text-rose-600 text-sm font-medium tracking-wide">
              New Season Collection
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 leading-tight">
            Lips That
            <span className="block text-rose-400 italic">Speak Beauty</span>
          </h1>

          <p className="text-stone-600 text-lg md:text-xl max-w-lg leading-relaxed">
            Discover our curated collection of luxurious lip care. Nourish,
            hydrate, and let your smile shine with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleShopNow}
              className="group relative px-8 py-4 bg-stone-900 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-rose-200/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
                Shop Collection
                <ArrowRightIcon />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <a
              href="/about"
              className="px-8 py-4 border-2 border-stone-200 text-stone-700 rounded-full font-medium tracking-wide transition-all duration-300 hover:border-rose-300 hover:text-rose-500 text-center"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-12 pt-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-serif text-stone-900">
                  {stat.value}
                </div>
                <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="relative">
            {/* Main image container */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-rose-200/50">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=1000&fit=crop"
                alt="Luxury lip care products - Pout and Polish"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent" />
            </div>

            {/* Floating product card */}
            <div className="absolute -left-8 bottom-20 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden relative bg-rose-100">
                  <Image
                    src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=100&h=100&fit=crop"
                    alt="Velvet Lip Scrub"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-medium text-stone-900 text-sm">
                    Velvet Lip Scrub
                  </p>
                  <p className="text-rose-500 font-semibold">₦1,500</p>
                </div>
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute -right-4 top-20 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl hidden md:block">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIconFilled key={i} />
                  ))}
                </div>
                <span className="text-stone-600 text-sm font-medium">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-stone-400 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-stone-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-stone-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
