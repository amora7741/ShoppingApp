import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Breeze</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='shop'>Shop</Link>
        </li>
      </ul>
      <div className='shoppingcart'>Cart: 0 Items</div>
    </nav>
  );
}

export default Header;
