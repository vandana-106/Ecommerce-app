import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div style={{ padding: "20px" }}>
      {product?.image ? (
        <img src={product.image} alt={product.name} width="200" />
      ) : (
        <p>Image unavailable</p>
      )}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
  );
};

export default ProductDetails;
