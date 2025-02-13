import "../styles/Shop.css";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import Product from "./Product";

const Shop = () => {
  const {
    products,
    cart,
    order,
    category,
    setOrder,
    setCategory,
    modifyCart,
  } = useOutletContext(); // Access the passed props

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = (category, products) => {
    let filteredProducts = [...products];
    if (category !== "all")
      return filteredProducts.filter(
        (product) => product.category === category
      );
    return filteredProducts;
  };

  const sortedProducts = (order, products) => {
    let sortedProducts = [...products];
    if (order == "priceLH") sortedProducts.sort((a, b) => a.price - b.price);
    else if (order == "priceHL")
      sortedProducts.sort((a, b) => b.price - a.price);
    else if (order == "rating")
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    else if (order == "popularity")
      sortedProducts.sort((a, b) => b.rating.count - a.rating.count);
    return sortedProducts;
  };

  return (
    <div className="productsContainer">
      <div className="reduce">
        <div className="filterUsing">
          <label for="filter">Filter:</label>
          <select
            name="filter"
            id="filter"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="all">All Products</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>

        <div className="sortBy">
          <label for="sort">Sort By:</label>
          <select
            name="sort"
            id="sort"
            onChange={(e) => setOrder(e.target.value)}
            value={order}
          >
            <option value="relevance">Relevance</option>
            <option value="rating">Highest Rated</option>
            <option value="priceLH">Price (Low to High)</option>
            <option value="priceHL">Price (High to Low)</option>
            <option value="popularity">Most Popular</option>
          </select>
        </div>
      </div>

      <div className="products">
        {products &&
          // Sort and filter products based on the option choosen
          sortedProducts(order, filteredProducts(category, products)).map(
            (product) => (
              <Product
                key={product.id} 
                product={product}
                cart={cart}
                modifyCart={modifyCart}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Shop;
