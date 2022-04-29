import { TaskItemType } from "../App";
import Card from "./Card";

interface ISection {
  tasks: TaskItemType[];
  title: "Ready" | "In Progress" | "Finished";
}

const Section = ({ title, tasks }: ISection) => {
  return (
    <Card>
      <div className="flex flex-col w-full items-center h-2/3">
        <p className="font-bold">{title}</p>
        <ul className="flex flex-col w-full">
          {tasks.map((item) => {
            return (
              <li className="flex flex-col">
                <div className="flex flex-col items-center bg-white m-2 rounded-md drop-shadow-md">
                  <p className="flex justify-center">{item.name}</p>
                  <p>{item.detail}</p>
                  {title === "Ready" && <button>{`>>`}</button>}
                  {title === "In Progress" && (
                    <div>
                      <button>{`<<`}</button>
                      <button>{`>>`}</button>
                    </div>
                  )}
                  {title === "Finished" && <button>{`<<`}</button>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default Section;
