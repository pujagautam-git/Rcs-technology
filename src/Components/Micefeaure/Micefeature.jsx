import React, { useEffect, useRef, useState } from "react";
import "./Micefeature.css";

const miceData = {

  page: "mice",

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
      { id: "featured", label: "FEATURED MICE", order: 1 },
      { id: "features", label: "KEY FEATURES", order: 2 },
      { id: "technologies", label: "TECHNOLOGIES", order: 3 },
      { id: "accessories", label: "ACCESSORIES", order: 4 },
      { id: "guides", label: "GUIDES & VIDEOS", order: 5 }
    ],
    cta: {
      label: "SHOP ALL",
      action: "/shop/mice"
    }
  },

  sections: [

    {
      id: "featured",
      title: "FEATURED GAMING MICE",
      description:
        "Designed for speed, precision, and ultimate control. Our gaming mice deliver professional performance and comfort.",

      type: "productGrid",

      products: [
        {
          id: "m75-wireless",
          name: "M75 WIRELESS",
          badge: "NEW",
          description:
            "Ultra-lightweight wireless gaming mouse engineered for esports performance.",
          image: "/images/mice/m75.png",

          specs: {
            connectivity: "Slipstream Wireless",
            sensor: "26K DPI Optical Sensor",
            weight: "74g",
            battery: "Up to 65 Hours"
          },

          cta: {
            label: "SHOP NOW",
            link: "/product/m75-wireless"
          }
        },

        {
          id: "darkcore-pro",
          name: "DARK CORE RGB PRO",
          description:
            "High-performance gaming mouse with customizable RGB and precision tracking.",
          image: "/images/mice/darkcore.png",

          specs: {
            connectivity: "Wireless / USB",
            sensor: "18K DPI Optical Sensor",
            buttons: "8 Programmable Buttons",
            battery: "50 Hours"
          },

          cta: {
            label: "SHOP NOW",
            link: "/product/darkcore-pro"
          }
        }
      ]
    },

    {
      id: "features",
      title: "KEY FEATURES TO CONSIDER",
      subtitle: "CHOOSING THE RIGHT GAMING MOUSE",

      type: "featureCards",

      cards: [
        {
          id: "sensor",
          title: "PRECISION SENSOR",
          image: "/images/mice/features/sensor.jpg"
        },
        {
          id: "weight",
          title: "LIGHTWEIGHT DESIGN",
          image: "/images/mice/features/weight.jpg"
        },
        {
          id: "buttons",
          title: "PROGRAMMABLE BUTTONS",
          image: "/images/mice/features/buttons.jpg"
        },
        {
          id: "wireless",
          title: "LOW LATENCY WIRELESS",
          image: "/images/mice/features/wireless.jpg"
        }
      ]
    },

    {
      id: "technologies",
      title: "TECHNOLOGIES",
      type: "content",

      items: [
        "Slipstream Wireless",
        "26K DPI Optical Sensor",
        "Quickstrike Buttons"
      ]
    },

    {
      id: "accessories",
      title: "ACCESSORIES",
      type: "collection",
      collectionId: "mouse-accessories"
    },

    {
      id: "guides",
      title: "GUIDES, TIPS & TRICKS",
      ctaText: "CHECK OUT CORSAIR:EXPLORER FOR MORE",
      ctaLink: "/explorer",

      type: "guidesGrid",

      items: [
        {
          id: "mouse-dpi",
          tag: "BLOG",
          title: "How DPI Affects Gaming Performance",
          image: "/images/guides/mouse-dpi.jpg"
        },
        {
          id: "mouse-weight",
          tag: "BLOG",
          title: "Choosing the Perfect Mouse Weight for Competitive Gaming",
          image: "/images/guides/mouse-weight.jpg"
        },
        {
          id: "mouse-wireless",
          tag: "NEWS",
          title: "The Rise of Low-Latency Wireless Gaming Mice",
          image: "/images/guides/mouse-wireless.jpg"
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

const MiceFeature = () => {

  const { navigation, sections } = miceData;

  const [active, setActive] = useState(navigation.defaultActive);
  const refs = useRef({});

  const handleScrollTo = (id) => {
    refs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start"
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
      { threshold: miceData.scrollBehavior.threshold }
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
    <div className="mice-page">

      {/* NAV */}
      <nav className="mice-nav">
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
          className="mice-section"
        >

          <h1>{section.title}</h1>

          {section.description && (
            <p className="section-desc">{section.description}</p>
          )}

        </section>
      ))}

    </div>
  );
};

export default MiceFeature;