import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/nav/logo.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { menuData } from "../data/menuData";
import { Link, useNavigate } from "react-router-dom";

import pcIcon from "../../assets/icons/pcicon.avif";
import gearIcon from "../../assets/icons/keyboard.avif";
import furnitureIcon from "../../assets/icons/chair.avif";
import pcbuildIcon from "../../assets/icons/monitor.avif";
import shopIcon from "../../assets/icons/shop.avif";

const iconMap = {
  pc: pcIcon,
  gear: gearIcon,
  pcbuild: pcbuildIcon,
  furniture: furnitureIcon,
  shop: shopIcon,
};

const products = [
  { name: "Keyboard", path: "/keyboard" },
  { name: "Mouse", path: "/mouse" },
  { name: "Headset", path: "/headset" },
  { name: "Monitor", path: "/monitor" },
  { name: "Mousepad", path: "/mousepad" },
];

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearchClick = (path) => {
    setShowSearch(false);
    setQuery("");
    navigate(path);
  };

  return (
    <header className="navbar">

      {/* SEARCH ICON */}

     {!showSearch && (
  <div className="search" onClick={() => setShowSearch(true)}>
    <FiSearch />
  </div>
)}

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
        <Link to="/">
          <img src={logo} alt="RCS Logo" className="logo-img" />
        </Link>
      </div>

      {/* SEARCH OVERLAY */}
      {showSearch && (
        <div className="search-overlay">

          <div className="search-box">

            <FiSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <AiOutlineClose
              className="close-icon"
              onClick={() => setShowSearch(false)}
            />

          </div>

          {/* SEARCH RESULTS */}
          {query && (
  <div className="search-results">

    {filteredProducts.length === 0 && (
      <div className="no-result">No results found</div>
    )}

    {filteredProducts.map((item, index) => (
      <div
        key={index}
        className="result-item"
        onClick={() => handleSearchClick(item.path)}
      >
        {item.name}
      </div>
    ))}

  </div>
)}

        </div>
      )}
    </header>
  );
};

export default Navbar;