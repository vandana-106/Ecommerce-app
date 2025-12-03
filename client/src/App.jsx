import React from 'react'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path='/product' element={<h1>Products Page</h1>}/>
    </Routes>
    </>
  )
}

export default App