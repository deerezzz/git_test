import ExpenseList from "./components/expenseList";
import React, { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10.0, category: "utilities" },
    { id: 2, description: "bbb", amount: 0, category: "utilities" },
    { id: 3, description: "ccc", amount: 0, category: "groceries" },
    { id: 4, description: "ddd", amount: 0, category: "entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter(
        (e) => e.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
