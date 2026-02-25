import React from "react";
import coolerImg from "../../assets/news/article1.webp";
import chromaticImg from "../../assets/news/article2.webp";
import apexImg from "../../assets/news/article3.webp";
import "./newsArticle.css";

/* =========================
   JSON DATA (TOP SECTION)
   ========================= */

const newsData = {
  sectionTitle: "GUIDES, TIPS & TRICKS",
  sectionLink: {
    label: "CORSAIR EXPLORER >",
    url: "/explorer",
  },
  articles: [
    {
      id: 1,
      category: "BUYER'S GUIDES",
      title: "Best AIO CPU Coolers 2026",
      image: coolerImg,
    },
    {
      id: 2,
      category: "BLOG",
      title:
        "What is Chromatic Aberration in Games and Should You Enable It?",
      image: chromaticImg,
    },
    {
      id: 3,
      category: "BLOG",
      title:
        "What Are Shaders and Why Do Games Need to Preload Them?",
      image: apexImg,
    },
  ],
};

/* =========================
   COMPONENT LOGIC (BOTTOM)
   ========================= */

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="news-header">
        <h2>{newsData.sectionTitle}</h2>

        {newsData.sectionLink && (
          <a
            href={newsData.sectionLink.url}
            className="news-link"
          >
            {newsData.sectionLink.label}
          </a>
        )}
      </div>

      <div className="news-grid">
        {newsData.articles.map((article) => (
          <div key={article.id} className="news-card">
            <div className="news-image-wrapper">
              <img src={article.image} alt={article.title} />
            </div>

            <div className="news-content">
              <span className="news-category">
                {article.category}
              </span>
              <h3 className="news-title">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;