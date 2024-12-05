import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const [isVisible, setIsVisible] = useState(false); // Track visibility

  const handleClick = () => {
    setDrink((prevDrink) => ({
      ...prevDrink, // Keep current drink properties
      price: 6, // Update price if necessary
    }));
    setIsVisible((prevVisible) => !prevVisible); // Toggle visibility
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {isVisible && (
        <div>
          <h1>{drink.title}</h1>
          <p>Price: ${drink.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;
