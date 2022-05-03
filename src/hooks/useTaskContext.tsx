import { createContext, useContext, useState } from "react";
import { TaskItemType } from "../common/types";
import initialTasks from "../initialTasks.json";

interface ITaskContext {
  tasks: TaskItemType[];
  setTasks: (tasks: TaskItemType[]) => void;
}

const TaskContext = createContext<ITaskContext>(undefined!);

interface ITaskContextProvider {
  children: React.ReactNode;
}

export const TaskContextProvider = ({ children }: ITaskContextProvider) => {
  const [tasks, setTasks] = useState<TaskItemType[]>(
    initialTasks as TaskItemType[]
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export function useTaskContext(): ITaskContext {
  return useContext(TaskContext);
}

export function withTaskContext(Component: any) {
  return (props: any) => {
    return (
      <TaskContextProvider>
        <Component {...props} />
      </TaskContextProvider>
    );
  };
}
