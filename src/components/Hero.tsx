import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mx-auto px-[15px] relative pt-8">
      <Image
        className="w-full h-auto rounded-md"
        src="/hero1.jpg"
        width={1500}
        height={900}
        alt="Pout and Polish Hero"
      />
      <div className="hidden sm:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[250px] h-[200px] space-y-3 lg:w-[300px] lg:h-[270px] lg:space-y-6 xl:w-[400px] xl:h-[300px] p-6 xl:space-y-8">
        <h2 className="text-[22px] lg:text-[30px] xl:text-[40px] leading-tight">
          New Lipstick for you girl
        </h2>
        <p className="text-gray-600 text-[14px] xl:text-[16px]">
          Your lips, but softer, shinier, and absolutely irresistible.
        </p>
        <button className="bg-[#333] uppercase text-white text-[12px] py-2 xl:text-[16px] xl:py-4 px-8 rounded-md hover:text-[#E91E63]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
