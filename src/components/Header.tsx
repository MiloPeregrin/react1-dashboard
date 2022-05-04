import { IoNotificationsOutline } from "react-icons/io5";
import { useTaskContext } from "../hooks/useTaskContext";

const Header = () => {
  const { filterTasks } = useTaskContext();

  return (
    <>
      <div className="flex items-center justify-center text-pink-600 font-medium w-full h-8 mt-2">
        <div className="flex w-full max-w-7xl px-4 space-x-1">
          <IoNotificationsOutline size={"1.5em"} />
          <p>{`Tasks Ready: ${filterTasks("Ready").length} 
          / In Progress: ${filterTasks("In Progress").length}`}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
