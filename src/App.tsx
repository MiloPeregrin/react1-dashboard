import { useState } from "react";
import Card from "./components/Card";
import Section from "./components/Section";

export type TodoItemType = { name: string; detail: string };

const dummyTodoItem = { name: "task name", detail: "detail detail" };

function App() {
  const [readyTodos, setReadyTodos] = useState<TodoItemType[]>([]);
  const [inProgressTodos, setInProgressTodos] = useState<TodoItemType[]>([
    { name: "task name", detail: "detail detail" },
  ]);
  const [finishedTodos, setFinishedTodos] = useState<TodoItemType[]>([
    { name: "task name", detail: "detail detail" },
  ]);

  const addNewTodoItem = (data: TodoItemType) => {
    setReadyTodos((prevData) => [...prevData, data]);
  };

  const submitTodo = () => {
    console.log("submit todo");
  };

  console.log("readyTodos", readyTodos);

  return (
    <div className="flex flex-col items-center bg-slate-50 h-screen w-full">
      <header className="flex justify-center w-full max-w-7xl">
        <Card>
          <form
            onSubmit={submitTodo}
            className="flex flex-col items-center w-full space-y-1"
          >
            <div>
              <label htmlFor="name">Todo Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-2 border-rose-600"
              />
            </div>
            <div>
              <label htmlFor="detail">Todo Detail: </label>
              <input
                type="text"
                id="detail"
                name="detail"
                className="border-2 border-rose-600"
              />
            </div>
            <button
              type="button"
              className="bg-pink-600 text-white p-2 rounded-md drop-shadow-md w-64 h-12"
              onClick={() => addNewTodoItem(dummyTodoItem)}
            >
              Add New Todo
            </button>
          </form>
        </Card>
      </header>
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full">
        <Section title="Ready" todos={readyTodos}></Section>
        <Section title="In Progress" todos={inProgressTodos}></Section>
        <Section title="Finished" todos={finishedTodos}></Section>
      </div>
    </div>
  );
}

export default App;
