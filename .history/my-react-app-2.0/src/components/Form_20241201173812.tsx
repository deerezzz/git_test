import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

interface FormData {
  name: string;
  age: number;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Logs the form data (name and age)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name Field */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>

      {/* Age Field */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className={`form-control ${errors.age ? "is-invalid" : ""}`}
          {...register("age", {
            required: "Age is required",
            valueAsNumber: true,
          })}
        />
        {errors.age && (
          <div className="invalid-feedback">{errors.age.message}</div>
        )}
      </div>

      {/* Submit Button */}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
