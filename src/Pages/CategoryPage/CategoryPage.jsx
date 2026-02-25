import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../Components/data/keyboards.json";
import CategorySidebar from "../../Components/CategoryList/CategorySidebar";
import SubCategoryRow from "../../Components/CategoryList/SubCategoryRow";
import ProductGrid from "../../Components/CategoryList/ProductGrid";
import "../../styles/category.css";

const CategoryPage = () => {
  const { categorySlug } = useParams();

  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("featured");

  let filteredProducts = [...data.products];

  // FILTER LOGIC
  Object.keys(filters).forEach((filterKey) => {
    if (filters[filterKey]?.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters[filterKey].includes(product[filterKey])
      );
    }
  });

  // SORT
  if (sortOption === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="category-container">

      {/* ✅ BREADCRUMB */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>{data.category}</span>
      </div>

      {/* ✅ CATEGORY TITLE */}
      <h1 className="category-title">{data.category}</h1>

      {/* ✅ SUB CATEGORY ROW */}
      <SubCategoryRow subCategories={data.productsCategories} />

      {/* ✅ SORT BAR (RIGHT SIDE) */}
      <div className="sort-bar">
        <div className="sort-right">
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
      </div>

      <div className="category-content">
        <CategorySidebar
          filtersData={data.filters}
          activeFilters={filters}
          setFilters={setFilters}
          categories={data.categoryList}
        />

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default CategoryPage;