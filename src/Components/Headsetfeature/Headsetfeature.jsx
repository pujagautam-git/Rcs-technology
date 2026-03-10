import React, { useEffect, useRef, useState } from "react";
import "./Headsetfeature.css";

const headsetData = {

  page: "headset",

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
      {
        id: "featured",
        label: "FEATURED HEADSETS",
        order: 1
      },
      {
        id: "features",
        label: "KEY FEATURES",
        order: 2
      },
      {
        id: "technologies",
        label: "TECHNOLOGIES",
        order: 3
      },
      {
        id: "accessories",
        label: "ACCESSORIES",
        order: 4
      },
      {
        id: "guides",
        label: "GUIDES & VIDEOS",
        order: 5
      }
    ],

    cta: {
      label: "SHOP ALL",
      action: "/shop/headsets"
    }
  },

  sections: [

    {
      id: "featured",
      title: "FEATURED HEADSETS",
      description:
        "Experience immersive audio with high-performance gaming headsets built for crystal-clear communication and powerful sound.",

      type: "productGrid",

      products: [
        {
          id: "void-elite",
          name: "VOID ELITE RGB",
          badge: "NEW",
          description:
            "Premium wireless gaming headset with immersive surround sound.",
          image: "/images/headsets/void-elite.png",

          specs: {
            connectivity: "Wireless / USB",
            audio: "7.1 Surround Sound",
            microphone: "Omni-directional",
            battery: "Up to 16 Hours"
          },

          cta: {
            label: "SHOP NOW",
            link: "/product/void-elite"
          }
        },

        {
          id: "hs80-max",
          name: "HS80 MAX",
          description:
            "High-fidelity gaming headset designed for comfort and performance.",
          image: "/images/headsets/hs80-max.png",

          specs: {
            connectivity: "Slipstream Wireless",
            audio: "Dolby Atmos",
            microphone: "Broadcast Grade",
            battery: "24 Hours"
          },

          cta: {
            label: "SHOP NOW",
            link: "/product/hs80-max"
          }
        }
      ]
    },

    {
      id: "features",
      title: "KEY FEATURES TO CONSIDER",
      subtitle: "CHOOSING THE RIGHT HEADSET",

      type: "featureCards",

      cards: [
        {
          id: "audio",
          title: "IMMERSIVE AUDIO",
          image: "/images/headsets/features/audio.jpg"
        },
        {
          id: "comfort",
          title: "ALL-DAY COMFORT",
          image: "/images/headsets/features/comfort.jpg"
        },
        {
          id: "microphone",
          title: "CRYSTAL CLEAR MICROPHONE",
          image: "/images/headsets/features/microphone.jpg"
        },
        {
          id: "wireless",
          title: "LOW LATENCY WIRELESS",
          image: "/images/headsets/features/wireless.jpg"
        }
      ]
    },

    {
      id: "technologies",
      title: "TECHNOLOGIES",
      type: "content",

      items: [
        "Dolby Atmos Spatial Audio",
        "Slipstream Wireless Technology",
        "Noise Cancelling Microphones"
      ]
    },

    {
      id: "accessories",
      title: "ACCESSORIES",
      type: "collection",
      collectionId: "headset-accessories"
    },

    {
      id: "guides",
      title: "GUIDES, TIPS & TRICKS",
      ctaText: "CHECK OUT CORSAIR:EXPLORER FOR MORE",
      ctaLink: "/explorer",

      type: "guidesGrid",

      items: [
        {
          id: "hs80-guide",
          tag: "BLOG",
          title:
            "HS80 MAX: Experience the Future of Wireless Gaming Audio",
          image: "/images/guides/hs80.jpg"
        },

        {
          id: "audio-guide",
          tag: "BLOG",
          title:
            "How to Choose the Perfect Gaming Headset for Competitive Play",
          image: "/images/guides/audio-guide.jpg"
        },

        {
          id: "dolby",
          tag: "NEWS",
          title:
            "Dolby Atmos Integration Brings Immersive Sound to Your Battlestation",
          image: "/images/guides/dolby.jpg"
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

const HeadsetFeature = () => {

  const { navigation, sections } = headsetData;

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
      { threshold: headsetData.scrollBehavior.threshold }
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
    <div className="headset-page">

      {/* NAVIGATION */}

      <nav className="headset-nav">

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
          className="headset-section"
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

export default HeadsetFeature;