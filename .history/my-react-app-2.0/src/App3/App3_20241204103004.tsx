import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

interface User {
  id: number;
  name: string;
}

function App3() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message)); // Optional: Add error handling
  }, []); // Pass an empty dependency array to run only once

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App3;
