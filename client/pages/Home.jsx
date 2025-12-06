import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);
  const  {cart}=useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "200px",
            }}
          >
            <img src={product.image} alt={product.name} width="100%" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/product/${product._id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <button
        style={{ backgroundColor: "#face10", color: "#ffffff", margin:"20px" }}>
        <Link to={"/cart"}> go to cart</Link>
      </button>
      <a href="/cart">🛒 Cart ({cart.length})</a>
    </div>
  );
};

export default Home;
