import axios from "axios"
import React,{ useState,useEffect } from "react"
import {Link} from "react-router-dom"

const Home = () => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/api/products/")
        .then((res)=>setProducts(res.data))
        .catch((err)=>console.log(err));
    },[]);
  return (
    <div style={{padding:"20px"}}>
        <h2>Products</h2>
        <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
            {products.map((product)=>
            (
                <div key={product._id} style={{border:"1px solid #ddd", padding:"10px",width:"200px" }}>
                    <img src={product.image} alt={product.name} width="100%"/>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <Link to={`product/${product._id}`}>View Details</Link>
                </div>
            ))}    
        </div>
    </div>
  )
}

export default Home;