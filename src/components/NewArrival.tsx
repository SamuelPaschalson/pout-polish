"use client";
import React, { useEffect, useState } from "react";
import Data from "@/utils/productData";
import { Whisper } from "next/font/google";
import ProductCard, { IProduct } from "./ProductCard";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

// Define proper interfaces
interface ProductData {
  id: number;
  name: string;
  img: string;
  price: number;
  sale?: boolean;
  category: string[];
}

interface TabData {
  [key: string]: string;
}

const NewArrival = () => {
  // Properly type the shuffle function
  const shuffleArray = (array: ProductData[]): ProductData[] => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const [data, setData] = useState<ProductData[]>([]);

  useEffect(() => {
    setData(shuffleArray(Data).slice(0, 15));
  }, []);

  const tabsData = ["All", "Skin Care", "Lipsticks", "Makeup", "Nail & Wax"];
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTab = (index: number) => {
    const category = tabsData[index].toLowerCase();
    setSelectedTab(index);

    if (category === "all") {
      setData(shuffleArray(Data).slice(0, 15));
      return;
    }

    const filteredData = Data.filter((item) =>
      item.category.map((cat) => cat.toLowerCase()).includes(category)
    );

    setData(shuffleArray(filteredData).slice(0, 15));
  };

  return (
    <div className="mx-auto px-4 pt-32">
      <div className="text-center">
        <h3 className={`${whisper.className} text-[40px] text-gray-500`}>
          For your beauty
        </h3>
        <h2 className="font-semibold text-5xl">New Arrival</h2>

        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl">
          {tabsData.map((text, index) => (
            <li
              key={text}
              className={`${
                selectedTab === index ? "text-[#E91E63]" : "text-gray-800"
              } cursor-pointer hover:text-[#E91E63] transition-colors`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
          {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              sale={item.sale}
              category={[]}
              quantity={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
