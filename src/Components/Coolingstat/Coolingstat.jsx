import React, { useEffect, useState } from "react";
import "./Coolingstat.css";

const statsData = [
  { number: 360, suffix: "mm", label: "RADIATOR SUPPORT" },
  { number: 2000, suffix: "+ RPM", label: "HIGH SPEED FANS" },
  { number: 0.1, suffix: "°C", label: "TEMP PRECISION" },
  { number: 16, suffix: " RGB", label: "LIGHTING ZONES" },
];

const CoolingStatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, index) => {
          const target = statsData[index].number;
          const increment = target / 50;

          if (count < target) {
            return Math.min(count + increment, target);
          }
          return target;
        })
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="cooling-stats-section"
      style={{ backgroundImage: `url("/images/cooling/coolingline.png")`, height: "300px",width: "100%" ,margin: "80px 0"}}
    >
      <div className="cooling-stats-overlay"></div>

      <div className="cooling-stats-container">
        {statsData.map((item, index) => (
          <div key={index} className="cooling-stat-item">
            <h2 className="cooling-stat-number">
              {counts[index].toFixed(item.number % 1 !== 0 ? 1 : 0)}
              {item.suffix}
            </h2>
            <p className="cooling-stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoolingStatsSection;