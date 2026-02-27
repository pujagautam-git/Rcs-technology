// ShopByCategory.jsx
import React from "react";
import { Link } from "react-router-dom";
import Case from "../../assets/shopcategory/case.avif";
import GamingPC from "../../assets/shopcategory/gamingpc.avif";
import Memory from "../../assets/shopcategory/memory.avif";
import Keyboard from "../../assets/shopcategory/keyboard.avif";
import Headset from "../../assets/shopcategory/headset.avif";
import PowerSupply from "../../assets/shopcategory/pcu.avif";
import Cooling from "../../assets/shopcategory/cooler.avif";
import Mouse from "../../assets/shopcategory/mouse.avif";
import Fans from "../../assets/shopcategory/fans.avif";
import Chair from "../../assets/shopcategory/chair.avif";
import "./shopcategory.css";

const ShopByCategory = () => {

    // shopCategories.js (CMS / API mock)
const shopCategories = [
  {
    id: 1,
    title: "Cases",
    image: Case,
    slug: "/category/cases"
  },
  {
    id: 2,
    title: "Gaming PCs",
    image: GamingPC,
    slug: "/category/gaming-pcs"
  },
  {
    id: 3,
    title: "Memory",
    image: Memory,
    slug: "/category/memory"
  },
  {
    id: 4,
    title: "Keyboards",
    image: Keyboard,
    slug: "/category/keyboards"
  },
  {
    id: 5,
    title: "Headsets",
    image: Headset,
    slug: "/category/headsets"
  },
  {
    id: 6,
    title: "Power Supply",
    image: PowerSupply,
    slug: "/category/power-supply"
  },
  {
    id: 7,
    title: "Cooling",
    image: Cooling,
    slug: "/category/cooling"
  },
  {
    id: 8,
    title: "Mouse",
    image: Mouse,
    slug: "/category/mouse"
  },
  {
    id: 9,
    title: "Fans",
    image: Fans,
    slug: "/category/fans"
  },
  {
    id: 10,
    title: "Chairs",
    image: Chair,
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