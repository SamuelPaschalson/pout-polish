"use client";

import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  img: string;
  name: string;
  items: string;
}

const CategoryCard = ({ img, name, items }: CategoryCardProps) => {
  return (
    <div className="group">
      <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto max-w-[280px] transition-transform duration-500 group-hover:scale-105">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent" />
      </div>
      <div className="text-center mt-6">
        <h3 className="font-serif text-2xl text-stone-900 group-hover:text-rose-500 transition-colors">
          {name}
        </h3>
        <p className="text-stone-500 mt-1">{items}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
