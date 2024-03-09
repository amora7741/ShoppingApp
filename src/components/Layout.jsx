import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';

function Layout() {
  const [cart, setCart] = useState([]);

  const totalQuantity = cart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.item.id === item.id
      );

      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity,
        };
        return updatedCart;
      } else {
        return [...prevCart, { item: item, quantity: quantity }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      return prevCart.filter((cartItem) => cartItem.item.id !== item.item.id);
    });
  };

  return (
    <>
      <Header cart={cart} totalQuantity={totalQuantity} />
      <Outlet context={{ addToCart, cart, totalQuantity, removeFromCart }} />
      <Footer />
    </>
  );
}

export default Layout;
