"use client";

import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const categories = [
    {
      name: "Lip Care",
      items: "12 Products",
      img: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&h=400&fit=crop",
    },
    {
      name: "Lipsticks",
      items: "18 Products",
      img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    },
    {
      name: "Gift Sets",
      items: "6 Products",
      img: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=400&fit=crop",
    },
  ];

  const handleCategoryClick = (categoryName: string) => {
    const message = `Hi! I'm interested in your ${categoryName} collection. Can you show me what's available?`;
    window.open(`https://wa.me/2348178694956?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-amber-50/80" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-rose-400 font-serif italic text-2xl inline-block mb-2">Shop By</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Category</h2>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <div key={i} onClick={() => handleCategoryClick(category.name)} className="cursor-pointer">
              <CategoryCard
                img={category.img}
                name={category.name}
                items={category.items}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
