import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TaskItemType } from "../common/types";
import Button from "../components/Button";
import Header from "../components/Header";
import Dashboard from "./Dashboard";
import NewTaskForm from "./NewTaskForm";

// interface IPage {
//   children: React.ReactNode;
// }

const Page = () => {
  const [route, setRoute] = useState<string>("dashboard");
  const [selectedTask, setSelectedTask] = useState<TaskItemType>({
    state: "Ready",
    name: "name",
    detail: "detail",
  });
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  const onBack = () => {
    setRoute("dashboard");
  };

  const onNew = () => {
    setRoute("new");
  };

  const onDetail = (task: TaskItemType) => {
    setRoute("edit");
    setSelectedTask(task);
  };

  return (
    <div className="flex flex-col items-center bg-slate-100 min-h-screen max-h-fit px-3">
      <Header onBack={onBack} route={route} />
      {route === "dashboard" && (
        <Link className="m-1" to="/new" onClick={onNew}>
          <Button size="medium">New</Button>
        </Link>
      )}
      <main className="w-full max-w-7xl">
        {route === "dashboard" && <Dashboard onDetail={onDetail} />}
        {route === "new" && <NewTaskForm selectedTask={selectedTask} />}
        {route === "edit" && <NewTaskForm selectedTask={selectedTask} />}
      </main>
    </div>
  );
};

export default Page;
