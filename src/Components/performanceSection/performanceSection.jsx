import React, { useEffect, useState } from "react";
import "./performanceSection.css";

const stats = [
  {
    label: "NOISE LEVELS",
    value: 40,
    max: 46,
    unit: "dBA",
  },
  {
    label: "GPU TEMP",
    value: 51,
    max: 72,
    unit: "°C",
  },
  {
    label: "CPU TEMP",
    value: 63,
    max: 75,
    unit: "°C",
  },
];

const PerformanceSection = () => {
  const [animatedValues, setAnimatedValues] = useState(
    stats.map(() => 0)
  );

  useEffect(() => {
    stats.forEach((stat, index) => {
      const increment = stat.value / 50;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }
        setAnimatedValues((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, 20);
    });
  }, []);

  return (
    <section className="performance-section">
      <div className="performance-left">
        <h2>PROVEN PERFORMANCE</h2>
        <p>
          Hydro X Series custom cooling helps push your system's performance as far as it can go, while lowering temperatures and noise levels
        </p>
        <p>
          CPUs and graphics cards run hot under heavy load. While gaming, this heat causes air cooler fans to run at a very high speed, producing noise.
          Unlike air coolers, water cooling doesn't blow hot air around your case. The liquid moves heat to the radiators, and efficiently blows it out of your case.
          This means you can run fans at much lower speeds, reducing noise output while still keeping unmatched cooling performance. Moving the cooling to
          radiators outside the usual hot zones also gives you much better overclocking capabilities.
        </p>
        <small>
          *Air cooled Benchmarks measured on a Win 10 PC System with NVIDIA RTX 3080 FE GPU & AMD Ryzen 7 3700X CPU using a AMD Wraith Prism CPU Air cooler, during Far Cry 5 gameplay.
        </small>
      </div>

      <div className="performance-right">
        {stats.map((stat, index) => {
          const percent = (animatedValues[index] / stat.max) * 100;
          return (
            <div key={index} className="stat">
              <div className="stat-header">
                <span className="stat-value">{Math.round(animatedValues[index])}{stat.unit}</span>
                <span className="stat-max">{stat.max}{stat.unit}</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${percent}%` }}></div>
              </div>
              <span className="stat-label">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PerformanceSection;