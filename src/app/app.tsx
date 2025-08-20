"use client";

import NavBar from "@/components/NavBar";
import { store } from "@/redux/store";
import React, { useState } from "react";
import { Provider } from "react-redux";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showCart, setShowCart] = useState(false); // Changed from string to boolean
  return (
    <Provider store={store}>
      <NavBar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      {children}
      <Footer />
    </Provider>
  );
}

export default App;
