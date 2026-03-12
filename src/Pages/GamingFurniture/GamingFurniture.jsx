import React, { useState } from "react";
import { Link } from "react-router-dom";

import gamingFurnitureData from "../../Components/data/gamingfurniture.json";
import SubCategoryRow from "../../Components/CategoryList/SubCategoryRow";
import CategorySidebar from "../../Components/CategoryList/CategorySidebar";
import ProductGrid from "../../Components/CategoryList/ProductGrid";      
import "../../styles/category.css";

const GamingFurniture = () => {

  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("featured");

  let filteredProducts = [...gamingFurnitureData.products];

  /* FILTER LOGIC */
  Object.keys(filters).forEach((filterKey) => {
    if (filters[filterKey]?.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters[filterKey].includes(product[filterKey])
      );
    }
  });

  /* SORT LOGIC */
  if (sortOption === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="category-container">

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> / Gaming Furniture 
      </div>
     
      <SubCategoryRow subCategories={gamingFurnitureData.productsCategories} />

      {/* TITLE */}
      <h1 className="category-title">Gaming Furniture</h1>

      <div className="category-main">

        {/* SIDEBAR */}
        <CategorySidebar
          filtersData={gamingFurnitureData.filters}
          activeFilters={filters}
          setFilters={setFilters}
          categories={gamingFurnitureData.categoryList}
        />

        {/* RIGHT SIDE */}
        <div className="category-right">

          {/* SORT BAR */}
          <div className="sort-bar">
            <span>SORT BY:</span>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="newest">NEWEST</option>
              <option value="popular">POPULAR</option>
            </select>
          </div>

          {/* PRODUCTS */}
          <ProductGrid products={filteredProducts} />

        </div>

      </div>
    </div>
  );
};

export default GamingFurniture;