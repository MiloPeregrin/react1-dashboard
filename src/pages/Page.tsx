import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouteType, TaskItemType } from "../common/types";
import Form from "./Form";
import Header from "../components/Header";
import Dashboard from "./Dashboard";

const Page = () => {
  const [route, setRoute] = useState<RouteType>("dashboard");
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
      <main className="w-full max-w-7xl">
        {route === "dashboard" && (
          <Dashboard onDetail={onDetail} onNew={onNew} />
        )}
        {route === "new" && <Form mode="new" selectedTask={selectedTask} />}
        {route === "edit" && <Form mode="edit" selectedTask={selectedTask} />}
      </main>
    </div>
  );
};

export default Page;
