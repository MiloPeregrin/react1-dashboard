import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TaskContextProvider } from "./hooks/useTaskContext";
import Page from "./pages/Page";

function App() {
  return (
    <TaskContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/TaskDetail" element={<Page />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </TaskContextProvider>
  );
}

export default App;
