import React from "react";
import { GiLipstick } from "react-icons/gi";
import { FaShippingFast, FaMoneyBill } from "react-icons/fa";

import FeatureCard from "./FeatureCard";
const data = [
  {
    img: <GiLipstick className="text-4xl text-[#FF7043]" />,
    title: "Naturally Derived",
    desc: "Natural and organic beauty product",
  },
  {
    img: <FaShippingFast className="text-4xl text-[#FF7043]" />,
    title: "Free Shipping",
    desc: "Free shipping on all orders over $99",
  },
  {
    img: <FaMoneyBill className="text-4xl text-[#FF7043]" />,
    title: "Secure Payment",
    desc: "Fully protected when paying online",
  },
];
const Feature = () => {
  return (
    <div className="mx-auto px-[15px] pt-16 p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <FeatureCard
            key={item.title}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
