import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';

function Layout() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <>
      <Header cart={cart} />
      <Outlet context={{ addToCart }} />
      <Footer />
    </>
  );
}

export default Layout;
