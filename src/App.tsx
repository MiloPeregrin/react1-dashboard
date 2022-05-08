import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TaskContextProvider } from "./hooks/useTaskContext";
import Page from "./pages/Page";
import TaskDetail from "./pages/TaskDetail";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <TaskContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Page>
                <Dashboard />
              </Page>
            }
          />
          <Route
            path="/TaskDetail"
            element={
              <Page>
                <TaskDetail />
              </Page>
            }
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </TaskContextProvider>
  );
}

export default App;
