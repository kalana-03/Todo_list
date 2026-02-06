import { useState } from "react";
import Todo from "./component/todo";
import { Plus } from "lucide-react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Moringing walk", completed: true },
    { id: 2, text: "Making breakfast", completed: true },
    { id: 3, text: "Coding practice", completed: false },
    { id: 4, text: "Working on the new project", completed: false },
  ]);

  const [input, setInput] = useState("");

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos(prev => [...prev, newTodo]);
    setInput("");
  };

  return (
    <div className="min-h-screen flex bg-background-dark justify-center px-4 pt-10 pb-10">
      <div className="w-full max-w-lg flex flex-col">

        <h1 className="text-5xl font-extrabold font-mono text-primary-light_gray mb-6 text-center">
          Todo List
        </h1>

        <div className="flex-1 bg-gradient-to-b from-background-light to-background-dark rounded-3xl p-5 space-y-4 min-h-[80vh] flex flex-col">

          <div className="flex-1 space-y-4 py-1">
            {todos.map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>

          <div className="mt-4 flex items-center bg-background-dark rounded-xl px-4 py-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add new Item...."
              className="bg-transparent text-white placeholder-neutral-700 flex-1 outline-none"
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
            />

            <button
              onClick={addTodo}
              className="ml-3 bg-neutral-400  w-10 h-10 rounded-xl text-2xl font-bold flex items-center justify-center"
            >
              <Plus className="w-6 h-6 text-background-light" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
