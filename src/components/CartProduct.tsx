import React from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useAppDispatch } from "@/redux/hooks";
import { removeFromCart } from "@/redux/features/cartSlice";
import Image from "next/image";

interface CartProductProps {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

const CartProduct = ({ id, img, name, price, quantity }: CartProductProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src={img}
          width={80}
          height={80}
          alt={name}
          className="object-cover"
        />
        <div className="space-y-2">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600 text-sm">
            {quantity} × ₦{price}.00
          </p>
        </div>
      </div>
      <FaRegCircleXmark
        className="text-2xl text-red-600 cursor-pointer"
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};

export default CartProduct;
