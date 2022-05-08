import { createContext, useContext, useState } from "react";
import { TaskItemType, TaskStateType } from "../common/types";
import initialTasks from "../initialTasks.json";

interface ITaskContext {
  tasks: TaskItemType[];
  addTask: (task: TaskItemType) => void;
  filterTasks: (taskState: TaskStateType) => TaskItemType[];
  forwardTask: (task: TaskItemType) => void;
  reverseTask: (task: TaskItemType) => void;
  showDashboard: boolean;
  onBack: () => void;
  onDetail: () => void;
}

const TaskContext = createContext<ITaskContext>(undefined!);

interface ITaskContextProvider {
  children: React.ReactNode;
}

export const TaskContextProvider = ({ children }: ITaskContextProvider) => {
  const [tasks, setTasks] = useState<TaskItemType[]>(
    initialTasks as TaskItemType[]
  );
  const [showDashboard, setShowDashboard] = useState<boolean>(true);

  const onBack = () => {
    setShowDashboard(true);
  };

  const onDetail = () => {
    setShowDashboard(false);
  };

  const addTask = (task: TaskItemType) => {
    setTasks((prevState: TaskItemType[]) => {
      return [...prevState, task];
    });
  };

  const filterTasks = (taskState: TaskStateType) => {
    return tasks.filter((t) => t.taskState === taskState);
  };

  const updateTaskState = (task: TaskItemType, state: TaskStateType) => {
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
      updateTaskState(task, "In Progress");
    } else {
      updateTaskState(task, "Finished");
    }
  };

  const reverseTask = (task: TaskItemType) => {
    if (task.taskState === "Finished") {
      updateTaskState(task, "In Progress");
    } else {
      updateTaskState(task, "Ready");
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
        showDashboard,
        onBack,
        onDetail,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export function useTaskContext(): ITaskContext {
  return useContext(TaskContext);
}
