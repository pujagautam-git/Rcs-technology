import React, { useState } from "react";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import {
  FaDesktop,
  FaKeyboard,
  FaGamepad,
  FaChair,
  FaShoppingCart,
} from "react-icons/fa";
import { menuData } from "../data/menuData";

const iconMap = {
  pc: <FaDesktop />,
  gear: <FaKeyboard />,
  pcbuild: <FaGamepad />,
  furniture: <FaChair />,
  shop: <FaShoppingCart />,
};

const Navbar = () => {
  const [active, setActive] = useState(null);

  return (
    <header className="navbar">
       <div className="search">
        <FiSearch />
      </div>
      {/* LOGO */}
     

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
                    <div className="mega-icon">
                      {iconMap[col.icon]}
                    </div>

                    <h4>{col.heading}</h4>

                    {col.links.map((link, i) => (
                      <p key={i}>{link}</p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
 <div className="logo">CORSAIR</div>
      
    </header>
  );
};

export default Navbar;