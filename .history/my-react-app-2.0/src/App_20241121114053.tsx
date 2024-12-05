import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    const NewDrink = {
      title: drink.title,
      price: 6,
    };
    setDrink(newDrink);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default App;
