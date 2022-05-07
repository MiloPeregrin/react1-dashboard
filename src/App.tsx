import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TaskDetail from "./pages/TaskDetail";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [showDashboard, setShowDashboard] = useState<boolean>(true);

  const onBack = () => {
    setShowDashboard(true);
  };
  const onDetail = () => {
    setShowDashboard(false);
  };
  return (
    <div className="flex flex-col items-center bg-slate-100 min-h-screen max-h-fit px-3">
      <Header showDashboard={showDashboard} onBack={onBack} />
      <main className="w-full max-w-7xl">
        <Routes>
          <Route path="/" element={<Dashboard onDetail={onDetail} />} />
          <Route path="*" element={<Dashboard onDetail={onDetail} />} />
          <Route path="/TaskDetail" element={<TaskDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
