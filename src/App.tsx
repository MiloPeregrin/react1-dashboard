import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { withTaskContext } from "./hooks/useTaskContext";

function App() {
  return (
    <div className="flex flex-col items-center bg-slate-100 min-h-screen max-h-fit">
      <Header />
      <Dashboard />
    </div>
  );
}

export default withTaskContext(App);
