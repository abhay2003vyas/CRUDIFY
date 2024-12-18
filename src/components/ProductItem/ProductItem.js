import React from "react";
import "./ProductItem.css";

function ProductItem({ product, onUpdate, onDelete }) {
  return (
    <div className="product-item">
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>
          Price: ${product.price} | Quantity: {product.quantity} pcs
        </p>
      </div>
      <div className="product-actions">
        <button onClick={() => onUpdate(product.id)} className="edit-btn">
          Edit
        </button>
        <button onClick={() => onDelete(product.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
