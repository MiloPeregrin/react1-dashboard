import { BiArrowBack } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTaskContext } from "../hooks/useTaskContext";

interface IHeader {
  onBack: () => void;
  route: string;
}

const Header = ({ onBack, route }: IHeader) => {
  const { filterTasks } = useTaskContext();
  return (
    <header className="flex items-center justify-center text-pink-600 font-medium w-full h-8 mt-2">
      {route === "dashboard" && (
        <div className="flex w-full max-w-7xl px-4 space-x-1">
          <IoNotificationsOutline size={"1.5em"} />
          <p>{`Tasks Ready: ${filterTasks("Ready").length} 
          / In Progress: ${filterTasks("In Progress").length}`}</p>
        </div>
      )}
      {route != "dashboard" && (
        <div className="flex items-center w-full max-w-7xl px-4 space-x-1">
          <Link className="flex space-x-1 items-center" onClick={onBack} to="/">
            <BiArrowBack /> <p>Back to Dashboard</p>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
