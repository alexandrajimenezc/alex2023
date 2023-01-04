import "./App.css";
import { ProductList } from "./features/products/productList/ProductList";
import { ProductForm } from "./features/products/productForm/ProductForm";

import { Home } from "./features/home/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import { ProductDetail } from "./features/products/productDetail/ProductDetail";
import { About } from "./features/about/About";
function App() {
  return (
    <div className="App">
      <Header />
      
        <Routes>
        <Route path="/" element={<Layout />} />
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} /> 
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="products" element={<ProductList />} />
          <Route path="create-product" element={<ProductForm />} />
        </Routes>
     
    </div>
  );
}

export default App;
