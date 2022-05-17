import { TaskStateType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import Section from "./Section";
import { Link } from "react-router-dom";
import Button from "./Button";

interface IDashboard {}

const Dashboard = ({}: IDashboard) => {
  const { filterTasks, setFormData } = useTaskContext();
  const sections: TaskStateType[] = ["Ready", "In Progress", "Finished"];

  return (
    <div className="flex flex-col items-center">
      <Link
        className="m-1"
        onClick={() => setFormData(undefined)}
        to="/new_task"
      >
        <Button size="medium">New</Button>
      </Link>
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full md:space-x-4">
        {sections.map((item) => {
          return <Section key={item} title={item} tasks={filterTasks(item)} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
