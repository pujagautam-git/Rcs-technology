import React from "react";
import { Link } from "react-router-dom";
// import keyboardData from "../../data/keyboardPage.json";
import "./Keyboard.css";
import KeyboardFeature from "../../Components/keyboardfeature/keyboardfeature";


const keyboardData ={
  "hero": {
    "smallTitle": "GAMING SERIES",
    "title": "MECHANICAL KEYBOARDS",
    "subtitle": "PRECISION. SPEED. PERFORMANCE.",
    "backgroundImage": "/images/keyboards/keyboard-hero.avif",
    "buttonText": "SHOP KEYBOARDS",
    "buttonLink": "/shop/keyboards"
  }
}
const KeyboardHero = () => {
  const data = keyboardData.hero;

  return (
    <>
    <section
      className="keyboard-hero"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="keyboard-overlay"></div>

      <div className="keyboard-hero-content">
        <p className="keyboard-small-title">{data.smallTitle}</p>
        <h1 className="keyboard-title">{data.title}</h1>
        <p className="keyboard-subtitle">{data.subtitle}</p>

        {data.buttonText && (
          <Link to={data.buttonLink} className="keyboard-btn">
            {data.buttonText}
          </Link>
        )}
      </div>
    </section>
    <KeyboardFeature/>
    </>
  );
};


export default KeyboardHero;