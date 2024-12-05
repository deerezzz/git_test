import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const [isVisible, setIsVisible] = useState(false); // Track visibility

  const handleClick = () => {
    setCustomer((prevCustomer) => ({ ...prevCustomer })); // Update customer if needed
    setIsVisible((prevVisible) => !prevVisible); // Toggle visibility
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {isVisible && (
        <div>
          <h1>{customer.name}</h1>
          <p>
            Address: {customer.address.city}, {customer.address.zipCode}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
