import { createContext, useContext, useState } from "react";
import { TaskItemType, TaskStateType } from "../common/types";
import initialTasks from "../initialTasks.json";
interface ITaskContext {
  tasks: TaskItemType[];
  addTask: (task: TaskItemType) => void;
  filterTasks: (state: TaskStateType) => TaskItemType[];
  forwardTask: (task: TaskItemType) => void;
  reverseTask: (task: TaskItemType) => void;
  updateTasks: (oldTask: TaskItemType, newTask: TaskItemType) => void;
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

  const updateTasks = (
    oldValue: TaskItemType,
    newValue: TaskItemType | TaskStateType
  ) => {
    const updatedTasks = tasks.map((item) => {
      if (item === oldValue) {
        if (typeof newValue === "object") {
          return { ...item, ...newValue };
        } else {
          return { ...item, state: newValue };
        }
      }
      return item;
    });
    setTasks(updatedTasks);
  };

  const forwardTask = (task: TaskItemType) => {
    if (task.state === "Ready") {
      updateTasks(task, "In Progress");
    } else {
      updateTasks(task, "Finished");
    }
  };

  const reverseTask = (task: TaskItemType) => {
    if (task.state === "Finished") {
      updateTasks(task, "In Progress");
    } else {
      updateTasks(task, "Ready");
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
        updateTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export function useTaskContext(): ITaskContext {
  return useContext(TaskContext);
}
