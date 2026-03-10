import React from "react";
import { Link } from "react-router-dom";
import "./Mice.css";
import MiceFeature from "../../Components/Micefeaure/Micefeature";

const miceData = {
  hero: {
    smallTitle: "GAMING SERIES",
    title: "PRECISION GAMING MICE",
    subtitle:
      "Engineered for speed, accuracy, and control. Discover gaming mice designed for competitive performance and ultimate comfort.",
    backgroundVideo: "/videos/micevideo.mp4"
  }
};

const MiceHero = () => {
  const data = miceData.hero;

  return (
    <>
      <section className="mice-hero">
        <video
          className="mice-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={data.backgroundVideo} type="video/mp4" />
        </video>

        <div className="mice-overlay"></div>

        <div className="mice-hero-content">
          <p className="mice-small-title">{data.smallTitle}</p>
          <h1 className="mice-title">{data.title}</h1>
          <p className="mice-subtitle">{data.subtitle}</p>

          {data.buttonText && (
            <Link to={data.buttonLink} className="mice-btn">
              {data.buttonText}
            </Link>
          )}
        </div>
      </section>

      <MiceFeature />
    </>
  );
};

export default MiceHero;