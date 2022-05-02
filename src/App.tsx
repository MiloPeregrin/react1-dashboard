import { useState } from "react";
import Form from "./components/Form";
import Section from "./components/Section";
import initialTasks from "./initialTasks.json";

export type TaskStateType = "Ready" | "In Progress" | "Finished";
export type TaskItemType = {
  taskState: TaskStateType | string;
  // FIXME string literal&string types colision
  taskName: string;
  taskDetail: string;
};

function App() {
  const [tasks, setTasks] = useState<TaskItemType[]>(initialTasks);

  const sections: TaskStateType[] = ["Ready", "In Progress", "Finished"];

  const filteredTasks = (taskState: TaskStateType) => {
    return tasks.filter((task) => task.taskState === taskState);
  };

  const updateTasks = (task: TaskItemType, state: TaskStateType) => {
    const updatedTasks = tasks.map((item) => {
      if (item === task) {
        return { ...item, taskState: state };
      }
      return item;
    });
    setTasks(updatedTasks);
  };

  const forwardTask = (task: TaskItemType) => {
    if (task.taskState === "Ready") {
      updateTasks(task, "In Progress");
    } else {
      updateTasks(task, "Finished");
    }
  };

  const reverseTask = (task: TaskItemType) => {
    if (task.taskState === "Finished") {
      updateTasks(task, "In Progress");
    } else {
      updateTasks(task, "Ready");
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-100 w-full min-h-screen max-h-fit">
      <header className="flex justify-center w-full max-w-7xl">
        <Form setTasks={setTasks} />
      </header>
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full">
        {sections.map((item) => {
          return (
            <Section
              key={`${item}${Math.random()}`}
              title={item}
              tasks={filteredTasks(item)}
              forwardTask={forwardTask}
              reverseTask={reverseTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
