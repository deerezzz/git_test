import React, { useEffect } from "react";
import axios, { CanceledError } from "axios";
import { useState } from "react";

interface User {
  id: number;
  name: string;
}

function App3() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button className="btn-btn-outline-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App3;
