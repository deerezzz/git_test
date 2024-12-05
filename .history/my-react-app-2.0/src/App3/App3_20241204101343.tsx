import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App3() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res))
      .catch((err) => console.error(err)); // Optional: Add error handling
  }, []); // Pass an empty dependency array to run only once

  return <div></div>;
}

export default App3;
