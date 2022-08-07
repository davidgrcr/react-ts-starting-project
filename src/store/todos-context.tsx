import React, { useState } from "react";
import Todo from "../models/todos";

type TodosContextObject = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosProvider: React.FC = ({ children }) => {
  // new Todo("Learn React"), new Todo("Learn TypeScript")
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue:TodosContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>      
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
