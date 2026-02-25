import React, { useState } from "react";
import "./singleproduct.css";

const product = {
  name: "VANGUARD 96 Mechanical Gaming Keyboard, CORSAIR MLX Plasma (TH)",
  images: [
    "/images/products/key1.avif",
    "/images/products/key2.avif",
    "/images/products/key3.avif",
    "/images/products/key4.avif"
  ],
  description: [
    "8,000Hz hyper-polling for ultra-responsive input",
    "Optimally-compact 96% form factor",
    "Vibrant integrated LED screen for next-level personalization",
    "Elgato Virtual Stream Deck integration",
    "FlashTap SOCD - Move Like You Mean It",
    "Wobble-free CORSAIR MLX mechanical switches"
  ],
  colors: ["Black", "White"],
  layouts: ["NA - North American Layout", "TH - Thai Layout"],
  switches: ["MLX Plasma", "MLX Pulse"],
  sku: "CH-91E901E-TH"
};

const SingleProduct = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedLayout, setSelectedLayout] = useState("TH - Thai Layout");
  const [selectedSwitch, setSelectedSwitch] = useState("MLX Plasma");

  return (
    <div className="single-product-container">

      {/* LEFT THUMBNAILS */}
      <div className="thumbnail-column">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`thumb ${selectedImage === img ? "active" : ""}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* MAIN IMAGE */}
      <div className="main-image">
        <img src={selectedImage} alt="product" />
      </div>

      {/* RIGHT DETAILS */}
      <div className="product-details">

        <h1>{product.name}</h1>

        <ul className="description-list">
          {product.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* COLOR */}
        <div className="option-section">
          <h3>COLOR: {selectedColor.toUpperCase()}</h3>
          <div className="option-row">
            {product.colors.map((color, i) => (
              <button
                key={i}
                className={selectedColor === color ? "active-option" : ""}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* LAYOUT */}
        <div className="option-section">
          <h3>KEYBOARD LAYOUT</h3>
          <div className="option-row">
            {product.layouts.map((layout, i) => (
              <button
                key={i}
                className={selectedLayout === layout ? "active-option" : ""}
                onClick={() => setSelectedLayout(layout)}
              >
                {layout}
              </button>
            ))}
          </div>
        </div>

        {/* SWITCH TYPE */}
        <div className="option-section">
          <h3>SWITCH TYPE</h3>
          <div className="option-row">
            {product.switches.map((sw, i) => (
              <button
                key={i}
                className={selectedSwitch === sw ? "active-option" : ""}
                onClick={() => setSelectedSwitch(sw)}
              >
                {sw}
              </button>
            ))}
          </div>
        </div>

        <p className="sku">SKU: {product.sku}</p>

      </div>
    </div>
  );
};

export default SingleProduct;