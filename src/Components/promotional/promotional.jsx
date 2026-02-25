import React from "react";
import hydroImg from "../../assets/promo/promo1.avif";
import builderImg from "../../assets/promo/promo2.avif";
import icueImg from "../../assets/promo/promo3.avif";
import "./promotional.css";

/* =========================
   CMS DATA (TOP SECTION)
   ========================= */

const promoData = [
  {
    id: 1,
    title: "HYDRO X SERIES",
    description: "Extreme custom cooling for your PC.",
    buttonText: "SHOP NOW >",
    buttonLink: "/hydro-x",
    image: hydroImg,
    
  },
  {
    id: 2,
    title: "CORSAIR PC BUILDER",
    description:
      "Get recommendations on compatibility, and pick the perfect CORSAIR components to build your dream PC.",
    buttonText: "PLAN YOUR BUILD >",
    buttonLink: "/pc-builder",
    image: builderImg,

  },
  {
    id: 3,
    title: "CORSAIR iCUE LINK",
    description:
      "Simplify your PC Build with a single connector",
    buttonText: "LEARN MORE >",
    buttonLink: "/icue-link",
    image: icueImg,

  },
  {
  id: 4,
  title: "NEW PRODUCT",
  description: "Your fourth promotional content here.",
  buttonText: "SHOP NOW >",
  buttonLink: "/new-product",
  image: hydroImg,
}
];

/* =========================
   COMPONENT
   ========================= */

const PromotionalSection = () => {
    const leftItems = promoData.slice(0, 2);
  const rightItems = promoData.slice(2, 4);

  return (
    <section className="promo-section">
      <div className="promo-wrapper">

        {/* LEFT COLUMN */}
        <div className="promo-column">
          {leftItems.map((item) => (
            <div key={item.id} className="promo-row">

              <div className="promo-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.buttonLink}>
                  {item.buttonText}
                </a>
              </div>

              <div
                className="promo-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="promo-column">
          {rightItems.map((item) => (
            <div key={item.id} className="promo-row">

              <div className="promo-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.buttonLink}>
                  {item.buttonText}
                </a>
              </div>

              <div
                className="promo-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default PromotionalSection;