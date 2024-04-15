import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
import Products from './pages/Products'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import SignIn from './pages/Login'
import EditPage from './pages/EditPage'
import NotFoundPage from './pages/404'
import AddPage from './pages/AddPage'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/contact" element={<Contacts/>}/>
        <Route exact path="/login" element={<SignIn/>}/>
        <Route exact path="/additem" element={<AddPage/>}/>
        <Route exact path="/edit/:id" element={<EditPage/>}/>
        <Route exact path="/details/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App