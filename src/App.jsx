import React from 'react';
import { Routes, Route } from "react-router-dom";
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="*" element={<div className="text-center text-red-600 text-2xl p-10">Page Not Found</div>} />
    </Routes>
  )
}

export default App
