import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { slide as Menu } from 'react-burger-menu';

import BreezeLogo from '../assets/logo.svg';

function Header({ cart, totalQuantity }) {
  const shouldRenderHamburger = useMediaQuery({ query: '(max-width: 520px)' });

  return (
    <nav>
      <div className='logo'>
        <img src={BreezeLogo} alt='Logo' />
        <Link to='/'>Breeze</Link>
      </div>

      {shouldRenderHamburger ? (
        <Menu right>
          <Link to='/' className='menu-item'>
            Home
          </Link>
          <Link to='shop' className='menu-item'>
            Shop
          </Link>
          <Link to='about' className='menu-item'>
            About
          </Link>
          <Link to='cart' className='menu-item'>
            Cart
          </Link>
        </Menu>
      ) : (
        <>
          <div className='redirects'>
            <Link to='/' className='underline'>
              Home
            </Link>

            <Link to='shop' className='underline'>
              Shop
            </Link>
            <Link to='about' className='underline'>
              About
            </Link>
          </div>
          <Link to='cart' className='underline'>
            Cart: {totalQuantity} Items
          </Link>
        </>
      )}
    </nav>
  );
}

export default Header;
