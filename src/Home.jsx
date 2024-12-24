import { Link } from "react-router-dom";
import "./Home.css";
import scrollDownIcon from "./assets/scrolldownicon.svg";

const Home = () => (
  <>
    <div className="heroSection">
      <div className="content">
        <div className="welcomeMessage">
          Welcome to <br></br> <h1>The OdinShop Store!</h1>
        </div>
        <div className="tagline">
          Discover the perfect blend of style and tech! 
          Explore our curated collection of electronics, stunning jewelry, men's fashion, and women's clothing. 
          Free shipping across the U.S. and quality you can count on—shop now and elevate your lifestyle!
        </div>
        <div className="heroSectionBtns">
          <Link to="/shop"><button className="shopNowBtn">SHOP NOW</button></Link>
          <Link to="/home" className="aboutUsBtn">about us</Link>
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
        <div className="product">Product 1</div>
        <div className="product">Product 2</div>
        <div className="product">Product 3</div>
        <div className="product">Product 4</div>
      </div>
    </div>
  </>
);

export default Home;