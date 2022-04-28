import { useState } from "react";
import Card from "./components/Card";
import Section from "./components/Section";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodoItem = () => {
    console.log("new todo added");
  };
  return (
    <div className="flex flex-col items-center bg-slate-50 h-screen w-full space-y-6">
      <header className="flex justify-center w-full max-w-7xl">
        <Card>
          <button
            type="button"
            className="bg-pink-600 text-white p-2 rounded-md drop-shadow-md w-64 h-12"
            onClick={addNewTodoItem}
          >
            Add New Todo
          </button>
        </Card>
      </header>
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full">
        <Section title="Ready"></Section>
        <Section title="In Progress"></Section>
        <Section title="Finished"></Section>
      </div>
    </div>
  );
}

export default App;
