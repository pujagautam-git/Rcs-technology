import React from "react";
import { Link } from "react-router-dom";
import "./MonitorArm.css";
import MonitorArmFeature from "../../Components/monitorarmfeature/MonitorArmFeature";

const monitorArmData = {
  hero: {
    smallTitle: "GAMING SERIES",
    title: "ERGONOMIC MONITOR ARMS",
    subtitle:
      "Adjust, tilt, and rotate your monitors with precision. Perfect for a clean and flexible gaming or workstation setup.",
    backgroundVideo: "/videos/monitorarmvideo.mp4"
    // buttonText: "SHOP MONITOR ARMS",
    // buttonLink: "/shop/monitorarms"
  }
};

const MonitorArmHero = () => {
  const data = monitorArmData.hero;

  return (
    <>
      <section className="monitorarm-hero">
        <video
          className="monitorarm-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={data.backgroundVideo} type="video/mp4" />
        </video>

        <div className="monitorarm-overlay"></div>

        <div className="monitorarm-hero-content">
          <p className="monitorarm-small-title">{data.smallTitle}</p>
          <h1 className="monitorarm-title">{data.title}</h1>
          <p className="monitorarm-subtitle">{data.subtitle}</p>

          {data.buttonText && (
            <Link to={data.buttonLink} className="monitorarm-btn">
              {data.buttonText}
            </Link>
          )}
        </div>
      </section>

      <MonitorArmFeature />
    </>
  );
};

export default MonitorArmHero;