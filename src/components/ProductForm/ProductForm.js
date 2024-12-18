import React, { useState } from "react";
import "./ProductForm.css";

function ProductForm({ onCreate }) {
  const [product, setProduct] = useState({ name: "", price: 0, quantity: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price > 0 && product.quantity > 0) {
      onCreate(product);
      setProduct({ name: "", price: 0, quantity: 0 });
    } else {
      alert("Please provide valid product details.");
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={product.quantity} 
        onChange={(e) => setProduct({ ...product, quantity: parseInt(e.target.value) })}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
