import React from "react";
import AddProduct from "./AddProduct";
import ViewProducts from "./ViewProducts";
import UpdateStock from "./UpdateStock";
import DeleteProduct from "./DeleteProduct";
import LowStock from "./LowStock";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ padding: "20px", textAlign: "center" }}>
      <h1>🛒 Inventory Management Dashboard</h1>
      <AddProduct />
      <UpdateStock />
      <DeleteProduct />
      <LowStock />
      <ViewProducts />
    </div>
  );
}

export default App;

