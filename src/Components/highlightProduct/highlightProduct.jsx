import React from "react";
import highlightfirst from "../../assets/highlight/highlight1.avif";
import highlightsecond from "../../assets/highlight/highlight2.avif";
import "./highlightProduct.css";

const highlightData = [
  {
    id: 1,
    title: "FRAME 4000D",
    subtitle: "VAULT SERIES WITH CHROMATIC PAINT",
    image: highlightfirst,
    buttonText: "VIEW DETAILS",
    buttonLink: "/products/frame-4000d",
    align: "left"
  },
  {
    id: 2,
    title: "AIR 5400",
    subtitle: "TRIPLE-CHAMBER CHAMPION",
    image: highlightsecond,
    buttonText: "VIEW DETAILS",
    buttonLink: "/products/air-5400",
    align: "right"
  }
];

const HighlightProducts = () => {
  return (
    <section className="highlight-wrapper">
      {highlightData.map((item) => (
        <div
          key={item.id}
          className="highlight-card"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="highlight-overlay"></div>

          <div
            className={`highlight-content ${
              item.align === "right" ? "align-right" : "align-left"
            }`}
          >
            <h2 className="highlight-title">{item.title}</h2>
            <p className="highlight-subtitle">{item.subtitle}</p>

            <a href={item.buttonLink} className="highlight-button">
              {item.buttonText}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HighlightProducts;