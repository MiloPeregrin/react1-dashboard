import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { TaskItemType } from "./common/types";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/Form";
import Page from "./pages/Page";
import { generateUUID } from "./common/utility";

function App() {
  const [selectedTask, setSelectedTask] = useState<TaskItemType>({
    id: generateUUID(),
    state: "Ready",
    name: "",
    detail: "",
  });

  const onDetail = (task: TaskItemType) => {
    setSelectedTask(task);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Page showDashboard={true}>
            <Dashboard onDetail={onDetail} />
          </Page>
        }
      />
      <Route
        path="/new_task"
        element={
          <Page showDashboard={false}>
            <Form mode="new" selectedTask={selectedTask} />
          </Page>
        }
      />
      <Route
        path="/detail/:id"
        element={
          <Page showDashboard={false}>
            <Form mode="edit" selectedTask={selectedTask} />
          </Page>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
