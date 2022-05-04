import { TaskStateType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import Form from "./Form";
import Section from "./Section";

const Dashboard = () => {
  const { filterTasks, forwardTask, reverseTask } = useTaskContext();
  const sections: TaskStateType[] = ["Ready", "In Progress", "Finished"];

  return (
    <>
      <div className="flex justify-center w-full max-w-7xl">
        <Form />
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full md:space-x-4">
        {sections.map((item) => {
          return (
            <Section
              key={item}
              title={item}
              tasks={filterTasks(item)}
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
