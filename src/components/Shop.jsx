import "../styles/Shop.css";
import { useOutletContext } from "react-router-dom";
import { generateStars, trimTitle } from "../Utils";

const Shop = () => {
  const { products, addToCart } = useOutletContext(); // Access the passed props

  return (
    <div className="productsContainer">
      <div className="sortBy">Sort By: </div>
      <div className="products">
        {products &&
          products.map((product) => (
            <div className="product" key={product.id}>
              <div className="imgContainer">
                <img
                  className="image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="name" title={product.title}>
                {trimTitle(product.title)}
              </div>
              <div className="rating">
                <div className="ratedValue" title={product.rating.rate}>
                  {generateStars(product.rating.rate).map((star, index) => (
                    <img key={index} src={star} alt="" />
                  ))}
                </div>
                <div className="ratedCount">({product.rating.count})</div>
              </div>
              <h2 className="price">${product.price}</h2>
              <button onClick={() => addToCart(product.id)}>
                + Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;
