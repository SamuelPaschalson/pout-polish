"use client";

import React, { useState } from "react";

const PromoBanner = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block text-rose-400 font-serif italic text-2xl mb-4">
          Limited Time Offer
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Get 20% Off Your First Order
        </h2>
        <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
          Sign up for our newsletter and receive an exclusive discount on your
          first purchase. Plus, get early access to new products and special
          offers.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-stone-400 focus:outline-none focus:border-rose-400 transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-400 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default PromoBanner;
