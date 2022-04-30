import { useState } from "react";
import Form from "./components/Form";
import Section from "./components/Section";
import initialAppState from "./initialAppState.json";

export type TaskItemType = { taskName: string; taskDetail: string };
export type TasksType = {
  readyTasks: TaskItemType[];
  inProgressTasks: TaskItemType[];
  finishedTasks: TaskItemType[];
};

function App() {
  const [tasks, setTasks] = useState<TasksType>(initialAppState);

  const forwardTask = (taskState: string, task: TaskItemType) => {
    if (taskState === "Ready") {
      setTasks((prevState: TasksType) => {
        return {
          ...prevState,
          readyTasks: [...prevState.readyTasks.filter((t) => t !== task)],
          inProgressTasks: [...prevState.inProgressTasks, task],
        };
      });
    } else {
      setTasks((prevState: TasksType) => {
        return {
          ...prevState,
          inProgressTasks: [
            ...prevState.inProgressTasks.filter((t) => t !== task),
          ],
          finishedTasks: [...prevState.finishedTasks, task],
        };
      });
    }
  };

  const reverseTask = (taskState: string, task: TaskItemType) => {
    if (taskState === "Finished") {
      setTasks((prevState: TasksType) => {
        return {
          ...prevState,
          finishedTasks: [...prevState.finishedTasks.filter((t) => t !== task)],
          inProgressTasks: [...prevState.inProgressTasks, task],
        };
      });
    } else {
      setTasks((prevState: TasksType) => {
        return {
          ...prevState,
          inProgressTasks: [
            ...prevState.inProgressTasks.filter((t) => t !== task),
          ],
          readyTasks: [...prevState.readyTasks, task],
        };
      });
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-50 h-screen w-full">
      <header className="flex justify-center w-full max-w-7xl">
        <Form setTasks={setTasks} />
      </header>
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full">
        <Section
          taskState="Ready"
          tasks={tasks.readyTasks}
          forwardTask={forwardTask}
          reverseTask={reverseTask}
        />
        <Section
          taskState="In Progress"
          tasks={tasks.inProgressTasks}
          forwardTask={forwardTask}
          reverseTask={reverseTask}
        />
        <Section
          taskState="Finished"
          tasks={tasks.finishedTasks}
          forwardTask={forwardTask}
          reverseTask={reverseTask}
        />
      </div>
    </div>
  );
}

export default App;
