import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="product-link"
        >
          <div className="product-card">

            {/* IMAGE AREA */}
            <div className="product-image-area">
              <img src={product.image} alt={product.name} />
            </div>

            {/* TEXT AREA */}
            <div className="product-info">
              <h4 className="product-title">{product.name}</h4>
              <span className="learn-more">LEARN MORE</span>
            </div>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;