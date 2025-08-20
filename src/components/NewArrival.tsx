"use client";
import React, { useEffect, useState } from "react";
import Data from "@/utils/productData";
import { Whisper } from "next/font/google";
import ProductCard, { IProduct } from "./ProductCard";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const NewArrival = () => {
  const shuffleArray = (array: any) => {
    return array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(shuffleArray(Data).slice(0, 15));
  }, []);

  const tabsData = ["All", "Skin Care", "Lipsticks", "Makeup", "Nail & Wax"];
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTab = (index: number) => {
    const category = tabsData[index].toLowerCase(); // Fixed toLowerCase()
    setSelectedTab(index);

    if (category === "all") {
      setData(shuffleArray(Data).slice(0, 15));
      return;
    }

    const filteredData = Data.filter((item) =>
      item.category.map((cat) => cat.toLowerCase()).includes(category)
    );

    setData(shuffleArray(filteredData).slice(0, 15)); // Consistent slice
  };
  return (
    <div className="mx-auto px-[15px] pt-32 px-4">
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
          {data?.map((item: IProduct, index: number) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              sale={item.sale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
