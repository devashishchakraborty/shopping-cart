import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import OdinShopLogo from "./assets/odinshop.svg";
import CartLogo from "./assets/mdi-cart.svg";
import './App.css';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await (await fetch("https://fakestoreapi.com/products")).json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className='appContainer'>
      <header>
        <Link to="/" className="mainLogo">
          <img src={OdinShopLogo} alt="OdinShop Logo" />
          <h1>OdinShop</h1>
        </Link>
        <div className="headerNavigation">
          <nav>
            <Link to="home"><h2>Home</h2></Link>
            <Link to="shop"><h2>Shop</h2></Link>
            <Link to="home"><h2>About Us</h2></Link>
            <Link to="home"><h2>Help</h2></Link>
          </nav>
          <Link to="cart">
            <img src={CartLogo} alt="Shopping Cart" />
            <div className="totalItems">
              {Object.values(cart).reduce((sum, num) => sum + num, 0)}
            </div>
          </Link>
        </div>
      </header>
      <main>
        <Outlet context={{ products, setCart }} />
      </main>
      <footer>
        <div className="aboutOdinShop">
          <h3>About OdinShop</h3>
          <p>
            At OdinShop, we are committed to delivering the best shopping experience.
            Explore our curated collection of electronics, fashion, and home essentials.
            Quality and customer satisfaction are at the heart of everything we do.
          </p>
        </div>

        <div className="quickLinks">
          <h3>Quick Links</h3>
          <a href="/shop">Shop</a>
          <a href="/">About Us</a>
          <a href="/">Help</a>
          <a href="/">FAQs</a>
          <a href="/">Returns & Shipping</a>
        </div>

        <div className="contactInfo">
          <h3>Contact Us</h3>
          <p>Email: <a href="/">support@odinshop.com</a></p>
          <p>Phone: <a href="/">+1 (234) 567-890</a></p>
          <p>Address: 123 Odin Street, Valhalla City, Norseland</p>
          <div className="socialMedia">
            <h4>Follow Us:</h4>
            <a href="https://github.com/devashishchakraborty/shopping-cart" target="_blank" rel="noopener noreferrer">Github</a>&nbsp;|&nbsp;
            <a href="/" target="_blank" rel="noopener noreferrer">Twitter</a>&nbsp;|&nbsp;
            <a href="/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;