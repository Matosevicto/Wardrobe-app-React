import React from "react";

import '../styles.css';

function WardrobeFilter({ options, selectedOption, onFilterChange }) {
  return (
    <div>
      <label htmlFor="wardrobe-filter">Filter by:</label>
      <select
        id="wardrobe-filter"
        value={selectedOption}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">All items</option>
        {options && options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default WardrobeFilter;
