import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'

const App = () => {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<ProductDetails />}/>
    </Routes>
    </>
  )
}

export default App