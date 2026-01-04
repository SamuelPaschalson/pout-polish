"use client";

import React, { useEffect, useState } from "react";
import Data from "@/utils/productData";
import ProductCard from "./ProductCard";

// Inline icon
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

interface ProductData {
  id: number;
  name: string;
  img: string;
  price: number;
  sale?: boolean;
  badge?: string | null;
  category: string[];
}

const NewArrival = () => {
  const shuffleArray = (array: ProductData[]): ProductData[] => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const [data, setData] = useState<ProductData[]>([]);
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Lip Care", "Lipsticks", "Kits"];

  useEffect(() => {
    setData(shuffleArray(Data).slice(0, 8));
  }, []);

  const handleTab = (tab: string) => {
    setActiveTab(tab);
    const category = tab.toLowerCase();

    if (category === "all") {
      setData(shuffleArray(Data).slice(0, 8));
      return;
    }

    const filteredData = Data.filter((item) =>
      item.category.map((cat) => cat.toLowerCase()).includes(category)
    );

    setData(shuffleArray(filteredData).slice(0, 8));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle inline-block mb-2">
            For Your Beauty
          </span>
          <h2 className="section-title mb-6">New Arrivals</h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-stone-900 text-white shadow-lg"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {data.map((item, i) => (
            <div
              key={item.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <ProductCard
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                sale={item.sale}
                badge={item.badge}
                category={item.category}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-stone-900 text-stone-900 rounded-full font-medium hover:bg-stone-900 hover:text-white transition-all duration-300">
            View All Products
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
