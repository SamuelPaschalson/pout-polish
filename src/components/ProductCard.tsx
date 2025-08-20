import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export interface IProduct {
  quantity?: number;
  id: number;
  img: string;
  name: string;
  price: number;
  category: string[];
  sale?: boolean;
}

const ProductCard = ({ id, img, name, price, sale }: IProduct) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const getRating = () => {
    const randomNumber = (min: number, max: number) => {
      return Math.ceil(Math.random() * (max - min) + min);
    };

    switch (randomNumber(0, 5)) {
      case 0:
        return (
          <div className="flex justify-center text-[#FF7043] pt-4 pb-2">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 1:
        return (
          <div className="flex justify-center text-[#FF7043] pt-4 pb-2">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex justify-center text-[#FF7043] pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex justify-center text-[#FF7043] pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex justify-center text-[#FF7043] pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex justify-center text-[#FF7043] pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
      default:
        return <div></div>;
    }
  };
  const addProductToCart = (e: React.FormEvent) => {
    e.stopPropagation();
    const payload = {
      id,
      img,
      name,
      price,
      quantity: 1,
    };
    dispatch(addToCart(payload));
  };
  return (
    <div
      className="cursor-pointer group"
      onClick={() => router.push(`/details/${id}`)}
    >
      <div className="relative">
        <Image
          className="w-full"
          src={img}
          alt={"Pout and Polish " + name}
          width={1000}
          height={1142}
        />
        {sale && (
          <div className="bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 m-4 py-[2px]">
            SALE!
          </div>
        )}

        <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 bg-[#00000050] group-hover:opacity-100 cursor-pointer ">
          <div className="absolute bottom-0 mb-4 left-[50%] translate-[-50%] flex gap-2">
            <div className="bg-white w-[50px] grid place-items-center h-[50px] text-[26px]">
              <AiOutlineHeart />
            </div>
            <div
              className="bg-white w-[50px] grid place-items-center h-[50px] text-[26px]"
              onClick={addProductToCart}
            >
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>
      {getRating()}
      <h2 className="font-medium pb-3 hover:text-[#FF7043]">{name}</h2>
      <p className="text-gray-600 font-light">₦{price}</p>
    </div>
  );
};

export default ProductCard;
