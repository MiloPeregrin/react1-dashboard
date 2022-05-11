import { TaskItemType, TaskStateType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import Button from "../components/Button";

interface IDashboard {
  onDetail: (task: TaskItemType) => void;
  onNew: () => void;
}

const Dashboard = ({ onDetail, onNew }: IDashboard) => {
  const { filterTasks } = useTaskContext();
  const sections: TaskStateType[] = ["Ready", "In Progress", "Finished"];

  return (
    <div className="flex flex-col items-center">
      <Link className="m-1" to="/new_task" onClick={onNew}>
        <Button size="medium">New</Button>
      </Link>
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full md:space-x-4">
        {sections.map((item) => {
          return (
            <Section
              key={item}
              title={item}
              tasks={filterTasks(item)}
              onDetail={onDetail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
