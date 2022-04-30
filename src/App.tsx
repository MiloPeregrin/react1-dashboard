import { useState } from "react";
import Form from "./components/Form";
import Section from "./components/Section";
import initialTasks from "./initialTasks.json";

export type TaskItemType = {
  taskState: string;
  taskName: string;
  taskDetail: string;
};
export type TaskStateType = "Ready" | "In Progress" | "Finished";

function App() {
  const [tasks, setTasks] = useState<TaskItemType[]>(initialTasks);

  const sections: TaskStateType[] = ["Ready", "In Progress", "Finished"];

  const filteredTasks = (taskState: TaskStateType) => {
    return tasks.filter((task) => task.taskState === taskState);
  };

  const forwardTask = (task: TaskItemType) => {
    console.log("forwardTask");
    if (task.taskState === "Ready") {
      task.taskState = "In Progress";
      setTasks((prevState: TaskItemType[]) => [...prevState, task]);
    }
  };

  const reverseTask = (task: TaskItemType) => {
    console.log("reverseTask");
  };

  // const forwardTask = (task: TaskItemType) => {
  //   if (taskState === "Ready") {
  //     setTasks((prevState: TaskItemType[]) => {
  //       return {
  //         ...prevState,
  //         readyTasks: [...prevState.readyTasks.filter((t) => t !== task)],
  //         inProgressTasks: [...prevState.inProgressTasks, task],
  //       };
  //     });
  //   } else {
  //     setTasks((prevState: TaskItemType[]) => {
  //       return {
  //         ...prevState,
  //         inProgressTasks: [
  //           ...prevState.inProgressTasks.filter((t) => t !== task),
  //         ],
  //         finishedTasks: [...prevState.finishedTasks, task],
  //       };
  //     });
  //   }
  // };

  // const reverseTask = (taskState: string, task: TaskItemType) => {
  //   if (taskState === "Finished") {
  //     setTasks((prevState: TaskItemType[]) => {
  //       return {
  //         ...prevState,
  //         finishedTasks: [...prevState.finishedTasks.filter((t) => t !== task)],
  //         inProgressTasks: [...prevState.inProgressTasks, task],
  //       };
  //     });
  //   } else {
  //     setTasks((prevState: TaskItemType[]) => {
  //       return {
  //         ...prevState,
  //         inProgressTasks: [
  //           ...prevState.inProgressTasks.filter((t) => t !== task),
  //         ],
  //         readyTasks: [...prevState.readyTasks, task],
  //       };
  //     });
  //   }
  // };

  console.log("tasks", tasks);
  return (
    <div className="flex flex-col items-center bg-slate-100 w-full h-full min-h-screen">
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
