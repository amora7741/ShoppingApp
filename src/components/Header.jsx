import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
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
      </nav>
    </header>
  );
}

export default Header;
