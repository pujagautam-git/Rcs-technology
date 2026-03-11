import React, { useEffect, useState, useRef } from "react";

const TechnologySlider = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.slides.length);
  };

  useEffect(() => {
    if (!data.autoPlay || paused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, data.delay);

    return () => clearInterval(interval);
  }, [paused, index]);

  const slide = data.slides[index];

  return (
    <div className="tech-slider">

      {/* LEFT CONTENT */}
      <div className="tech-left">
        <span className="tech-label">{slide.label}</span>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>

        <button
          className="tech-pause"
          onClick={() => setPaused(!paused)}
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>

      {/* RIGHT MEDIA */}
      <div className="tech-right">
        {slide.mediaType === "image" && (
          <img src={slide.media} alt={slide.title} />
        )}

        {slide.mediaType === "video" && (
          <video
            ref={videoRef}
            src={slide.media}
            autoPlay
            muted
            loop
          />
        )}
      </div>

    </div>
  );
};

export default TechnologySlider;