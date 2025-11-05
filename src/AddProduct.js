import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./config";

function AddProduct() {
  const [form, setForm] = useState({
    productId: "",
    name: "",
    category: "",
    price: "",
    stock: "",
    threshold: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/products`, form);
      alert("✅ Product added successfully!");
      setForm({
        productId: "",
        name: "",
        category: "",
        price: "",
        stock: "",
        threshold: ""
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add product! Check API Gateway or Lambda logs.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>➕ Add Product</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <div key={key} style={{ marginBottom: "10px" }}>
            <label>{key}: </label>
            <input
              name={key}
              value={form[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
