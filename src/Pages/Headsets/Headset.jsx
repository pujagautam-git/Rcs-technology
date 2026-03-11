import React from "react";
import { Link } from "react-router-dom";
import "./Headset.css";
import HeadsetFeature from "../../Components/Headsetfeature/Headsetfeature";

const headsetData = {
  hero: {
    smallTitle: "GAMING SERIES",
    title: "GAMING HEADSETS",
    subtitle:
      "Experience immersive sound with high-performance gaming headsets designed for crystal-clear communication and powerful audio.",
    backgroundVideo: "/videos/headset.mp4"
  }
};

const HeadsetHero = () => {
  const data = headsetData.hero;

  return (
    <>
      <section className="headset-hero">
        <video
          className="headset-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={data.backgroundVideo} type="video/mp4" />
        </video>

        <div className="headset-overlay"></div>

        <div className="headset-hero-content">
          <p className="headset-small-title">{data.smallTitle}</p>
          <h1 className="headset-title">{data.title}</h1>
          <p className="headset-subtitle">{data.subtitle}</p>

          {data.buttonText && (
            <Link to={data.buttonLink} className="headset-btn">
              {data.buttonText}
            </Link>
          )}
        </div>
      </section>

      <HeadsetFeature />
    </>
  );
};

export default HeadsetHero;