import { React, useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const { cart, clearCart } = useContext(CartContext);

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleCheckout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/orders",
        { items: cart, totalAmount },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      clearCart();
      navigate("/");
      alert("order placed successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to place order");
    }
  };

  return (
    <div>
      <h1>CheckOutPage</h1>
      <div>
        {cart.length < 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item._id}>
              <img src={item.image} alt={item.name} width={100} />

              <h3>{item.name}</h3>
              <p>Price : ₹{item.price}</p>
              <p>Quantity : {item.qty}</p>
            </div>
          ))
        )}
      </div>
      <h2>Total Amount : ₹{Number(totalAmount).toFixed(2)}</h2>
      <button
        style={{ backgroundColor: "#acefbc", color: "black" }}
        onClick={() => handleCheckout()}
      >
        Place order
      </button>
    </div>
  );
};

export default CheckOutPage;
