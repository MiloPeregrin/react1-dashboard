import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskItemType } from "../common/types";
import Header from "../components/Header";
import Dashboard from "./Dashboard";
import TaskDetail from "./TaskDetail";

// interface IPage {
//   children: React.ReactNode;
// }

const Page = () => {
  const [showDashboard, setShowDashboard] = useState<boolean>(true);
  const [selectedTask, setSelectedTask] = useState<TaskItemType>();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  const onBack = () => {
    setShowDashboard(true);
  };

  const onDetail = (task: TaskItemType) => {
    setShowDashboard(false);
    setSelectedTask(task);
  };

  return (
    <div className="flex flex-col items-center bg-slate-100 min-h-screen max-h-fit px-3">
      <Header onBack={onBack} showDashboard={showDashboard} />
      <main className="w-full max-w-7xl">
        {showDashboard ? (
          <Dashboard onDetail={onDetail} selectedTask={selectedTask!} />
        ) : (
          <TaskDetail selectedTask={selectedTask!} />
        )}
      </main>
    </div>
  );
};

export default Page;
