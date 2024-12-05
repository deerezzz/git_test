import ExpenseList from "./expense-tracker/expenseList"; // Correct file path
import React from "react";

function App() {
  const expenses = [
    { id: 1, description: "aaa", amount: 0, category: "utilities" },
    { id: 2, description: "bbb", amount: 0, category: "utilities" },
    { id: 3, description: "ccc", amount: 0, category: "utilities" },
    { id: 4, description: "ddd", amount: 0, category: "utilities" },
  ];
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}

export default App;
