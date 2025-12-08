import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav
      style={{
        padding: "10px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>

      {user ? (
        <>
          <span>HI {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
