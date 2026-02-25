import React from "react";

const CategoryTopBar = ({
  subCategories = [],
  sortOption,
  setSortOption
}) => {
  return (
    <div className="category-topbar">
      <div className="subcategories">
        {subCategories.length > 0 ? (
          subCategories.map((sub, index) => (
            <div key={index} className="subcategory-item">
              {sub}
            </div>
          ))
        ) : (
          <div className="subcategory-item disabled">
            All Products
          </div>
        )}
      </div>

      <div className="sort-box">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Featured</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryTopBar;