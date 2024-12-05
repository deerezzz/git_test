import { useEffect, useState } from "react";
import userService, { User } from "../Services/user-Service"; // Importing the service
import { CanceledError } from "axios";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]); // State for users
  const [error, setError] = useState<string>(""); // State for error messages
  const [isLoading, setLoading] = useState<boolean>(false); // State for loading indicator

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching data

    // Fetching all users using the service
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data); // Set the users data in state
        setLoading(false); // Set loading to false after the request
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // If the request was canceled, do nothing
        setError(err.message); // Set error message if any error occurs
        setLoading(false); // Set loading to false after error
      });

    // Cleanup function to cancel the request if the component unmounts or changes
    return () => cancel();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return { users, error, isLoading, setUsers, setError }; // Returning states and setters for use in the component
};

export default useUsers;
