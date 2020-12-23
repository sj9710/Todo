import React from "react";
import { TodoForm } from "./TodoForm";
import { useHistory } from "react-router-dom";

export const CreateTodo = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    // await createTodo(data);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="mt-3">
        <TodoForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
