import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ExpenseList from "./expenseList"; // Make sure the file names are correct!

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <ExpenseList />
  </React.StrictMode>
);
