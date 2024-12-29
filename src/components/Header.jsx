import OdinShopLogo from "../assets/odinshop.svg";
import CartLogo from "../assets/mdi-cart.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css"

const Header = ({ cart }) => {
  return (
    <header>
      <Link to="/" className="mainLogo">
        <img src={OdinShopLogo} alt="OdinShop Logo" />
        <h1>OdinShop</h1>
      </Link>
      <div className="headerNavigation">
        <nav>
          <Link to="home">
            <h2>Home</h2>
          </Link>
          <Link to="shop">
            <h2>Shop</h2>
          </Link>
          <Link to="home">
            <h2>About Us</h2>
          </Link>
          <Link to="home">
            <h2>Help</h2>
          </Link>
        </nav>
        <Link to="cart">
          <img src={CartLogo} alt="Shopping Cart" />
          <div className="totalItems">
            {Object.values(cart).reduce((sum, num) => sum + +num, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
