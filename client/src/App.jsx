import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'
import CartPage from '../pages/CartPage.jsx'

const App = () => {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<ProductDetails />}/>
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
    </>
  )
}

export default App