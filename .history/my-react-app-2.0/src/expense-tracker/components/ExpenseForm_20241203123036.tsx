import React from "react";
import categories from "./App2";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor=" description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}></option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default ExpenseForm;
