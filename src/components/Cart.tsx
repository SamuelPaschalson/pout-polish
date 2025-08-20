import React from "react";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart } from "@/redux/features/cartSlice";

// Define the product interface
interface CartProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

// Define the props interface
interface CartProps {
  setShowCart: (show: boolean) => void;
}

const Cart = ({ setShowCart }: CartProps) => {
  const products = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();

  const getTotal = () => {
    let total = 0;
    products.forEach((item) => (total = total + item.price * item.quantity));
    return total;
  };

  // Get all selected product names
  const getSelectedProductNames = () => {
    return products.map((item) => item.name).join(", ");
  };

  // Create a WhatsApp message with product names
  const createWhatsAppMessage = () => {
    const productNames = getSelectedProductNames();
    const total = getTotal();
    return `https://wa.me/2348178694956?text=I'm interested in these products: ${productNames}. Total: ₦${total}.00`;
  };

  const handleCheckout = () => {
    const productNames = getSelectedProductNames();
    console.log("Selected products:", productNames);

    // Open WhatsApp with pre-filled message
    window.open(createWhatsAppMessage(), "_blank");
    dispatch(clearCart());
  };

  return (
    <div className="[bg:[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>

        <div className="mt-6 space-y-2">
          {products?.map((item: CartProduct) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="flex justify-between items-center font-medium text-xl py-4">
          <p>Total:</p>
          <p>₦{getTotal()}.00</p>
        </div>

        <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-[#FF7043] mb-4 mt-4">
          View Cart
        </button>
        <button
          className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-[#FF7043]"
          onClick={handleCheckout}
        >
          CheckOut
        </button>

        {/* Display selected product names (optional) */}
        {products.length > 0 && (
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <p className="text-sm font-medium">Selected Items:</p>
            <p className="text-xs text-gray-600 mt-1">
              {getSelectedProductNames()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
