import { useState, useEffect, useRef } from "react";
import ProductList from "./app3Components/ProductList";

function App() {
  const [category, setCategory] = useState(" ");

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="category">Select category</option>
        <option value="Clothing">Clothing </option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
