import React, { useEffect, useRef, useState } from "react";
import "./MonitorArmfeature.css";

const monitorArmData = {
  page: "monitorarm",

  theme: {
    background: "#000000",
    primary: "#f1f500",
    text: "#ffffff",
    mutedText: "#aaaaaa"
  },

  navigation: {
    sticky: true,
    defaultActive: "featured",
    items: [
      { id: "featured", label: "FEATURED MONITOR ARMS", order: 1 },
      { id: "features", label: "KEY FEATURES", order: 2 },
      { id: "technologies", label: "TECHNOLOGIES", order: 3 },
      { id: "accessories", label: "ACCESSORIES", order: 4 },
      { id: "guides", label: "GUIDES & VIDEOS", order: 5 }
    ],
    cta: { label: "SHOP ALL", action: "/shop/monitorarms" }
  },

  sections: [

    // Featured products
    {
      id: "featured",
      title: "FEATURED MONITOR ARMS",
      description: "Premium ergonomic monitor arms for gaming and professional setups.",
      type: "productGrid",
      products: [
        {
          id: "ma-pro-1",
          name: "MA PRO 1",
          badge: "NEW",
          description: "Fully adjustable dual-arm monitor setup for ultimate flexibility.",
          image: "/images/monitorarms/ma-pro-1.png",
          specs: {
            compatibility: "Up to 32-inch monitors",
            weight: "Up to 9kg per arm",
            adjustment: "Height, Tilt, Swivel, Rotation",
            base: "Clamp or Grommet"
          },
          cta: { label: "SHOP NOW", link: "/product/ma-pro-1" }
        },
        {
          id: "ma-xl",
          name: "MA XL",
          description: "Extra-long single arm for large monitors with robust support.",
          image: "/images/monitorarms/ma-xl.png",
          specs: {
            compatibility: "Up to 40-inch monitors",
            weight: "Up to 12kg",
            adjustment: "Height, Tilt, Rotation",
            base: "Desk clamp"
          },
          cta: { label: "SHOP NOW", link: "/product/ma-xl" }
        }
      ]
    },

    // Key Features
    {
      id: "features",
      title: "KEY FEATURES TO CONSIDER",
      subtitle: "CHOOSING THE RIGHT MONITOR ARM",
      type: "featureCards",
      cards: [
        { id: "ergonomics", title: "ERGONOMIC DESIGN", image: "/images/monitorarms/features/ergonomics.jpg" },
        { id: "adjustment", title: "HEIGHT & ANGLE ADJUSTMENT", image: "/images/monitorarms/features/adjustment.jpg" },
        { id: "rotation", title: "ROTATION & SWIVEL", image: "/images/monitorarms/features/rotation.jpg" },
        { id: "cable", title: "CABLE MANAGEMENT", image: "/images/monitorarms/features/cable.jpg" }
      ]
    },

    // Technologies
    {
      id: "technologies",
      title: "TECHNOLOGIES",
      type: "content",
      items: [
        "Gas Spring Adjustment",
        "360° Rotation Arm",
        "Tool-Free Assembly",
        "Integrated Cable Management"
      ]
    },

    // Accessories
    {
      id: "accessories",
      title: "ACCESSORIES",
      type: "collection",
      collectionId: "monitorarm-accessories"
    },

    // Guides
    {
      id: "guides",
      title: "GUIDES, TIPS & TRICKS",
      ctaText: "LEARN MORE ABOUT MONITOR ARMS",
      ctaLink: "/explorer",
      type: "guidesGrid",
      items: [
        { id: "ma-setup", tag: "BLOG", title: "Setting Up Your Dual Monitor Arm", image: "/images/guides/ma-setup.jpg" },
        { id: "ma-ergonomics", tag: "BLOG", title: "Monitor Arm Ergonomics 101", image: "/images/guides/ma-ergonomics.jpg" },
        { id: "ma-cable", tag: "NEWS", title: "Managing Cables with Monitor Arms", image: "/images/guides/ma-cable.jpg" }
      ]
    }

  ],

  scrollBehavior: {
    enabled: true,
    offset: 80,
    spy: true,
    threshold: 0.5
  }
};

const MonitorArmFeature = () => {
  const { navigation, sections } = monitorArmData;
  const [active, setActive] = useState(navigation.defaultActive);
  const refs = useRef({});

  const handleScrollTo = (id) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: monitorArmData.scrollBehavior.threshold }
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
    <div className="monitorarm-page">

      {/* NAV */}
      <nav className="monitorarm-nav">
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
        <button className="shop-all">{navigation.cta.label}</button>
      </nav>

      {/* SECTIONS */}
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          ref={(el) => (refs.current[section.id] = el)}
          className="monitorarm-section"
        >
          <h1>{section.title}</h1>
          {section.description && <p className="section-desc">{section.description}</p>}

          {/* FEATURED PRODUCTS */}
          {section.type === "productGrid" && (
            <div className="featured-grid">
              {section.products.map((product) => (
                <div key={product.id} className="monitorarm-card">
                  {product.badge && <span className="badge">{product.badge}</span>}
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

          {/* FEATURE CARDS */}
          {section.type === "featureCards" && (
            <div className="feature-wrapper">
              {section.subtitle && <p className="feature-subtitle">{section.subtitle}</p>}
              <div className="feature-scroll">
                {section.cards.map((card) => (
                  <div
                    key={card.id}
                    className="feature-card"
                    style={{ backgroundImage: `url(${card.image})` }}
                  >
                    <div className="feature-overlay" />
                    <div className="feature-content">
                      <h3>{card.title}</h3>
                      <span className="feature-plus">+</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GUIDES */}
          {section.type === "guidesGrid" && (
            <div className="guides-wrapper">
              {section.ctaText && (
                <a href={section.ctaLink} className="guides-cta">
                  {section.ctaText} <span>›</span>
                </a>
              )}
              <div className="guides-grid">
                {section.items.map((item) => (
                  <div key={item.id} className="guide-card">
                    <div className="guide-image" style={{ backgroundImage: `url(${item.image})` }} />
                    <div className="guide-content">
                      <span className="guide-tag">{item.tag}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </section>
      ))}

    </div>
  );
};

export default MonitorArmFeature;