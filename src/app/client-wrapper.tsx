'use client';

import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import { CartProvider } from '@/context/CartContext';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white antialiased">
        <NavBar setShowCart={setShowCart} />
        {showCart && <Cart setShowCart={setShowCart} />}
        {children}
        <Footer />
      </div>
    </CartProvider>
  );
}
