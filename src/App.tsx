import React, { useState, useEffect } from "react";
import WardrobeForm from "./components/WardrobeForm";
import WardrobeTable from "./components/WardrobeTable";
import WardrobeDetails from "./components/WardrobeDetails";
import WardrobeFilter from "./components/WardrobeFilter";
import './App.css';
function WardrobeApp() {
  const [wardrobeItems, setWardrobeItems] = useState([ {
    id: 1,
    name: "T-shirt",
    type: "Top",
    size: "M",
    color: "Blue",
    datePurchased: "2022-01-01",
    image: "https://example.com/tshirt.jpg"
  },
  {
    id: 2,
    name: "Jeans",
    type: "Bottom",
    size: "32",
    color: "Black",
    datePurchased: "2022-02-01",
    image: "https://example.com/jeans.jpg"
  }]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filterBy, setFilterBy] = useState(null);

  // fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3001/wardrobe/");
      const data = await response.json();
      setWardrobeItems(data);
    }
    fetchData();
  }, []);

  // method for adding new item to the wardrobe
  function addWardrobeItem(item) {
    setWardrobeItems([...wardrobeItems, item]);
  }

  // method for updating an existing item in the wardrobe
  function updateWardrobeItem(item) {
    const index = wardrobeItems.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      const newItems = [...wardrobeItems];
      newItems[index] = item;
      setWardrobeItems(newItems);
    }
  }

  // method for deleting an item from the wardrobe
  function deleteWardrobeItem(itemId) {
    const newItems = wardrobeItems.filter((i) => i.id !== itemId);
    setWardrobeItems(newItems);
    setSelectedItem(null);
  }

  // method for selecting an item from the wardrobe
  function selectWardrobeItem(itemId) {
    const item = wardrobeItems.find((i) => i.id === itemId);
    setSelectedItem(item);
  }

  // method for deselecting the currently selected item
  function deselectWardrobeItem() {
    setSelectedItem(null);
  }

  // method for filtering the wardrobe items by a given criterion
  function filterWardrobeItems(criterion) {
    setFilterBy(criterion);
  }

  // render the component
  return (
    <div className="wardrobe-app">
      <h1>My Wardrobe</h1>
      <div className="wardrobe-container">
        <WardrobeForm
          onAddItem={addWardrobeItem}
          onUpdateItem={updateWardrobeItem}
          selectedItem={selectedItem}
          onDeselectItem={deselectWardrobeItem}
        />
        <div className="wardrobe-list">
          <WardrobeFilter onFilter={filterWardrobeItems} />
          <WardrobeTable
            items={wardrobeItems}
            onDeleteItem={deleteWardrobeItem}
            onSelectItem={selectWardrobeItem}
            filterBy={filterBy}
          />
        </div>
      </div>
      {selectedItem && <WardrobeDetails item={selectedItem} />}
    </div>
  );
}

export default WardrobeApp;
