// Footer.jsx
import React from "react";
// import { footerData } from "./footerData";
import "./Footer.css";

const Footer = () => {
    // footerData.js (CMS / API mock)

 const footerData = {
  newsletter: {
    text: "Get special offers, exclusive product news, and event info straight to your inbox.",
    placeholder: "Email Address",
    buttonText: "SIGN UP"
  },

  socialLinks: [
    { id: 1, icon: "x", url: "#" },
    { id: 2, icon: "tiktok", url: "#" },
    { id: 3, icon: "facebook", url: "#" },
    { id: 4, icon: "instagram", url: "#" },
    { id: 5, icon: "youtube", url: "#" },
    { id: 6, icon: "twitch", url: "#" },
    { id: 7, icon: "discord", url: "#" }
  ],

  columns: [
    {
      title: "SHOP",
      links: ["New Products", "Where to Buy", "Certified Refurbished"]
    },
    {
      title: "EXPLORE",
      links: [
        "AI Software Stack",
        "PC Builder",
        "CORSAIR Innovation",
        "Design Your Loop",
        "Ambassadors",
        "Wallpaper"
      ]
    },
    {
      title: "CORSAIR",
      links: [
        "About",
        "Investor Relations",
        "Supply Chain Disclosure",
        "Careers",
        "Social Impact",
        "Press Room",
        "Contact Us",
        "Blog"
      ]
    },
    {
      title: "SUPPORT",
      links: [
        "Downloads",
        "Corsair Web Hub",
        "Firmware Update Utility",
        "Customer Support",
        "Warranty",
        "Shipping/RMA/Returns",
        "Terms of Sale"
      ]
    }
  ],

  bottom: {
    copyright: "Copyright © 1996 - 2026 CORSAIR. All rights reserved.",
    legal: ["Sitemap", "Privacy Policy", "Terms of Use", "Cookie Settings"]
  }
};
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Left Newsletter */}
        <div className="footer-newsletter">
          <img
            src="/images/logo-white.svg"
            alt="Logo"
            className="footer-logo"
          />

          <p>{footerData.newsletter.text}</p>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder={footerData.newsletter.placeholder}
            />
            <button>{footerData.newsletter.buttonText}</button>
          </div>

          <div className="footer-socials">
            {footerData.socialLinks.map((item) => (
              <a key={item.id} href={item.url}>
                <i className={`icon-${item.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Columns */}
        <div className="footer-links">
          {footerData.columns.map((col, index) => (
            <div className="footer-column" key={index}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <span>{footerData.bottom.copyright}</span>
        <div className="footer-legal">
          {footerData.bottom.legal.map((item, i) => (
            <a key={i} href="#">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;