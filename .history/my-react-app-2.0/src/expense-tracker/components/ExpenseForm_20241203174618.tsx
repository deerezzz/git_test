import React from "react";
import { categories } from "../App2";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(0.01).max(100_000),
  category: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {

  const {register, handleSubmit, formState: {errors} = useForm<ExpenseFormData>({ resolver: zodResolver(schema)})


  return (
    <form>
      <div className="mb-3">
        <label htmlFor=" description" className="form-label">
          Description
        </label>
        <input {...register('description')} id="description" type="text" className="form-control" />
        {errors.description && <p className = 'text-danger'>{errors.description}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input {...register('Amount')} type="number" className="form-control" />
        {errors.amount && <p className = 'text-danger'>{errors.amount}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Category
        </label>
        <select {...register('category')}id="category" className="form-select">

          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}></option>
          ))}
        </select>
        {errors.category && <p className = 'text-danger'>{errors.category}</p>}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
