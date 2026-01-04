"use client";

import React from "react";
import BlogCard from "./BlogCard";

// Inline icon
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
      title: "The Art of Lip Care: A Complete Guide",
      date: "Dec 28, 2025",
      category: "Guides",
      readTime: "5 min",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&h=400&fit=crop",
      title: "Winter Lip Care Essentials",
      date: "Dec 25, 2025",
      category: "Seasonal",
      readTime: "3 min",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=400&fit=crop",
      title: "DIY Natural Lip Scrubs",
      date: "Dec 20, 2025",
      category: "DIY",
      readTime: "4 min",
    },
  ];

  const handleViewAll = () => {
    const message = "Hi! I'd love to learn more about lip care tips and your products!";
    window.open(`https://wa.me/2348178694956?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-rose-400 font-serif italic text-2xl inline-block mb-2">
              Latest Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900">From Our Journal</h2>
          </div>
          <button
            onClick={handleViewAll}
            className="group inline-flex items-center gap-2 text-stone-600 hover:text-rose-500 transition-colors mt-4 md:mt-0"
          >
            View All Articles
            <ArrowRightIcon />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              img={post.img}
              title={post.title}
              date={post.date}
              category={post.category}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
