import { useRef, useState } from "react";
import Card from "./components/Card";
import Section from "./components/Section";
import initialAppState from "./initialAppState.json";

export type TaskItemType = { taskName: string; taskDetail: string };

function App() {
  const [readyTasks, setReadyTasks] = useState<TaskItemType[]>(
    initialAppState.readyTasks
  );
  const [inProgressTasks, setInProgressTasks] = useState<TaskItemType[]>(
    initialAppState.inProgressTasks
  );
  const [finishedTasks, setFinishedTasks] = useState<TaskItemType[]>(
    initialAppState.finishedTasks
  );
  const taskNameRef = useRef<HTMLInputElement>(null);
  const taskDetailRef = useRef<HTMLInputElement>(null);

  const submitTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskNameRef.current && taskDetailRef.current) {
      const task = {
        taskName: taskNameRef.current.value,
        taskDetail: taskDetailRef.current.value,
      };
      setReadyTasks((prevState) => [...prevState, task]);
      taskNameRef.current.value = "";
      taskDetailRef.current.value = "";
    }
  };

  const forwardTask = (currentState: string, task: TaskItemType) => {
    if (currentState === "Ready") {
      setReadyTasks((prevTasks) => prevTasks.filter((t) => t !== task));
      setInProgressTasks((prevTasks) => [...prevTasks, task]);
    } else {
      setInProgressTasks((prevTasks) => prevTasks.filter((t) => t !== task));
      setFinishedTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  const reverseTask = (currentState: string, task: TaskItemType) => {
    if (currentState === "Finished") {
      setInProgressTasks((prevTasks) => [...prevTasks, task]);
      setFinishedTasks((prevTasks) => prevTasks.filter((t) => t !== task));
    } else {
      setReadyTasks((prevTasks) => [...prevTasks, task]);
      setInProgressTasks((prevTasks) => prevTasks.filter((t) => t !== task));
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-50 h-screen w-full">
      <header className="flex justify-center w-full max-w-7xl">
        <Card>
          <form
            onSubmit={submitTask}
            className="flex flex-col items-center w-full space-y-2"
          >
            <div>
              <label htmlFor="name">Task name: </label>
              <input
                ref={taskNameRef}
                type="text"
                id="name"
                name="name"
                className="border-2 border-rose-600 w-64"
              />
            </div>
            <div>
              <label htmlFor="detail">Task detail: </label>
              <input
                ref={taskDetailRef}
                type="text"
                id="detail"
                name="detail"
                className="border-2 border-rose-600 w-64"
              />
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white p-2 rounded-md drop-shadow-md w-64 h-10"
            >
              Add New Task
            </button>
          </form>
        </Card>
      </header>
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full">
        <Section
          title="Ready"
          tasks={readyTasks}
          forwardTask={forwardTask}
          reverseTask={reverseTask}
        ></Section>
        <Section
          title="In Progress"
          tasks={inProgressTasks}
          forwardTask={forwardTask}
          reverseTask={reverseTask}
        ></Section>
        <Section
          title="Finished"
          tasks={finishedTasks}
          forwardTask={forwardTask}
          reverseTask={reverseTask}
        ></Section>
      </div>
    </div>
  );
}

export default App;
