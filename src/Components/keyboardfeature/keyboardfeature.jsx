import React, { useEffect, useRef, useState } from "react";
// import data from "./keyboardfeature.json";
import "./keyboardfeature.css";

const keydata={

  "page": "keyboard",
  "theme": {
    "background": "#000000",
    "primary": "#f1f500",
    "text": "#ffffff",
    "mutedText": "#aaaaaa"
  },

  "navigation": {
    "sticky": true,
    "defaultActive": "featured",
    "items": [
      {
        "id": "featured",
        "label": "FEATURED KEYBOARDS",
        "order": 1
      },
      {
        "id": "features",
        "label": "KEY FEATURES",
        "order": 2
      },
      {
        "id": "corsair",
        "label": "CORSAIR KEYBOARDS",
        "order": 3
      },
      {
        "id": "ccl",
        "label": "CCL",
        "order": 4
      },
      {
        "id": "technologies",
        "label": "TECHNOLOGIES",
        "order": 5
      },
      {
        "id": "accessories",
        "label": "ACCESSORIES",
        "order": 6
      },
      {
        "id": "guides",
        "label": "GUIDES & VIDEOS",
        "order": 7
      }
    ],
    "cta": {
      "label": "SHOP ALL",
      "action": "/shop/keyboards"
    }
  },

  "sections": [
    {
      "id": "featured",
      "title": "FEATURED KEYBOARDS",
      "description": "Equipped with the latest tech in an array of layouts, our keyboards lead the pack in build quality and customizability.",
      "type": "productGrid",
      "products": [
        {
          "id": "galleon-100-sd",
          "name": "GALLEON 100 SD",
          "badge": "NEW",
          "description": "High-performance gaming keyboard with built-in Stream Deck.",
          "image": "/images/keyboards/galleon-100-sd.png",
          "specs": {
            "connectivity": "USB Type-A to C",
            "formFactor": "Full-size",
            "switches": "CORSAIR MLX Pulse Switches",
            "software": "Stream Deck App, Web Hub"
          },
          "cta": {
            "label": "SHOP NOW",
            "link": "/product/galleon-100-sd"
          }
        },
        {
          "id": "vanguard-96",
          "name": "VANGUARD 96",
          "description": "Esports-proven engineering with uncompromising performance.",
          "image": "/images/keyboards/vanguard-96.png",
          "specs": {
            "connectivity": "USB 3.0 / 3.1 Type-A",
            "formFactor": "96%",
            "switches": "CORSAIR MLX Plasma",
            "weight": "0.994kg"
          },
          "cta": {
            "label": "SHOP NOW",
            "link": "/product/vanguard-96"
          }
        }
      ]
    },

    {
      "id": "features",
      "title": "KEY FEATURES",
      "type": "content",
      "items": [
        "Hot-swappable switches",
        "Per-key RGB lighting",
        "Aluminum frame build",
        "Advanced software control"
      ]
    },

    {
      "id": "corsair",
      "title": "CORSAIR KEYBOARDS",
      "type": "collection",
      "collectionId": "corsair-keyboards"
    },

    {
      "id": "ccl",
      "title": "CCL",
      "type": "content",
      "description": "Corsair Custom Lab keyboards designed for personalization."
    },

    {
      "id": "technologies",
      "title": "TECHNOLOGIES",
      "type": "content",
      "items": [
        "AXON Hyper-Processing",
        "Slipstream Wireless",
        "FlashTap Technology"
      ]
    },

    {
      "id": "accessories",
      "title": "ACCESSORIES",
      "type": "collection",
      "collectionId": "keyboard-accessories"
    },

    {
      "id": "guides",
      "title": "GUIDES & VIDEOS",
      "type": "media",
      "media": [
        {
          "type": "video",
          "title": "How to Choose the Right Keyboard",
          "url": "/videos/keyboard-guide.mp4"
        }
      ]
    }
  ],

  "scrollBehavior": {
    "enabled": true,
    "offset": 80,
    "spy": true,
    "threshold": 0.5
  }
}
const KeyboardFeature= () => {
  const { navigation, sections } = keydata;
  const [active, setActive] = useState(navigation.defaultActive);
  const refs = useRef({});

  const handleScrollTo = (id) => {
    refs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { threshold: keydata.scrollBehavior.threshold }
  );

  sections.forEach((section) => {
    const el = refs.current[section.id];
    if (el) observer.observe(el);
  });

  return () => {
    sections.forEach((section) => {
      const el = refs.current[section.id];
      if (el) observer.unobserve(el);
    });
  };
}, [sections]);

  return (
    <div className="keyboard-page">
      {/* NAV */}
      <nav className="keyboard-nav">
      {navigation.items
  .sort((a, b) => a.order - b.order)
  .map((item) => (
    <button
      key={item.id}
      className={`nav-item ${active === item.id ? "active" : ""}`}
      onClick={() => handleScrollTo(item.id)}
    >
      {item.label}
    </button>
))}
        <button className="shop-all">
          {navigation.cta.label}
        </button>
      </nav>

      {/* SECTIONS */}
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          ref={(el) => (refs.current[section.id] = el)}
          className="keyboard-section"
        >
          <h1>{section.title}</h1>
          {section.description && (
            <p className="section-desc">{section.description}</p>
          )}

          {/* FEATURED PRODUCTS */}
          {section.type === "productGrid" && (
            <div className="featured-grid">
              {section.products.map((product) => (
                <div key={product.id} className="keyboard-card">
                  {product.badge && (
                    <span className="badge">{product.badge}</span>
                  )}

                  <h2>{product.name}</h2>
                  <p>{product.description}</p>

                  <ul>
                    {Object.entries(product.specs).map(([key, value]) => (
                      <li key={key}>
                        <span>{key.replace(/([A-Z])/g, " $1")}:</span>
                        <strong>{value}</strong>
                      </li>
                    ))}
                  </ul>

                  <button>{product.cta.label}</button>
                </div>
              ))}
            </div>
          )}

          {/* SIMPLE CONTENT */}
          {section.type === "content" && section.items && (
            <ul className="simple-list">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
};

export default KeyboardFeature;