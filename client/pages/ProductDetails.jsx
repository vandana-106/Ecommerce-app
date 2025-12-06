import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error while fetching", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) return <h2 style={{ padding: 20 }}>Loading...</h2>;
  // console.log("ID from params: ", id);
  if (!product) return <h2 style={{ padding: 20 }}>Product not found...</h2>;
  const isInCart = cart.some((item) => item && item._id === product._id);

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.name} width="200" />

      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>

      {!isInCart && <button
        disabled={isInCart}
        onClick={() => addToCart(product)}
        style={{
          padding: "10px 15px",
          background: "green",
          color: "#fff",
          border: "none",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Add to Cart
        {isInCart ? "Already in Cart" : "Add to Cart"}
      </button>
}
      {isInCart && (
        <p style={{ color: "green", marginTop: "10px" }}>✔ Added to Cart</p>
      )}
    </div>
  );
};

export default ProductDetails;
