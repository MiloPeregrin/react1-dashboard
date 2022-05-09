import { createContext, useContext, useState } from "react";
import { TaskItemType, TaskStateType } from "../common/types";
import initialTasks from "../initialTasks.json";

interface ITaskContext {
  tasks: TaskItemType[];
  addTask: (task: TaskItemType) => void;
  filterTasks: (state: TaskStateType) => TaskItemType[];
  forwardTask: (task: TaskItemType) => void;
  reverseTask: (task: TaskItemType) => void;
  updateTask: (task: TaskItemType, state: TaskItemType) => void;
}

const TaskContext = createContext<ITaskContext>(undefined!);

interface ITaskContextProvider {
  children: React.ReactNode;
}

export const TaskContextProvider = ({ children }: ITaskContextProvider) => {
  const [tasks, setTasks] = useState<TaskItemType[]>(
    initialTasks as TaskItemType[]
  );

  const filterTasks = (state: TaskStateType) => {
    return tasks.filter((t) => t.state === state);
  };

  const addTask = (task: TaskItemType) => {
    setTasks((prevState: TaskItemType[]) => {
      return [...prevState, task];
    });
  };

  const updateTask = (
    task: TaskItemType,
    state: TaskItemType | TaskStateType
  ) => {
    const updatedTasks = tasks.map((item) => {
      if (item === task) {
        if (typeof state === "object") {
          return { ...item, ...state };
        } else {
          return { ...item, state: state };
        }
      }
      return item;
    });
    setTasks(updatedTasks);
  };

  const forwardTask = (task: TaskItemType) => {
    if (task.state === "Ready") {
      updateTask(task, "In Progress");
    } else {
      updateTask(task, "Finished");
    }
  };

  const reverseTask = (task: TaskItemType) => {
    if (task.state === "Finished") {
      updateTask(task, "In Progress");
    } else {
      updateTask(task, "Ready");
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        filterTasks,
        forwardTask,
        reverseTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export function useTaskContext(): ITaskContext {
  return useContext(TaskContext);
}
