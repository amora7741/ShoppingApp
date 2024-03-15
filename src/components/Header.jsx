import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreezeLogo from '../assets/logo.svg';
import HamburgerButton from '../assets/hamburgericon.svg';
import CloseButton from '../assets/closebutton.svg';

function Header({ cart, totalQuantity }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav>
      <ul className={`sidebar ${sidebarOpen ? 'showSidebar' : ''}`}>
        <li>
          <a href='#' onClick={closeSidebar}>
            <img src={CloseButton} alt='' />
          </a>
        </li>
        <li>
          <Link to='/' className='underline' onClick={closeSidebar}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/shop' className='underline' onClick={closeSidebar}>
            Shop
          </Link>
        </li>
        <li>
          <Link to='/about' className='underline' onClick={closeSidebar}>
            About
          </Link>
        </li>
        <li>
          <Link to='/cart' className='underline' onClick={closeSidebar}>
            Cart: {totalQuantity} Items
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <div className='logo'>
            <img src={BreezeLogo} alt='Logo' />
            <Link to='/'>Breeze</Link>
          </div>
        </li>
        <li>
          <Link to='/' className='underline hideMobile'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/shop' className='underline hideMobile'>
            Shop
          </Link>
        </li>
        <li>
          <Link to='/about' className='underline hideMobile'>
            About
          </Link>
        </li>
        <li className='cartnav'>
          <Link to='/cart' className='underline hideMobile'>
            Cart: {totalQuantity} Items
          </Link>
        </li>
        <li className='hamburgerbutton'>
          <a href='#' onClick={toggleSidebar}>
            <img src={HamburgerButton} alt='' />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
