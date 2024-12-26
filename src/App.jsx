import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await (
        await fetch("https://fakestoreapi.com/products")
      ).json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (id) => {
    setCart((prev) => {
      console.log(prev);
      return Object.keys(prev).includes(id.toString())
        ? { ...prev, [id]: prev[id] + 1 }
        : { ...prev, [id]: 1 };
    });
  };

  return (
    <div className="appContainer">
      <Header cart={cart} />
      <main>
        <Outlet context={{ products, addToCart }} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
