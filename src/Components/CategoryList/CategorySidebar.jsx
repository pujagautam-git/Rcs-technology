import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CategorySidebar = ({
  filtersData,
  activeFilters,
  setFilters,
  categories
}) => {

  const [openSection, setOpenSection] = useState(null);

  const toggleFilter = (key, value) => {
    setFilters((prev) => {
      const current = prev[key] || [];

      if (current.includes(value)) {
        return { ...prev, [key]: current.filter((v) => v !== value) };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const toggleSection = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <aside className="category-sidebar">

      {/* CATEGORY LIST */}
      <div className="sidebar-section">
        <h4>CATEGORIES</h4>
        <ul className="category-list">
          {categories.map((cat, i) => (
            <li key={i} className={i === 0 ? "active" : ""}>
              {/* {cat} */}
                  <Link to={cat.link}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* FILTER SECTIONS */}
      {Object.keys(filtersData).map((sectionKey) => (
        <div className="sidebar-section" key={sectionKey}>

          {/* TITLE WITH ICON */}
          <div
            className="sidebar-title"
            onClick={() => toggleSection(sectionKey)}
          >
            <span>{sectionKey.toUpperCase()}</span>

            {openSection === sectionKey ? (
              <FiChevronUp size={16} />
            ) : (
              <FiChevronDown size={16} />
            )}
          </div>

          {/* OPTIONS */}
          {openSection === sectionKey && (
            <div className="sidebar-options">
              {filtersData[sectionKey].map((option, i) => (
                <label key={i}>
                  <input
                    type="checkbox"
                    checked={activeFilters[sectionKey]?.includes(option) || false}
                    onChange={() => toggleFilter(sectionKey, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}

        </div>
      ))}

    </aside>
  );
};

export default CategorySidebar;