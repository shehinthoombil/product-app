import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css'

function App() {


  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
  )
}

export default App
