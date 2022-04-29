import { useState } from "react";
import Card from "./components/Card";
import Section from "./components/Section";

export type TaskItemType = { id: number; name: string; detail: string };

const dummyTask = { id: 1, name: "task name", detail: "detail detail" };

function App() {
  const [readyTasks, setReadyTasks] = useState<TaskItemType[]>([]);
  const [inProgressTasks, setInProgressTasks] = useState<TaskItemType[]>([
    { id: 1, name: "task name", detail: "detail detail" },
  ]);
  const [finishedTasks, setFinishedTasks] = useState<TaskItemType[]>([
    { id: 1, name: "task name", detail: "detail detail" },
  ]);

  const addNewTask = (data: TaskItemType) => {
    setReadyTasks((prevData) => [...prevData, data]);
  };

  const submitTask = () => {
    console.log("submit Task");
  };

  const raiseTaskProgress = () => {
    console.log("submit Task");
  };

  const lowerTaskProgress = () => {
    console.log("submit Task");
  };

  console.log("readyTasks", readyTasks);

  return (
    <div className="flex flex-col items-center bg-slate-50 h-screen w-full">
      <header className="flex justify-center w-full max-w-7xl">
        <Card>
          <form
            onSubmit={submitTask}
            className="flex flex-col items-center w-full space-y-1"
          >
            <div>
              <label htmlFor="name">Task Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-2 border-rose-600"
              />
            </div>
            <div>
              <label htmlFor="detail">Task Detail: </label>
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
              onClick={() => addNewTask(dummyTask)}
            >
              Add New Task
            </button>
          </form>
        </Card>
      </header>
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full">
        <Section title="Ready" tasks={readyTasks}></Section>
        <Section title="In Progress" tasks={inProgressTasks}></Section>
        <Section title="Finished" tasks={finishedTasks}></Section>
      </div>
    </div>
  );
}

export default App;
