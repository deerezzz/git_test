import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([
    "Product 1",
    "Product 2",
    "Product 3",
  ]);

  return (
    <div>
      <NavBar cartItemsCount={setCartItems.length} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
