import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState("relevance");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await (
        await fetch("https://fakestoreapi.com/products")
      ).json();
      setProducts(data);
    };
    fetchProducts();
  }, []);


  // Setting the cart with id of the item as key with the quantity in value
  const addToCart = id => setCart(prev => (
    Object.keys(prev).includes(id.toString())
      ? { ...prev, [id]: prev[id] + 1 }
      : { ...prev, [id]: 1 }
  ))

  // Removing the item from the cart
  const removeFromCart = id => setCart(prev => {
    let temp = {...prev};
    if (Object.keys(temp).includes(id.toString())) delete temp[id];
    return temp;
  })


return (
  <div className="appContainer">
    <Header cart={cart} />
    <main>
      <Outlet context={{ products, cart, order, category, setOrder, setCategory, addToCart, removeFromCart }} />
    </main>
    <Footer />
  </div>
);
};

export default App;
