import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodoItem = () => {
    console.log("new todo added");
  };
  return (
    <div className="flex flex-col w-full items-center bg-slate-50 h-screen">
      <header className="flex justify-center">
        <Card>
          <button
            type="button"
            className="bg-pink-600 text-white p-2 rounded-md drop-shadow-md w-64"
            onClick={addNewTodoItem}
          >
            Add New Todo
          </button>
        </Card>
      </header>
      <div className="">
        <Card title="Ready">
          <div className="">TASK ITEM</div>
        </Card>
        <Card title="In Progress">
          <div></div>
        </Card>
        <Card title="Finished">
          <div></div>
        </Card>
      </div>
    </div>
  );
}

export default App;
