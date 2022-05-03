import { IoNotificationsOutline } from "react-icons/io5";
import { useTaskContext } from "../hooks/useTaskContext";

const Header = () => {
  const { tasks } = useTaskContext();
  const readyTasks = tasks.filter((t) => t.taskState === "Ready");
  const inProgressTasks = tasks.filter((t) => t.taskState === "In Progress");

  return (
    <>
      <div className="flex items-center justify-center text-pink-600 font-medium w-full h-8 mt-2">
        <div className="flex w-full max-w-7xl px-4 space-x-1">
          <IoNotificationsOutline size={"1.5em"} />
          <p>{`Tasks Ready: ${readyTasks.length} / In Progress: ${inProgressTasks.length}`}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
