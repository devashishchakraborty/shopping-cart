import { Link } from "react-router-dom";
import "./Home.css";
import scrollDownIcon from "./assets/scrolldownicon.svg";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { products, setCart } = useOutletContext(); // Access the passed props
  const handleAddToCart = (id) => {
    setCart((prev) =>
      Object.keys(prev).includes(id)
        ? { ...prev, id: prev[id] + 1 }
        : { ...prev, id: 1 }
    );
  };

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
            products.slice(16, 20).map((product) => (
              <div className="product" key={product.id}>
                <img
                  className="image"
                  src={product.image}
                  alt={product.title}
                />
                <div className="name">{product.title}</div>
                <h2 className="price">${product.price}</h2>
                <button onClick={() => handleAddToCart(product.id)}>
                  + Add to Cart
                </button>
              </div>
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
