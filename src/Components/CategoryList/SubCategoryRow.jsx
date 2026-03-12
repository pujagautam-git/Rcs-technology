import React from "react";

const SubCategoryRow = ({ subCategories =[]}) => {
  return (
    <div className="subcat-row">
      {subCategories.map((item) => (
        <div className="subcat-card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <span className="shop-now">LEARN MORE</span>
        </div>
      ))}
    </div>
  );
};

export default SubCategoryRow;