import { useOutletContext } from "react-router-dom";
import "../styles/Cart.css";
import removeItem from "../assets/delete-outline.svg";

const Cart = () => {
  const { products, cart, modifyCart } = useOutletContext(); // Access the passed props
  
  const itemsInCart = products.filter((product) =>
    Object.keys(cart).includes(product.id.toString())
  );

  const totalAmount = itemsInCart.reduce(
    (total, item) => total + +cart[item.id] * +item.price,
    0
  );

  const handleCheckout = (e) => {
    alert("Thanks for using this website! This Project was built following TheOdinProject. The Checkout functionality is not Added Yet.")
  }

  return (
    <div className="cartContainer">
      <div className="items">
        <h1>MY CART</h1>
        {itemsInCart.length === 0
          ? "Looks like your Cart is Empty!"
          : itemsInCart.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="name">{item.title}</div>
                  <h2 className="price">${item.price}</h2>
                  <div className="quantity">
                    <button
                      className="subtractOne"
                      onClick={() => modifyCart(item.id, "remove", false)}
                    >
                      -
                    </button>
                    {cart[item.id]}
                    <button
                      className="addOne"
                      onClick={() => modifyCart(item.id, "add")}
                    >
                      +
                    </button>
                  </div>
                  <h2 className="totalPrice">
                    Total - ${(+item.price * +cart[item.id]).toFixed(2)}
                  </h2>
                  <button
                    className="deleteBtn"
                    onClick={() => modifyCart(item.id, "remove")}
                  >
                    <img src={removeItem} alt="" />
                  </button>
                </div>
              );
            })}
      </div>
      <div className="checkoutSection">
        <h1>TOTAL</h1>
        <div className="subTotal">
            <b>Sub-total</b>
            <div>${totalAmount.toFixed(2)}</div>
        </div>
        <div className="deliveryCharges">
            <b>Delivery Charges</b>
            <div>$2</div>
        </div>
        <button className="checkoutBtn" onClick={handleCheckout}>CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
