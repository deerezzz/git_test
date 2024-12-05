import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [carItems, setCartItems] = useState([
    "Product 1",
    "Product 2",
    "Product 3",
  ]);

  return (
    <div>
      <NavBar cartItemsCount={setCartItems.length} />
    </div>
  );
}

export default App;
