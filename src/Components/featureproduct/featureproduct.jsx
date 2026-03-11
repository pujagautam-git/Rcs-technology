// FeaturedProducts.jsx
import React from "react";
import { Link } from "react-router-dom";
import highlight3 from "../../assets/highlight/highlight3.avif";
import highlight4 from "../../assets/highlight/highlight4.avif";
import "./featureproduct.css";

const FeaturedProducts = () => {
    // featuredProducts.js (CMS / API mock)
const featuredProducts = [
  {
    id: 1,
    title: "XENON EDGE",
    subtitle: "NOW IN ATOMIC PURPLE, BLACK AND WHITE",
    image: highlight3,
    buttonText: "VIEW PRODUCT",
    link: "/product/xenon-edge"
  },
  {
    id: 2,
    title: "FRAME 4500X",
    subtitle: "PANORAMIC GLASS MID-TOWER PC CASE",
    image: highlight4,
    buttonText: "VIEW PRODUCT",
    link: "/product/frame-4500x"
  }
];


  return (
    <section className="featured-section">
      <div className="featured-grid">
        {featuredProducts.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className="featured-card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="featured-overlay">
              <h2 className="featured-title">{item.title}</h2>
              <p className="featured-subtitle">{item.subtitle}</p>
              <button className="featured-btn">
                {item.buttonText}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;