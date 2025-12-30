import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { CartContext } from "../context/CartContext.jsx";
import "./css/Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const {cart}=useContext(CartContext);
  return (
    
    <nav className="navbar">
      <h2>E-Shop</h2>
      <div className="navbar-links">
      
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/cart" className="navbar-link">Cart
      {cart.length >0 && (
        <span className="cart-badge">{cart.length}</span>
      )}
      </Link>
      <Link to="/products" className="navbar-link" >Products</Link>

      {user ? (
        <>
          <span style={{color:"#ccc"}}>HI {user.name}</span>
          <button onClick={logout} className="logout-btn" >Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/register" className="navbar-link">Register</Link>
        </>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
