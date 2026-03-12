import React, { useState } from "react";
import { Link } from "react-router-dom";

import gamingDeskData from "../../Components/data/gamingdesks.json";

import CategorySidebar from "../../Components/CategoryList/CategorySidebar";
import ProductGrid from "../../Components/CategoryList/ProductGrid";

import "../../styles/category.css";

const GamingDesks = () => {

  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("featured");

  let filteredProducts = [...gamingDeskData.products];

  /* FILTER */
  Object.keys(filters).forEach((key) => {
    if (filters[key]?.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters[key].includes(product[key])
      );
    }
  });

  /* SORT */
  if (sortOption === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="category-container">

      <div className="breadcrumb">
        <Link to="/">Home</Link> / Gaming Furniture / Gaming Desks
      </div>

      <h1 className="category-title">Gaming Desks</h1>

      <div className="category-main">

        <CategorySidebar
          filtersData={gamingDeskData.filters}
          activeFilters={filters}
          setFilters={setFilters}
          categories={gamingDeskData.categoryList}
        />

        <div className="category-right">

          <div className="sort-bar">
            <span>SORT BY:</span>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>

          <ProductGrid products={filteredProducts} />

        </div>

      </div>
    </div>
  );
};

export default GamingDesks;