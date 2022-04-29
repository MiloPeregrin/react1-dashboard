import { TaskItemType } from "../App";
import Button from "./Button";
import Card from "./Card";

interface ISection {
  tasks: TaskItemType[];
  title: "Ready" | "In Progress" | "Finished";
  forwardTask: (currentState: string, task: TaskItemType) => void;
  reverseTask: (currentState: string, task: TaskItemType) => void;
}

const Section = ({ title, tasks, forwardTask, reverseTask }: ISection) => {
  return (
    <Card>
      <div className="flex flex-col w-full items-center h-2/3">
        <p className="font-bold">{title}</p>
        <ul className="flex flex-col w-full">
          {tasks.map((item) => {
            return (
              <li key={Math.random()} className="flex flex-col">
                <div className="flex flex-col items-center bg-white m-2 rounded-md drop-shadow-md border-solid border border-pink-300">
                  <p className="flex justify-center font-medium">
                    {item.taskName}
                  </p>
                  <p>{item.taskDetail}</p>
                  {title === "Ready" && (
                    <Button
                      onClick={() => forwardTask("Ready", item)}
                    >{`>>`}</Button>
                  )}
                  {title === "In Progress" && (
                    <div>
                      <Button
                        onClick={() => reverseTask("In Progress", item)}
                      >{`<<`}</Button>
                      <Button
                        onClick={() => forwardTask("In Progress", item)}
                      >{`>>`}</Button>
                    </div>
                  )}
                  {title === "Finished" && (
                    <Button
                      onClick={() => reverseTask("Finished", item)}
                    >{`<<`}</Button>
                  )}
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
