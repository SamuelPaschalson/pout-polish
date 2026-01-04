import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Inline icons
const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your lip care products.";
    window.open(
      `https://wa.me/2347073166951?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/">
              <span className="font-serif text-2xl">
                Pout <span className="text-rose-400">&</span> Polish
              </span>
            </Link>
            <p className="text-stone-400 mt-2 text-sm max-w-xs">
              Luxury lip care crafted with love. Nourish your lips naturally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/"
              className="text-stone-400 hover:text-rose-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-stone-400 hover:text-rose-400 transition-colors"
            >
              About
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="text-stone-400 hover:text-rose-400 transition-colors"
            >
              Shop
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="text-stone-400 hover:text-rose-400 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/urfav_empress"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-stone-400 hover:bg-rose-500 hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-stone-400 hover:bg-green-500 hover:text-white transition-all duration-300"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Pout & Polish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
