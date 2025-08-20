import { Whisper } from "next/font/google";
import React from "react";
import CategoryCard from "./CategoryCard";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const data = [
  {
    img: "/product.jpg",
    type: "Makeup",
    quantity: "(5 Items)",
  },
  {
    img: "/product.jpg",
    type: "Mail & Max",
    quantity: "(7 Items)",
  },
  {
    img: "/product.jpg",
    type: "Skincare",
    quantity: "(6 Items)",
  },
];
const Category = () => {
  return (
    <div className="bg-no-repeat py-16 mt-32 bg-[url(/cat.jpg)]">
      <div className="text-center text-white mx-auto px-[15px]">
        <h3 className={`${whisper.className} text-[40px]`}>
          Favourite Category
        </h3>
        <h2 className="font-medium text-[30px]">Top Category</h2>

        <div className="flex justify-center gap-4 md:gap-6 pt-8">
          {data.map((item) => (
            <CategoryCard
              key={item.type}
              img={item.img}
              type={item.type}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
