import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todos";

function App() {
  const todos: Todo[] = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
