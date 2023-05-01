import React from "react";
import '../styles.css';


function WardrobeTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Type</th>
          <th>Size</th>
          <th>Color</th>
          <th>Date Purchased</th>
          <th>Image</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.size}</td>
            <td>{item.color}</td>
            <td>{item.datePurchased}</td>
            <td>
              {item.image ? (
                <img src={item.image} alt={item.name} width="50" />
              ) : (
                "N/A"
              )}
            </td>
            <td>
              <button onClick={() => props.onEdit(item.id)}>Edit</button>
              <button onClick={() => props.onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WardrobeTable;

