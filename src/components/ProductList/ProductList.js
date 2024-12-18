import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";

function ProductList({ products, onUpdate, onDelete }) {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products available. Add a product to get started!</p>
      ) : (
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
