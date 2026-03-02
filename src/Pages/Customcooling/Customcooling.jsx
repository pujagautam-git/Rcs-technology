import React from "react";
import { Link } from "react-router-dom";
import bgimage from "../../assets/cooling/hero-bg.avif";
import rightimage from "../../assets/cooling/rightimage.avif";
import CoolingStatsSection from "../../Components/Coolingstat/Coolingstat";
import PerformanceSection from "../../Components/performanceSection/performanceSection";
import "./Customcooling.css";

const coolingData =
{
  "hero": {
    "smallTitle": "HYDRO X SERIES",
    "title": "CUSTOM LIQUID COOLING",
    "subtitle": "EXTREME CUSTOM COOLING FOR YOUR GAMING PC",
    "backgroundImage": bgimage,
    "rightImage": rightimage,
    "buttonText": "SHOP NOW",
    "buttonLink": "/shop/liquid-cooling"
  }
}
const CustomSection = () => {
  const data = coolingData.hero; // ✅ FIX HERE

  return (
    <>
    <section
      className="custom-section"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="custom-overlay"></div>

      <div className="custom-container">
        {/* LEFT CONTENT */}
        <div className="custom-left">
          <p className="custom-small-title">{data.smallTitle}</p>
          <h1 className="custom-title">{data.title}</h1>
          <p className="custom-subtitle">{data.subtitle}</p>

          {data.buttonText && (
            <Link to={data.buttonLink} className="custom-btn">
              {data.buttonText}
            </Link>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="custom-right">
          <img src={data.rightImage} alt={data.title} />
        </div>
      </div>
    </section>
    <CoolingStatsSection/>
    <PerformanceSection/>
    </>
  );
};


export default CustomSection;