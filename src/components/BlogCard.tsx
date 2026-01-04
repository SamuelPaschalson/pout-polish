"use client";

import React from "react";
import Image from "next/image";

// Inline icon
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

interface BlogCardProps {
  img: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
}

const BlogCard = ({ img, title, date, category, readTime }: BlogCardProps) => {
  const handleReadMore = () => {
    const message = `Hi! I just read about "${title}" on your website and I'm interested in learning more about your lip care products!`;
    window.open(`https://wa.me/2348178694956?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <article className="group cursor-pointer" onClick={handleReadMore}>
      <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-stone-500">
          <span>{date}</span>
          <span className="w-1 h-1 bg-stone-300 rounded-full" />
          <span>{readTime} read</span>
        </div>
        <h3 className="font-serif text-xl text-stone-900 group-hover:text-rose-500 transition-colors leading-snug">
          {title}
        </h3>
        <span className="inline-flex items-center gap-1 text-sm text-rose-500 font-medium">
          Learn More <ArrowRightIcon />
        </span>
      </div>
    </article>
  );
};

export default BlogCard;
