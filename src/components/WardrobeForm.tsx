import React, { useState } from "react";
import '../styles.css';

function WardrobeForm(props) {
  const [item, setItem] = useState({ name: "", category: "", size: "", color: "", image: "" });
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems((prevItems) => [...prevItems, item]);
    setItem({ name: "", category: "", size: "", color: "", image: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h2>Add New Wardrobe Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={item.name} onChange={handleChange} required />
        </label>
        <label>
          Category:
          <select name="category" value={item.category} onChange={handleChange} required>
            <option value="">Select a category</option>
            <option value="Shirts">Shirts</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Pants">Pants</option>
            <option value="Jeans">Jeans</option>
            <option value="Jackets">Jackets</option>
            <option value="Sweaters">Sweaters</option>
            <option value="Suits">Suits</option>
            <option value="Blazers">Blazers</option>
            <option value="Accessories">Accessories</option>
          </select>
        </label>
        <label>
          Size:
          <select name="size" value={item.size} onChange={handleChange} required>
            <option value="">Select size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </label>
        <label>
          Color:
          <input type="color" name="color" value={item.color} onChange={handleChange} required />
        </label>
        <label>
          <label>

          </label>
          Image:
          <input type="file" name="image" onChange={handleChange} />
        </label>
        <button type="submit" onChange={handleSubmit}>Add Item</button>
      </form>
    </div>
  );
}

export default WardrobeForm;