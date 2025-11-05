import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./config";

function UpdateStock() {
  const [productId, setProductId] = useState("");
  const [newStock, setNewStock] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_BASE_URL}/products`, {
        productId,
        stock: Number(newStock)
      });
      alert("✅ Stock updated successfully!");
      setProductId("");
      setNewStock("");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update stock! Check Lambda permissions.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔄 Update Stock</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product ID: </label>
          <input
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>New Stock: </label>
          <input
            type="number"
            value={newStock}
            onChange={(e) => setNewStock(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateStock;
