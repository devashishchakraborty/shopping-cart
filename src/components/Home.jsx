import { Link, useOutletContext } from "react-router-dom";
import scrollDownIcon from "../assets/scrolldownicon.svg";
import "../styles/Home.css";
import Product from "./Product";

const Home = () => {
  const { products, cart, modifyCart } = useOutletContext(); // Access the passed props

  return (
    <>
      <div className="heroSection">
        <div className="content">
          <div className="welcomeMessage">
            Welcome to <br></br> <h1>The OdinShop Store!</h1>
          </div>
          <div className="tagline">
            Discover the perfect blend of style and tech! Explore our curated
            collection of electronics, stunning jewelry, men's fashion, and
            women's clothing. Free shipping across the U.S. and quality you can
            count on—shop now and elevate your lifestyle!
          </div>
          <div className="heroSectionBtns">
            <Link to="/shop">
              <button className="shopNowBtn">SHOP NOW</button>
            </Link>
            <Link to="/home" className="aboutUsBtn">
              about us
            </Link>
          </div>
        </div>
        <div className="scrollDown">
          <img src={scrollDownIcon} alt="" />
          scroll down
        </div>
      </div>
      <div className="featuredProducts">
        <h1 className="sectionTitle">Featured</h1>
        <div className="products">
          {products &&
            products
              .slice(16, 20)
              .map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  cart={cart}
                  modifyCart={modifyCart}
                />
              ))}
        </div>
        <Link to="/shop">
          <button className="viewAll">View All</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
