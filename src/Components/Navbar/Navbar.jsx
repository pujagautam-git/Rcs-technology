import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/nav/logo.png";
import { FiSearch } from "react-icons/fi";
import { menuData } from "../data/menuData";

// ✅ Import AVIF images normally
import pcIcon from "../../assets/icons/pcicon.avif";
import gearIcon from "../../assets/icons/keyboard.avif";
import furnitureIcon from "../../assets/icons/chair.avif";
import pcbuildIcon from "../../assets/icons/monitor.avif";
import shopIcon from "../../assets/icons/shop.avif";
import { Link } from "react-router-dom";


// ✅ Image map
const iconMap = {
  pc: pcIcon,
  gear: gearIcon,
  pcbuild: pcbuildIcon,
  furniture: furnitureIcon,
  shop: shopIcon,
};

const Navbar = () => {
  const [active, setActive] = useState(null);

  return (
    <header className="navbar">
      {/* SEARCH ICON */}
      <div className="search">
        <FiSearch />
      </div>

      {/* CENTER MENU */}
      <nav className="nav-links">
        {menuData.map((item) => (
          <div
            key={item.id}
            className="nav-item"
            onMouseEnter={() => setActive(item.id)}
            onMouseLeave={() => setActive(null)}
          >
            {item.title}

            {active === item.id && (
              <div className="mega-menu">
                {item.columns.map((col, index) => (
                  <div key={index} className="mega-column">
                    
                    {/* ✅ IMAGE ICON */}
                    <div className="mega-icon">
                      <img
                        src={iconMap[col.icon]}
                        alt={col.heading}
                        className="mega-img"
                      />
                    </div>

                    <h4>{col.heading}</h4>

                    {col.links.map((link, i) => (
                     <Link key={i} to={link.path} className="mega-link">
  {link.label}
</Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* LOGO */}
      <div className="logo">
        <Link to="/#">
      <img src={logo} alt="RCS Logo" className="logo-img" />
     </Link>
      </div>
      
    </header>
  );
};

export default Navbar;