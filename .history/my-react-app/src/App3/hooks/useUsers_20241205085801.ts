import { useEffect, useState } from "react";
import userService, { User } from "../Services/user-Service";
import { CanceledError } from "axios";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Fetch users using the service
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data); // Populate users
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore if canceled
        setError(err.message); // Set error if any
        setLoading(false);
      });

    // Cleanup on unmount or dependency change
    return () => cancel();
  }, []);

  return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
