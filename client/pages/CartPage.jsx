import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";

const CartPage = () => {
  const { cart, removeFromCart, addToCart, increaseQty, decreaseQty } =
    useContext(CartContext);
  const total = cart.reduce((sum, item) => {
    if (!item || !item.price) return sum;
    return sum + item.price * (item.qty || 1);
  }, 0);


  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.length == 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item._id}
          style={{
            padding: "10px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <img src={item.image} alt="" width="100px" />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button
            onClick={() => removeFromCart(item._id)}
            style={{
              padding: "5px 5px",
              background: "green",
              color: "#fff",
              border: "none",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            remove
          </button>

          <button onClick={() => decreaseQty(item._id)}>-</button>
          <span style={{ margin: "0 10px" }}>{item.qty}</span>
          <button onClick={() => increaseQty(item._id)}>+</button>

          <h3>subtotal : ₹{Number(item.price * item.qty).toFixed(2)}</h3>
        </div>
      ))}
      <h3>total: ₹{Number(total).toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;
