import React from 'react'
import {
  BrowserRouter, Routes, Route, HashRouter,
} from 'react-router-dom'


import Header from './components/header'
import Footer from './components/footer'

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import CategoryDetail from './pages/category_detail'

function App() {

  return (<div className="container py-3">
    <Header />

    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="category/:slug" element={<CategoryDetail />} />
      </Routes>
    </HashRouter>

    <Footer />
  </div>)
}

export default App
