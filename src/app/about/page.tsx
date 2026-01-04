"use client";

import React from "react";
import Image from "next/image";

// Inline icons
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const AboutPage = () => {
  const handleContactClick = () => {
    const message = "Hi! I'd love to learn more about Pout & Polish!";
    window.open(`https://wa.me/2348178694956?text=${encodeURIComponent(message)}`, "_blank");
  };

  const values = [
    {
      icon: <HeartIcon />,
      title: "Made with Love",
      description: "Every product is crafted with care and passion, ensuring the highest quality for your lips.",
    },
    {
      icon: <LeafIcon />,
      title: "Natural Ingredients",
      description: "We source only the finest natural and organic ingredients for safe, nourishing lip care.",
    },
    {
      icon: <SparkleIcon />,
      title: "Radiant Results",
      description: "Our products deliver visible results - softer, smoother, and more beautiful lips.",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-rose-50 via-white to-amber-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-rose-400 font-serif italic text-2xl">Our Story</span>
              <h1 className="font-serif text-5xl md:text-6xl text-stone-900 leading-tight">
                Beauty That
                <span className="block text-rose-400 italic">Nourishes</span>
              </h1>
              <p className="text-stone-600 text-lg leading-relaxed">
                Welcome to Pout & Polish, where we believe that beautiful lips start with 
                proper care. Founded with a passion for natural beauty, we create luxurious 
                lip care products that nourish, protect, and enhance your natural beauty.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Every product in our collection is thoughtfully formulated with natural 
                ingredients, ensuring your lips get the love and care they deserve. From 
                our bestselling lip scrubs to our hydrating lip oils, each item is designed 
                to give you that perfect pout.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-rose-200/50">
                <Image
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=800&fit=crop"
                  alt="About Pout and Polish"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rose-400 font-serif italic text-2xl inline-block mb-2">What We Believe</span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-rose-50/50 hover:bg-rose-50 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-500 mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-serif text-2xl text-stone-900 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-rose-400 font-serif italic text-2xl inline-block mb-2">Our Mission</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">
            Empowering Confidence Through Lip Care
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            At Pout & Polish, our mission is simple: to help every person feel confident 
            in their own skin. We believe that self-care is an act of self-love, and 
            taking care of your lips is an essential part of that journey. Our products 
            are designed to make lip care enjoyable, effective, and accessible to everyone.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed">
            We&apos;re committed to using sustainable practices and natural ingredients, 
            because we care about your health and our planet. When you choose Pout & Polish, 
            you&apos;re choosing quality, care, and a brand that truly puts you first.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Ready to Transform Your Lip Care Routine?
          </h2>
          <p className="text-stone-400 text-lg mb-8">
            Get in touch with us today and discover the perfect products for your lips.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-400 transition-colors"
          >
            <WhatsAppIcon />
            Chat With Us
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
