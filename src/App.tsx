import { Navigate, Route, Routes } from "react-router-dom";
import NewTaskPage from "./pages/NewTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/new_task" element={<NewTaskPage />} />
      <Route path="/detail/:id" element={<EditTaskPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
