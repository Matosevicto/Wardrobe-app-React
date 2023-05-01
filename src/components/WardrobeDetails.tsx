import React from "react";

function WardrobeDetails({ item, onClose }) {
  return (
    <div>
      <h2>Details for {item.name}</h2>
      <p>Category: {item.category}</p>
      <p>Size: {item.size}</p>
      <p>Color: {item.color}</p>
      <p>Brand: {item.brand}</p>
      <p>Purchase Date: {item.purchaseDate}</p>
      <img src={item.image} alt={item.name} />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default WardrobeDetails;