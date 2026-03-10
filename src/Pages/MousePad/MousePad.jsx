import React from "react";
import { Link } from "react-router-dom";
import "./MousePad.css";
import MousePadFeature from "../../Components/mousepadfeature/MousePadFeature";

const mousePadData = {
  hero: {
    smallTitle: "GAMING SERIES",
    title: "PRECISION GAMING MOUSE PADS",
    subtitle:
      "High-performance mouse pads optimized for speed, accuracy, and control. Perfect for competitive gaming setups.",
    backgroundVideo: "/videos/mousepadvideo.mp4"
    // buttonText: "SHOP MOUSE PADS",
    // buttonLink: "/shop/mousepads"
  }
};

const MousePadHero = () => {
  const data = mousePadData.hero;

  return (
    <>
      <section className="mousepad-hero">
        <video
          className="mousepad-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={data.backgroundVideo} type="video/mp4" />
        </video>

        <div className="mousepad-overlay"></div>

        <div className="mousepad-hero-content">
          <p className="mousepad-small-title">{data.smallTitle}</p>
          <h1 className="mousepad-title">{data.title}</h1>
          <p className="mousepad-subtitle">{data.subtitle}</p>

          {data.buttonText && (
            <Link to={data.buttonLink} className="mousepad-btn">
              {data.buttonText}
            </Link>
          )}
        </div>
      </section>

      <MousePadFeature />
    </>
  );
};

export default MousePadHero;