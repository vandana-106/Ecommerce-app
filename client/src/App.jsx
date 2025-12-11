import {useContext} from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Home from '../pages/Home.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'
import CartPage from '../pages/CartPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import RegisterPage from '../pages/RegisterPage.jsx'
import CheckOutPage from '../pages/CheckOutPage.jsx'
import { AuthContext } from '../context/AuthContext.jsx'


const App = () => {
  const {token}=useContext(AuthContext);
  return (
    <>
    <Navbar/>
    <Routes>

      <Route path="/checkout" element={token ? <CheckOutPage/> : <LoginPage/>}/>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<ProductDetails />}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
    </>
  )
}

export default App