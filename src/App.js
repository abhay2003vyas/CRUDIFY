import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ProductForm from "./components/ProductForm/ProductForm";
import ProductList from "./components/ProductList/ProductList";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./components/ProductService";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await getAllProducts();
    setProducts(data);
  };

  const handleCreate = async (newProduct) => {
    await createProduct(newProduct);
    fetchProducts();
  };

  const handleUpdate = async (id) => {
    const product = products.find((p) => p.id === id);
    const updatedName = prompt("Enter new name", product.name);
    if (updatedName) {
      await updateProduct(id, { ...product, name: updatedName });
      fetchProducts();
    }
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div className="app">
      <Navbar />
      <Header />
      <ProductForm onCreate={handleCreate} />
      <ProductList products={products} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;
