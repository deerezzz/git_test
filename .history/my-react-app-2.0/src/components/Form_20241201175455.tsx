import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/zodResolver/Zod'

const schema = z.object({
  name: z.string().min(3), 
  age: z.number().min(18), 
  
}); 

type FormData = z.infer<typeof schema>; 

// interface FormData {
//   name: string;
//   age: number;
// }

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema)});

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
        {...register("name")}
          id="name"
          type="text"
          className= "form-control" 
   
        {errors.name && (
          <p className="text-danger">{errors.name.message} </p>
        )}
      </div>>

      {/* Age Field */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
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
