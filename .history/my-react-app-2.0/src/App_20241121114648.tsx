import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const [isVisible, setIsVisible] = useState(false); // Track visibility

  const handleClick = () => {
    setDrink({
      ...drink, // Use spread to keep current drink properties
      price: 6,  // Update price
    });
    setIsVisible(true); // Show the drink details
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {isVisible && (
        <div>
          <h1>{drink
