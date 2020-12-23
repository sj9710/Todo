import React from "react";
import { useForm } from "react-hook-form";

export const TodoForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: todo ? todo.title : "",
      description: todo ? todo.descp : "",
    },
  });

  const submitHandler = handleSubmit((data) => {
    console.log(data);
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="text">Title</label>
        <input
          className="form-control"
          ref={register}
          type="text"
          name="title"
          id="title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Description</label>
        <input
          className="form-control"
          ref={register}
          type="text"
          name="description"
          id="descp"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Save Todo
        </button>
      </div>
    </form>
  );
};
