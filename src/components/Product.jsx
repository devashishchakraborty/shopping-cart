import { trimTitle, generateStars } from "../Utils";
import removeItem from "../assets/remove-shopping-cart.svg";
import "../styles/Product.css";

const Product = ({ product, cart, modifyCart }) => {
  return (
    <div className="product">
      {cart[product.id] && (
        <div className="itemCountInCart">Qty: {cart[product.id]}</div>
      )}
      <div className="imgContainer">
        <img className="image" src={product.image} alt={product.title} />
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
      <div className="btns">
        <button className="addToCartBtn" onClick={() => modifyCart(product.id, "add")}>
          Add to Cart
        </button>
        {Object.keys(cart).includes(product.id.toString()) && (
          <button
            className="removeItemBtn"
            onClick={() => modifyCart(product.id, "remove")}
          >
            <img src={removeItem} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
