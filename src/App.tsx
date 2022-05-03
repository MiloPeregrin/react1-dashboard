import { useState } from "react";
import { TaskItemType } from "./common/types";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import initialTasks from "./initialTasks.json";

function App() {
  const [tasks, setTasks] = useState<TaskItemType[]>(
    initialTasks as TaskItemType[]
  );

  return (
    <div className="flex flex-col items-center bg-slate-100 w-full min-h-screen max-h-fit">
      <Header tasks={tasks} />
      <Dashboard tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
