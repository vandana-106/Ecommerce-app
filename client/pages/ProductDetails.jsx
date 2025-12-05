import React, {useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const {id}=useParams();
    const [product,setProduct]=useState(null);

    useEffect(()=>
    {
        axios.get(`http://localhost:5000/api/products/${id}`)
        .then((res)=>setProduct(res.data))
        .catch((err)=>console.log(err));
    },[id]);


  return (
    
    <div style={{padding:"20px"}}>
        <img src={product.image} alt={product.name} width="200" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
    </div>
  )
}

export default ProductDetails;