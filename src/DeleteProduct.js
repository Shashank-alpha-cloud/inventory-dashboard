import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./config";

function DeleteProduct() {
  const [productId, setProductId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`${API_BASE_URL}/products`, {
        data: { productId }
      });
      alert("🗑️ Product deleted successfully!");
      setProductId("");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete product! Check API Gateway or Lambda logs.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🗑️ Delete Product</h2>
      <form onSubmit={handleDelete}>
        <label>Product ID: </label>
        <input
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteProduct;
