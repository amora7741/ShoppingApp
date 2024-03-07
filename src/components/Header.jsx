import { Link } from 'react-router-dom';

import BreezeLogo from '../assets/logo.svg';

function Header() {
  return (
    <nav>
      <div className='logo'>
        <img src={BreezeLogo} alt='Logo' />
        <Link to='/'>Breeze</Link>
      </div>

      <div className='redirects'>
        <Link to='/' className='nav-item'>
          Home
        </Link>

        <Link to='shop' className='nav-item'>
          Shop
        </Link>
        <Link to='about' className='nav-item'>
          About
        </Link>
      </div>
      <div className='shoppingcart nav-item'>Cart: 0 Items</div>
    </nav>
  );
}

export default Header;
