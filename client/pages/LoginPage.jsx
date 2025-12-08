import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
      
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form
        onSubmit={handleSubmit}
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <input
          style={{ color: "red" }}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
