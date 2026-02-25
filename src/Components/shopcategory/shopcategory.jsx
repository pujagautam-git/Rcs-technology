// ShopByCategory.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./shopcategory.css";

const ShopByCategory = () => {

    // shopCategories.js (CMS / API mock)
const shopCategories = [
  {
    id: 1,
    title: "Cases",
    image: "/images/categories/case.png",
    slug: "/category/cases"
  },
  {
    id: 2,
    title: "Gaming PCs",
    image: "/images/categories/gaming-pc.png",
    slug: "/category/gaming-pcs"
  },
  {
    id: 3,
    title: "Memory",
    image: "/images/categories/memory.png",
    slug: "/category/memory"
  },
  {
    id: 4,
    title: "Keyboards",
    image: "/images/categories/keyboard.png",
    slug: "/category/keyboards"
  },
  {
    id: 5,
    title: "Headsets",
    image: "/images/categories/headset.png",
    slug: "/category/headsets"
  },
  {
    id: 6,
    title: "Power Supply",
    image: "/images/categories/psu.png",
    slug: "/category/power-supply"
  },
  {
    id: 7,
    title: "Cooling",
    image: "/images/categories/cooling.png",
    slug: "/category/cooling"
  },
  {
    id: 8,
    title: "Mouse",
    image: "/images/categories/mouse.png",
    slug: "/category/mouse"
  },
  {
    id: 9,
    title: "Fans",
    image: "/images/categories/fan.png",
    slug: "/category/fans"
  },
  {
    id: 10,
    title: "Chairs",
    image: "/images/categories/chairs.png",
    slug: "/category/chairs"
  }
];


  return (
    <section className="shop-category">
      <h2 className="shop-category-title">SHOP BY CATEGORY</h2>

      <div className="shop-category-grid">
        {shopCategories.map((item) => (
          <Link
            to={item.slug}
            className="category-card"
            key={item.id}
          >
            <div className="category-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="category-footer">
              <span className="category-name">// {item.title}</span>
              <span className="category-arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;