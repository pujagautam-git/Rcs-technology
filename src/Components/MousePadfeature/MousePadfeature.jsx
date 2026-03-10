import React, { useEffect, useRef, useState } from "react";
import "./mousepadfeature.css";

const mousePadData = {

  page: "mousepad",

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
      { id: "featured", label: "FEATURED MOUSE PADS", order: 1 },
      { id: "features", label: "KEY FEATURES", order: 2 },
      { id: "technologies", label: "TECHNOLOGIES", order: 3 },
      { id: "accessories", label: "ACCESSORIES", order: 4 },
      { id: "guides", label: "GUIDES & VIDEOS", order: 5 }
    ],
    cta: {
      label: "SHOP ALL",
      action: "/shop/mousepads"
    }
  },

  sections: [

    {
      id: "featured",
      title: "FEATURED GAMING MOUSE PADS",
      description: "Precision, speed, and control. Perfect for competitive gaming setups.",
      type: "productGrid",
      products: [
        {
          id: "mp-xl",
          name: "MP-XL GAMING PAD",
          badge: "NEW",
          description: "Extra-large surface for full mouse movement freedom.",
          image: "/images/mousepads/mp-xl.png",
          specs: {
            size: "900x400mm",
            surface: "Micro-textured cloth",
            thickness: "3mm",
            base: "Anti-slip rubber"
          },
          cta: { label: "SHOP NOW", link: "/product/mp-xl" }
        },
        {
          id: "mp-pro-rgb",
          name: "MP PRO RGB",
          description: "RGB illuminated mouse pad for precision and style.",
          image: "/images/mousepads/mp-pro-rgb.png",
          specs: {
            size: "350x280mm",
            surface: "Smooth microfiber",
            lighting: "RGB customizable",
            thickness: "4mm"
          },
          cta: { label: "SHOP NOW", link: "/product/mp-pro-rgb" }
        }
      ]
    },

    {
      id: "features",
      title: "KEY FEATURES TO CONSIDER",
      subtitle: "CHOOSING THE RIGHT MOUSE PAD",
      type: "featureCards",
      cards: [
        { id: "surface", title: "SURFACE MATERIAL", image: "/images/mousepads/features/surface.jpg" },
        { id: "size", title: "PAD SIZE", image: "/images/mousepads/features/size.jpg" },
        { id: "base", title: "ANTI-SLIP BASE", image: "/images/mousepads/features/base.jpg" },
        { id: "rgb", title: "RGB LIGHTING", image: "/images/mousepads/features/rgb.jpg" }
      ]
    },

    {
      id: "technologies",
      title: "TECHNOLOGIES",
      type: "content",
      items: ["Micro-textured Cloth", "Anti-slip Rubber Base", "RGB Lighting Control"]
    },

    {
      id: "accessories",
      title: "ACCESSORIES",
      type: "collection",
      collectionId: "mousepad-accessories"
    },

    {
      id: "guides",
      title: "GUIDES, TIPS & TRICKS",
      ctaText: "LEARN MORE ABOUT GAMING SURFACES",
      ctaLink: "/explorer",
      type: "guidesGrid",
      items: [
        {
          id: "mp-size",
          tag: "BLOG",
          title: "Choosing the Perfect Mouse Pad Size",
          image: "/images/guides/mp-size.jpg"
        },
        {
          id: "mp-material",
          tag: "BLOG",
          title: "Best Surface Material for Gaming",
          image: "/images/guides/mp-material.jpg"
        },
        {
          id: "mp-rgb",
          tag: "NEWS",
          title: "RGB Mouse Pads: Pros and Cons",
          image: "/images/guides/mp-rgb.jpg"
        }
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

const MousePadFeature = () => {
  const { navigation, sections } = mousePadData;
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
      { threshold: mousePadData.scrollBehavior.threshold }
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
    <div className="mousepad-page">

      {/* NAV */}
      <nav className="mousepad-nav">
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
          className="mousepad-section"
        >
          <h1>{section.title}</h1>
          {section.description && <p className="section-desc">{section.description}</p>}

          {/* FEATURED GRID */}
          {section.type === "productGrid" && (
            <div className="featured-grid">
              {section.products.map((product) => (
                <div key={product.id} className="mousepad-card">
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

export default MousePadFeature;