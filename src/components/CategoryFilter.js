import React from "react";

function CategoryFilter({ data, filterCategory, handleClick }) {
  const categoryData = data.map((category) => {
    return (
      <button
        key={category}
        onClick={() => handleClick(category)}
        className={category === filterCategory ? "selected" : null}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryData}
    </div>
  );
}

export default CategoryFilter;
