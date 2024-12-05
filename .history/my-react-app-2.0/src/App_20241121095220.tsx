import { useState } from "react";

function App() {
  const [isVisible, setVisibility] = useState(false);
  let count = 0;

  const handleClick = () => {
    setVisibility(true);
    count++;
    console.log(isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
