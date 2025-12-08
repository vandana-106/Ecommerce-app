import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form,setForm]=useState({name:"",email:"",password:""});
const [error,setError]=useState("");
const [success,setSuccess]=useState("");
const navigate=useNavigate();

const handleChange=(e)=>setForm({...form,[e.target.name]:e.target.value});

const handleSubmit=async(e)=>
{
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
        const res=await axios.post("http://localhost:5000/api/auth/register",form);
        setSuccess("Registered Successfuly,you can now login");
        setTimeout(()=>navigate("/login"),3000);
    } catch (error) {
        setError(error.response?.data?.message || "Registration failed. Please try again.");
    }
}
  return (
    <div style={{padding:"20px"}}>
        <h2>Register</h2>
        {error && <p style={{color:"red"}}>{error}</p>}
        {success && <p style={{color:"green"}}>{success}</p>}

        <form onSubmit={handleSubmit} style={{color:"white",display:"flex", flexDirection:"column",gap:15}}>
            <input
            type="name" name="name" value={form.name} onChange={handleChange} placeholder="name" />
            <input
            type="email" name="email" value={form.email} onChange={handleChange} placeholder="email" />
            <input
            type="password" name="password" value={form.password} onChange={handleChange} placeholder="password" />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default RegisterPage;
