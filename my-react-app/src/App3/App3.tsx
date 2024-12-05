import React from "react";
import useUsers from "./hooks/useUsers"; // Custom hook to manage user data
import userService, { User } from "./Services/user-Service"; // Service functions to interact with user data

function App3() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users]; // Save the original users state in case of error
    setUsers(users.filter((u) => u.id !== user.id)); // Remove the user from state

    userService.deleteUser(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers); // Revert back if deletion fails
    });
  };

  const addUser = () => {
    const originalUsers = [...users]; // Save the original users state
    const newUser = { id: 0, name: "Dolo" };
    setUsers([newUser, ...users]); // Add the new user to the front of the list

    userService
      .createUser(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users])) // Add the user to the list after successfully creating
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers); // Revert back if creation fails
      });
  };

  const updatedUser = (user: User) => {
    const originalUsers = [...users]; // Save the original users state
    const updatedUser = { ...user, name: user.name + "!" };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u))); // Update the user name

    userService.updateUser(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers); // Revert back if update fails
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updatedUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App3;
