import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

interface User {
  id: number;
  name: string;
}

function App3() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err)); // Optional: Add error handling
  }, []); // Pass an empty dependency array to run only once

  return <div></div>;
}

export default App3;
