import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "../pages/Main/Main";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const PagesRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/:product" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<Navigate to={<NotFoundPage/>} replace/>} />
    </Routes>
  )
}

export default PagesRoute