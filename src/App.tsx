import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { TaskItemType } from "./common/types";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/Form";
import Page from "./pages/Page";
import { generateUUID } from "./common/utility";

function App() {
  const [showDashboard, setShowDashboard] = useState<boolean>(true);
  const [selectedTask, setSelectedTask] = useState<TaskItemType>({
    id: generateUUID(),
    state: "Ready",
    name: "",
    detail: "",
  });

  const onBack = () => {
    setShowDashboard(true);
  };

  const onNew = () => {
    setShowDashboard(false);
  };

  const onDetail = (task: TaskItemType) => {
    setShowDashboard(false);
    setSelectedTask(task);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Page onBack={onBack} showDashboard={showDashboard}>
            <Dashboard onDetail={onDetail} onNew={onNew} />
          </Page>
        }
      />
      <Route
        path="/new_task"
        element={
          <Page onBack={onBack} showDashboard={showDashboard}>
            <Form mode="new" selectedTask={selectedTask} />
          </Page>
        }
      />
      <Route
        path="/detail/:id"
        element={
          <Page onBack={onBack} showDashboard={showDashboard}>
            <Form mode="edit" selectedTask={selectedTask} />
          </Page>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
