/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail";
import Philosophy from "./pages/Philosophy";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MemoryGallery from "./pages/MemoryGallery";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<ArticleDetail />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/memory-gallery" element={<MemoryGallery />} />
      </Routes>
    </Router>
  );
}
