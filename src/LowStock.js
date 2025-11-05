import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./config";

function LowStock() {
  const [lowStock, setLowStock] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/lowstock`)
      .then((res) => {
        const data = res.data.lowStockProducts || [];
        setLowStock(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading low-stock products...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>⚠️ Low-Stock Alerts</h2>
      {lowStock.length === 0 ? (
        <p>All products are sufficiently stocked ✅</p>
      ) : (
        <table border="1" cellPadding="10" style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Threshold</th>
            </tr>
          </thead>
          <tbody>
            {lowStock.map((p) => (
              <tr key={p.productId}>
                <td>{p.productId}</td>
                <td>{p.name}</td>
                <td>{p.stock}</td>
                <td>{p.threshold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LowStock;
