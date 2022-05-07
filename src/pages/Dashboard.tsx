import { TaskStateType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import Form from "../components/Form";
import Section from "../components/Section";

interface IDashboard {
  onDetail: () => void;
}
const Dashboard = ({ onDetail }: IDashboard) => {
  const { filterTasks } = useTaskContext();
  const sections: TaskStateType[] = ["Ready", "In Progress", "Finished"];

  return (
    <>
      <div className="flex justify-center w-full">
        <Form mode="new" />
      </div>
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
    </>
  );
};

export default Dashboard;
