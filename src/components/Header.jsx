import { Link } from "react-router-dom";
import { useState } from "react";
import BreezeLogo from "../assets/logo.svg";

function Header({ cart, totalQuantity }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showItems = () => {
    console.log(cart);
  };

  return (
    <nav>
      <div className="logo">
        <img src={BreezeLogo} alt="Logo" />
        <Link to="/">Breeze</Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="underline" onClick={toggleMenu}>
          Home
        </Link>

        <Link to="shop" className="underline" onClick={toggleMenu}>
          Shop
        </Link>

        <Link to="about" className="underline" onClick={toggleMenu}>
          About
        </Link>

        <Link
          to="cart"
          className="underline"
          onClick={() => {
            showItems();
            toggleMenu();
          }}
        >
          Cart: {totalQuantity} Items
        </Link>
      </div>
    </nav>
  );
}

export default Header;
