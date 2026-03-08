import React from "react";
import "./herosection.css";
import { FiArrowDown } from "react-icons/fi";
import herovideo from "../../assets/videos/heroimg.mp4";

const heroData = {
  title: "GALLEON 100 SD",
  subtitle: "A NEW ERA OF INPUT",
  videoUrl: herovideo,
  buttonText: "VIEW DETAILS",
      buttonLink: "/product/galleon-100-sd"
};
const HeroSection = () => {

  return (
    <section className="hero-section">
      <video
        className="hero-video"
        src={heroData.videoUrl}
        autoPlay
        muted
        loop
      />
      <div className="hero-overlay">
        <h1 className="hero-title">{heroData.title}</h1>
        <p className="hero-subtitle">{heroData.subtitle}</p>

        {heroData.buttonText && (
          <a href={heroData.buttonLink} className="hero-button">
            {heroData.buttonText}
          </a>
        )}
      <div className="hero-arrow">
          <FiArrowDown />
        </div>
         </div>
    </section>
  );
}

export default HeroSection;