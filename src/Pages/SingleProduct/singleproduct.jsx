import React, { useState } from "react";
import productimg from "../../assets/productdetails/detailsimage.avif";
import productimg2 from "../../assets/productdetails/detailsimage2.avif";
import productimg3 from "../../assets/productdetails/detailsimage3.avif";
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
  sku: "CH-91E901E-TH",
   "overview": [
    {
      "id": 1,
      "type": "full-left",
      "image": productimg,
      "title": "Unmatched Speed",
      "subtitle": "8,000Hz hyper-polling for ultra-responsive input.",
      "buttonText": "Shop Now"
    },
    {
      "id": 2,
      "type": "center",
      "image": productimg2,
      "title": "Compact 96% Layout"
    },
    {
      "id": 3,
      "type": "full-right",
      "image": productimg3,
      "title": "Built For Champions",
      "subtitle": "Premium mechanical switches with elite performance.",
      "buttonText": "Learn More"
    }
  ],
  "techSpecs": [
  { "label": "Keyboard CUE Software", "value": "Supported in iCUE" },
  { "label": "Media and Volume Controls", "value": "Yes" },
  { "label": "Keyboard Size", "value": "Compact" },
  { "label": "Keyboard Report Rate", "value": "1000Hz" },
  { "label": "Onboard Profiles", "value": "4" },
  { "label": "Adjustable Height", "value": "Yes" },
  { "label": "Battery Charging", "value": "USB to Computer" },
  { "label": "Keyboard Battery Type", "value": "Rechargeable Lithium-Ion" },
  { "label": "Keyboard Battery Life", "value": "Up to 266 hours with LEDs off" },
  { "label": "Wired Connectivity", "value": "USB 3.0 or 3.1 Type-A" },
  { "label": "Keyboard Cable Material", "value": "Braided" },
  { "label": "WIN Lock", "value": "Yes" },
  { "label": "Key Rollover", "value": "Full Key (NKRO) with 100% Anti-Ghosting" },
  { "label": "Key Switches", "value": "CORSAIR MLX Red" },
  { "label": "Keyboard Layout", "value": "NA (North America)" },
  { "label": "Keyboard Warranty", "value": "2 Year" },
  { "label": "Weight", "value": "0.953kg" }
]
  
};

const SingleProduct = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedLayout, setSelectedLayout] = useState("TH - Thai Layout");
  const [selectedSwitch, setSelectedSwitch] = useState("MLX Plasma");
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      {/* ================= TOP PRODUCT SECTION ================= */}
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

      {/* ================= BOTTOM TABS SECTION ================= */}
      <div className="product-tabs-section">

        {/* Tabs */}
        <div className="tabs-header">
          <button
            className={activeTab === "overview" ? "active-tab" : ""}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>

          <button
            className={activeTab === "specs" ? "active-tab" : ""}
            onClick={() => setActiveTab("specs")}
          >
            Tech Specs
          </button>

          <button
            className={activeTab === "downloads" ? "active-tab" : ""}
            onClick={() => setActiveTab("downloads")}
          >
            Downloads
          </button>

          <button
            className={activeTab === "package" ? "active-tab" : ""}
            onClick={() => setActiveTab("package")}
          >
            Package Contents
          </button>
        </div>

        {/* Tab Content */}
        <div className="tabs-content">

          {activeTab === "overview" && (
  <div className="overview-wrapper">
    {product.overview.map((section) => {

      if (section.type === "full-left") {
        return (
          <div
            key={section.id}
            className="overview-full"
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="overlay left">
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
              <button>{section.buttonText}</button>
            </div>
          </div>
        );
      }

      if (section.type === "center") {
        return (
          <div key={section.id} className="overview-center">
            <h2>{section.title}</h2>
            <img src={section.image} alt={section.title} />
          </div>
        );
      }

      if (section.type === "full-right") {
        return (
          <div
            key={section.id}
            className="overview-full"
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="overlay right">
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
              <button>{section.buttonText}</button>
            </div>
          </div>
        );
      }

      return null;
    })}
  </div>
)}
           
       {activeTab === "specs" && (
  <div className="tech-specs-section">

    <h2 className="tech-title">TECH SPECS</h2>

    <div className="tech-grid">
      {product.techSpecs.map((spec, index) => (
        <div key={index} className="tech-row">
          <span className="tech-label">{spec.label}</span>
          <span className="tech-value">{spec.value}</span>
        </div>
      ))}
    </div>

  </div>
)}
          {activeTab === "downloads" && <div>Downloads Coming Soon</div>}
          {activeTab === "package" && <div>Package Contents Coming Soon</div>}

        </div>
      </div>
    </>
  );
};

export default SingleProduct;