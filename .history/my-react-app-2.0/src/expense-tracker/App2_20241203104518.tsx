import ExpenseList from "./components/expenseList"; // Correct file path
import React, { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(""); // Initialize with an empty string
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 0, category: "utilities" },
    { id: 2, description: "bbb", amount: 0, category: "utilities" },
    { id: 3, description: "ccc", amount: 0, category: "groceries" },
    { id: 4, description: "ddd", amount: 0, category: "entertainment" },
  ]);

  // Filter expenses based on the selected category
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses; // Show all expenses if no category is selected

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          selectedCategory={selectedCategory} // Pass current category to filter component
          onSelectCategory={(category) => setSelectedCategory(category)} // Pass callback to change category
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} // Remove expense on delete
      />
    </div>
  );
}

export default App;
