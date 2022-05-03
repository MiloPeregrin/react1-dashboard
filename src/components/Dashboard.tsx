import { TaskItemType, TaskStateType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import Form from "./Form";
import Section from "./Section";

const Dashboard = () => {
  const { tasks, setTasks } = useTaskContext();
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
    <>
      <div className="flex justify-center w-full max-w-7xl">
        <Form setTasks={setTasks} />
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full pl-2 pr-2 md:pl-0 md:pr-0">
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
    </>
  );
};

export default Dashboard;
