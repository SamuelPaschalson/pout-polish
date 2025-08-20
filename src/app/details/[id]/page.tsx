"use client";
import React, { useEffect, useState } from "react";
import Data from "@/utils/productData";
import { useParams } from "next/navigation";
import { IProduct } from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

import { MdCompareArrows } from "react-icons/md";

import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";

const DetailPage = () => {
  const [productData, setProductData] = useState<IProduct>({
    id: 0,
    img: "",
    name: "",
    price: 0,
    category: [],
    sale: false,
  });

  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const id = params.id;
    const getProductData = Data.filter((item) => item.id.toString() === id)[0];
    setProductData(getProductData);
  }, [params.id]);

  const addProductToCart = () => {
    dispatch(
      addToCart({
        ...productData,
        quantity: 1,
      })
    );
  };

  return (
    <div className="pt-8">
      <div className="bg-gray-100 py-4">
        <div className="container flex gap-4 items-center text-gray-500">
          <Link href="/" className="cursor-pointer hover:text-[#FF7043]">
            Home
          </Link>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p className="capitalize">{productData?.category[0]}</p>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p>{productData?.name}</p>
        </div>
      </div>

      <div className="container pt-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Image
              className="w-full h-auto"
              src={productData?.img || "/placeholder.jpg"}
              width={1000}
              height={1200}
              alt={productData?.name || "Product"}
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center text-[#FF7043]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <p className="text-gray-400 text-[14px] ml-2 hover:text-[#FF7043] cursor-pointer">
                (8 customer review)
              </p>
            </div>

            <div className="text-[#161616] space-y-6">
              <h2 className="text-3xl font-semibold">{productData?.name}</h2>
              <p className="text-xl">${productData?.price}.00</p>
            </div>
            <p className="text-gray-500 text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit vel
              imperdiet turpis. Orci varius natoque penatibus et magnis dis
              parturient montes. Pellentesque pretium lacinia orci nec dictum.
            </p>
            <p className="text-gray-500 text-[14px]">20 in stock</p>
            <button
              className="uppercase bg-[#FF7043] py-4 px-8 rounded-lg text-white flex gap-2 items-center hover:bg-black transition-colors"
              onClick={addProductToCart}
            >
              <AiOutlineShoppingCart className="text-[24px]" />
              Add to cart
            </button>

            <div className="flex gap-4 items-center uppercase py-4 text-[14px]">
              <div className="flex gap-1 items-center">
                <AiOutlineHeart />
                Add to Wish List
              </div>
              <div className="flex gap-1 items-center">
                <MdCompareArrows />
                Compare
              </div>
            </div>

            <div className="w-[30px] h-[2px] bg-gray-400" />
            <div>Name: {productData?.name}</div>
            <div className="capitalize">
              Category: {productData?.category[0]}
            </div>
            <div className="flex gap-1 items-center capitalize">
              Tags:{" "}
              {productData?.category.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
            <div className="w-[30px] h-[2px] bg-gray-400" />
            <div className="flex gap-1 items-center pt-4">
              SHARE:
              <div className="flex gap-2 items-center text-[18px]">
                <FaFacebookSquare /> <FaTwitter /> <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
