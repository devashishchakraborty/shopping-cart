import { Link, Outlet } from "react-router-dom";
import OdinShopLogo from "./assets/odinshop.svg";
import CartLogo from "./assets/mdi-cart.svg";
import './App.css';


const App = () => (
  <div className='appContainer'>
    <header>
      <Link to="/" className="mainLogo">
        <img src={OdinShopLogo} alt="OdinShop Logo" />
        <h1>OdinShop</h1>
      </Link>
      <nav>
        <Link to="home"><h2>Home</h2></Link>
        <Link to="shop"><h2>Shop</h2></Link>
        <Link to="cart"><img src={CartLogo} alt="Shopping Cart" /></Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer></footer>
  </div>
  )

export default App;