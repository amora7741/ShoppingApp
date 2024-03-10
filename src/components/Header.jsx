import { Link } from 'react-router-dom';

import BreezeLogo from '../assets/logo.svg';

function Header({ cart, totalQuantity }) {
  const showItems = () => {
    console.log(cart);
  };

  return (
    <nav>
      <div className='logo'>
        <img src={BreezeLogo} alt='Logo' />
        <Link to='/'>Breeze</Link>
      </div>

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
      <Link to='cart' className='underline' onClick={showItems}>
        Cart: {totalQuantity} Items
      </Link>
    </nav>
  );
}

export default Header;
